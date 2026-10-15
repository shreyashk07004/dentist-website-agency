import { useState } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { symptoms } from '../../data/symptoms';
import { treatments } from '../../data/treatments';
import { waLink, symptomMessage } from '../../utils/whatsapp';
import ToothArch from '../motifs/ToothArch';
import WhatsAppIcon from '../ui/WhatsAppIcon';

const byId = Object.fromEntries(treatments.map((t) => [t.id, t]));

export default function SymptomFinder({ onBook }) {
  const [active, setActive] = useState(symptoms[0].id);
  const s = symptoms.find((x) => x.id === active);

  return (
    <section aria-labelledby="finder-title" className="relative overflow-hidden bg-clinic-dark text-white">
      <ToothArch className="pointer-events-none absolute -right-24 -top-10 w-[560px] opacity-25" stroke="#FFFFFF" strokeWidth={1} />
      <div className="wrap relative grid gap-12 py-20 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mb-3 flex items-center gap-3 font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-white/80">
            <span className="block h-px w-8 bg-white/60" /> Not sure what you need?
          </p>
          <h2 id="finder-title" className="text-[2rem] font-bold leading-[1.1] text-white sm:text-[2.6rem]">
            Tell us what’s bothering you.
          </h2>
          <p className="mt-5 max-w-md text-[17px] text-white/85">
            Pick the closest problem. We’ll tell you what it usually means and what we’d check — then you can ask
            us directly on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Dental problems">
            {symptoms.map((x) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={active === x.id}
                aria-controls="finder-panel"
                onClick={() => setActive(x.id)}
                className={`rounded border px-3.5 py-2 font-display text-[14.5px] font-semibold transition-colors ${
                  active === x.id ? 'border-white bg-white text-ink' : 'border-white/35 text-white hover:border-white'
                }`}
              >
                {x.label}
              </button>
            ))}
          </div>
        </div>

        <div id="finder-panel" role="tabpanel" aria-live="polite" className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-md bg-white p-7 text-slate md:p-9">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[1.6rem] font-bold leading-tight">{s.label}</h3>
              {s.urgent && (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-[#FCEDEA] px-2 py-1 text-[12px] font-semibold text-[#A3392B]">
                  <AlertCircle className="h-3.5 w-3.5" /> Don’t wait on this
                </span>
              )}
            </div>
            <p className="mt-3 font-display text-[17px] font-semibold text-ink">{s.likely}</p>
            <p className="mt-2 text-[15.5px]">{s.advice}</p>

            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-soft">What we may suggest</p>
            <ul className="mt-2 divide-y divide-line border-y border-line">
              {s.treatments.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onBook(byId[id].name)}
                    className="group flex w-full items-center justify-between py-3 text-left font-display text-[16px] font-semibold text-ink hover:text-action"
                  >
                    {byId[id].name}
                    <span className="flex items-center gap-1 text-[13px] text-slate-soft group-hover:text-action">
                      Book <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <a href={waLink(symptomMessage(s.label))} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 w-full sm:w-auto">
              <WhatsAppIcon className="h-[18px] w-[18px]" /> Ask the doctor on WhatsApp
            </a>
            <p className="mt-3 text-[12.5px] text-slate-soft">General guidance only — a check-up is the only way to know for sure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
