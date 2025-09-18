# filename: README.md
# Novatech Mini Portal

## How to Run/Test the Site
1. Place all files in a single directory (e.g., `novatech-portal/`).
2. Open `index.html` in a modern web browser (e.g., Chrome, Firefox).
3. For testing:
   - Use the sample credentials: Username: `novadmin`, Password: `Nova@2025!` to login.
   - Test invalid credentials to see error message.
   - After login, navigate to Home, About, Download pages.
   - Click Logout to return to login page.
   - Try opening `home.html` directly in a new tab (without logging in) – it should redirect to `index.html`.
   - Test download button on `download.html` – it should prompt to save `novatech-info.txt`.
   - Test mobile view by resizing browser or using dev tools (hamburger menu should appear).
   - Test without JavaScript: Disable JS in browser settings – pages should load (though without guard or validation, as per progressive enhancement).

## Accessibility & Testing Checklist
- Keyboard navigation: Tab through nav links, form fields, and buttons; hamburger toggle works with Enter/Space.
- Color contrast: Text vs background checked (e.g., light text on dark bg meets AA standards).
- Login: Valid credentials redirect; invalid show inline error.
- Guard: Direct access to protected pages redirects to login if not authenticated.
- Download: Button triggers file save dialog.

## Security Note
This is front-end simulation only — not secure for production. All authentication is client-side and can be bypassed. Do not use real credentials or deploy to a server without proper back-end security.