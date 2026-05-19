import { useInView } from '../hooks/useInView';

const offsets = {
  up: 'translateY(40px)', down: 'translateY(-40px)',
  left: 'translateX(40px)', right: 'translateX(-40px)',
  none: 'translate(0,0)',
};

export function FadeIn({ children, delay = 0, direction = 'up', style = {}, className = '' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: inView ? 1 : 0,
      transform: inView ? 'translate(0,0)' : offsets[direction],
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      willChange: 'opacity, transform',
    }}>
      {children}
    </div>
  );
}
