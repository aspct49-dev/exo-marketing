import { useState } from 'react';

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
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => { setSubscribed(false); setEmail(''); }, 2500);
  };

  return (
    <footer style={{
      paddingTop: 80, paddingBottom: 32, paddingLeft: 48, paddingRight: 48,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#000', position: 'relative', overflow: 'hidden',
    }}>
<div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.4fr', gap: 60, marginBottom: 80 }}>
          <div>
            <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: 20 }}>
              <img src="/uploads/content.png" alt="ExoMarketing" style={{ height: 56, width: 'auto' }} />
            </a>
            <p style={{ fontFamily: bodyFont, fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', margin: '0 0 24px', maxWidth: 320 }}>
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

          <div>
            <h4 style={{ fontFamily: headingFont, fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 14, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Stay in the loop</h4>
            <p style={{ fontFamily: bodyFont, fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Marketing insights and case studies. Monthly. No spam.</p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 0 }}>
              <input
                type="email" placeholder="you@email.com" value={email} required
                onChange={e => setEmail(e.target.value)}
                className="footer-newsletter"
                style={{
                  flex: 1, padding: '12px 14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)', borderRight: 'none',
                  color: '#fff', fontFamily: bodyFont, fontSize: 13,
                  outline: 'none', minWidth: 0, transition: 'border-color 0.3s',
                }}
              />
              <button type="submit" style={{
                padding: '12px 20px', background: accent, color: '#000',
                border: 'none', cursor: 'pointer',
                fontFamily: headingFont, fontSize: 12, fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'filter 0.2s',
              }}>{subscribed ? '✓' : 'Join'}</button>
            </form>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.06)',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontFamily: bodyFont, fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2026 ExoMarketing. All rights reserved.</p>
          <p style={{ fontFamily: headingFont, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', margin: 0, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Built to win • Crafted in 2026</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms'].map(l => (
              <a key={l} href="#" className="footer-link" style={{ fontFamily: bodyFont, fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
