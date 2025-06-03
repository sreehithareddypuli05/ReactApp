import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Ui.css';

export default function Ui() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="uiux-container">
      <h1 className="uiux-title">🎨 UI/UX Hackathon</h1>

      <p className="uiux-highlight">💻 Design. Innovate. Inspire.</p>

      <p className="uiux-desc">
        Get ready for <strong>TechZeon'25 UI/UX Hackathon</strong>, where your creativity meets functionality! 🧠💡
      </p>

      <div className="uiux-section">
        <h3>⚡ The Challenge:</h3>
        <ul>
          <li>🔹 Problem statement will be revealed 2 days before the event!</li>
          <li>🔹 Teams must design a solution in just <strong>2.5 hours</strong>!</li>
        </ul>
      </div>

      <div className="uiux-section">
        <h3>👥 Team Size:</h3>
        <p>🧑‍🎨 2 Members per Team</p>
      </div>

      <div className="uiux-section">
        <h3>💰 Entry Fee:</h3>
        <p>₹30 (Spot Registration Available!)</p>
      </div>

      <div className="uiux-section">
        <h3>🏆 Prizes & Rewards:</h3>
        <ul>
          <li>🥇 1st Prize: Wireless Keyboard x2, Certificate, Memento 🎁</li>
          <li>🥈 2nd Prize: Graphic Tablet x2, Certificate 🏅</li>
          <li>🔝 Top 20% Teams: Full Entry Fee Refund! 💰</li>
        </ul>
      </div>

      <div className="uiux-section">
        <h3>⚠️ Note:</h3>
        <p>❗ Participating in this event restricts entry to the Web Hackathon (both run in parallel).</p>
      </div>

      <div className="uiux-section">
        <h3>🕙 Timings:</h3>
        <p>10:00 AM – 12:30 PM, 28th Feb, E-Block, Campus-2</p>
      </div>

      <a
        href="https://forms.gle/WbfiG432hDJqEQ6M7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="register-button" aria-label="Register for UI/UX Hackathon">
          Register Now <FaArrowRight style={{ marginLeft: '8px' }} />
        </button>
      </a>

      <Link to="/events" className="back-link">← Back to Events</Link>
    </div>
  );
}
