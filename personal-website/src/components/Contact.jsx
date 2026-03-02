import React from 'react';

const Contact = () => {
  const styles = {
    footer: {
      textAlign: 'center',
      padding: '2rem 1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      color: '#64748b',
      fontSize: '0.9rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <p>© 2026 Tyler Frasca. Built with React.</p>
    </footer>
  );
};

export default Contact;
