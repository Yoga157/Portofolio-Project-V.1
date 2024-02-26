  document.addEventListener('DOMContentLoaded', function() {
    const navBarNav = document.querySelector('.menu-navbar ul');
    document.querySelector('#icon-menu').onclick = () => {
      navBarNav.classList.toggle('active');
    };
  });

