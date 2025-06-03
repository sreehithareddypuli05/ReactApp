import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

export default function Events() {
  const events = [
    {
      title: 'UI/UX Hackathon',
      summary: 'Design intuitive and engaging user interfaces and experiences in a fast-paced design sprint.',
      path: '/events/ui',
    },
    {
      title: 'Data Science Hackathon',
      summary: 'Analyze datasets and build predictive models to uncover insights using machine learning.',
      path: '/events/datascience', // You can add this route later
    },
    {
      title: 'Web Hackathon',
      summary: 'Build full-stack web applications with creative and functional user interfaces.',
      path: '/events/web', // Add route later
    },
    {
      title: 'Coding Contest',
      summary: 'Compete against time to solve algorithmic challenges and prove your programming skills.',
      path: '/events/coding', // Add route later
    },
    {
      title: 'Paper Presentation',
      summary: 'Showcase your research and technical writing on recent trends in technology.',
      path: '/events/paper', // Add route later
    },
    {
      title: 'Project Expo',
      summary: 'Demonstrate your innovative projects and prototypes to industry experts and peers.',
      path: '/events/projectexpo', // Add route later
    },
    {
      title: 'Technical Quiz',
      summary: 'Test your knowledge across various domains of technology in a fast-paced quiz format.',
      path: '/events/quiz', // Add route later
    },
  ];

  return (
    <div className="events-page">
      <h1 className="events-title">Explore Our Technical Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h2 className="event-name">{event.title}</h2>
            <p className="event-summary">{event.summary}</p>
            <Link to={event.path}>
              <button className="event-button">See More Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
