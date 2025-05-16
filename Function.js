document.addEventListener('DOMContentLoaded', function () {
    // Ngôn ngữ
    const languageButton = document.getElementById('languageDropdown');
    const languageMenu = document.querySelector('#languageDropdown + .dropdown-menu');
  
    if (languageButton && languageMenu) {
      languageMenu.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          languageButton.textContent = this.textContent.trim();
        });
      });
    }
  
    // Tiền tệ
    const currencyButton = document.getElementById('currencyDropdown');
    const currencyMenu = document.querySelector('#currencyDropdown + .dropdown-menu');
  
    if (currencyButton && currencyMenu) {
      currencyMenu.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          currencyButton.textContent = this.textContent.trim();
        });
      });
    }
  });
  

// loader
window.onload = function() {

  document.querySelector('.loader').style.display = 'none';
  
  document.querySelector('.content').style.display = 'block';
};

// Smooth Scrolling
const elements = document.querySelectorAll('.u-fade-in, .u-slide-in-left');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));
// menu 

  document.querySelector('.u-main-nav__toggle').addEventListener('click', function () {
    document.body.classList.add('u-mobile-menu-active');
  });

  document.querySelector('.u-main-nav__close').addEventListener('click', function () {
    document.body.classList.remove('u-mobile-menu-active');
  });

  document.querySelector('.u-main-nav__overlay').addEventListener('click', function () {
    document.body.classList.remove('u-mobile-menu-active');
  });

