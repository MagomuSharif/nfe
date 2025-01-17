const navIcon = document.getElementById('nav-icon');
const navLinks = document.getElementById('nav-links');

navIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
