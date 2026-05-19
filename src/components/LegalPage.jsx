import { useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { FadeIn } from './FadeIn';
import { SectionTag } from './SectionTag';
import { useIsMobile } from '../hooks/useIsMobile';

function Section({ heading, children, headingFont, bodyFont, isMobile }) {
  return (
    <div style={{ marginBottom: isMobile ? 36 : 52 }}>
      <h2 style={{
        fontFamily: headingFont, fontSize: isMobile ? 22 : 30, fontWeight: 800,
        color: '#fff', margin: '0 0 16px', letterSpacing: '-0.01em',
        textTransform: 'uppercase',
      }}>{heading}</h2>
      <div style={{
        fontFamily: bodyFont, fontSize: isMobile ? 14.5 : 16, lineHeight: 1.8,
        color: 'rgba(255,255,255,0.55)',
      }}>
        {children}
      </div>
    </div>
  );
}

export function LegalPage({ kind, accent, headingFont, bodyFont }) {
  const isMobile = useIsMobile();

  useEffect(() => { window.scrollTo(0, 0); }, [kind]);

  const isPrivacy = kind === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const tag = isPrivacy ? 'Your Data' : 'The Fine Print';

  return (
    <>
      <Nav accent={accent} headingFont={headingFont} />
      <main style={{
        padding: isMobile ? '120px 20px 80px' : '180px 48px 120px',
        position: 'relative',
        minHeight: '100vh',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: isMobile ? 400 : 800, height: isMobile ? 400 : 800,
          background: `radial-gradient(circle, ${accent}, transparent 60%)`,
          opacity: 0.04, filter: 'blur(120px)', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
          <FadeIn>
            <a href="#home" className="footer-link" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: headingFont, fontSize: 12, fontWeight: 700,
              color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              marginBottom: isMobile ? 28 : 40,
            }}>← Back to Home</a>
            <SectionTag text={tag} accent={accent} />
            <h1 style={{
              fontFamily: headingFont, fontSize: isMobile ? 44 : 72, fontWeight: 800,
              color: '#fff', margin: '0 0 18px', lineHeight: 0.95,
              letterSpacing: '-0.025em', textTransform: 'uppercase',
            }}>{title}</h1>
            <p style={{
              fontFamily: bodyFont, fontSize: isMobile ? 13 : 14,
              color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em',
              textTransform: 'uppercase', margin: '0 0 64px',
            }}>Last updated · May 2026</p>
          </FadeIn>

          <FadeIn delay={0.05}>
            {isPrivacy ? (
              <>
                <Section heading="Overview" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>ExoMarketing ("we", "us", "our") provides digital marketing, social, and brokering services to brands operating in the iGaming and entertainment space. This Privacy Policy explains what information we collect when you interact with our website or engage our services, how we use it, and the rights you have over it.</p>
                </Section>

                <Section heading="Information We Collect" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p style={{ margin: '0 0 12px' }}>We collect information in two ways: information you give us directly, and information collected automatically as you browse.</p>
                  <ul style={{ paddingLeft: 22, margin: '0 0 12px' }}>
                    <li><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Information you provide</strong> — name, Discord/Telegram handle, company name, email, and any project details you submit through our contact form.</li>
                    <li><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Technical information</strong> — IP address, device and browser type, referring URL, and pages visited, collected via standard server logs and analytics.</li>
                    <li><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Engagement data</strong> — when you partner with us on campaigns, we may process performance data (clicks, conversions, deposits) tied to attribution links you provide.</li>
                  </ul>
                </Section>

                <Section heading="How We Use It" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <ul style={{ paddingLeft: 22, margin: 0 }}>
                    <li>To respond to inquiries and scope potential engagements.</li>
                    <li>To deliver the services we have agreed to provide.</li>
                    <li>To improve the performance, security, and reliability of this site.</li>
                    <li>To send service-related communication. We do not run a marketing newsletter.</li>
                  </ul>
                </Section>

                <Section heading="Sharing &amp; Disclosure" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>We do not sell personal information. We share data only with vetted vendors who help us operate (hosting, analytics, secure communications), under contracts that bind them to confidentiality. We may disclose information when required by law or to protect against fraud and abuse.</p>
                </Section>

                <Section heading="Cookies" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>We use a small number of cookies and local-storage entries for essential site behavior and to remember your preferences. You can clear or block these through your browser settings without losing access to the site.</p>
                </Section>

                <Section heading="Your Rights" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>You can request access to, correction of, or deletion of any personal data we hold about you. Reach out at <a href="mailto:contact@exomarketing.gg" style={{ color: accent, textDecoration: 'none' }}>contact@exomarketing.gg</a> and we will respond within 30 days.</p>
                </Section>

                <Section heading="Retention" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>We retain contact submissions for as long as needed to respond to your inquiry and to maintain a record of our engagement. Campaign performance data is retained for the duration of the engagement plus any period required for legal or accounting purposes.</p>
                </Section>

                <Section heading="Contact" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>Questions about this policy? Email <a href="mailto:contact@exomarketing.gg" style={{ color: accent, textDecoration: 'none' }}>contact@exomarketing.gg</a>.</p>
                </Section>
              </>
            ) : (
              <>
                <Section heading="Agreement" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>These Terms of Service govern your use of the ExoMarketing website and any services we provide. By accessing this site or engaging us, you agree to these terms. If you do not agree, please do not use the site or our services.</p>
                </Section>

                <Section heading="Our Services" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>ExoMarketing offers digital strategy, social media, brokering, and analytics services for brands in the iGaming and adjacent industries. Specific scope, deliverables, fees, and timelines are defined in a separate written agreement (a Statement of Work or service agreement) signed between us and the client.</p>
                </Section>

                <Section heading="Eligibility" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>You must be at least 18 years old (or the legal age of majority in your jurisdiction) and authorised to enter into agreements on behalf of any company you represent. Our services are intended for legitimate, licensed operators only.</p>
                </Section>

                <Section heading="Acceptable Use" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <ul style={{ paddingLeft: 22, margin: 0 }}>
                    <li>Do not use this site to attempt unauthorised access, scrape data, or disrupt service.</li>
                    <li>Do not submit false, misleading, or unlawful information through our forms.</li>
                    <li>Do not represent yourself as ExoMarketing or use our brand without written permission.</li>
                  </ul>
                </Section>

                <Section heading="Intellectual Property" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>All copy, design, logos, and creative on this site are the property of ExoMarketing or its licensors. Work produced for clients is governed by the IP terms set out in the relevant service agreement. Nothing on this site grants you any license to our marks or materials.</p>
                </Section>

                <Section heading="Confidentiality" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>Any non-public information shared during scoping calls, proposals, or active engagements — strategy, pricing, audience data, performance metrics — is confidential and may not be disclosed without our prior written consent.</p>
                </Section>

                <Section heading="Disclaimers" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>We work hard to deliver outcomes, but marketing results depend on market conditions, product quality, and operator execution. We make no guarantees of specific revenue, ranking, conversion, or growth figures. The site is provided "as is" without warranties of any kind.</p>
                </Section>

                <Section heading="Limitation of Liability" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>To the maximum extent permitted by law, ExoMarketing is not liable for indirect, incidental, or consequential damages arising from your use of this site. For paid engagements, our total liability is capped at the fees paid to us under the relevant agreement during the six months preceding the claim.</p>
                </Section>

                <Section heading="Changes" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>We may update these terms from time to time. Material changes will be reflected by updating the date above. Continued use of the site after changes means you accept the updated terms.</p>
                </Section>

                <Section heading="Contact" headingFont={headingFont} bodyFont={bodyFont} isMobile={isMobile}>
                  <p>Questions about these terms? Email <a href="mailto:contact@exomarketing.gg" style={{ color: accent, textDecoration: 'none' }}>contact@exomarketing.gg</a>.</p>
                </Section>
              </>
            )}
          </FadeIn>
        </div>
      </main>
      <Footer accent={accent} headingFont={headingFont} bodyFont={bodyFont} />
    </>
  );
}
