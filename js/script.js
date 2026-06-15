const toggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('menu-overlay');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  overlay.classList.toggle('show');
});