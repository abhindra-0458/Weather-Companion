title: "Weather Companion - Smart Weather & Lifestyle Advisor",
description: `Weather Companion is a web-based application that not only provides real-time weather updates but also gives personalized lifestyle advice based on current weather conditions. It aims to be more than just a forecast tool—it's your everyday weather-aware assistant.

**Features**
- Real-time weather updates using OpenWeatherMap API
- City-based weather search with temperature, humidity, wind, and condition icons
- Intelligent suggestions such as:
  - "Carry an umbrella" if it's likely to rain
  - "Apply sunscreen" on sunny days
  - "Wear layers" during cold weather
- Clean and responsive user interface using EJS templates
- Error handling for invalid city inputs

**How It Works**
Users enter a city name into the search bar. The backend fetches weather data from the OpenWeatherMap API and renders it using EJS. Based on temperature, weather condition, and humidity, the app generates simple, actionable advice that users can follow to plan their day better.

**Tech Stack**
- Frontend: EJS (Embedded JavaScript Templates), HTML, CSS
- Backend: Node.js (Express.js)
- API: OpenWeatherMap
- Deployment-ready for platforms like Render or Heroku

**How to Run**
1. Install dependencies: \`npm install\`
2. Add your API key in the config file or \`.env\`
3. Start the server: \`npm start\`
4. Visit: \`http://localhost:3000\` in your browser

**Requirements**
- Node.js
- Express.js
- EJS
- dotenv (for environment variables)

This project combines practical web development with real-world API integration to deliver a useful and user-friendly weather advisory platform.`,
