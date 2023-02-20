// Navigation
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

// Form Validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate name
  if (nameInput.value.trim() === '') {
    setError(nameInput, 'Name is required');
  } else {
    setSuccess(nameInput);
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    setError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    setError(emailInput, 'Please enter a valid email address');
  } else {
    setSuccess(emailInput);
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    setError(messageInput, 'Message is required');
  } else {
    setSuccess(messageInput);
  }
});

function setError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error-message');
  formGroup.classList.add('form-group--error');
  error.innerText = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('form-group--error');
}

function isValidEmail(email) {
  // This regex is not perfect, but should catch most common email formats
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
