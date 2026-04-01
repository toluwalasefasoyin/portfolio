import { useEffect, useRef } from 'react';
import { projects } from '../data';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
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
      id="projects"
      ref={sectionRef}
      style={{
        background: '#111111',
        padding: '7rem 4rem',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        .project-card-hover { transition: background 0.3s; }
        .project-card-hover:hover { background: #161616!important; }
        .project-link-hover { transition: gap 0.2s, color 0.2s; }
        .project-link-hover:hover { color: #f0a07a !important; }
        @media (max-width: 768px) {
          .projects-section { padding: 5rem 2rem !important; }
          .projects-header { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .featured-card { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Header */}
      <div className="reveal projects-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '4rem',
      }}>
        <div>
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
            fontFamily: "'DM Sans', sans-serif",
          }}>
            <span style={{ display: 'block', width: '1.5rem', height: '1px', background: '#0d9488' }} />
            Selected work
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: '#fff',
          }}>
            Projects
          </h2>
        </div>
        <p style={{
          color: 'rgba(255,255,255,0.35)',
          fontSize: '0.9rem',
          maxWidth: '220px',
          textAlign: 'right',
          lineHeight: 1.6,
        }}>
          Things I've built, shipped, and can talk about in an interview.
        </p>
      </div>

      {/* Grid */}
      <div className="projects-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        border: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.04)',
        gap: '1px',
      }}>
        {projects.map(project => (
          <div
            key={project.num}
            className={`reveal project-card-hover ${project.featured ? 'featured-card' : ''}`}
            style={{
              background: '#111111',
              padding: '2.5rem',
              gridColumn: project.featured ? '1 / -1' : undefined,
              display: project.featured ? 'grid' : 'block',
              gridTemplateColumns: project.featured ? '1fr 1fr' : undefined,
              gap: project.featured ? '3rem' : undefined,
              alignItems: project.featured ? 'center' : undefined,
            }}
          >
            <div>
              <div style={{
                fontSize: '0.75rem',
                color: '#00d9ff',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}>
                {project.num} — {project.type}
              </div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: project.featured ? '2.2rem' : '1.6rem',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
                lineHeight: 1.1,
              }}>
                {project.name}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.72rem',
                    padding: '0.3rem 0.75rem',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '100px',
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.04em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-hover"
                    style={{
                      color: '#0d9488',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    Live demo ↗
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-hover"
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Featured visual mockup */}
            {project.featured && (
              <div style={{
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, #1a1a1a, #0f0f0f)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: '90%',
                  height: '80%',
                  background: '#111',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '28px',
                    background: '#1a1a1a',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px',
                    gap: '6px',
                  }}>
                    {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                      <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                  <div style={{
                    flex: 1,
                    padding: '16px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gap: '8px',
                    alignContent: 'start',
                  }}>
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} style={{
                        background: 'rgba(13,148,136,0.12)',
                        borderRadius: '4px',
                        height: '40px',
                        border: '1px solid rgba(13,148,136,0.2)',
                      }} />
                    ))}
                    {[1, 2, 3].map(i => (
                      <div key={i} style={{
                        gridColumn: '1/-1',
                        height: '24px',
                        background: i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
                        borderRadius: '3px',
                        width: i === 2 ? '70%' : '100%',
                      }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
