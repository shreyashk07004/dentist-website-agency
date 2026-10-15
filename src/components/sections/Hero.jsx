import { Phone, ShieldCheck, ScanLine, FileText, ArrowRight } from 'lucide-react';
import { site } from '../../data/site';
import { clinicHours } from '../../data/hours';
import { waLink, quickMessage } from '../../utils/whatsapp';
import OpenBadge from '../ui/OpenBadge';
import WhatsAppIcon from '../ui/WhatsAppIcon';

const factIcons = [ShieldCheck, ScanLine, FileText];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      {/* Upper band */}
      <div className="bg-enamel">
        <div className="wrap grid items-center gap-10 pb-28 pt-8 md:pb-32 md:pt-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <OpenBadge className="mb-6 rounded-sm border border-line bg-white px-3 py-1.5" />
            <h1 id="hero-title" className="text-[2.4rem] font-bold leading-[1.06] sm:text-[3.2rem] lg:text-[3.4rem]">
              Unhurried dental care in{' '}
              <span className="text-action">Rajarampuri,</span> Kolhapur.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[17.5px] leading-relaxed text-slate">
              Check-ups, root canals, braces and implants by two specialist doctors — and a written
              plan with the cost of every step before anything begins.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink(quickMessage())} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <WhatsAppIcon className="h-[18px] w-[18px]" /> Book on WhatsApp
              </a>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline">
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-6 text-[14px] text-slate-soft">
              Dr. Aditi Kulkarni, MDS (Orthodontics) · Dr. Rohan Kulkarni, MDS (Prosthodontics)
            </p>
          </div>

          <div className="relative lg:col-span-6">
            <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-md border border-clinic/50 sm:block" aria-hidden="true" />
            <img
              src="/images/hero-consult.jpg"
              alt="Dentist talking a patient through her treatment in a bright treatment room"
              className="relative aspect-[4/3] w-full rounded-md object-cover"
              width="1400"
              height="1050"
              fetchpriority="high"
            />
            <p className="absolute bottom-3 left-3 rounded-sm bg-white/95 px-3 py-1.5 text-[12.5px] font-semibold text-ink">
              We explain first. Treatment starts only when you’re ready.
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping strip: facts + hours card */}
      <div className="wrap relative -mt-20 md:-mt-24">
        <div className="grid overflow-hidden rounded-md border border-line bg-white lg:grid-cols-12">
          <ul className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:col-span-8">
            {site.facts.map((f, i) => {
              const Icon = factIcons[i] || ShieldCheck;
              return (
                <li key={f.title} className="flex gap-3.5 p-6 lg:items-center lg:p-7">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-clinic" strokeWidth={1.6} />
                  <div>
                    <p className="font-display text-[16.5px] font-bold text-ink">{f.title}</p>
                    <p className="mt-1 text-[14px] leading-snug text-slate-soft">{f.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="bg-action p-6 text-white lg:col-span-4 lg:p-7">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-[17px] font-bold text-white">OPD hours</h2>
              <span className="text-[12.5px] text-white/70">Walk-ins welcome</span>
            </div>
            <dl className="mt-3 space-y-1.5 text-[14px]">
              {clinicHours.summary.map((r) => (
                <div key={r.note} className="flex justify-between gap-3 border-b border-white/15 pb-1.5 last:border-0">
                  <dt className="text-white/80">{r.days} <span className="text-white/55">· {r.note}</span></dt>
                  <dd className="whitespace-nowrap font-semibold">{r.time}</dd>
                </div>
              ))}
            </dl>
            <a href="#book" className="mt-4 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
              Choose a time slot <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
