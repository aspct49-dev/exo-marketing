import { useIsMobile } from '../hooks/useIsMobile';

function FooterCol({ title, items, headingFont, bodyFont }) {
  return (
    <div>
      <h4 style={{ fontFamily: headingFont, fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 18, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(it => (
          <a key={it.label} href={it.href} className="footer-link" style={{
            fontFamily: bodyFont, fontSize: 14, color: 'rgba(255,255,255,0.4)',
            textDecoration: 'none', transition: 'color 0.2s',
          }}>{it.label}</a>
        ))}
      </div>
    </div>
  );
}

export function Footer({ accent, headingFont, bodyFont }) {
  const isMobile = useIsMobile();

  return (
    <footer style={{
      paddingTop: isMobile ? 56 : 80, paddingBottom: isMobile ? 24 : 32,
      paddingLeft: isMobile ? 20 : 48, paddingRight: isMobile ? 20 : 48,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#000', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr 1fr',
          gap: isMobile ? 40 : 60,
          marginBottom: isMobile ? 48 : 80,
        }}>
          <div>
            <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: 20 }}>
              <img src="/uploads/content.png" alt="ExoMarketing" style={{ height: 56, width: 'auto' }} />
            </a>
            <p style={{ fontFamily: bodyFont, fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', margin: '0 0 24px', maxWidth: 360 }}>
              Digital marketing that doesn't whisper. We build campaigns that move audiences,
              shift markets, and deliver outcomes that matter.
            </p>
            <a href="mailto:contact@exomarketing.gg" className="footer-link" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: headingFont, fontSize: 13, fontWeight: 700,
              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '12px 18px', border: '1px solid rgba(255,255,255,0.12)',
              transition: 'all 0.25s',
            }}>
              <span style={{ fontSize: 14 }}>✉</span> contact@exomarketing.gg
            </a>
          </div>

          <FooterCol title="Navigate" headingFont={headingFont} bodyFont={bodyFont} items={[
            { label: 'Services', href: '#services' },
            { label: 'Process', href: '#process' },
            { label: 'About', href: '#about' },
            { label: 'Brands', href: '#brands' },
          ]} />

          <FooterCol title="Services" headingFont={headingFont} bodyFont={bodyFont} items={[
            { label: 'Strategy', href: '#services' },
            { label: 'Social Media', href: '#services' },
            { label: 'Brokering', href: '#services' },
            { label: 'Analytics', href: '#services' },
          ]} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center', textAlign: isMobile ? 'center' : 'left',
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.06)',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontFamily: bodyFont, fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2026 ExoMarketing. All rights reserved.</p>
          <p style={{ fontFamily: headingFont, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', margin: 0, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Built to win • Crafted in 2026</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { label: 'Privacy', href: '#privacy' },
              { label: 'Terms', href: '#terms' },
            ].map(l => (
              <a key={l.label} href={l.href} className="footer-link" style={{ fontFamily: bodyFont, fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}>{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
