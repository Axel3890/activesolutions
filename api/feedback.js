const nodemailer = require('nodemailer');

// Best-effort per-instance burst protection; no visitor data is persisted.
const attempts = new Map();
const emailPattern = /^[^\s@<>(),;:\r\n]+@[^\s@<>(),;:\r\n]+\.[^\s@<>(),;:\r\n]+$/;

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({error:'Método no permitido.'});
  }
  // Exact trusted origins only; never trust arbitrary Host headers or *.vercel.app.
  const allowedOrigins = new Set(['https://www.activesolutions.ar', 'https://activesolutions.ar']);
  for (const key of ['VERCEL_URL', 'VERCEL_BRANCH_URL', 'VERCEL_PROJECT_PRODUCTION_URL']) {
    const host = process.env[key];
    if (host && /^[a-z0-9.-]+$/i.test(host)) allowedOrigins.add(`https://${host.toLowerCase()}`);
  }
  if (!allowedOrigins.has(req.headers.origin)) {
    return res.status(403).json({error:'Enviá el comentario desde nuestra web.'});
  }
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) {
    return res.status(415).json({error:'Formato no válido.'});
  }
  let body = req.body;
  if (typeof body === 'string') {
    if (Buffer.byteLength(body) > 16000) return res.status(413).json({error:'El mensaje es demasiado largo.'});
    try { body = JSON.parse(body); } catch { return res.status(400).json({error:'Revisá los datos del formulario.'}); }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body) || Buffer.byteLength(JSON.stringify(body)) > 16000) {
    return res.status(400).json({error:'Revisá los datos del formulario.'});
  }
  if (body.website) return res.status(400).json({error:'No pudimos procesar el comentario.'});
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (!name || name.length > 80 || /[\r\n]/.test(name) || message.length < 10 || message.length > 3000) {
    return res.status(400).json({error:'Completá tu nombre y un comentario de entre 10 y 3000 caracteres.'});
  }
  const {SMTP_HOST, SMTP_USER, SMTP_PASS, FEEDBACK_TO} = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !emailPattern.test(SMTP_USER) || !emailPattern.test(FEEDBACK_TO || '')) {
    return res.status(503).json({error:'El envío por correo no está disponible. Podés escribirnos por WhatsApp.'});
  }
  const now = Date.now();
  for (const [key, value] of attempts) if (now - value.start > 600000) attempts.delete(key);
  const ip = String(req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const entry = attempts.get(ip) || {start:now, count:0};
  if (entry.count >= 3 || attempts.size >= 5000) {
    res.setHeader('Retry-After', '600');
    return res.status(429).json({error:'Ya recibimos varias solicitudes. Esperá unos minutos antes de volver a intentar.'});
  }
  entry.count++; attempts.set(ip, entry);
  const transport = nodemailer.createTransport({
    host:SMTP_HOST, port:465, secure:true,
    auth:{user:SMTP_USER, pass:SMTP_PASS},
    connectionTimeout:10000, greetingTimeout:10000, socketTimeout:15000,
    disableFileAccess:true, disableUrlAccess:true
  });
  try {
    const info = await transport.sendMail({
      from:{name:'Active Solutions · Comentarios', address:SMTP_USER},
      to:FEEDBACK_TO,
      subject:'Nuevo comentario · Ayudanos a mejorar',
      text:`Nombre: ${name}\n\n${message}`
    });
    if (!info.accepted?.length) throw new Error('Recipient not accepted');
    return res.status(200).json({ok:true});
  } catch {
    return res.status(502).json({error:'No pudimos confirmar el envío. Tu comentario sigue en el formulario; podés volver a intentar o escribirnos por WhatsApp.'});
  } finally { transport.close(); }
};
