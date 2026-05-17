import { FadeIn } from './FadeIn';
import { SectionTag } from './SectionTag';
import { AnimatedCounter } from './AnimatedCounter';
import { useIsMobile } from '../hooks/useIsMobile';

function StatBlock({ value, suffix, label, accent, headingFont, bodyFont, isLast, isMobile, index }) {
  return (
    <div className="stat-block" style={{
      padding: isMobile ? '32px 16px' : '60px 32px',
      borderRight: isMobile
        ? (index % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none')
        : (isLast ? 'none' : '1px solid rgba(255,255,255,0.08)'),
      borderBottom: isMobile && index < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      position: 'relative', cursor: 'default',
    }}>
      <div style={{
        fontFamily: headingFont, fontSize: isMobile ? 44 : 84, fontWeight: 800,
        color: '#fff', marginBottom: 10, letterSpacing: '-0.03em', lineHeight: 1,
      }}>
        <AnimatedCounter target={value} suffix={suffix} />
      </div>
      <div style={{
        fontFamily: bodyFont, fontSize: 12, color: 'rgba(255,255,255,0.4)',
        fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
      }}>{label}</div>
    </div>
  );
}

export function About({ accent, headingFont, bodyFont }) {
  const isMobile = useIsMobile();
  return (
    <section id="about" style={{ padding: isMobile ? '80px 20px 72px' : '140px 48px 120px', position: 'relative', background: '#050505' }}>
      <div className="about-side-line" />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
          gap: isMobile ? 28 : 80, alignItems: 'start',
          marginBottom: isMobile ? 48 : 80,
        }}>
          <div>
            <FadeIn direction="right">
              <SectionTag text="Who We Are" accent={accent} />
              <h2 style={{
                fontFamily: headingFont, fontSize: isMobile ? 38 : 72, fontWeight: 800,
                color: '#fff', margin: '0 0 28px', lineHeight: 0.95,
                letterSpacing: '-0.025em', textTransform: 'uppercase',
              }}>Built <span style={{ color: accent }}>Different.</span><br />Built To Win.</h2>
            </FadeIn>
          </div>
          <div>
            <FadeIn direction="left" delay={0.1}>
              <p style={{ fontFamily: bodyFont, fontSize: isMobile ? 15 : 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: '0 0 18px' }}>
                A full-service marketing agency built for the operators, founders,
                and challengers who refuse to play it safe.
              </p>
              <p style={{ fontFamily: bodyFont, fontSize: isMobile ? 14 : 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                We combine raw creativity with hard data — building campaigns
                that don't just perform, they dominate. From scrappy launches to
                category leaders, we work with brands ready to make noise.
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.15}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>
            <StatBlock value={100} suffix="+" label="Projects Delivered" accent={accent} headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile} index={0} />
            <StatBlock value={98} suffix="%" label="Client Retention" accent={accent} headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile} index={1} />
            <StatBlock value={250} suffix="M+" label="Revenue Generated" accent={accent} headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile} index={2} />
            <StatBlock value={24} suffix="/7" label="Support & Strategy" accent={accent} headingFont={headingFont} bodyFont={bodyFont} isLast isMobile={isMobile} index={3} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
