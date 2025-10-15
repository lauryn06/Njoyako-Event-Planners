document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const role = document.getElementById('role').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  // Authorize organiser and user only, password 1234
  if ((role === 'organiser' || role === 'user') && password === '1234') {
    // Store role in localStorage for dashboard checks
    localStorage.setItem('role', role);

    message.style.color = 'green';
    message.textContent = `Login successful! Welcome ${role}.`;

    setTimeout(() => {
      // Redirect based on role
      if (role === 'organiser') {
        window.location.href = 'dashboard1.html'; // organiser dashboard
      } else {
        window.location.href = 'dashboard.html'; // user dashboard
      }
    }, 1200);
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid credentials. Please try again.';
  }
});
