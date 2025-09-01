// Indie Fest Chile - Home interactions
const FORM_URL = (window.INIT && window.INIT.formUrl) || 'https://docs.google.com/forms/d/e/1FAIpQLSeNtEP1sWHSezerIWapJbk-qAeq9prUp0HbLmzQGOVy2Ms3vg/viewform'; // ← reemplaza con la URL real del formulario
const CO_FORM_URL = (window.INIT && window.INIT.formUrl) || 'https://docs.google.com/forms/d/e/1FAIpQLScgeALIIFcIREVZLfNxkLhqUi1gE3W6HQyW9YOIknNe7iqHEw/viewform';
// Update CTA links
const applyLinks = [document.getElementById('applyLink'), document.getElementById('applyLinkHero'), document.getElementById('applyLinkAbout')];
applyLinks.forEach(el => { if (el) { el.href = FORM_URL; } });

const applyLinksCoStreamer = [document.getElementById('applyLinkCo'), document.getElementById('applyLinkHeroCo'), document.getElementById('applyLinkAboutCo')];
applyLinks.forEach(el => { if (el) { el.href = CO_FORM_URL; } });

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
