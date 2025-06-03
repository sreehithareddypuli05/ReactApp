import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.title}>🎉 Ornate 2K25</h2>
        <p style={styles.text}>© {new Date().getFullYear()} TechZeon. All rights reserved.</p>

        <div style={styles.links}>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
          <a href="/terms" style={styles.link}>Terms of Service</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.socialSection}>
          <p style={styles.text}>Follow us for updates:</p>
          <div style={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/sreehitha-reddy-puli-aaaa582b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/sreehithareddypuli?utm_source=qr&igsh=MWwwcWIxcDFzZTllOQ==" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@sreehithareddypuli?si=BDKUTDfiT1QOicyS" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaYoutube />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '40px 20px',
    marginTop: '60px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00d8ff',
    marginBottom: '10px',
  },
  text: {
    marginBottom: '10px',
    fontSize: '14px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  link: {
    color: '#00d8ff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  socialSection: {
    marginTop: '20px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '20px',
    marginTop: '10px',
  },
  iconLink: {
    color: '#00d8ff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};
