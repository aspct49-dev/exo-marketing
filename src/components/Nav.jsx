import { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

export function Nav({ accent, headingFont }) {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: isMobile ? '0 20px' : '0 56px', height: isMobile ? 64 : 96,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="/uploads/content.png" alt="ExoMarketing" style={{ height: isMobile ? 44 : 72, width: 'auto' }} />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 36 }}>
        {!isMobile && ['Services', 'About', 'Brands'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{
            fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none', transition: 'color 0.2s',
            letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: headingFont,
          }}>{l}</a>
        ))}
        <a href="#contact" className="nav-cta" style={{
          fontSize: 12, fontWeight: 700, color: '#000',
          background: accent, padding: isMobile ? '9px 18px' : '10px 24px',
          textDecoration: 'none', transition: 'all 0.25s',
          letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: headingFont,
        }}>Contact</a>
      </div>
    </nav>
  );
}
