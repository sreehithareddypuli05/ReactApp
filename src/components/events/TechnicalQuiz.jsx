import React from 'react';
import { Link } from 'react-router-dom';
import './TechnicalQuiz.css';

export default function TechnicalQuiz() {
  return (
    <div className="event-container">
      <h1 className="event-title">🧠 Technical Quiz</h1>
      <p className="event-highlight">❓ Test Your Knowledge, Win Big!</p>
      <p className="event-desc">
        Join the <strong>TechZeon'25 Technical Quiz</strong> and challenge yourself with tricky and interesting tech questions! ⚙️💡
      </p>

      <div className="event-section">
        <h3>⚡ The Challenge:</h3>
        <ul>
          <li>🔹 Multiple-choice questions on programming, networking, databases, and more.</li>
          <li>🔹 Time-limited rounds to test quick thinking and accuracy.</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>👤 Team Size:</h3>
        <p>1 Member (Individual Participation)</p>
      </div>

      <div className="event-section">
        <h3>💰 Entry Fee:</h3>
        <p>₹15 (Spot Registration Available!)</p>
      </div>

      <div className="event-section">
        <h3>🏆 Prizes & Rewards:</h3>
        <ul>
          <li>🥇 1st Prize: Smart Speaker, Certificate & Memento</li>
          <li>🥈 2nd Prize: Wireless Earbuds, Certificate</li>
          <li>🏅 Top 25%: Participation Certificate</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>⚠️ Note:</h3>
        <p>Use of mobile phones or any external help is prohibited during the quiz.</p>
      </div>

      <div className="event-section">
        <h3>🕙 Timings:</h3>
        <p>4:00 PM – 5:30 PM, 28th Feb, Seminar Hall, Campus-3</p>
      </div>

      <a href=" https://forms.gle/MRc8rw2kPTWKGB1Y7" target="_blank" rel="noopener noreferrer">
        <button className="register-button">Register Now</button>
      </a>

      <Link to="/events" className="back-link">← Back to Events</Link>
    </div>
  );
}
