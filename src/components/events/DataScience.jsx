import React from 'react';
import './DataScience.css';
import { Link } from 'react-router-dom';

export default function DataScience() {
  return (
    <div className="datascience-container">
      <h1 className="datascience-title">📊 Data Science Hackathon</h1>

      <p className="datascience-highlight">🔍 Analyze. Predict. Impact.</p>

      <p className="datascience-desc">
        Get ready for <strong>TechZeon'25 Data Science Hackathon</strong>, where your analytical skills take center stage!
      </p>

      <div className="datascience-section">
        <h3>⚡ The Challenge:</h3>
        <ul>
          <li>🔹 Problem statement revealed 3 days before the event.</li>
          <li>🔹 Final phase: build and present in just <strong>2.5 hours</strong>!</li>
        </ul>
      </div>

      <div className="datascience-section">
        <h3>👥 Team Size:</h3>
        <p>🧠 2 Members per Team</p>
      </div>

      <div className="datascience-section">
        <h3>💰 Entry Fee:</h3>
        <p>₹30 (Spot Registration Available!)</p>
      </div>

      <div className="datascience-section">
        <h3>🏆 Prizes & Rewards:</h3>
        <ul>
          <li>🥇 1st Prize: Raspberry Pi x2, Certificate, Memento 🎁</li>
          <li>🥈 2nd Prize: Arduino Kit x2, Certificate 🏅</li>
          <li>🔝 Top 20% Teams: Full Entry Fee Refund! 💰</li>
        </ul>
      </div>

      <div className="datascience-section">
        <h3>⚠️ Note:</h3>
        <p>❗ This event runs in parallel with the Coding Contest. Choose wisely!</p>
      </div>

      <div className="datascience-section">
        <h3>🕙 Timings:</h3>
        <p>2:00 PM – 4:30 PM, 28th Feb, E-Block, Campus-2</p>
      </div>

      <a href="https://forms.gle/oxhCGh1eV1NZ1Ms16" target="_blank" rel="noopener noreferrer">
        <button className="register-button">Register Now</button>
      </a>

      <Link to="/events" className="back-link">← Back to Events</Link>
    </div>
  );
}
