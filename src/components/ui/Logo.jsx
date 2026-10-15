import { site } from '../../data/site';

// Wordmark: single-line tooth outline + clinic name. Swap for the client's own logo if they have one.
export default function Logo({ tone = 'dark' }) {
  const ink = tone === 'dark' ? '#13294B' : '#FFFFFF';
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <path
          d="M13 8c-4 0-6.5 3.2-6.5 8 0 7 3.2 9.5 4.8 15.8.8 3.2 2.2 4.7 3.9 4.7 2.4 0 2.5-3.2 3.2-7 .6-3.3 1.4-4.8 3.6-4.8s3 1.5 3.6 4.8c.7 3.8.8 7 3.2 7 1.7 0 3.1-1.5 3.9-4.7C33.3 25.5 36.5 23 36.5 16c0-4.8-2.5-8-6.5-8-3.2 0-5.5 1.6-8.5 1.6S16.2 8 13 8z"
          fill="none" stroke={ink} strokeWidth="2.2" strokeLinejoin="round"
        />
        <path d="M14.5 17.5c2 2.2 4.4 3.2 7 3.2s5-1 7-3.2" fill="none" stroke="#1A9BD7" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[19px] font-bold tracking-tight" style={{ color: ink }}>{site.shortName}</span>
        <span className={`mt-0.5 block text-[10.5px] font-semibold uppercase tracking-[0.2em] ${tone === 'dark' ? 'text-clinic-dark' : 'text-clinic'}`}>
          Dental Care
        </span>
      </span>
    </a>
  );
}
