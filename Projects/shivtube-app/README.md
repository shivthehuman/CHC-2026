# 🟥 ShivTube - YouTube Video Listing Interface

A highly accurate, pixel-perfect clone of the YouTube desktop browsing interface built for the Web Dev Cohort 2026. Data is dynamically fetched using the FreeAPI YouTube endpoints.

### 🔗 Live Preview
**[View Live Application Here]https://youtubebyshivthehuman.vercel.app/**

## ✨ Key Features
- **Pixel-Perfect Architecture:** Exact replica of YouTube's `#0f0f0f` dark mode, including top navigation, collapsible sidebar, and category chips.
- **Authentic Asset Integration:** Replaced basic fonts with high-quality PNG graphics for logos and procedurally generated API avatars for channel representation.
- **Data Formatting Logic:** Custom JavaScript algorithms to parse raw view counts into readable formats (e.g., `1.2M`, `54K`) and randomized timeline generation for a genuine feed experience.
- **Advanced CSS Truncation:** Utilized `-webkit-line-clamp: 2` to ensure video titles break cleanly just like the official platform.
- **Responsive Grid:** Adapts seamlessly from a single column on mobile to a 4-column layout on ultrawide displays.

## 🛠️ Tech Stack
- **Structure:** Semantic HTML5
- **Styling:** Tailwind CSS (Custom Hex Configuration) + Vanilla CSS
- **Logic:** Vanilla JavaScript (Fetch API)
- **API Source:** [FreeAPI YouTube Endpoint](https://api.freeapi.app/api/v1/public/youtube/videos)