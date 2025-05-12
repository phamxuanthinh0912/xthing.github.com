document.addEventListener('DOMContentLoaded', function () {
  // languae
  const languageDropdownItems = document.querySelectorAll('#languageDropdown + .dropdown-menu a');
  const languageButton = document.getElementById('languageDropdown');

  languageDropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); 
      languageButton.textContent = this.textContent; 
    });
  });

  // $$$
  const currencyDropdownItems = document.querySelectorAll('#currencyDropdown + .dropdown-menu a');
  const currencyButton = document.getElementById('currencyDropdown');

  currencyDropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      currencyButton.textContent = this.textContent;
    });
  });
});

