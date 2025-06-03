import React from 'react';
import { Link } from 'react-router-dom';
import './CodeContest.css';

export default function CodeContest() {
  return (
    <div className="event-container">
      <h1 className="event-title">💻 Coding Contest</h1>
      <p className="event-highlight">⌨️ Think. Code. Win.</p>
      <p className="event-desc">
        Brace yourself for the ultimate coding showdown at <strong>TechZeon'25 Coding Contest!</strong> 🔥
      </p>

      <div className="event-section">
        <h3>⚡ The Challenge:</h3>
        <ul>
          <li>🔹 3 rounds of increasing difficulty!</li>
          <li>🔹 Solve algorithmic puzzles under strict time limits!</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>👤 Team Size:</h3>
        <p>1 Member (Individual Participation)</p>
      </div>

      <div className="event-section">
        <h3>💰 Entry Fee:</h3>
        <p>₹20 (Spot Registration Available!)</p>
      </div>

      <div className="event-section">
        <h3>🏆 Prizes & Rewards:</h3>
        <ul>
          <li>🥇 1st Prize: Mechanical Keyboard, Certificate & Memento</li>
          <li>🥈 2nd Prize: Premium Mouse Pad, Certificate</li>
          <li>🏅 Top 20%: Entry Fee Refund!</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>⚠️ Note:</h3>
        <p>All solutions must be submitted in C/C++/Python. Internet access is restricted.</p>
      </div>

      <div className="event-section">
        <h3>🕙 Timings:</h3>
        <p>2:00 PM – 4:30 PM, 28th Feb, C-Block, Lab 3</p>
      </div>

      <a href="https://forms.gle/Zw5yqmLpTu2rVc69A" target="_blank" rel="noopener noreferrer">
        <button className="register-button">Register Now</button>
      </a>

      <Link to="/events" className="back-link">← Back to Events</Link>
    </div>
  );
}
