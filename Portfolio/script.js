const menu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('mobile-backdrop');
const hamburger = document.querySelector('.nav-hamburger');
const closeBtn = document.querySelector('.mobile-menu-close');
const menuLinks = document.querySelectorAll('.mobile-nav-links a');

function openMenu() {
  menu.classList.add('is-open');
  backdrop.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);
menuLinks.forEach(link => link.addEventListener('click', closeMenu));

// ============================================================
// DARK / LIGHT MODE TOGGLE
// ============================================================

const themeToggle = document.getElementById('js-theme-toggle');
const body = document.body;

// Check if user has a saved preference
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on page load
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeToggle.textContent = '🌙';
  themeToggle.setAttribute('aria-label', 'Switch to dark mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {

  const isLight = body.classList.toggle('light-mode');

  if (isLight) {
    // Switched to light mode
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    localStorage.setItem('theme', 'light');
  } else {
    // Switched to dark mode
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
    localStorage.setItem('theme', 'dark');
  }

});
