# YouTube Clone

A modern YouTube-like web application built with React and Redux, featuring video search, live chat with API polling, n-level deep comments, and infinite scrolling for video loading. The app utilizes Firebase for authentication and integrates modern techniques like search debouncing and caching for an optimized user experience.

## Features

- **Firebase Authentication**: Secure user login and registration using Firebase Auth.
- **Live Chat**: Real-time chat powered by API polling, with automated random message generation every 2 seconds.
- **N-level Deep Comments**: Allows for deeply nested comments to simulate real-world discussions.
- **Search Functionality**: Modern search implementation with debouncing and caching, ensuring fast and efficient search results without redundant API calls.
- **Infinite Scroll**: Automatically loads more videos as the user scrolls down the page, providing a seamless browsing experience.
- **React Router**: SPA navigation for a smooth and fast browsing experience.
- **Redux**: Global state management, including storing search results and chat messages for efficient data handling.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/eroolls4/yt-clone.git
```
### 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

```bash
cd yt-clone
npm install
```
### 3. Set Up Environment Variables
Create a .env file in the root directory of the project and add the following environment variables:

* REACT_APP_YT_KEY: Your YouTube API key for fetching video data.
* REACT_APP_SEARCH_SUGGEST_API: API endpoint for fetching search suggestions.

 Firebase configuration:
* REACT_APP_FIREBASE_API_KEY
* REACT_APP_FIREBASE_AUTH_DOMAIN
* REACT_APP_FIREBASE_PROJECT_ID
* REACT_APP_FIREBASE_STORAGE_BUCKET
* REACT_APP_FIREBASE_MESSAGING_SENDER_ID
* REACT_APP_FIREBASE_APP_ID
* REACT_APP_FIREBASE_MEASUREMENT_ID

### 4.Run the Application
Once the environment variables are set, start the application in development mode:
```bash
npm start
```
The app will be available at http://localhost:3000.
