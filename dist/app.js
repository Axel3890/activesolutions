'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const header = document.querySelector('#site-header');
const mobileLayout = window.matchMedia('(max-width: 760px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
function setMenu(open, returnFocus = false) {
  open = open && mobileLayout.matches;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('is-open', open);
  navigation.inert = mobileLayout.matches && !open;
  document.body.classList.toggle('menu-open', open);
  main.inert = open;
  footer.inert = open;
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  setMenu(false);
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { target.setAttribute('tabindex', '-1'); target.focus({preventScroll: true}); }
}));
header.querySelector('.brand').addEventListener('click', () => setMenu(false));
navigation.addEventListener('click', event => { if (event.target === navigation) setMenu(false, true); });
document.addEventListener('keydown', event => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') { setMenu(false, true); return; }
  if (event.key !== 'Tab') return;
  const focusable = [...header.querySelectorAll('a, button')].filter(el => el.getClientRects().length && !el.closest('[inert]'));
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
mobileLayout.addEventListener('change', () => setMenu(false));
setMenu(false);
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, {passive: true});
updateHeader();

// One-time entrances keep scrolling natural and respect reduced motion.
const revealTargets = document.querySelectorAll('.section-heading, .service, .method-heading, .steps li, .workshop-heading, .workshop-grid figure, .contact-intro, .contact-form');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, {threshold: 0.08});
  revealTargets.forEach((el, index) => {
    // Content already on screen stays visible, including direct anchor visits.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${el.matches('.steps li') ? index % 3 * 65 : 0}ms`);
    observer.observe(el);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { revealTargets.forEach(el => el.classList.add('is-visible')); observer.disconnect(); }
  });
}

// Animate the actual content height; repeated clicks reverse from the current frame.
document.querySelectorAll('.service').forEach(detail => {
  const summary = detail.querySelector('summary');
  const content = detail.querySelector('.service-detail');
  let animation = null;
  let expanded = detail.open;
  function settle() {
    if (animation) { animation.cancel(); animation = null; }
    detail.open = expanded;
    detail.style.height = '';
    detail.style.overflow = '';
  }
  summary.addEventListener('click', event => {
    if (reducedMotion.matches || typeof detail.animate !== 'function') return;
    event.preventDefault();
    const start = detail.getBoundingClientRect().height;
    expanded = animation ? !expanded : !detail.open;
    if (animation) animation.cancel();
    detail.style.height = `${start}px`;
    detail.style.overflow = 'hidden';
    detail.open = true;
    const style = getComputedStyle(detail);
    const borders = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const end = summary.getBoundingClientRect().height + (expanded ? content.getBoundingClientRect().height : 0) + borders;
    animation = detail.animate({height: [`${start}px`, `${end}px`]}, {duration: 280, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards'});
    animation.onfinish = settle;
  });
  window.addEventListener('resize', () => { if (animation) settle(); }, {passive: true});
  reducedMotion.addEventListener('change', () => { if (animation) settle(); });
});
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { const issue = document.querySelector('#issue'); if (!issue.value.trim()) issue.value = `Quisiera consultar por ${link.dataset.service.toLowerCase()}. `; }));
const form = document.querySelector('#inquiry-form');
const dialog = document.querySelector('#inquiry-dialog');
const preview = document.querySelector('#message-preview');
const copyStatus = document.querySelector('#copy-status');
const copyButton = document.querySelector('#copy-message');
form.addEventListener('submit', event => { event.preventDefault(); if (!form.reportValidity()) return; const data = new FormData(form); const name = data.get('name').trim(); const vehicle = data.get('vehicle').trim(); const issue = data.get('issue').trim(); if (!name || !vehicle || !issue) { const missing = !name ? form.elements.name : !vehicle ? form.elements.vehicle : form.elements.issue; missing.setCustomValidity('Completá este campo con tu información.'); missing.reportValidity(); missing.addEventListener('input', () => missing.setCustomValidity(''), {once:true}); return; } const phone = data.get('phone').trim(); preview.value = `Hola, Active Solutions. Soy ${name}.\nQuisiera consultar por un turno.\n\nVehículo: ${vehicle}\nConsulta: ${issue}${phone ? `\nTeléfono: ${phone}` : ''}\n\n¿Qué disponibilidad tienen?`; copyStatus.textContent = 'Todavía no se envió ningún mensaje.'; copyButton.textContent = 'Copiar mensaje'; dialog.showModal(); });
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
copyButton.addEventListener('click', async () => { try { await navigator.clipboard.writeText(preview.value); copyButton.textContent = 'Mensaje copiado'; copyStatus.textContent = 'Ahora abrí Instagram y pegalo en el chat del taller.'; } catch { preview.focus(); preview.select(); copyStatus.textContent = 'Seleccionamos el mensaje. Copialo manualmente y pegalo en Instagram.'; } });
