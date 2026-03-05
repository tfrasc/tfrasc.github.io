import { styles as sharedStyles } from '../styles/sharedStyles';

const Experience = ({ experience }) => {
  const featured = experience.find(e => e.featured);
  const rest = experience.filter(e => !e.featured);

  const styles = {
    experienceSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    unifiedCard: {
      display: 'flex',
      borderRadius: '1rem',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    accentBar: {
      width: '4px',
      flexShrink: 0,
      background: 'linear-gradient(180deg, #2563eb, #7c3aed)',
    },
    cardContent: {
      flex: 1,
      overflow: 'hidden',
    },
    featuredSection: {
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.04)',
    },
    featuredHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginBottom: '1rem',
    },
    featuredTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '0.25rem',
    },
    featuredCompany: {
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
      whiteSpace: 'nowrap',
    },
    summary: {
      color: '#cbd5e1',
      lineHeight: '1.75',
      marginBottom: '1.75rem',
      fontSize: '1rem',
    },
    metricsRow: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1.75rem',
      flexWrap: 'wrap',
    },
    metricBox: {
      flex: '1',
      minWidth: '100px',
      padding: '1rem 1.25rem',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      borderRadius: '0.75rem',
      textAlign: 'center',
      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)',
    },
    metricValue: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#ffffff',
      lineHeight: '1.2',
      marginBottom: '0.25rem',
    },
    metricLabel: {
      fontSize: '0.75rem',
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: '500',
      letterSpacing: '0.03em',
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    divider: {
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      background: 'rgba(255, 255, 255, 0.02)',
    },
    roleRow: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      padding: '1.25rem 2rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    },
    roleDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'rgba(96, 165, 250, 0.4)',
      marginTop: '0.45rem',
      flexShrink: 0,
    },
    roleContent: {
      flex: 1,
    },
    roleTopLine: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '0.25rem',
    },
    roleTitle: {
      fontWeight: '600',
      color: '#ffffff',
      fontSize: '1rem',
    },
    roleCompany: {
      color: '#60a5fa',
      fontWeight: '500',
      fontSize: '0.875rem',
    },
    rolePeriod: {
      color: '#475569',
      fontSize: '0.8rem',
      whiteSpace: 'nowrap',
    },
    roleTagline: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      lineHeight: '1.6',
      marginBottom: '0.75rem',
    },
  };

  return (
    <section id="experience" style={sharedStyles.section}>
      <div style={styles.experienceSection}>
        <div style={styles.unifiedCard}>
          <div style={styles.accentBar} />
          <div style={styles.cardContent}>

          {featured && (
            <div style={styles.featuredSection}>
              <div style={styles.featuredHeader}>
                <div>
                  <h4 style={styles.featuredTitle}>{featured.title}</h4>
                  <p style={styles.featuredCompany}>{featured.company}</p>
                </div>
                <span style={styles.period}>{featured.period}</span>
              </div>
              <p style={styles.summary}>{featured.summary}</p>
              {featured.metrics && (
                <div style={styles.metricsRow} className="metrics-row">
                  {featured.metrics.map((m, i) => (
                    <div key={i} style={styles.metricBox}>
                      <div style={styles.metricValue}>{m.value}</div>
                      <div style={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <div style={styles.tags}>
                {featured.skills.map((skill, i) => (
                  <span key={i} style={sharedStyles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          )}

          <div style={styles.divider}>
            {rest.map((job, index) => (
              <div key={index} style={styles.roleRow}>
                <div style={styles.roleDot} />
                <div style={styles.roleContent}>
                  <div style={styles.roleTopLine}>
                    <span>
                      <span style={styles.roleTitle}>{job.title}</span>
                      <span style={{ color: '#334155', margin: '0 0.5rem' }}>·</span>
                      <span style={styles.roleCompany}>{job.company}</span>
                    </span>
                    <span style={styles.rolePeriod}>{job.period}</span>
                  </div>
                  {job.tagline && <p style={styles.roleTagline}>{job.tagline}</p>}
                  {job.skills && (
                    <div style={styles.tags}>
                      {job.skills.map((skill, i) => (
                        <span key={i} style={sharedStyles.tag}>{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          </div>{/* cardContent */}
        </div>{/* unifiedCard */}
      </div>
    </section>
  );
};

export default Experience;
