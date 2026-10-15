import { site, nav } from '../../data/site';
import { clinicHours } from '../../data/hours';
import { waLink, quickMessage } from '../../utils/whatsapp';
import Logo from '../ui/Logo';
import ToothArch from '../motifs/ToothArch';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-deep text-white/75">
      <ToothArch className="pointer-events-none absolute -bottom-16 left-1/2 w-[640px] -translate-x-1/2 opacity-[0.07]" stroke="#FFFFFF" strokeWidth={1} />
      <div className="wrap relative grid gap-10 py-16 text-[14.5px] md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs">{site.tagline}. Since {site.established}.</p>
          <a href={waLink(quickMessage())} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold text-white underline decoration-clinic underline-offset-4">
            Message us on WhatsApp
          </a>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-white">Pages</p>
          <ul className="mt-3 space-y-2">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}
            <li><a href="#book" className="hover:text-white">Book appointment</a></li>
          </ul>
        </nav>
        <div className="md:col-span-5">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-white">Visit</p>
          <p className="mt-3">{site.addressLines.join(', ')}</p>
          <p className="mt-1"><a href={`tel:${site.phoneRaw}`} className="text-white hover:underline">{site.phoneDisplay}</a></p>
          <dl className="mt-4 space-y-1">
            {clinicHours.summary.map((r) => (
              <div key={r.note} className="flex flex-wrap gap-x-3"><dt className="sm:w-52 sm:shrink-0">{r.days} · {r.note}</dt><dd className="text-white">{r.time}</dd></div>
            ))}
          </dl>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-[13px] text-white/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Information on this site is general and not a substitute for a check-up.</p>
          <p>
            Concept website by{' '}
            <a href={site.agencyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">{site.agencyName}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
