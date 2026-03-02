export const styles = {
  // Common Section Styles
  section: {
    padding: '4rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '1.125rem',
    marginBottom: '4rem',
  },

  // Tag Styles
  tag: {
    padding: '0.25rem 0.75rem',
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    color: '#60a5fa',
  },
  tagPurple: {
    padding: '0.25rem 0.75rem',
    background: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    color: '#a78bfa',
  },

  // Card Styles
  card: {
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '1rem',
    padding: '2rem',
    transition: 'all 0.3s',
  },

  // Icon Container
  iconContainer: {
    padding: '0.75rem',
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '0.75rem',
  },
  iconContainerPurple: {
    padding: '0.75rem',
    background: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '0.75rem',
  },

  // Text Styles
  description: {
    color: '#94a3b8',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '0.75rem',
  },

  // Button Styles
  button: {
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
  },
};
