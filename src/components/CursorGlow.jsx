import { useRef, useEffect } from 'react';
import { hexToRGBA } from '../utils/color';

export function CursorGlow({ accent }) {
  const glowRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={glowRef} style={{
      position: 'fixed', width: 400, height: 400,
      borderRadius: '50%', pointerEvents: 'none',
      background: `radial-gradient(circle, ${hexToRGBA(accent, 0.04)} 0%, transparent 70%)`,
      transform: 'translate(-50%, -50%)',
      zIndex: 1, transition: 'left 0.15s ease-out, top 0.15s ease-out',
    }} />
  );
}
