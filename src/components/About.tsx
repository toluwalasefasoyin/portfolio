import { useEffect, useRef } from 'react';

const About = () => {
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

  const stats = [
    { num: '3', label: 'Projects shipped' },
    { num: "Apr '26", label: 'Graduating' },
    { num: '2+', label: 'Years building' },
    { num: '6', label: 'Languages' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: '#f5f2ee',
        color: '#1a1a1a',
        padding: '7rem 4rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; padding: 5rem 2rem !important; gap: 3rem !important; }
        }
      `}</style>

      <div className="reveal">
        <div style={{
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#0d9488',
          fontWeight: 600,
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <span style={{ display: 'block', width: '1.5rem', height: '1px', background: '#0d9488' }} />
          About me
        </div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#1a1a1a',
        }}>
          I build things<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#0d9488' }}>that actually work</em>
        </h2>
      </div>

      <div className="reveal">
        <div style={{ color: '#555', lineHeight: 1.85, fontSize: '1rem', fontWeight: 300 }}>
          <p>
            I'm a Software Engineering Technology student at Centennial College, graduating April 2026.
            Most of my project experience has been in team environments — a 6-person agile team building
            a POS system, a 3-person team building a real estate platform.
          </p>
          <p style={{ marginTop: '1.2rem' }}>
            I recently shipped JobTrackr, a full-stack job tracker I built independently and deployed
            to production because I needed it. Working code beats perfect code, and communication
            beats solo brilliance.
          </p>
          <p style={{ marginTop: '1.2rem' }}>
            I'm looking for a software engineering internship where I can write real production code
            and learn from developers who care about doing things right.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          marginTop: '2.5rem',
        }}>
          {stats.map(stat => (
            <div key={stat.label} style={{
              borderLeft: '2px solid #0d9488',
              paddingLeft: '1rem',
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '2rem',
                fontWeight: 800,
                color: '#1a1a1a',
                letterSpacing: '-0.04em',
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginTop: '0.2rem',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
