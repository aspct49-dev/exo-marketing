import { FadeIn } from './FadeIn';
import { SectionTag } from './SectionTag';
import { AnimatedDivider } from './AnimatedDivider';

const SERVICES = [
  { num: '01', title: 'Digital Strategy', desc: "Bespoke strategies built on data, refined through testing, optimized for maximum ROI. We don't guess — we engineer results." },
  { num: '02', title: 'Social Media', desc: 'Content, community, and growth. We execute social strategies that build audiences and drive real engagement across every platform.' },
  { num: '03', title: 'Casino Brokering', desc: 'We connect operators and affiliates with tailored partnerships, exclusive deal flow, and deep industry relationships.' },
  { num: '04', title: 'Analytics & Insights', desc: "Real-time dashboards, attribution modeling, and actionable reporting. Know what works, kill what doesn't." },
];

export function Services({ accent, headingFont, bodyFont }) {
  return (
    <section id="services" style={{
      padding: '80px 48px 120px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Faint grid backdrop */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 75%)',
      }} />
      <AnimatedDivider accent={accent} />
      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
        <FadeIn>
          <SectionTag text="What We Do" accent={accent} />
          <h2 style={{
            fontFamily: headingFont, fontSize: 72, fontWeight: 800,
            color: '#fff', margin: '0 0 80px', letterSpacing: '-0.02em',
            textTransform: 'uppercase', lineHeight: 1.05,
          }}>Our Services</h2>
        </FadeIn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="service-row" style={{
                display: 'grid', gridTemplateColumns: '80px 1fr 1.2fr', gap: 48,
                alignItems: 'baseline', padding: '52px 0',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                cursor: 'default', transition: 'all 0.3s', position: 'relative',
              }}>
                <span className="service-num" style={{
                  fontFamily: headingFont, fontSize: 16, fontWeight: 700,
                  color: accent, letterSpacing: '0.05em',
                }}>{s.num}</span>
                <h3 className="service-title" style={{
                  fontFamily: headingFont, fontSize: 40, fontWeight: 700,
                  color: '#fff', margin: 0, textTransform: 'uppercase',
                  letterSpacing: '-0.01em', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: bodyFont, fontSize: 18, lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.35)', margin: 0, transition: 'color 0.3s',
                }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        </div>
      </div>
    </section>
  );
}
