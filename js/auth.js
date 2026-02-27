// Simple authentication for Omnibees Roadmap
(function() {
    const PASS_HASH = '8a9b0c1d2e3f'; // Simple obfuscation
    const SESSION_KEY = 'omnibees_auth';
    const VALID_PASS = 'metas@ob';

    const loginScreen = document.getElementById('login-screen');
    const appContent = document.getElementById('app-content');
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password-input');
    const loginError = document.getElementById('login-error');

    // Check if already authenticated
    function checkAuth() {
        const session = sessionStorage.getItem(SESSION_KEY);
        if (session === PASS_HASH) {
            showApp();
        }
    }

    // Show main app
    function showApp() {
        loginScreen.classList.add('hidden');
        appContent.classList.remove('hidden');
    }

    // Handle login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = passwordInput.value;

        if (password === VALID_PASS) {
            sessionStorage.setItem(SESSION_KEY, PASS_HASH);
            loginError.textContent = '';
            showApp();
        } else {
            loginError.textContent = 'Senha incorreta';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    // Focus on password input
    passwordInput.focus();

    // Check auth on load
    checkAuth();
})();
