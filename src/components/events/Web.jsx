import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Web.css';

export default function Web() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register', { state: { event: 'Web Hackathon' } });
  };
  return (
    <div className="web-container">
      <h1 className="web-title">🌐 Web Hackathon</h1>

      <p className="web-highlight">💻 Code. Compete. Conquer.</p>

      <p className="web-desc">
        Get ready for <strong>TechZeon'25 Web Hackathon</strong>, where your web development skills will be pushed to the limit! 🔥
      </p>

      <div className="web-section">
        <h3>⚡ The Challenge:</h3>
        <ul>
          <li>🔹 90% of the problem statement will be revealed 4 days before the event!</li>
          <li>🔹 The final 10% must be solved in just <strong>2 hours</strong> under real-time pressure!</li>
        </ul>
      </div>

      <div className="web-section">
        <h3>👥 Team Size:</h3>
        <p>👨‍💻 2 Members per Team</p>
      </div>

      <div className="web-section">
        <h3>💰 Entry Fee:</h3>
        <p>₹30 (Spot Registration Available!)</p>
      </div>

      <div className="web-section">
        <h3>🏆 Prizes & Rewards:</h3>
        <ul>
          <li>🥇 1st Prize: Wireless Mouse x2, Certificate, Book & Memento 🎁</li>
          <li>🥈 2nd Prize: Laptop Stand x2, Certificate & Book 🏅</li>
          <li>🔝 Top 20% of Teams: Full Entry Fee Refund! 💰</li>
        </ul>
      </div>

      <div className="web-section">
        <h3>⚠️ Note:</h3>
        <p>❗ Participating in this event restricts entry to the Data Science Hackathon (both run in parallel).</p>
      </div>

      <div className="web-section">
        <h3>🕙 Timings:</h3>
        <p>10:00 AM – 12:30 PM, 28th Feb, E-Block, Campus-2</p>
      </div>

      <a href="https://forms.gle/dHtySwLn7ccSHRAW7" target="_blank" rel="noopener noreferrer">
        <button className="register-button" onClick={handleRegister}>Register Now</button>
      </a>

      <Link to="/events" className="back-link">← Back to Events</Link>
    </div>
  );
}
