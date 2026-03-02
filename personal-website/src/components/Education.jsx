import React from 'react';
import { GraduationCap } from 'lucide-react';
import { styles as sharedStyles } from '../styles/sharedStyles';

const Education = ({ education }) => {
  const styles = {
    educationSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    educationList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    educationCard: {
      ...sharedStyles.card,
    },
    educationCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    jobTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '0.5rem',
    },
    company: {
      fontSize: '1.125rem',
      color: '#60a5fa',
      fontWeight: '600',
    },
    period: {
      padding: '0.5rem 0.75rem',
      background: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '0.5rem',
      color: '#94a3b8',
      fontSize: '0.875rem',
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
  };

  return (
    <section id="education" style={sharedStyles.section}>
      <div style={styles.educationSection}>
        <div>
          <div style={sharedStyles.sectionHeader}>
            <div style={sharedStyles.iconContainer}>
              <GraduationCap color="#60a5fa" size={28} />
            </div>
            <h3 style={sharedStyles.sectionHeading}>Education</h3>
          </div>
          <div style={styles.educationList}>
            {education.map((edu, index) => (
              <div key={index} style={styles.educationCard}>
                <div style={styles.educationCardHeader}>
                  <div>
                    <h4 style={styles.jobTitle}>{edu.degree}</h4>
                    <p style={styles.company}>{edu.school}</p>
                  </div>
                  <span style={styles.period}>{edu.period}</span>
                </div>
                <p style={sharedStyles.description}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
