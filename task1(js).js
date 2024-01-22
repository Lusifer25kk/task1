document.addEventListener('DOMContentLoaded', function() {
    const currencySelect = document.getElementById('currency-select');
    const unitSelect = document.getElementById('unit-select');
    
    // Retrieve user preferences from local storage
    const savedCurrency = localStorage.getItem('currency');
    const savedUnit = localStorage.getItem('unit');
    
    // Apply user preferences
    if (savedCurrency) {
      currencySelect.value = savedCurrency;
    }
    if (savedUnit) {
      unitSelect.value = savedUnit;
    }
  });
  
  // Save user preferences to local storage when form is submitted
  document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const currencySelect = document.getElementById('currency-select');
    const unitSelect = document.getElementById('unit-select');
    
    // Save user preferences to local storage
    localStorage.setItem('currency', currencySelect.value);
    localStorage.setItem('unit', unitSelect.value);
    
    alert('Settings saved!');
  });

const animationElement = document.createElement('div');
animationElement.classList.add('background-animation');
document.body.appendChild(animationElement);