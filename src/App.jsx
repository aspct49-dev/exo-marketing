import { useEffect, useState } from 'react';
import { useTweaks } from './hooks/useTweaks';
import { ParticleField } from './components/ParticleField';
import { CursorGlow } from './components/CursorGlow';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { CTABanner } from './components/CTABanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';

function useLegalRoute() {
  const read = () => {
    const h = window.location.hash.replace(/^#\/?/, '');
    if (h === 'privacy' || h === 'terms') return h;
    return null;
  };
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onHash = () => setRoute(read());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

const FONT_PRESETS = {
  chakra: { heading: "'Chakra Petch', sans-serif", body: "'DM Sans', sans-serif" },
  saira:  { heading: "'Saira', sans-serif",        body: "'DM Sans', sans-serif" },
  bebas:  { heading: "'Bebas Neue', sans-serif",   body: "'DM Sans', sans-serif" },
};

const DEFAULTS = { accentColor: '#fff', fontPreset: 'bebas' };

export default function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);
  const fonts = FONT_PRESETS[t.fontPreset] || FONT_PRESETS.bebas;
  const legal = useLegalRoute();

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accentColor);
  }, [t.accentColor]);

  const props = { accent: t.accentColor, headingFont: fonts.heading, bodyFont: fonts.body };

  return (
    <div style={{ fontFamily: fonts.body }}>
      <ParticleField count={120} />
      <CursorGlow accent={t.accentColor} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {legal ? (
          <LegalPage kind={legal} {...props} />
        ) : (
          <>
            <Nav {...props} />
            <main>
              <Hero {...props} />
              <Brands {...props} />
              <Services {...props} />
              <Process {...props} />
              <About {...props} />
              <CTABanner {...props} />
              <Contact {...props} />
            </main>
            <Footer {...props} />
          </>
        )}
      </div>
    </div>
  );
}
