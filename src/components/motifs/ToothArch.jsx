// Line drawing of an upper dental arch — the site's quiet signature motif.
export default function ToothArch({ className = '', stroke = '#1A9BD7', strokeWidth = 1.4 }) {
  const n = 14;
  const teeth = Array.from({ length: n }, (_, i) => {
    const a = Math.PI * (0.06 + (0.88 * i) / (n - 1));
    const cx = 160 - Math.cos(a) * 130;
    const cy = 150 - Math.sin(a) * 118;
    const edge = Math.min(i, n - 1 - i);
    const w = edge < 3 ? 22 : edge < 5 ? 17 : 14;
    return { cx, cy, w, rot: (a * 180) / Math.PI - 90, i };
  });
  return (
    <svg viewBox="0 0 320 170" className={className} aria-hidden="true" fill="none">
      {teeth.map((t) => (
        <rect
          key={t.i}
          x={t.cx - t.w / 2}
          y={t.cy - 11}
          width={t.w}
          height="22"
          rx={t.w / 2.6}
          transform={`rotate(${t.rot} ${t.cx} ${t.cy})`}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      ))}
    </svg>
  );
}
