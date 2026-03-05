import Hero from './components/Hero';
import Experience from './components/Experience';
import { experienceData } from './data/portfolioData';

export default function App() {
  const containerStyle = {
    minHeight: '100vh',
    background: '#0d0d0d',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        a { text-decoration: none; }
        .btn-resume {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-resume:hover, .btn-resume:focus-visible {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(37, 99, 235, 0.5);
          outline: none;
        }
        .btn-social {
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .btn-social:hover, .btn-social:focus-visible {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          outline: none;
        }
        @media (max-width: 768px) {
          .metrics-row > * { flex: 1 1 100% !important; min-width: 0 !important; }
          .hero-buttons { flex-direction: column !important; align-items: stretch !important; }
          .hero-buttons a { justify-content: center !important; }
        }
      `}</style>

      <Hero />

      <Experience experience={experienceData} />

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#334155', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} Tyler Frasca. All rights reserved.
      </footer>
    </div>
  );
}
