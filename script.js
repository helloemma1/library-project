function openMenu() {
  document.body.classList.add('menu--open');
  const menu = document.getElementById('mobile-menu');
  menu.setAttribute('aria-hidden', 'false');
  document.querySelector('.btn__menu[aria-controls="mobile-menu"]').setAttribute('aria-expanded', 'true');
  menu.querySelector('a').focus();
}
function closeMenu() {
  document.body.classList.remove('menu--open');
  document.getElementById('mobile-menu').setAttribute('aria-hidden', 'true');
  document.querySelector('.btn__menu[aria-controls="mobile-menu"]').setAttribute('aria-expanded', 'false');
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal__links a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.getElementById('signup-form').addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('form-message').textContent = 'Demo only — no account was created or email submitted.';
  });
});
