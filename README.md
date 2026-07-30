Nebula-Music 🎵

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</div>

<div align="center">
 <img width="622" height="630" alt="image" src="https://github.com/user-attachments/assets/2ad6e707-9d40-4b7b-99a2-442dd6364a62" />
</div>

## 🎯 Project Overview

**Nebula-Music** is a full-stack music streaming application built as an **educational project** to demonstrate modern web development skills. This project showcases:

- **Real-time audio streaming** implementation
- **Glass-morphism UI design** with modern aesthetics  
- **Advanced React state management** with hooks
- **Backend audio processing** with FastAPI
- **Responsive design** across all devices

> ⚠️ **IMPORTANT**: This is an **EDUCATIONAL/PORTFOLIO PROJECT ONLY**. It is designed for **local development and learning purposes**. See [Legal Disclaimer](#legal-disclaimer) for important restrictions.

## ✨ Recent Updates (Latest)

- ✅ **Responsive Player Sidebar** - Mini player now dynamically adjusts width when sidebar collapses/expands
- ✅ **Improved Scrolling** - Up Next queue has smooth scrolling with custom purple scrollbar
- ✅ **Better UX** - Removed close button; click outside expanded player to minimize
- ✅ **Spacious Track List** - Increased padding and gaps between tracks for better readability
- ✅ **Fixed Layout Issues** - Proper height constraints prevent track list cramping

## 🚀 Features

### Frontend (React)
- **Apple-inspired mini player** with sleek glass-morphism design
- **Expanded player view** with visualizations and controls
- **Real-time progress tracking** with smooth animations
- **Volume controls** with custom slider implementation
- **Playlist management** interface
- **Responsive design** that works on mobile and desktop
- **Up Next queue** with drag-and-drop functionality (planned)

### Backend (FastAPI)
- **Audio streaming server** with proper chunk handling
- **YouTube audio extraction** (educational purpose only)
- **Metadata parsing** for track information
- **CORS configuration** for development
- **Error handling** and logging

## 🛠️ Technology Stack

### Frontend
- **React 18** with Functional Components & Hooks
- **CSS-in-JS** for dynamic styling
- **React Icons** for beautiful iconography
- **Custom animations** with CSS keyframes
- **Responsive design** with media queries

### Backend
- **FastAPI** for high-performance API
- **yt-dlp** for educational audio extraction
- **Uvicorn** ASGI server
- **Python 3.11+**

## 📁 Project Structure
Nebula-Music/

├── src/

│ ├── components/

│ │ ├── MiniPlayer.jsx # Main music player component

│ │ ├── Search.jsx # Search interface

│ │ ├── Playlist.jsx # Playlist management

│ │ └── UpNext.jsx # Queue management

│ ├── App.jsx # Main application

│ └── index.js # Entry point

├── server.py # FastAPI backend

├── requirements.txt # Python dependencies

├── package.json # Node.js dependencies

└── README.md # This file

## 🔧 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.11+
- Git

### Step 1: Clone the Repository
git clone https://github.com/shuklaAI/Nebula-Music.git
cd Nebula-Muzic

Step 2: Backend Setup
bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start backend server
python server.py
Step 3: Frontend Setup
bash
# Install dependencies
npm install

# Start development server
npm start
The application will be available at:

Frontend: http://localhost:3000

Backend: http://localhost:8000

🎨 Key Technical Features

**1. Audio Streaming Architecture**
- Implemented chunk-based streaming for smooth playback
- Real-time buffer management
- Progress synchronization between frontend and backend
- Stream caching (30-minute TTL) for faster repeat plays

**2. State Management**
- Custom React hooks for audio state
- Context API for global state
- Efficient re-rendering with useMemo and useCallback
- Local storage for recently played tracks and liked songs

**3. UI/UX Design**
- Glass-morphism effects with backdrop filters
- Smooth animations and transitions
- Responsive layout system with collapsible sidebar
- Responsive mini player that adjusts when sidebar expands/collapses
- Accessibility considerations

**4. Player Features (Latest Updates)**
- Expanded player modal with album art and neon ring animation
- Scrollable Up Next queue with smooth purple scrollbar
- Collapsible sidebar - player automatically resizes
- Click-outside-to-close expanded view (no X button needed)
- Spacious track list with hover effects and animations
- Volume control with custom slider and repeat functionality
- Real-time progress tracking with seek capability

**5. Performance Optimizations**
- RequestAnimationFrame for smooth progress updates
- Debounced search functionality
- Lazy loading of components
- Efficient audio buffering
- Stream URL caching to reduce backend calls

## 🐛 Known Issues & Solutions

### Issue 1: YouTube Stream URL Expiration
**Problem:** YouTube stream URLs expire after ~5-10 minutes. If a user pauses a song and tries to resume later, playback fails.

**Current Workaround:** Stream caching with 30-minute TTL helps, but the root issue is YouTube's security model.

**How to Fix:**
- Implement a proxy server that re-fetches YouTube URLs on-demand
- Use `yt-dlp` headless server to refresh URLs in the background
- Add retry logic with exponential backoff when playback fails
- Store user preferences locally and sync when resuming

### Issue 2: No Song Duration in Queue Display
**Problem:** Most tracks show hardcoded "3:45" duration instead of actual length.

**How to Fix:**
- Call `/track_info` endpoint for each queued track to fetch real duration
- Cache durations in localStorage to avoid repeated API calls
- Display duration asynchronously as it loads

### Issue 3: Search Results Quality
**Problem:** YouTube search sometimes returns podcasts, uploads, or unrelated content instead of official tracks.

**How to Fix:**
- Filter by video length (music typically 3-6 minutes)
- Prioritize results from verified music channels/labels
- Implement user feedback to block unwanted results
- Add category/genre filtering on the backend

### Issue 4: No Playlist Persistence Issue
**Problem:** Playlists are saved to `playlists.json` on the backend, but large playlists may exceed practical limits.

**How to Fix:**
- Migrate to a database (SQLite, PostgreSQL)
- Implement pagination for playlist views
- Add batch operations (add/remove multiple songs at once)

### Issue 5: Mobile Responsiveness
**Problem:** Player and sidebar work on desktop, but mobile layout needs optimization.

**How to Fix:**
- Implement mobile-first layout with `display: none` for sidebar on small screens
- Add touch gestures for seek/volume
- Stack player controls vertically on mobile
- Test on actual devices (iPhone, Android)

### Issue 6: Audio Format Compatibility
**Problem:** Not all YouTube sources provide M4A audio; some fallback to other formats that may not stream smoothly.

**How to Fix:**
- Add format preference order: `bestaudio[ext=m4a]` → `bestaudio[ext=webm]` → `bestaudio`
- Implement transcoding on the backend for incompatible formats
- Add user settings to choose quality vs compatibility

### Issue 7: No Error Handling for Failed Streams
**Problem:** If a stream fails to load, user sees no feedback and nothing happens.

**How to Fix:**
- Add toast/snackbar notifications for errors
- Implement automatic retry with exponential backoff
- Show fallback message suggesting next track or retry
- Log errors for debugging

### Issue 8: Autoplay Queue Generation
**Problem:** "Up Next" suggestions may repeat or be unrelated to current track.

**How to Fix:**
- Improve `autoplay/upnext` algorithm to consider genre/artist similarity
- Add diversity scoring to avoid duplicates
- Let users customize autoplay behavior (more similar vs variety)
- Implement Spotify-like "mix" feature

## 🚀 Recommended Priority Fixes

1. **High Priority:** Error handling for failed streams (Issue 7)
2. **High Priority:** Real duration fetching (Issue 2)
3. **Medium Priority:** YouTube URL expiration (Issue 1)
4. **Medium Priority:** Mobile responsiveness (Issue 5)
5. **Low Priority:** Better search filtering (Issue 3)

📚 What I Learned
Building this project helped me understand:

Audio streaming protocols and how browsers handle media

React performance optimization techniques

Backend API design with proper error handling

Real-time synchronization between frontend and backend

Advanced CSS techniques for modern UI design

State management patterns in complex applications

🚫 Legal Disclaimer
THIS PROJECT IS FOR EDUCATIONAL PURPOSES ONLY

Important Restrictions:
Local Development Only: This application is designed to run on localhost for learning purposes

No Public Deployment: Do not deploy this application to public servers or hosting platforms

No Commercial Use: This project must not be used for any commercial purposes

Copyright Respect: All audio content belongs to its respective copyright holders

Educational Intent: This code demonstrates technical concepts, not production practices

Why These Restrictions?
The backend uses YouTube content without authorization for educational demonstration

Streaming copyrighted content without licenses violates terms of service

Public deployment could lead to legal consequences

See DISCLAIMER.txt for complete legal information.

📝 Portfolio Usage
This project is part of my developer portfolio to demonstrate:

Full-stack development capabilities

Modern UI/UX design skills

Complex state management

Audio/web API integration

Problem-solving abilities

When discussing this project in interviews or portfolio reviews, I focus on:

Technical implementation details

Architecture decisions

Challenges overcome

Skills demonstrated

Learning outcomes

🤝 Contributing
As this is a portfolio/educational project, contributions are not expected. However, if you have suggestions for educational improvements:

Fork the repository

Create a feature branch

Make changes for educational purposes only

Submit a pull request with clear explanation

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

Note: The MIT License applies to the code only. The educational use of audio content is not covered by this license.

🙏 Acknowledgments
React and FastAPI communities for excellent documentation

YouTube for the educational content used in development

Open source projects that inspired various implementations

Educators and tutorials that helped in the learning process

📧 Contact
For educational inquiries or portfolio discussions:

GitHub: @shuklaAI

Portfolio: https://abhiavshukla.vercel.app/

<div align="center"> <sub>Built with ❤️ for educational purposes. Remember to respect copyright and use responsibly.</sub> </div> 
