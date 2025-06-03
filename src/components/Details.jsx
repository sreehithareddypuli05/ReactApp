import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Details() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.page}>
      <div
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
        }}
        className="details-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="Untitled.jpeg" // Replace with actual image path
          alt="Puli Sreehitha Reddy"
          style={styles.profileImage}
        />
        <h2 style={styles.name}>Puli Sreehitha Reddy</h2>
        <p style={styles.role}>Frontend Developer | Tech Enthusiast</p>
        <div style={styles.iconContainer}>
          <a href="https://sreehithareddypuli05.github.io/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sreehitha-reddy-puli-aaaa582b0" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/sreehithareddypuli" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FaInstagram size={30} />
          </a>
          <a href="mailto:sreehithareddypuli@gmail.com" style={styles.iconLink}>
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>

      {/* Responsive Media Queries */}
      <style>
        {`
          @media (max-width: 768px) {
            .details-card {
              width: 90% !important;
              padding: 30px 20px !important;
            }

            .details-card img {
              width: 120px !important;
              height: 120px !important;
            }

            .details-card h2 {
              font-size: 1.6rem !important;
            }

            .details-card p {
              font-size: 0.95rem !important;
            }

            .details-card a {
              transform: scale(0.9);
            }
          }

          @media (max-width: 480px) {
            .details-card h2 {
              font-size: 1.4rem !important;
            }

            .details-card p {
              font-size: 0.9rem !important;
            }
          }

          .details-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,216,255,0.4);
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#111',
    color: '#fff',
    minHeight: '100vh',
    padding: '80px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    border: '2px solid #00d8ff',
    borderRadius: '16px',
    padding: '40px 30px',
    maxWidth: '400px',
    width: '100%',
    backgroundColor: '#1c1c1c',
    boxShadow: '0 0 20px rgba(0,216,255,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0,216,255,0.4)',
  },
  profileImage: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    border: '4px solid #00d8ff',
    objectFit: 'cover',
    marginBottom: '20px',
    boxShadow: '0 0 20px rgba(0,216,255,0.5)',
  },
  name: {
    fontSize: '2.2rem',
    marginBottom: '10px',
    color: '#00d8ff',
  },
  role: {
    fontSize: '1rem',
    color: '#ccc',
    marginBottom: '20px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  iconLink: {
    color: '#fff',
    transition: 'color 0.3s, transform 0.3s',
    textDecoration: 'none',
  },
};
