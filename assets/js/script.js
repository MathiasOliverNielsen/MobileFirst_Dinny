// Open and close Modal
// === Get Elements ===
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('auth-modal');
const backdrop = document.querySelector('.modal-auth-backdrop');
const loginBtn = document.querySelector('.auth-login-btn');
const signupBtn = document.querySelector('.auth-signup-btn');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

// === Open Modal ===
openModalBtn.addEventListener('click', () => {
  modal.hidden = false;
});

// === Close Modal on Backdrop Click ===
backdrop.addEventListener('click', () => {
  modal.hidden = true;
});

// === Toggle Forms ===
loginBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

// Form Validation
