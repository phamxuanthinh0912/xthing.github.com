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
  
//  product 
