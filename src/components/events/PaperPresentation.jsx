import React from 'react';
import { Link } from 'react-router-dom';
import './PaperPresentation.css';

export default function PaperPresentation() {
  return (
    <div className="event-container">
      <h1 className="event-title">📄 Paper Presentation</h1>
      <p className="event-highlight">💡 Present. Impress. Inspire.</p>
      <p className="event-desc">
        Showcase your innovative ideas at <strong>TechZeon'25 Paper Presentation!</strong> 🧠
      </p>

      <div className="event-section">
        <h3>🧾 Format:</h3>
        <ul>
          <li>🔹 Individual or Team (max 2 members)</li>
          <li>🔹 8 minutes presentation + 2 minutes Q&A</li>
          <li>🔹 PPT format only (.pptx or .pdf)</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>💼 Topics:</h3>
        <ul>
          <li>🌐 AI & Machine Learning</li>
          <li>📱 Mobile App Development</li>
          <li>☁️ Cloud & IoT</li>
          <li>🛡️ Cybersecurity and more...</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>💰 Entry Fee:</h3>
        <p>₹40 per team</p>
      </div>

      <div className="event-section">
        <h3>🏆 Prizes:</h3>
        <ul>
          <li>🥇 Certificate + Trophy for winners</li>
          <li>🥈 Runner-up Certificates</li>
          <li>🎖️ Participation Certificates for all</li>
        </ul>
      </div>

      <div className="event-section">
        <h3>📅 Date & Venue:</h3>
        <p>10:00 AM – 1:00 PM, 28th Feb, Seminar Hall A</p>
      </div>

      <a href="https://forms.gle/XK3upVQ3EFP7cvFp7" target="_blank" rel="noopener noreferrer">
        <button className="register-button">Register Now</button>
      </a>

      <Link to="/events" className="back-link">← Back to Events</Link>
    </div>
  );
}
