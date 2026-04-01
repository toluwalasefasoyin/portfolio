import { useEffect, useRef } from 'react';

const contacts = [
  {
    label: 'Email',
    value: 'toluwalasefasoyin13@gmail.com',
    href: 'mailto:toluwalasefasoyin13@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/toluwalasefasoyin',
    href: 'https://linkedin.com/in/toluwalasefasoyin',
  },
  {
    label: 'GitHub',
    value: 'github.com/toluwalasefasoyin',
    href: 'https://github.com/toluwalasefasoyin',
  },
  {
    label: 'Resume',
    value: 'Download CV',
    href: '/resume.pdf',
  },
];

const Contact = () => {
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
      id="contact"
      ref={sectionRef}
      style={{
        background: '#0a0a0a',
        padding: '7rem 4rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        .contact-link-hover {
          transition: border-color 0.2s, background 0.2s;
        }
        .contact-link-hover:hover {
          border-color: #0d9488 !important;
          background: rgba(13,148,136,0.06) !important;
        }
        @media (max-width: 768px) {
          .contact-section { grid-template-columns: 1fr !important; padding: 5rem 2rem !important; gap: 3rem !important; }
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
          Get in touch
        </div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(3rem, 6vw, 6rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          color: '#fff',
          marginBottom: '2rem',
        }}>
          Let's<br />
          <span style={{ color: '#0d9488' }}>talk.</span>
        </h2>
      </div>

      <div className="reveal">
        <p style={{
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.7,
          fontSize: '1rem',
          fontWeight: 300,
          marginBottom: '2.5rem',
        }}>
          I'm looking for a software engineering internship for Fall 2026.
          If your team values clean code, clear communication, and developers
          who ask good questions — let's talk.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {contacts.map(contact => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="contact-link-hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              <div>
                <div style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem',
                }}>
                  {contact.label}
                </div>
                <div style={{ fontWeight: 500 }}>{contact.value}</div>
              </div>
              <span style={{ color: '#0d9488', fontSize: '1.2rem' }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
