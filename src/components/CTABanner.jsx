import { FadeIn } from './FadeIn';
import { hexToRGBA } from '../utils/color';
import { useIsMobile } from '../hooks/useIsMobile';

function WaveText({ text, className, style, startDelay = 0, stagger = 0.06 }) {
  let i = 0;
  return (
    <h2 className={className} style={style}>
      {text.split('').map((ch, idx) => {
        if (ch === ' ') return <span key={idx} style={{ display: 'inline-block', width: '0.32em' }}>&nbsp;</span>;
        const delay = startDelay + i * stagger;
        i++;
        return (
          <span key={idx} className="cta-wave-char" style={{ animationDelay: `${delay}s` }}>
            {ch}
          </span>
        );
      })}
    </h2>
  );
}

export function CTABanner({ accent, headingFont }) {
  const isMobile = useIsMobile();
  const headlineSize = isMobile ? 56 : 132;
  return (
    <section id="cta" style={{ padding: isMobile ? '120px 20px' : '220px 48px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: headingFont, fontSize: isMobile ? 180 : 380, fontWeight: 800,
        color: 'transparent',
        WebkitTextStroke: `1px ${hexToRGBA(accent, 0.08)}`,
        textTransform: 'uppercase', letterSpacing: '-0.04em',
        pointerEvents: 'none', userSelect: 'none', lineHeight: 1,
        whiteSpace: 'nowrap', zIndex: 0,
      }}>EXO</div>

      <div style={{
        position: 'absolute', width: isMobile ? 400 : 700, height: isMobile ? 400 : 700,
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        background: accent, borderRadius: '50%',
        filter: 'blur(220px)', opacity: 0.08, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1000, margin: '0 auto' }}>
        <FadeIn>
          <p style={{
            fontFamily: headingFont, fontSize: isMobile ? 11 : 13, fontWeight: 700,
            color: accent, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: isMobile ? 32 : 56,
          }}>※ Ready to make moves? ※</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <WaveText
            text="Let's Build"
            className="cta-wave"
            startDelay={0}
            style={{
              fontFamily: headingFont, fontSize: headlineSize, fontWeight: 800,
              color: '#fff', margin: '0 0 20px', lineHeight: 1,
              letterSpacing: '-0.04em', textTransform: 'uppercase',
            }}
          />
        </FadeIn>
        <FadeIn delay={0.14}>
          <WaveText
            text="Something Loud"
            className="cta-wave cta-wave-outline"
            startDelay={0.4}
            style={{
              fontFamily: headingFont, fontSize: headlineSize, fontWeight: 800,
              color: 'transparent', WebkitTextStroke: `2px ${accent}`,
              margin: isMobile ? '0 0 48px' : '0 0 80px', lineHeight: 1,
              letterSpacing: '-0.04em', textTransform: 'uppercase',
              '--outline-color': accent,
            }}
          />
        </FadeIn>
        <FadeIn delay={0.22}>
          <a href="#contact" className="cta-button" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: accent, color: '#000',
            padding: isMobile ? '16px 32px' : '22px 48px',
            fontSize: isMobile ? 13 : 15, fontWeight: 700,
            fontFamily: headingFont, textDecoration: 'none',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
            boxShadow: `0 12px 60px ${hexToRGBA(accent, 0.35)}`,
          }}>
            Get In Touch <span style={{ fontSize: 18 }}>→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
