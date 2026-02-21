import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { styles as sharedStyles } from '../styles/sharedStyles';

const Contact = () => {
  const styles = {
    contactSection: {
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
    },
    description: {
      fontSize: '1.125rem',
      color: '#94a3b8',
      marginBottom: '3rem',
      lineHeight: '1.8',
      maxWidth: '700px',
      margin: '0 auto 3rem',
    },
    contactButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem',
    },
    contactButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem 2rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '9999px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textDecoration: 'none',
      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
    },
    contactButtonSecondary: {
      background: 'rgba(30, 41, 59, 0.5)',
      border: '2px solid #2563eb',
      color: '#60a5fa',
    },
    footer: {
      paddingTop: '3rem',
      borderTop: '1px solid #334155',
      color: '#64748b',
    },
  };

  return (
    <section id="contact" style={sharedStyles.section}>
      <div style={styles.contactSection}>
        <h2 style={sharedStyles.sectionTitle}>Let's Work Together</h2>
        <p style={styles.description}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div style={styles.contactButtons}>
          <a href="mailto:tfrasc@gmail.com" style={styles.contactButton}>
            <Mail size={20} />
            <span>Send Email</span>
          </a>
          <a 
            href="https://linkedin.com/in/tfrasc" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{...styles.contactButton, ...styles.contactButtonSecondary}}
          >
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        <div style={styles.footer}>
          <p>© 2026 Tyler Frasca. Built with React.</p>
          <p style={{marginTop: '0.5rem'}}>Phone: (775) 813-3468</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
