document.addEventListener('DOMContentLoaded', () => {
  const authWrapper = document.getElementById('auth-wrapper');

  const switchToSignupLink = document.getElementById('switch-to-signup');
  const switchToLoginLink  = document.getElementById('switch-to-login');

  const loginForm  = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  // --- Card Swapping ---
  function showSignup() {
    authWrapper.classList.remove('login-active');
    authWrapper.classList.add('signup-active');
    console.log('Swapping to Sign Up form.');
  }
  function showLogin() {
    authWrapper.classList.remove('signup-active');
    authWrapper.classList.add('login-active');
    console.log('Swapping to Login form.');
  }

  switchToSignupLink.addEventListener('click', e => {
    e.preventDefault();
    showSignup();
  });

  switchToLoginLink.addEventListener('click', e => {
    e.preventDefault();
    showLogin();
  });

  // --- Form Submission with Linking ---
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email    = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // ✅ Replace this with a real backend API call if available
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(res => {
      if (res.ok) {
        // redirect to your dashboard or home page
        window.location.href = 'dashboard.html';
      } else {
        alert('Invalid credentials. Please try again.');
      }
    })
    .catch(() => alert('Network error. Please try later.'));

    // keep button component as-is
  });

  signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const name     = document.getElementById('signup-name').value.trim();
    const phone    = document.getElementById('signup-phone').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    // ✅ Replace with actual signup API
    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, password })
    })
    .then(res => {
      if (res.ok) {
        alert(`Account created for ${name}! Please log in.`);
        signupForm.reset();
        showLogin();      // swap back to login card
      } else {
        alert('Sign up failed. Try again.');
      }
    })
    .catch(() => alert('Network error. Please try later.'));

    // button remains the same <button type="submit">
  });
});
