const navbar = document.querySelector('#navbar');
const navbarOpen = document.querySelector('#navbar-open');
const navbarClose = document.querySelector('#navbar-close');

navbarOpen.addEventListener('click', () => {
  navbar.classList.add('visible');
  navbarClose.classList.add('visible');
});

navbarClose.addEventListener('click', () => {
  navbar.classList.remove('visible');
  navbarClose.classList.remove('visible');
});
