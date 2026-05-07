// Panel toggle logic
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Initialize modal
const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

// Registration form logic
const registerForm = document.querySelector('.register-form form');
registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = registerForm.querySelector('input[placeholder="UserName"]').value.trim();
  const email = registerForm.querySelector('input[placeholder="Email"]').value.trim();
  const password = registerForm.querySelector('input[placeholder="Password"]').value;

  // Save user info to localStorage
  const userData = { username, email, password };
  localStorage.setItem('user', JSON.stringify(userData));

  // Show success message in modal
  document.getElementById('modalMessage').textContent = "Registration successful! Now you can log in.";
  messageModal.show();
  container.classList.remove('active'); // Switch to login panel
});

// Login form logic
const loginForm = document.querySelector('.login-form:not(.register-form) form');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const loginUsername = loginForm.querySelector('input[placeholder="UserName"]').value.trim();
  const loginPassword = loginForm.querySelector('input[placeholder="Password"]').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (
    storedUser &&
    storedUser.username === loginUsername &&
    storedUser.password === loginPassword
  ) {
    // Login successful
    window.location.href = "home.html";
  } else {
    // Show error message in modal
    document.getElementById('modalMessage').textContent = "Please enter valid username and password.";
    messageModal.show();
  }
});
