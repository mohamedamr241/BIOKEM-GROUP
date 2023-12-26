document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    navbarToggler.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });