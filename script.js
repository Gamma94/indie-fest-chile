// Indie Fest Chile - Home interactions
const FORM_URL    = (window.INIT && window.INIT.formUrl)    || 'https://docs.google.com/forms/d/e/1FAIpQLSeNtEP1sWHSezerIWapJbk-qAeq9prUp0HbLmzQGOVy2Ms3vg/viewform';
const CO_FORM_URL = (window.INIT && window.INIT.coFormUrl) || 'https://docs.google.com/forms/d/e/1FAIpQLScgeALIIFcIREVZLfNxkLhqUi1gE3W6HQyW9YOIknNe7iqHEw/viewform';

// Asigna URLs según el data-atributo
document.querySelectorAll('[data-link="form"]').forEach(a   => a.href = FORM_URL);
document.querySelectorAll('[data-link="coform"]').forEach(a => a.href = CO_FORM_URL);

// Mobile menu toggle
const toggleBtn = document.querySelector('.nav__toggle');
const menu = document.getElementById('mainMenu');
if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Sticky shadow on scroll
const header = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  const y = window.scrollY || window.pageYOffset;
  header.style.boxShadow = y > 10 ? '0 4px 20px rgba(0,0,0,.06)' : 'none';
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
