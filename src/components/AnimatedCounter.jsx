import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export function AnimatedCounter({ target, prefix = '', suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  const num = parseInt(target);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * num));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, num, duration]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
