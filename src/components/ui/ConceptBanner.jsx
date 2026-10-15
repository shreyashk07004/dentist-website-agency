import { useState } from 'react';
import { X } from 'lucide-react';
import { site } from '../../data/site';

export default function ConceptBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <aside aria-label="Concept website notice" className="bg-ink-deep text-white/85">
      <div className="wrap flex items-center justify-between gap-3 py-2 text-[12.5px]">
        <p className="leading-snug">
          <span className="mr-2 rounded-sm bg-clinic px-1.5 py-0.5 font-display text-[10.5px] font-bold uppercase tracking-wider text-ink-deep">
            Concept
          </span>
          Concept website by{' '}
          <a href={site.agencyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-clinic underline-offset-2">
            {site.agencyName}
          </a>{' '}
          — a sample of what your clinic’s site could look like. Clinic name and details are fictional.
        </p>
        <button onClick={() => setOpen(false)} aria-label="Dismiss notice" className="shrink-0 rounded p-1 text-white/60 hover:bg-white/10 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
