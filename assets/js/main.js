const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); menu.classList.toggle('open', open); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); toggle.focus(); } });
document.querySelectorAll('[data-service]').forEach(link => { link.href = 'https://wa.me/5511998121328?text=' + encodeURIComponent('Olá! Gostaria de informações sobre ' + link.dataset.service + '.'); });
document.querySelector('#year').textContent = new Date().getFullYear();
