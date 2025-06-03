import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectExpo.css';

export default function ProjectExpo() {
  return (
    <div className="event-container">
      <h1 className="event-title">🚀 Project Expo</h1>
      <p className="event-highlight">💡 Innovate. Showcase. Inspire.</p>
      <p className="event-desc">
        Present your innovative projects and prototypes at <strong>TechZeon'25 Project Expo</strong>, and get noticed by industry experts! 🌟
      </p>

      <div className="event-section">
        <h3>⚡ The Challenge:</h3>
        <ul>
          <li>🔹 Exhibit your project with a live demo or presentation.</li>
          <li>🔹 Explain the technology, innovation, and impact.</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>👥 Team Size:</h3>
        <p>1 to 4 Members</p>
      </div>

      <div className="event-section">
        <h3>💰 Entry Fee:</h3>
        <p>₹50 (Spot Registration Available!)</p>
      </div>

      <div className="event-section">
        <h3>🏆 Prizes & Rewards:</h3>
        <ul>
          <li>🥇 1st Prize: Smartwatch, Certificate & Memento</li>
          <li>🥈 2nd Prize: Bluetooth Speaker, Certificate</li>
          <li>🏅 Top 30%: Participation Certificate</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>⚠️ Note:</h3>
        <p>Ensure your project is your original work. Presentations limited to 10 minutes per team.</p>
      </div>

      <div className="event-section">
        <h3>🕙 Timings:</h3>
        <p>11:00 AM – 3:00 PM, 27th Feb, Innovation Hall, Campus-2</p>
      </div>

      <a href="https://forms.gle/o3tc9TWjnpih5jAL6" target="_blank" rel="noopener noreferrer">
        <button className="register-button">Register Now</button>
      </a>

      <Link to="/events" className="back-link">← Back to Events</Link>
    </div>
  );
}
