import { useRef, useState } from 'react';

export function MagneticButton({ children, strength = 0.25, ...props }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    setOffset({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  };
  const onLeave = () => setOffset({ x: 0, y: 0 });

  const { style: incoming, ...rest } = props;
  return (
    <a ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
       style={{
         ...incoming,
         display: 'inline-block',
         transform: `translate(${offset.x}px, ${offset.y}px)`,
         transition: offset.x === 0 && offset.y === 0
           ? 'transform 0.4s cubic-bezier(0.16,1,0.3,1)'
           : 'transform 0.15s ease-out',
         willChange: 'transform',
       }} {...rest}>
      {children}
    </a>
  );
}
