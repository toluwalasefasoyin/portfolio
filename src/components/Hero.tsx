import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 10;
      titleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 4rem 5rem',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Syne', sans-serif",
      }}
    >
      {/* Background text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-2rem',
        transform: 'translateY(-50%)',
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(8rem, 18vw, 22rem)',
        fontWeight: 800,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255,255,255,0.12)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-0.04em',
      }}>
        TOLU
      </div>

      {/* Animated gradient orb */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(232,90,42,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animation: 'pulse 4s ease-in-out infinite',
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-tag { animation: fadeUp 0.8s 0.2s both; }
        .hero-title { animation: fadeUp 0.9s 0.35s both; }
        .hero-bottom { animation: fadeUp 0.9s 0.5s both; }
        @media (max-width: 768px) {
          .hero-section { padding: 0 2rem 4rem !important; }
          .hero-bottom { flex-direction: column !important; gap: 2rem !important; align-items: flex-start !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>

      {/* Tag */}
      <div className="hero-tag" style={{
        fontSize: '0.8rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#0d9488',
        fontWeight: 600,
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <span style={{ display: 'block', width: '2rem', height: '1px', background: '#0d9488' }} />
        Available for internships · Fall 2026
      </div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="hero-title"
        style={{
          fontSize: 'clamp(3.5rem, 8vw, 9rem)',
          fontWeight: 800,
          lineHeight: 0.92,
          letterSpacing: '-0.04em',
          marginBottom: '2rem',
          transition: 'transform 0.1s ease-out',
          color: '#0d9488',
        }}
      >
        Tolu<br />
        <span style={{ color: '#0d9488' }}>Fasoyin</span>
      </h1>

      {/* Bottom row */}
      <div className="hero-bottom" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
        <p style={{
          maxWidth: '420px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '1rem',
          lineHeight: 1.7,
          fontWeight: 300,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Software Engineering student building full-stack applications
          with Java, Spring Boot, and React. I ship real things — not just course projects.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: '#0d9488',
                color: '#fff',
                padding: '0.9rem 2rem',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'background 0.2s, transform 0.2s',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#0f766e';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#0d9488';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View my work ↗
            </a>
            <a
              href="https://github.com/toluwalasefasoyin"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(13,148,136,0.12)',
                color: '#0d9488',
                padding: '0.9rem 2rem',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'background 0.2s, transform 0.2s, color 0.2s',
                fontFamily: "'DM Sans', sans-serif",
                border: '1px solid #0d9488',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#0d9488';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(13,148,136,0.12)';
                e.currentTarget.style.color = '#0d9488';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              GitHub ↗
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(13,148,136,0.12)',
                color: '#0d9488',
                padding: '0.9rem 2rem',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'background 0.2s, transform 0.2s, color 0.2s',
                fontFamily: "'DM Sans', sans-serif",
                border: '1px solid #0d9488',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#0d9488';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(13,148,136,0.12)';
                e.currentTarget.style.color = '#0d9488';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
