import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Your actual projects - add more details as needed
  const projects = [
    {
      title: "memeO (iOS App)",
      description: "memeO is a meme and dating app all in one.",
      tags: ["React-Native", "Ruby on Rails", "PostgreSQL"],
      link: "https://github.com/tfrasc/memeO/",
      demo: null
    },
    {
      title: "Taylor's Mugs",
      description: "Custom website for local artist who paints and sells coffee mugs",
      tags: ["Ruby on Rails", "Javascript", "PostgreSQL"],
      link: "https://github.com/tfrasc/taylorsmugs",
      demo: null
    },
    {
      title: "Radio Reddit (Google Chrome Extension)",
      description: "Google Chrome Extension for Reddit to continuously play music on music subreddits",
      tags: ["JavaScript"],
      link: "https://github.com/tfrasc/Radio-Reddit-Chrome-Extension",
      demo: null
    },
    {
      title: "Coinranking Plus (Google Chrome Extension)",
      description: "Google Chrome Extension for Coinranking that adds favorites functionality",
      tags: ["Javascript"],
      link: "https://github.com/tfrasc/Coinranking-Plus",
      demo: null
    }
  ];

  const experience = [
    {
      title: "Software Engineer",
      company: "Square",
      period: "May 2019 - Present",
      description: "Software engineering at Square, working on financial technology solutions and payment systems.",
      skills: ["Kotlin", "Golang", "PHP", "Ember", "PostgreSQL"]
    },
    {
      title: "Software Engineering Intern",
      company: "Square",
      period: "June 2018 - August 2018",
      description: "Summer internship focused on software development and engineering practices.",
      skills: ["PHP", "Vue", "MySQL"]
    },
    {
      title: "Web Developer",
      company: "Elevate Blue",
      period: "June 2016 - June 2018",
      description: "Full Stack Web Development using Rails, HTML5 & CSS3, SASS, Node.js, Postgres. Contributions to multiple full-scale, mobile-friendly web platform code bases. API development and third-party API integrations. iOS/Android Development with React-Native. Mentor and work alongside other developers and interns.",
      skills: ["Ruby on Rails", "Node.js", "React", "AngularJS", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Teaching Assistant",
      company: "Code Tahoe",
      period: "June 2016 - Present",
      description: "Help teach and guide students in Full Stack Web Development. Create and facilitate coding exercises, quizzes, and projects.",
      skills: ["Ruby on Rails", "Node.js", "React", "AngularJS", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Junior Developer",
      company: "PCLender, LLC",
      period: "January 2016 - June 2016",
      description: "Learning, formally documenting, and teaching an in-house programming language. Agile Software Development using Jira. Quality Assurance and billable Professional Services work.",
      skills: ["Agile", "QA", "Documentation"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      school: "University of Nevada, Reno",
      period: "2013 - 2018",
      description: "Comprehensive computer science education with focus on software engineering and algorithms."
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(51, 65, 85, 0.5)',
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
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer',
    },
    section: {
      minHeight: '100vh',
      padding: '5rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    hero: {
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
    },
    avatar: {
      width: '120px',
      height: '120px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 2rem',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
      animation: 'pulse 2s infinite',
    },
    badge: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      color: '#60a5fa',
      marginBottom: '1.5rem',
    },
    h1: {
      fontSize: '4rem',
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
      margin: '0 auto 3rem',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem',
    },
    socialLink: {
      padding: '1rem',
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid #334155',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s',
      cursor: 'pointer',
      textDecoration: 'none',
    },
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
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    projectCard: {
      background: 'rgba(30, 41, 59, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid #334155',
      borderRadius: '1rem',
      padding: '2rem',
      transition: 'all 0.3s',
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    projectIcon: {
      padding: '0.75rem',
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '0.75rem',
    },
    projectLinks: {
      display: 'flex',
      gap: '0.75rem',
    },
    projectLink: {
      padding: '0.5rem',
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid #334155',
      borderRadius: '0.5rem',
      color: '#94a3b8',
      transition: 'all 0.3s',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '0.75rem',
    },
    projectDescription: {
      color: '#94a3b8',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    tag: {
      padding: '0.25rem 0.75rem',
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      color: '#60a5fa',
    },
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
    experienceIcon: {
      padding: '0.75rem',
      background: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '0.75rem',
      marginRight: '1rem',
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
      background: 'rgba(30, 41, 59, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid #334155',
      borderRadius: '1rem',
      padding: '2rem',
      transition: 'all 0.3s',
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
    contactSection: {
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
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
    <div style={styles.container}>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        a { text-decoration: none; }
        button:hover { opacity: 0.9; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <button onClick={() => scrollToSection('home')} style={styles.logo}>
            Tyler Frasca
          </button>

          <div style={styles.navLinks} className="nav-links">
            {['home', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  ...styles.navLink,
                  ...(activeSection === section ? styles.navLinkActive : {})
                }}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={styles.mobileMenuBtn}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #334155' }}>
            {['home', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  ...styles.navLink,
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  marginBottom: '0.5rem',
                }}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.section}>
        <div style={styles.hero}>
          <div style={styles.avatar}>TF</div>
          <div style={styles.badge}>San Diego, CA</div>
          <h1 style={styles.h1}>Hi, I'm Tyler Frasca</h1>
          <p style={styles.subtitle}>Full-Stack Software Engineer</p>
          <p style={styles.description}>
            With nearly a decade of experience as a full-stack engineer, I have worked at both Big Tech and Startups and can build scalable, reliable, and speedy systems. I love to learn, enjoy a challenge, and care deeply about helping others however I can.
          </p>
          <p style={styles.description}>
            Outside of work, I'm extremely passionate about the great outdoors. I love to climb, snowboard, mountain bike, and surf... and dabble in creating music. 
          </p>
          <div style={styles.socialLinks}>
            <a href="https://github.com/tfrasc" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/tfrasc" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:tfrasc@gmail.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
          </div>
          <button onClick={() => scrollToSection('projects')} style={styles.button}>
            View My Work
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <p style={styles.sectionSubtitle}>A selection of my work</p>

          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <div style={styles.projectHeader}>
                  <div style={styles.projectIcon}>
                    <Code color="#60a5fa" size={28} />
                  </div>
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
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <div style={styles.experienceSection}>
          <h2 style={styles.sectionTitle}>Experience & Education</h2>
          <p style={styles.sectionSubtitle}>My professional journey</p>

          <div>
            <div style={styles.experienceHeader}>
              <div style={styles.experienceIcon}>
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
                  <p style={styles.projectDescription}>{job.description}</p>
                  <div style={styles.tags}>
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} style={{...styles.tag, background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa'}}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={styles.experienceHeader}>
              <div style={{...styles.experienceIcon, background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)'}}>
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
                  <p style={styles.projectDescription}>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={styles.contactSection}>
          <h2 style={styles.sectionTitle}>Let's Work Together</h2>
          <p style={styles.description}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div style={styles.contactButtons}>
            <a href="mailto:tfrasc@gmail.com" style={styles.contactButton}>
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <a href="https://linkedin.com/in/tfrasc" target="_blank" rel="noopener noreferrer" style={{...styles.contactButton, ...styles.contactButtonSecondary}}>
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
    </div>
  );
}