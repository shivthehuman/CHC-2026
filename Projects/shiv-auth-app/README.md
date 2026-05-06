# 🔒 @shivthehuman - Advanced Auth SPA

A Single Page Application (SPA) implementing a robust, state-driven authentication flow using Vanilla JavaScript and the FreeAPI Auth Module.

### 🔗 Live Preview
**[View Live Application Here](YAHAN_VERCEL_LINK_DAAL_DENA)**

## ✨ Enterprise Features
- **Separation of Concerns (SoC):** Distinct Network Layer (`api.js`) and UI Controller (`app.js`) mimicking modern framework architectures.
- **JWT Session Management:** Secure handling of Bearer tokens via `localStorage` with automated attachment in request headers.
- **Dynamic UI State:** Seamless view switching between Login, Register, and Dashboard without page reloads.
- **Custom Toast System:** Built-in procedural notification system for success/error API feedback.
- **UX Polish:** Integrated loading spinners within buttons and disabled states during asynchronous network calls to prevent duplicate submissions.

## 🛠️ Tech Stack
- **Architecture:** SPA / Vanilla JavaScript (ES6 Modules/Async)
- **Styling:** Tailwind CSS + Glassmorphism UI
- **API Source:** [FreeAPI User Authentication](https://api.freeapi.app/api/v1/users/login)