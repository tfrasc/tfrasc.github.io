import React from 'react';
import { Menu, X, Home, Briefcase, Code, Mail, GraduationCap } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(13, 13, 13, 0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
    // Desktop navigation - text links
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
    // Mobile navigation - icon buttons
    mobileNavLinks: {
      display: 'none',
      gap: '0.5rem',
    },
    iconButton: {
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer',
      padding: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s',
      borderRadius: '0.5rem',
    },
    iconButtonActive: {
      color: '#60a5fa',
      background: 'rgba(96, 165, 250, 0.1)',
    },
  };

  const navItems = [
    { id: 'home', label: 'home', icon: Home },
    { id: 'experience', label: 'experience', icon: Briefcase },
    { id: 'projects', label: 'projects', icon: Code },
    { id: 'education', label: 'education', icon: GraduationCap },
    { id: 'contact', label: 'contact', icon: Mail },
  ];

  return (
    <nav style={styles.nav}>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          .nav-logo { font-size: 1.25rem !important; }
        }
      `}</style>
      
      <div style={styles.navContent}>
        <button onClick={() => scrollToSection('home')} style={styles.logo} className="nav-logo">
          Tyler Frasca
        </button>

        {/* Desktop Navigation - Text Links */}
        <div style={styles.navLinks} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                ...styles.navLink,
                ...(activeSection === item.id ? styles.navLinkActive : {})
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation - Icon Buttons */}
        <div style={styles.mobileNavLinks} className="mobile-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  ...styles.iconButton,
                  ...(activeSection === item.id ? styles.iconButtonActive : {})
                }}
                title={item.label}
              >
                <Icon size={20} />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;