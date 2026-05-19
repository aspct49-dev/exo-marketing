export function SectionTag({ text, accent }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{ width: 32, height: 2, background: accent }} />
      <span style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: accent,
      }}>{text}</span>
    </div>
  );
}
