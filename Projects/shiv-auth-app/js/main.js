// js/main.js - Orchestrates API and UI + Handles Events

const App = {
    // 1. Strict Frontend Validation
    validate: {
        email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        password: (pwd) => pwd.length >= 6,
        username: (usr) => usr.trim().length >= 3
    },

    // 2. Protected Routing Logic
    checkAuthAndRoute: async () => {
        if (window.API.hasToken()) {
            window.UI.switchView('dashboard');
            window.UI.elements.profile.innerHTML = `<div class="animate-pulse flex gap-4"><div class="w-16 h-16 bg-white/10 rounded-full"></div><div class="w-32 h-6 bg-white/10 rounded mt-2"></div></div>`;
            try {
                const res = await window.API.getCurrentUser();
                window.UI.renderProfile(res.data);
            } catch (error) {
                window.UI.showToast("Session expired", "error");
                await window.API.logout();
                window.UI.switchView('login');
            }
        } else {
            window.UI.switchView('login');
        }
    },

    // 3. Handlers
    handleLogin: async (e) => {
        e.preventDefault();
        const username = document.getElementById('l-username').value.trim();
        const password = document.getElementById('l-password').value;

        if (!username || !password) return window.UI.showToast("Please fill all fields.", "error");

        window.UI.setLoading('btn-login', true, 'Sign In');
        try {
            await window.API.login({ username, password });
            window.UI.showToast("Login Successful!");
            document.getElementById('login-form').reset();
            App.checkAuthAndRoute();
        } catch (error) {
            window.UI.showToast(error.message, "error");
        } finally {
            window.UI.setLoading('btn-login', false, 'Sign In');
        }
    },

    handleRegister: async (e) => {
        e.preventDefault();
        const username = document.getElementById('r-username').value.trim();
        const email = document.getElementById('r-email').value.trim();
        const password = document.getElementById('r-password').value;

        // Front-end Checks before API Call
        if (!App.validate.username(username)) return window.UI.showToast("Username min 3 chars", "error");
        if (!App.validate.email(email)) return window.UI.showToast("Invalid email format", "error");
        if (!App.validate.password(password)) return window.UI.showToast("Password min 6 chars", "error");

        window.UI.setLoading('btn-register', true, 'Sign Up');
        try {
            await window.API.register({ username, email, password });
            window.UI.showToast("Account Created! Please log in.");
            document.getElementById('register-form').reset();
            window.UI.switchView('login');
        } catch (error) {
            window.UI.showToast(error.message, "error");
        } finally {
            window.UI.setLoading('btn-register', false, 'Sign Up');
        }
    },

    handleLogout: async () => {
        window.UI.setLoading('btn-logout', true, 'Logout');
        await window.API.logout();
        window.UI.showToast("Logged out securelly");
        window.UI.setLoading('btn-logout', false, 'Logout');
        App.checkAuthAndRoute();
    },

    // 4. Initialize Everything
    init: () => {
        window.UI.initPasswordToggles();
        App.checkAuthAndRoute(); // Auto-login effect

        // Event Listeners
        document.getElementById('login-form').addEventListener('submit', App.handleLogin);
        document.getElementById('register-form').addEventListener('submit', App.handleRegister);
        document.getElementById('btn-logout').addEventListener('click', App.handleLogout);

        document.getElementById('nav-register').addEventListener('click', () => window.UI.switchView('register'));
        document.getElementById('nav-login').addEventListener('click', () => window.UI.switchView('login'));
    }
};

// Boot the App
document.addEventListener('DOMContentLoaded', App.init);