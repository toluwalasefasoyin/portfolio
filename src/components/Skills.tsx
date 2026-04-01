import { useEffect, useRef } from 'react';
import { skills } from '../data';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: '#f5f2ee',
        padding: '7rem 4rem',
        color: '#1a1a1a',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        .skill-card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .skill-card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
        @media (max-width: 768px) {
          .skills-section { padding: 5rem 2rem !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="reveal" style={{ marginBottom: '4rem' }}>
        <div style={{
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#0d9488',
          fontWeight: 600,
          marginBottom: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <span style={{ display: 'block', width: '1.5rem', height: '1px', background: '#0d9488' }} />
          What I work with
        </div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: '#1a1a1a',
        }}>
          Skills
        </h2>
      </div>

      <div className="skills-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
      }}>
        {skills.map(group => (
          <div
            key={group.category}
            className="reveal skill-card-hover"
            style={{
              background: '#fff',
              border: '1px solid #e5e0d8',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#0d9488',
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}>
              {group.category}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.items.map(item => (
                <span key={item} style={{
                  fontSize: '0.82rem',
                  padding: '0.4rem 0.9rem',
                  background: '#f5f2ee',
                  borderRadius: '100px',
                  color: '#1a1a1a',
                  fontWeight: 400,
                  border: '1px solid #ddd8d0',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
