'use strict';
const feedbackForm = document.querySelector('#feedback-form');
feedbackForm.addEventListener('submit', async event => {
  event.preventDefault();
  const button = feedbackForm.querySelector('[data-feedback-submit]');
  if (button.disabled || !feedbackForm.reportValidity()) return;
  const status = document.querySelector('#feedback-status');
  const data = Object.fromEntries(new FormData(feedbackForm));
  button.disabled = true;
  button.textContent = 'Enviando…';
  status.textContent = 'Estamos enviando tu comentario.';
  try {
    const response = await fetch('/api/feedback', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data), signal:AbortSignal.timeout(25000)
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || 'No pudimos confirmar el envío. Intentá nuevamente o escribinos por WhatsApp.');
    feedbackForm.reset();
    status.textContent = '¡Gracias! Tu comentario fue enviado.';
  } catch (error) {
    status.textContent = error.name === 'TimeoutError' || error instanceof TypeError || error instanceof SyntaxError
      ? 'No pudimos confirmar el envío. Tu comentario sigue acá; podés volver a intentar o escribirnos por WhatsApp.'
      : error.message;
  } finally {
    button.disabled = false;
    button.textContent = 'Enviar comentario';
  }
});
