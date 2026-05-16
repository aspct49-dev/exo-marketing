import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionTag } from './SectionTag';
import { AnimatedDivider } from './AnimatedDivider';
import { hexToRGBA } from '../utils/color';

function InfoItem({ icon, label, value, bodyFont }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{
        width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 18, lineHeight: 1 }}>{icon}</span>
      </div>
      <div>
        <div style={{ fontFamily: bodyFont, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
        <div style={{ fontFamily: bodyFont, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>{value}</div>
      </div>
    </div>
  );
}

export function Contact({ accent, headingFont, bodyFont }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }); }, 2500);
  };

  const inputBase = {
    width: '100%', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.07)',
    padding: '20px 22px', fontSize: 17, fontFamily: bodyFont, color: '#fff',
    outline: 'none', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
  };

  return (
    <section id="contact" style={{
      padding: '140px 48px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Soft radial spotlight from below */}
      <div aria-hidden style={{
        position: 'absolute', left: '50%', bottom: '-30%', transform: 'translateX(-50%)',
        width: 900, height: 900, borderRadius: '50%',
        background: `radial-gradient(circle, ${hexToRGBA(accent, 0.06)}, transparent 60%)`,
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <AnimatedDivider accent={accent} />
      <div style={{
        maxWidth: 1400, margin: '0 auto', paddingTop: 40,
        display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 100, alignItems: 'start',
      }}>
        <div>
          <FadeIn direction="right">
            <SectionTag text="Get In Touch" accent={accent} />
            <h2 style={{
              fontFamily: headingFont, fontSize: 80, fontWeight: 800,
              color: '#fff', margin: '0 0 28px', lineHeight: 1.05,
              letterSpacing: '-0.02em', textTransform: 'uppercase',
            }}>
              Let's Build<br /><span style={{ color: accent }}>Something Big</span>
            </h2>
            <p style={{ fontFamily: bodyFont, fontSize: 19, lineHeight: 1.8, color: 'rgba(255,255,255,0.4)', margin: '0 0 48px', maxWidth: 460 }}>
              Ready to dominate your market? Drop us a line and let's talk about your next move.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <InfoItem icon="✉" label="Email" value="hello@exomarketing.gg" bodyFont={bodyFont} />
              <InfoItem icon="𝕏" label="Social" value="@exomarketing" bodyFont={bodyFont} />
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" delay={0.1}>
          <div style={{
            background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
            padding: '56px 48px', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: 80, height: 2, background: accent }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: 2, height: 80, background: accent }} />
            <h3 style={{
              fontFamily: headingFont, fontSize: 22, fontWeight: 700,
              color: '#fff', margin: '0 0 36px', letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { key: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label style={{
                    fontFamily: bodyFont, fontSize: 11, fontWeight: 600,
                    color: focused === key ? accent : 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    marginBottom: 6, display: 'block', transition: 'color 0.3s',
                  }}>{label}</label>
                  <input type={type} placeholder={placeholder} required
                         value={form[key]}
                         onChange={e => setForm({ ...form, [key]: e.target.value })}
                         onFocus={() => setFocused(key)}
                         onBlur={() => setFocused(null)}
                         className="contact-input"
                         style={{ ...inputBase, borderColor: focused === key ? accent : 'rgba(255,255,255,0.07)' }} />
                </div>
              ))}
              <div>
                <label style={{
                  fontFamily: bodyFont, fontSize: 11, fontWeight: 600,
                  color: focused === 'message' ? accent : 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  marginBottom: 6, display: 'block', transition: 'color 0.3s',
                }}>Message</label>
                <textarea placeholder="Tell us about your project..." rows={5} required
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          className="contact-input"
                          style={{ ...inputBase, resize: 'vertical', minHeight: 120, borderColor: focused === 'message' ? accent : 'rgba(255,255,255,0.07)' }} />
              </div>
              <button type="submit" className="btn-primary" style={{
                background: sent ? '#10b981' : accent, color: '#000',
                padding: '16px 36px', fontSize: 13, fontWeight: 700,
                fontFamily: headingFont, border: 'none', cursor: 'pointer',
                transition: 'all 0.3s', width: '100%',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4,
              }}>
                {sent ? '✓ Sent' : 'Send Message →'}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
