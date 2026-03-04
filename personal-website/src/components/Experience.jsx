import React from 'react';
import { Briefcase } from 'lucide-react';
import { styles as sharedStyles } from '../styles/sharedStyles';

const Experience = ({ experience }) => {
  const styles = {
    experienceSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    experienceList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    experienceCard: {
      ...sharedStyles.card,
    },
    experienceCardHeader: {
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
    bulletList: {
      margin: '0 0 1.5rem 0',
      paddingLeft: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    bulletItem: {
      color: '#94a3b8',
      lineHeight: '1.6',
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
  };

  return (
    <section id="experience" style={sharedStyles.section}>
      <div style={styles.experienceSection}>
        <div>
          <div style={sharedStyles.sectionHeader}>
            <div style={sharedStyles.iconContainer}>
              <Briefcase color="#60a5fa" size={28} />
            </div>
            <h3 style={sharedStyles.sectionHeading}>Work Experience</h3>
          </div>
          <div style={styles.experienceList}>
            {experience.map((job, index) => (
              <div key={index} style={styles.experienceCard}>
                <div style={styles.experienceCardHeader}>
                  <div>
                    <h4 style={styles.jobTitle}>{job.title}</h4>
                    <p style={styles.company}>{job.company}</p>
                  </div>
                  <span style={styles.period}>{job.period}</span>
                </div>
                {Array.isArray(job.description)
                  ? <ul style={styles.bulletList}>
                      {job.description.map((bullet, i) => (
                        <li key={i} style={styles.bulletItem}>{bullet}</li>
                      ))}
                    </ul>
                  : <p style={sharedStyles.description}>{job.description}</p>
                }
                <div style={styles.tags}>
                  {job.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={sharedStyles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
