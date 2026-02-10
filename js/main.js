/**
 * Thanasree Construction & Valuers - Main JavaScript
 * Handles: Header scroll, mobile nav, WhatsApp, animations
 */

const WHATSAPP_URL = 'https://wa.me/919442130613?text=Hello%20Thanasree%20Construction%20%26%20Valuers%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.';
const PHONE_NUMBERS = ['9442130613', '9843680613'];

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initScrollAnimations();
  initActiveNav();
});

function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // Close on link click (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

function initActiveNav() {
  const currentPath = window.location.pathname || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPath = href.replace(/^\//, '');
    if (currentPath.endsWith(linkPath) || (currentPath.endsWith('/') && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
}
