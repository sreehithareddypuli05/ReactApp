import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card} className="contact-card">
        <h2 style={styles.title}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>

        <div style={styles.contactInfo}>
          <p style={styles.infoText}>Or reach me at:</p>
          <p style={styles.infoText}><FaEnvelope /> sreehithareddypuli@gmail.com</p>
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
      </div>

      {/* Embedded responsive styles using <style> for hover & media */}
      <style>
        {`
          .contact-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 30px rgba(0, 216, 255, 0.5);
          }

          @media (max-width: 600px) {
            .contact-card {
              width: 100%;
              padding: 30px 20px !important;
              margin: 0 10px;
            }

            .contact-card input,
            .contact-card textarea {
              font-size: 0.95rem !important;
            }

            .contact-card h2 {
              font-size: 1.7rem !important;
            }

            .contact-card button {
              font-size: 1rem !important;
            }

            .contact-card .infoText {
              font-size: 0.9rem !important;
            }
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
    maxWidth: '450px',
    backgroundColor: '#1c1c1c',
    boxShadow: '0 0 20px rgba(0,216,255,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    width: '100%',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '25px',
    color: '#00d8ff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1.5px solid #00d8ff',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
  },
  textarea: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1.5px solid #00d8ff',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '1rem',
    resize: 'vertical',
    outline: 'none',
  },
  button: {
    backgroundColor: '#00d8ff',
    color: '#111',
    border: 'none',
    borderRadius: '30px',
    padding: '12px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  contactInfo: {
    marginTop: '35px',
    borderTop: '1px solid #00d8ff',
    paddingTop: '25px',
  },
  infoText: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#ccc',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '15px',
    flexWrap: 'wrap',
  },
  iconLink: {
    color: '#fff',
    transition: 'color 0.3s',
    textDecoration: 'none',
  },
};
