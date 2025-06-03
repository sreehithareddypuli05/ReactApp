import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: '🎯 Our Team', path: '/team' },
    { label: 'Contact Us', path: '/contactus' },
  ];

  return (
    <>
      <nav style={styles.fixedNav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            Tech<span style={styles.logoAccent}>Zeon</span>
          </div>

          {screenWidth < 768 ? (
            <>
              <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} role="button" tabIndex={0}>
                <div style={styles.bar} />
                <div style={styles.bar} />
                <div style={styles.bar} />
              </div>

              {menuOpen && (
                <ul style={styles.mobileMenu}>
                  {navItems.map(({ label, path }, i) => (
                    <li key={i}>
                      <Link
                        to={path}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          ...styles.mobileLink,
                          ...(location.pathname === path ? styles.activeLinkMobile : {}),
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <ul style={styles.navList}>
            

              {navItems.map(({ label, path }, i) => (
                <li key={i}>
                  <Link
                    to={path}
                    style={{
                      ...styles.navLink,
                      ...(location.pathname === path ? styles.activeLink : {}),
                    }}
                  >
                    {label}
                  </Link>
                </li>
                
              ))}
              <li>
  <Link to="/login" onClick={() => setMenuOpen(false)} style={styles.mobileAuthButton}>Login</Link>
</li>
<li>
  <Link to="/signup" onClick={() => setMenuOpen(false)} style={styles.mobileAuthButton}>Sign Up</Link>
</li>

            </ul>
          )}
        </div>
      </nav>
      <div style={{ paddingTop: '70px' }} />
    </>
  );
}

const styles = {
  fixedNav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#111',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  logoAccent: {
    color: '#00d8ff',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    gap: '6px',
    padding: '8px',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
    borderRadius: '3px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '18px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    transition: 'background 0.3s, color 0.3s',
  },
  activeLink: {
    backgroundColor: '#00d8ff',
    color: '#111',
    fontWeight: 'bold',
  },
  mobileMenu: {
    listStyle: 'none',
    width: '100%',
    margin: '10px 0 0',
    padding: '8px 0',
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    transition: 'all 0.3s ease-in-out',
  },
  mobileLink: {
    display: 'block',
    padding: '12px 20px',
    textDecoration: 'none',
    color: '#fff',
    borderBottom: '1px solid #333',
    transition: 'background 0.3s',
  },
  activeLinkMobile: {
    backgroundColor: '#00d8ff',
    color: '#111',
    fontWeight: 'bold',
  },
  authButtons: {
  display: 'flex',
  gap: '10px',
},

loginButton: {
  padding: '8px 14px',
  color: '#00d8ff',
  backgroundColor: '#222',
  border: '1px solid #00d8ff',
  borderRadius: '6px',
  textDecoration: 'none',
  transition: 'all 0.3s',
},

signupButton: {
  padding: '8px 14px',
  color: '#fff',
  backgroundColor: '#00d8ff',
  border: 'none',
  borderRadius: '6px',
  textDecoration: 'none',
  transition: 'all 0.3s',
},

mobileAuthButton: {
  display: 'block',
  padding: '12px 20px',
  textDecoration: 'none',
  color: '#00d8ff',
  backgroundColor: '#222',
  borderBottom: '1px solid #333',
  transition: 'background 0.3s',
},

};
