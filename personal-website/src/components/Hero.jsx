import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { styles as sharedStyles } from '../styles/sharedStyles';

const Hero = () => {
  const styles = {
    hero: {
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
    },
    avatar: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      margin: '0 auto 2rem',
      boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
      background: 'url("/me.jpeg") center/cover no-repeat',
    },
    location: {
      fontSize: '0.875rem',
      color: 'rgb(148, 163, 184)',
      marginBottom: '1.5rem',
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#cbd5e1',
      marginBottom: '1rem',
      fontWeight: '300',
    },
    description: {
      fontSize: '1.125rem',
      color: '#94a3b8',
      marginBottom: '3rem',
      lineHeight: '1.8',
      maxWidth: '700px',
      margin: '0 auto 2rem',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '2rem',
    },
    resumeLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      border: 'none',
      borderRadius: '9999px',
      color: '#ffffff',
      fontSize: '0.9rem',
      fontWeight: '600',
      transition: 'all 0.3s',
      cursor: 'pointer',
      textDecoration: 'none',
      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1.5rem',
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '9999px',
      color: '#cbd5e1',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.3s',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  return (
    <section id="home" style={{ ...sharedStyles.section, paddingTop: '4rem' }}>
      <div style={styles.hero}>
        <div style={styles.avatar}></div>
        <p style={styles.location}>San Diego, CA</p>
        <h1 style={styles.h1}>Hi, I'm Tyler Frasca</h1>
        <p style={styles.subtitle}>Senior Software Engineer</p>
        <p style={styles.description}>
          Full-stack engineer with 10 years of experience building reliable systems at companies like Block and early-stage startups. I care about craft, enjoy a good hard problem, and thrive working on things that actually reach people.
        </p>
        <p style={styles.description}>
          Outside of work, I love to rock climb, snowboard, mountain bike, surf, and make music.
        </p>
        <div style={styles.socialLinks} className="hero-buttons">
          <a href="/Tyler_Frasca_Resume_2026.pdf" download style={styles.resumeLink} className="btn-resume">
            <Download size={18} />
            <span>Resume</span>
          </a>
          <a href="https://linkedin.com/in/tfrasc" target="_blank" rel="noopener noreferrer" style={styles.socialLink} className="btn-social">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/tfrasc" target="_blank" rel="noopener noreferrer" style={styles.socialLink} className="btn-social">
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a href="mailto:tfrasc@gmail.com" style={styles.socialLink} className="btn-social">
            <Mail size={18} />
            <span>tfrasc@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
