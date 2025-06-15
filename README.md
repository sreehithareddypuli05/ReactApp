# 🚀 TechZeon Portal

Welcome to the **TechZeon Portal** — a fully responsive web application that showcases and manages all TechZeon events in one centralized place. Built using **React**, **HTML**, **CSS**, and **JavaScript**, the portal allows users to explore, log in, and register for a variety of technical events.

---

## 🖥️ Live Website

🔗 [Visit the TechZeon Portal]https://techzeon-bohgfm7md-sreehithareddypuli05s-projects.vercel.app/

---

## 📌 Features

- 🔐 **Login & Signup**: User authentication to access event registration.
- 🧠 **Multiple Events**: Individual pages for each event:
  - UI/UX Hackathon
  - Web Development Hackathon
  - Data Science Hackathon
  - Code Contest
  - Paper Presentation
  - Project Expo
  - Technical Quiz
- 📋 **Event Registration Forms**
- 💾 **LocalStorage-based Session Handling**
- 🎨 **Modern UI** with smooth animations and responsive design
- 📱 **Fully responsive** across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **Frontend**: React, HTML5, CSS3, JavaScript
- **Routing**: React Router DOM
- **State Management**: React useState / localStorage
- **Styling**: CSS modules & animations
- *(Backend can be added later using Django or Node.js)*

---

## 📂 Project Structure
TechZeon-Portal/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ └── Dashboard.jsx
│ ├── events/
│ │ ├── Web.jsx
│ │ ├── Ui.jsx
│ │ ├── DataScience.jsx
│ │ ├── ProjectExpo.jsx
│ │ ├── CodeContest.jsx
│ │ └── TechnicalQuiz.jsx
│ ├── App.js
│ └── index.js
├── style/
│ └── AllEventStyles.css
├── README.md
└── package.json


## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/TechZeon-Portal.git
cd TechZeon-Portal
2. Install dependencies

npm install

3. Start the development server

npm start

📦 Deployment

You can deploy this React app using GitHub Pages:

npm run build
npm install --save gh-pages

Then in package.json, add:

"homepage": "https://yourusername.github.io/TechZeon-Portal",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

Then run:

npm run deploy

🙋‍♀️ Author

Puli Sreehitha Reddy
📧 sreehithareddypuli@gmail.com
🌐 GitHub
