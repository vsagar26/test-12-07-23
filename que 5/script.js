function validateForm(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');
    const dobInput = document.getElementById('dob');
    const colorInput = document.getElementById('color');
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const ageError = document.getElementById('ageError');
    const genderError = document.getElementById('genderError');
    const dobError = document.getElementById('dobError');
    const colorError = document.getElementById('colorError');
  
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
    clearErrors();
  
    if (!nameInput.value.match(namePattern)) {
      nameError.textContent = 'Invalid name format';
    }
  
    if (!emailInput.value.match(emailPattern)) {
      emailError.textContent = 'Invalid email format';
    }
  
    if (!phoneInput.value.match(phonePattern)) {
      phoneError.textContent = 'Invalid phone number format';
    }
  
    if (!passwordInput.value.match(passwordPattern)) {
      passwordError.textContent = 'Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one digit';
    }
  
    if (ageInput.value < 12 || ageInput.value > 99) {
      ageError.textContent = 'Age must be between 12 and 99';
    }
  
    if (!genderInput.value) {
      genderError.textContent = 'Please select a gender';
    }
  
    const today = new Date();
    const dob = new Date(dobInput.value);
    if (dob >= today) {
      dobError.textContent = 'Invalid date of birth';
    }
  
    if (!colorInput.value) {
      colorError.textContent = 'Please select a color';
    }
  }
  
  function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }
  }
  