import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'public');
// The confirmed public domain is authoritative, including on preview builds.
// Do not let a stale deployment environment point search engines to vercel.app.
const raw = 'https://www.activesolutions.ar/';
const url = new URL(raw.includes('://') ? raw : `https://${raw}`);
if (url.username || url.password || url.pathname !== '/' || url.search || url.hash || !['http:', 'https:'].includes(url.protocol)) {
  throw new Error('SITE_URL must contain only the site origin, for example https://your-domain.com');
}
if (process.env.VERCEL && url.protocol !== 'https:') throw new Error('Production origin must use HTTPS.');
const origin = url.origin;
const preview = ['preview', 'development'].includes(process.env.VERCEL_ENV)
  || (!process.env.VERCEL && process.env.VERCEL_ENV !== 'production');
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const maps = 'https://www.google.com/maps/search/?api=1&query=-34.516272707591455%2C-58.72331865300859';
const description = "Diagnóstico avanzado, reparación de módulos, mecánica general y grúa. Cobertura en Buenos Aires, Misiones, Salta, Catamarca, San Luis y Santiago del Estero.";
const services = ["Diagnósticos avanzados","Reparación y programación de módulos","Mecánica general","Servicio de grúa","Electricidad automotriz","Arranque y carga"];
const provinces = ["Buenos Aires","Misiones","Salta","Catamarca","San Luis","Santiago del Estero"];
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'AutoRepair','@id':`${origin}/#taller`,name:'Active Solutions',url:`${origin}/`,description,
      logo:`${origin}/assets/logo-original.png`,image:`${origin}/assets/social-card.png`,
      geo:{'@type':'GeoCoordinates',latitude:-34.516272707591455,longitude:-58.72331865300859},hasMap:maps,
      sameAs:['https://www.instagram.com/activesolutions.electro/'],
      areaServed:provinces.map(name=>({'@type':'AdministrativeArea',name,containedInPlace:{'@type':'Country',name:'Argentina'}})),
      contactPoint:{'@type':'ContactPoint',contactType:'Consultas y turnos',url:'https://wa.link/gytz4k',availableLanguage:'es'},
      hasOfferCatalog:{'@type':'OfferCatalog',name:'Servicios automotrices',itemListElement:services.map(name=>({'@type':'Offer',itemOffered:{'@type':'Service',name}}))}},
    {'@type':'WebSite','@id':`${origin}/#website`,name:'Active Solutions',url:`${origin}/`,inLanguage:'es-AR',publisher:{'@id':`${origin}/#taller`}},
    {'@type':'WebPage','@id':`${origin}/#webpage`,url:`${origin}/`,name:'Active Solutions | Mecánica y electromecánica automotriz',description,inLanguage:'es-AR',isPartOf:{'@id':`${origin}/#website`},about:{'@id':`${origin}/#taller`}}
  ]
};
// Do not invent a street address, opening hours, telephone, reviews or ratings.
const metadata = `
<link rel="canonical" href="${escape(origin)}/">
<meta name="robots" content="${preview ? 'noindex,follow' : 'index,follow,max-image-preview:large'}">
<meta property="og:site_name" content="Active Solutions"><meta property="og:type" content="website"><meta property="og:locale" content="es_AR">
<meta property="og:title" content="Active Solutions · Diagnóstico preciso. Soluciones que duran.">
<meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${escape(origin)}/">
<meta property="og:image" content="${escape(origin)}/assets/social-card.png"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Active Solutions: mecánica, electromecánica y diagnóstico automotriz">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Active Solutions · Diagnóstico automotriz"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${escape(origin)}/assets/social-card.png"><meta name="twitter:image:alt" content="Active Solutions: diagnóstico preciso, soluciones que duran.">
<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`;
mkdirSync(output,{recursive:true});
cpSync(path.join(root,'dist'),output,{recursive:true});
let html = readFileSync(path.join(output,'index.html'),'utf8');
html = html.replace(/<meta name="description"[^>]+>/,`<meta name="description" content="${escape(description)}">`);
html = html.replace('</head>',`${metadata}\n</head>`);
writeFileSync(path.join(output,'index.html'),html);
writeFileSync(path.join(output,'robots.txt'),`User-agent: *\nAllow: /\n${preview ? '' : `\nSitemap: ${origin}/sitemap.xml\n`}`);
writeFileSync(path.join(output,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(origin)}/</loc></url></urlset>\n`);
console.log(`Static site built in public/ (${preview ? 'noindex preview' : 'production'}; origin: ${origin}).`);
