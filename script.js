const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
    menuToggle.textContent = isOpen ? 'Menu' : 'Close';
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
      menuToggle.textContent = 'Menu';
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
