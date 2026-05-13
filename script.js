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

// ============================================================
// ANIMATED STAT COUNTERS
// ============================================================

const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 1500;
  const stepTime = 50;
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, stepTime);
}

// Use Intersection Observer to trigger when stats are visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(stat => observer.observe(stat));