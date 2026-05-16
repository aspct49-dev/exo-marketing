import { useInView } from '../hooks/useInView';

export function AnimatedDivider({ accent = '#fff' }) {
  const [ref, inView] = useInView(0.5);
  return (
    <div ref={ref} style={{ height: 1, maxWidth: 1100, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        opacity: 0.12,
        transform: inView ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)',
        transformOrigin: 'left',
      }} />
    </div>
  );
}
