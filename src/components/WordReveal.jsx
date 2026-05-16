import { useInView } from '../hooks/useInView';

export function WordReveal({ text, delay = 0, style = {}, wordStyle = {}, stagger = 0.08 }) {
  const [ref, inView] = useInView(0.2);
  const words = text.split(' ');
  return (
    <span ref={ref} style={{ display: 'inline-block', ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{
          display: 'inline-block', overflow: 'hidden',
          verticalAlign: 'top',
          marginRight: i < words.length - 1 ? '0.28em' : 0,
        }}>
          <span style={{
            display: 'inline-block',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(100%)',
            transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay + i * stagger}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay + i * stagger}s`,
            willChange: 'transform, opacity',
            ...wordStyle,
          }}>{word}</span>
        </span>
      ))}
    </span>
  );
}
