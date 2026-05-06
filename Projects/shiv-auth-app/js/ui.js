// js/ui.js - ONLY handles DOM manipulation

window.UI = {
    elements: {
        views: {
            login: document.getElementById('login-view'),
            register: document.getElementById('register-view'),
            dashboard: document.getElementById('dashboard-view')
        },
        profile: document.getElementById('user-profile'),
        toastContainer: document.getElementById('toast-container')
    },

    // 1. Robust Toast System
    showToast: (message, type = 'success') => {
        const toast = document.createElement('div');
        const isError = type === 'error';
        const colors = isError ? 'bg-red-900/50 border-red-500 text-red-200' : 'bg-green-900/50 border-green-500 text-green-200';
        const icon = isError ? 'fa-circle-exclamation' : 'fa-circle-check';

        toast.className = `toast flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-lg ${colors}`;
        toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span class="font-medium text-sm">${message}</span>`;

        window.UI.elements.toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    },

    // 2. View Switching
    switchView: (viewId) => {
        Object.values(window.UI.elements.views).forEach(v => v.classList.add('hidden'));
        window.UI.elements.views[viewId].classList.remove('hidden');
    },

    // 3. Form Disabling / Loading State
    setLoading: (btnId, isLoading, defaultText) => {
        const btn = document.getElementById(btnId);
        if (isLoading) {
            btn.disabled = true;
            btn.innerHTML = `<div class="loader"></div> <span>Processing...</span>`;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            btn.disabled = false;
            btn.innerHTML = `<span>${defaultText}</span>`;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    },

    // 4. Render Profile Data
    renderProfile: (user) => {
        const avatarUrl = `https://api.dicebear.com/7.x/avataaars/png?seed=${user.username}&backgroundColor=b6e3f4`;
        window.UI.elements.profile.innerHTML = `
            <div class="flex items-center gap-5 bg-black/40 p-6 rounded-2xl border border-white/5">
                <img src="${avatarUrl}" class="h-16 w-16 rounded-full border border-brand">
                <div>
                    <h3 class="text-xl font-bold capitalize">${user.username}</h3>
                    <p class="text-slate-400 text-sm mt-1"><i class="fa-regular fa-envelope"></i> ${user.email}</p>
                </div>
            </div>
        `;
    },

    // 5. Password Visibility Toggle setup
    initPasswordToggles: () => {
        document.querySelectorAll('.toggle-password').forEach(icon => {
            icon.addEventListener('click', function () {
                const input = this.previousElementSibling;
                if (input.type === 'password') {
                    input.type = 'text';
                    this.classList.replace('fa-eye', 'fa-eye-slash');
                } else {
                    input.type = 'password';
                    this.classList.replace('fa-eye-slash', 'fa-eye');
                }
            });
        });
    }
};