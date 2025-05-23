document.addEventListener('DOMContentLoaded', function () {
  // Languea
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

  // $ currency
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

  // Menu mobile toggle
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

  // Footer toggle
  const toggles = document.querySelectorAll(".js-footer-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const column = this.closest(".js-footer-column");
      column.classList.toggle("active");
    });
  });

  // Scroll-based animation with immediate activation for LCP
  const heroSection = document.querySelector(".u-slide-in-left");
  if (heroSection) {
    heroSection.classList.add("active");
  }

  const elements = document.querySelectorAll('.u-fade-in, .u-slide-in-left');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    if (el !== heroSection) observer.observe(el);
  });
});


// loader
// Khi trang load xong, hiện nội dung và ẩn loader
window.addEventListener("load", function () {
  const content = document.querySelector('.content');
  const loader = document.querySelector('.loader');
  if (content) {
    content.classList.add('active');
  }
  if (loader) {
    loader.classList.remove('active');
  }
});

// Khi click link nội bộ → hiện loader → delay chuyển trang
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href]:not([href^="#"]):not([target="_blank"])');
  const loader = document.querySelector('.loader');
  const content = document.querySelector('.content');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href.startsWith('javascript:')) return;

      e.preventDefault();

      // Ẩn nội dung cũ
      if (content) content.classList.remove('active');

      // Hiện loader
      if (loader) loader.classList.add('active');

      // Chuyển trang sau delay
      setTimeout(() => {
        window.location.href = href;
      }, 500); 
    });
  });
});

//Categories
new Swiper('.my-category-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 24,
    }
  },
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

