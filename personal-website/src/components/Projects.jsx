import React from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';
import { styles as sharedStyles } from '../styles/sharedStyles';

const Projects = ({ projects }) => {
  const styles = {
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    projectCard: {
      ...sharedStyles.card,
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    projectLinks: {
      display: 'flex',
      gap: '0.75rem',
    },
    projectLink: {
      padding: '0.5rem',
      background: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '0.5rem',
      color: '#94a3b8',
      transition: 'all 0.3s',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    projectIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '0.75rem',
      objectFit: 'cover',
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
  };

  return (
    <section id="projects" style={sharedStyles.section}>
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <div style={sharedStyles.sectionHeader}>
          <div style={sharedStyles.iconContainer}>
            <Code color="#60a5fa" size={28} />
          </div>
          <h3 style={sharedStyles.sectionHeading}>Projects</h3>
        </div>

        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <div style={styles.projectHeader}>
                {project.icon
                  ? <img src={project.icon} alt={project.title} style={styles.projectIcon} />
                  : <div style={sharedStyles.iconContainer}><Code color="#60a5fa" size={28} /></div>
                }
                <div style={styles.projectLinks}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3 style={sharedStyles.title}>{project.title}</h3>
              <p style={sharedStyles.description}>{project.description}</p>
              <div style={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={sharedStyles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
