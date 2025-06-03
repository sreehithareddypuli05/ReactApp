import React from 'react';
import './Session2.css';
import { useNavigate } from 'react-router-dom';

export default function Session2() {
  const navigate = useNavigate();

  return (
    <div className="session2-container">
      <div className="session2-card">
        <h2 className="session2-title">Unleashing Innovation: Tech Events Like Never Before</h2>
        <p className="session2-description">
          Dive into a world where technology meets creativity. Our events feature coding challenges,
          robotics exhibitions, AI workshops, and immersive tech talks by industry pioneers.
        </p>
        <button className="session2-button" onClick={() => navigate('/events')}>Know More</button>
      </div>
    </div>
  );
}
