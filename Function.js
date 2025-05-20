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
window.onload = function () {

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
const hamburger = document.querySelector('.u-hamburger');
const mobileMenu = document.querySelector('.u-mobile-menu');
const closeBtn = document.querySelector('.u-mobile-menu__close');
const overlay = document.querySelector('.u-overlay');

function openMenu() {
  mobileMenu.classList.add('open');
  overlay.classList.add('active');
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('active');
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// footer hiden
document.addEventListener("DOMContentLoaded", function () {
      const toggles = document.querySelectorAll(".js-footer-toggle");

      toggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
          const column = this.closest(".js-footer-column");
          column.classList.toggle("active");
        });
      });
    });
// slide 
 window.addEventListener("load", function () {
    document.querySelectorAll(".u-slide-in-left").forEach(el => {
      el.classList.add("active");
    });
  });