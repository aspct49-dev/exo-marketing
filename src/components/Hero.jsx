import { FadeIn } from './FadeIn';
import { WordReveal } from './WordReveal';
import { MagneticButton } from './MagneticButton';
import { hexToRGBA } from '../utils/color';
import { useIsMobile } from '../hooks/useIsMobile';

export function Hero({ accent, headingFont, bodyFont }) {
  const isMobile = useIsMobile();
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      padding: isMobile ? '90px 20px 60px' : '120px 48px 80px',
    }}>
      <div className="hero-pulse" style={{ background: accent }} />
      <div className="hero-pulse hero-pulse-2" style={{ background: accent }} />
      <div className="hero-spotlight" />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 1280, width: '100%' }}>
        <FadeIn>
          <img src="/uploads/content.png" alt="ExoMarketing"
               style={{ height: isMobile ? 170 : 300, width: 'auto', marginBottom: isMobile ? -30 : -70 }}
               className="hero-logo" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="hero-headline" style={{
            fontFamily: headingFont, fontSize: 'clamp(42px, 11vw, 160px)', fontWeight: 800,
            lineHeight: 0.95, color: '#fff', margin: '0 0 28px',
            letterSpacing: '-0.03em', textTransform: 'uppercase',
            textShadow: `0 2px 40px ${hexToRGBA(accent, 0.25)}`,
          }}>
            <span className="glitch-word" style={{ display: 'inline-block' }}>
              <WordReveal text="Marketing That" delay={0.2} stagger={0.08} />
            </span>
            <br />
            <span className="hero-accent-glow"
                  style={{ color: accent, '--glow-color': hexToRGBA(accent, 0.4), display: 'inline-block' }}>
              <span className="glitch-word" style={{ display: 'inline-block' }}>
                <WordReveal text="Moves the Needle" delay={0.45} stagger={0.08} />
              </span>
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.95}>
          <p style={{
            fontFamily: bodyFont, fontSize: isMobile ? 16 : 22, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)', maxWidth: 720, margin: isMobile ? '0 auto 36px' : '0 auto 56px',
          }}>
            Data-driven strategies that deliver measurable results
            and accelerate your business growth.
          </p>
        </FadeIn>
        <FadeIn delay={1.05}>
          <div style={{ display: 'flex', gap: isMobile ? 12 : 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton href="#contact" className="btn-primary" style={{
              background: accent, color: '#000', padding: isMobile ? '16px 32px' : '22px 56px',
              fontSize: isMobile ? 13 : 15, fontWeight: 700, fontFamily: headingFont,
              textDecoration: 'none',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              border: 'none', cursor: 'pointer',
              boxShadow: `0 8px 32px ${hexToRGBA(accent, 0.3)}`,
            }}>Get Started</MagneticButton>
            <MagneticButton href="#services" className="btn-outline" style={{
              background: 'transparent', color: '#fff', padding: isMobile ? '16px 32px' : '22px 56px',
              fontSize: isMobile ? 13 : 15, fontWeight: 700, fontFamily: headingFont,
              textDecoration: 'none',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              border: '2px solid rgba(255,255,255,0.18)', cursor: 'pointer',
            }}>Our Work</MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
