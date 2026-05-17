import { FadeIn } from './FadeIn';
import { SectionTag } from './SectionTag';
import { useIsMobile } from '../hooks/useIsMobile';

const STEPS = [
  { num: '01', title: 'Discover', desc: "Deep audit of your brand, audience, competitors, and goals. We don't move until we understand the terrain." },
  { num: '02', title: 'Strategize', desc: 'Custom roadmap with channels, KPIs, and creative direction. Every move calculated, every dollar accounted for.' },
  { num: '03', title: 'Execute', desc: 'Campaigns ship fast. Content, paid media, partnerships — deployed across the right channels at the right time.' },
  { num: '04', title: 'Optimize', desc: "Real-time data, weekly iteration, monthly review. We don't set and forget — we sharpen and scale." },
];

export function Process({ accent, headingFont, bodyFont }) {
  const isMobile = useIsMobile();
  return (
    <section id="process" style={{
      padding: isMobile ? '72px 20px' : '120px 48px', position: 'relative',
      background: 'linear-gradient(180deg, #000 0%, #050505 50%, #000 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: isMobile ? 44 : 72, flexWrap: 'wrap', gap: 24 }}>
          <FadeIn>
            <SectionTag text="How We Work" accent={accent} />
            <h2 style={{
              fontFamily: headingFont, fontSize: isMobile ? 36 : 64, fontWeight: 800,
              color: '#fff', margin: 0, letterSpacing: '-0.025em',
              textTransform: 'uppercase', lineHeight: 0.95, maxWidth: 600,
            }}>
              Process. <span style={{ color: accent }}>Precision.</span> Performance.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{
              fontFamily: bodyFont, fontSize: 15, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.4)', maxWidth: 380, margin: 0,
            }}>
              Four steps. No fluff. A repeatable system built around your business — not ours.
            </p>
          </FadeIn>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: 0,
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          {STEPS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="process-card" style={{
                padding: isMobile ? '32px 4px 36px' : '48px 28px 56px',
                borderRight: !isMobile && i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                borderBottom: isMobile && i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                position: 'relative', height: '100%',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)', cursor: 'default',
              }}>
                <div style={{
                  fontFamily: headingFont, fontSize: 14, fontWeight: 700,
                  color: accent, letterSpacing: '0.1em', marginBottom: isMobile ? 20 : 64,
                }}>{s.num} —</div>
                <h3 style={{
                  fontFamily: headingFont, fontSize: isMobile ? 24 : 36, fontWeight: 800,
                  color: '#fff', margin: '0 0 14px', textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: bodyFont, fontSize: 14.5, lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.4)', margin: 0,
                }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
