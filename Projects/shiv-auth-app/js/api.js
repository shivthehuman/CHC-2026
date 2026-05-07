// js/api.js - ONLY handles network requests & tokens

const API_CONFIG = {
    BASE_URL: "https://api.freeapi.app/api/v1/users",
    TOKEN_KEY: "shiv_auth_token"
};

window.API = {
    // Centralized Fetch Logic with robust error handling
    call: async (endpoint, method, body = null, requireAuth = false) => {
        const headers = { "Content-Type": "application/json" };

        if (requireAuth) {
            const token = localStorage.getItem(API_CONFIG.TOKEN_KEY);
            if (!token) throw new Error("Authentication required. Please log in.");
            headers["Authorization"] = `Bearer ${token}`;
        }

        const options = { method, headers };
        if (body) options.body = JSON.stringify(body);

        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, options);
            const data = await response.json();

            // Handle 400/500 level errors cleanly
            if (!response.ok) {
                if (response.status === 401) localStorage.removeItem(API_CONFIG.TOKEN_KEY);
                throw new Error(data.message || `Server Error: ${response.status}`);
            }
            return data;
        } catch (error) {
            // Throw to main.js so UI can display it
            throw error;
        }
    },

    register: async (data) => window.API.call("/register", "POST", { ...data, role: "USER" }),

    login: async (credentials) => {
        const res = await window.API.call("/login", "POST", credentials);
        if (res.data?.accessToken) localStorage.setItem(API_CONFIG.TOKEN_KEY, res.data.accessToken);
        return res;
    },

    logout: async () => {
        try { await window.API.call("/logout", "POST", null, true); }
        catch (e) { /* ignore server error on logout */ }
        finally { localStorage.removeItem(API_CONFIG.TOKEN_KEY); }
    },

    getCurrentUser: async () => window.API.call("/current-user", "GET", null, true),

    hasToken: () => !!localStorage.getItem(API_CONFIG.TOKEN_KEY)
};