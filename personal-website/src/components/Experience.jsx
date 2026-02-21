import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { styles as sharedStyles } from '../styles/sharedStyles';

const Experience = ({ experience, education }) => {
  const styles = {
    experienceSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    experienceHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    experienceTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    experienceList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginBottom: '4rem',
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
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid #334155',
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
    <section id="experience" style={sharedStyles.section}>
      <div style={styles.experienceSection}>
        <h2 style={sharedStyles.sectionTitle}>Experience & Education</h2>
        <p style={sharedStyles.sectionSubtitle}>My professional journey</p>

        {/* Work Experience */}
        <div>
          <div style={styles.experienceHeader}>
            <div style={sharedStyles.iconContainer}>
              <Briefcase color="#60a5fa" size={28} />
            </div>
            <h3 style={styles.experienceTitle}>Work Experience</h3>
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
                <p style={sharedStyles.description}>{job.description}</p>
                <div style={styles.tags}>
                  {job.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={sharedStyles.tagPurple}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div style={styles.experienceHeader}>
            <div style={sharedStyles.iconContainerPurple}>
              <GraduationCap color="#a78bfa" size={28} />
            </div>
            <h3 style={styles.experienceTitle}>Education</h3>
          </div>
          <div style={styles.experienceList}>
            {education.map((edu, index) => (
              <div key={index} style={styles.experienceCard}>
                <div style={styles.experienceCardHeader}>
                  <div>
                    <h4 style={styles.jobTitle}>{edu.degree}</h4>
                    <p style={{...styles.company, color: '#a78bfa'}}>{edu.school}</p>
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

export default Experience;
