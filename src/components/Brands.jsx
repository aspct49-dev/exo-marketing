import { FadeIn } from './FadeIn';
import { SectionTag } from './SectionTag';
import { hexToRGBA } from '../utils/color';
import { useIsMobile } from '../hooks/useIsMobile';

const BRANDS = [
  { name: 'Stake',      src: '/uploads/stake.png',     h: 44, invert: true },
  { name: 'Roobet',     src: '/uploads/roobet.svg',    h: 46, invert: false },
  { name: 'Shuffle',    src: '/uploads/shuffle.webp',  h: 48, invert: false, fit: 'left' },
  { name: '500 Casino', src: '/uploads/500casino.svg', h: 64, invert: false },
  { name: 'Gamdom',     src: '/uploads/gamdom.png',    h: 90, invert: false, fit: 'left' },
  { name: 'Kick',       src: '/uploads/kick.png',      h: 38, invert: false },
];

function ImageLogo({ brand }) {
  return (
    <img
      src={brand.src}
      alt={brand.name}
      style={{
        height: brand.h,
        width: 'auto',
        maxWidth: 220,
        objectFit: 'contain',
        objectPosition: brand.fit === 'left' ? 'left center' : 'center',
        filter: brand.invert ? 'invert(1) brightness(1.1)' : 'none',
        opacity: 0.85,
        transition: 'opacity 0.45s, filter 0.45s',
      }}
      className="brand-img"
      draggable={false}
    />
  );
}

function BrandItem({ brand, accent }) {
  return (
    <div className="brand-item" style={{
      flexShrink: 0, display: 'flex', alignItems: 'center',
      justifyContent: 'center', cursor: 'default',
      padding: '20px 36px', borderRadius: 16, position: 'relative',
      height: 96, minWidth: 220,
      transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
      '--glow': hexToRGBA(accent, 0.4),
    }}>
      <ImageLogo brand={brand} />
    </div>
  );
}

export function Brands({ accent, headingFont }) {
  const isMobile = useIsMobile();
  const rowA = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];
  const rowB = [...BRANDS.slice(2), ...BRANDS.slice(0, 2), ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section id="brands" style={{
      padding: isMobile ? '64px 0 56px' : '100px 0 80px', position: 'relative',
      background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(255,255,255,0.025), transparent 70%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', padding: isMobile ? '0 20px' : '0 48px' }}>
        <FadeIn>
          <SectionTag text="Our Partners" accent={accent} />
          <h2 style={{
            fontFamily: headingFont, fontSize: isMobile ? 30 : 44, fontWeight: 800,
            color: '#fff', margin: isMobile ? '0 0 44px' : '0 0 64px', letterSpacing: '-0.02em',
            textTransform: 'uppercase', lineHeight: 1.05,
          }}>Trusted by Leading Brands</h2>
        </FadeIn>
      </div>
      <FadeIn>
        <div className="marquee-stage">
          <div className="marquee-fade marquee-fade-left" />
          <div className="marquee-fade marquee-fade-right" />
          <div className="marquee-row">
            <div className="marquee-track marquee-track-left">
              {rowA.map((b, i) => <BrandItem key={`a-${i}`} brand={b} accent={accent} />)}
            </div>
          </div>
          <div className="marquee-row" style={{ marginTop: 32 }}>
            <div className="marquee-track marquee-track-right">
              {rowB.map((b, i) => <BrandItem key={`b-${i}`} brand={b} accent={accent} />)}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
