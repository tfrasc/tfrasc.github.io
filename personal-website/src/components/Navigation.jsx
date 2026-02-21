import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(51, 65, 85, 0.5)',
      zIndex: 1000,
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      border: 'none',
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      textTransform: 'capitalize',
      transition: 'color 0.3s',
      padding: '0.5rem 0',
      position: 'relative',
    },
    navLinkActive: {
      color: '#60a5fa',
    },
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer',
    },
    mobileMenu: {
      padding: '1rem 1.5rem',
      borderTop: '1px solid #334155'
    },
  };

  const sections = ['home', 'projects', 'experience', 'contact'];

  return (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <button onClick={() => scrollToSection('home')} style={styles.logo}>
          Tyler Frasca
        </button>

        <div style={styles.navLinks} className="nav-links">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                ...styles.navLink,
                ...(activeSection === section ? styles.navLinkActive : {})
              }}
            >
              {section}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={styles.mobileMenuBtn}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                ...styles.navLink,
                display: 'block',
                width: '100%',
                textAlign: 'left',
                marginBottom: '0.5rem',
              }}
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
