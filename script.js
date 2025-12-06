// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = '';
});

// Close menu when clicking links
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  });
});
