// filename: script.js
// Modular functions for login, auth guard, navigation, and logout

// Highlight active navigation link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-links a');
  const path = location.pathname.split('/').pop(); // Get current file name
  links.forEach(link => {
    if (link.href.endsWith(path)) {
      link.classList.add('active');
    }
  });
}

// Authentication guard for protected pages
function checkAuthentication() {
  const path = location.pathname.split('/').pop();
  if (path !== 'index.html' && sessionStorage.getItem('isAuthenticated') !== 'true') {
    location.href = 'index.html';
  }
}

// Handle login form submission
function handleLogin() {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const errorDiv = document.getElementById('login-error');

      if (username === 'novadmin' && password === 'Nova@2025!') {
        sessionStorage.setItem('isAuthenticated', 'true');
        location.href = 'home.html';
      } else {
        errorDiv.textContent = 'Invalid username or password.';
      }
    });
  }
}

// Handle logout
function handleLogout() {
  const logoutBtn = document.getElementById('logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.removeItem('isAuthenticated');
      location.href = 'index.html';
    });
  }
}

// Handle hamburger menu toggle
function handleHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('show');
    });
  }
}

// Download fallback using Blob (if download attribute fails, but usually not needed)
function handleDownloadFallback() {
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      // Fallback only if needed, but for static file, download attr suffices
      // This is bonus for progressive enhancement
      const text = 'Novatech Information\n\nThis is a sample info file for Novatech Mini Portal.\n\nDetails:\n- Futuristic tech\n- AI innovations';
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      downloadBtn.href = url;
      downloadBtn.download = 'novatech-info.txt';
    });
  }
}

// Initialize all handlers on DOM load
document.addEventListener('DOMContentLoaded', () => {
  checkAuthentication();
  highlightActiveLink();
  handleLogin();
  handleLogout();
  handleHamburger();
  handleDownloadFallback();
});