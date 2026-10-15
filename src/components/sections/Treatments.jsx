import { useCallback, useState } from 'react';
import { Plus } from 'lucide-react';
import { treatments, treatmentGroups } from '../../data/treatments';
import TreatmentDrawer from '../ui/TreatmentDrawer';

const formatFrom = (n) => (n ? `from ₹${new Intl.NumberFormat('en-IN').format(n)}` : 'Ask for estimate');

export default function Treatments({ onBook }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="treatments" aria-labelledby="treatments-title" className="py-20 md:py-28">
      <div className="wrap">
        <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Treatments</p>
            <h2 id="treatments-title" className="h-section">What we do, how long it takes, and where the cost starts.</h2>
          </div>
          <p className="text-[15.5px] text-slate-soft lg:col-span-4 lg:col-start-9">
            Final cost depends on your teeth — you’ll get it in writing after the check-up. Tap any treatment for details.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {treatmentGroups.map((g, gi) => (
            <div key={g.id} className="reveal grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="font-display text-[13px] font-bold text-clinic-dark">0{gi + 1}</p>
                <h3 className="mt-1 text-[1.35rem] font-bold">{g.label}</h3>
              </div>
              <ul className="border-t border-ink lg:col-span-9">
                {treatments.filter((t) => t.group === g.id).map((t) => (
                  <li key={t.id} className="border-b border-line">
                    <button
                      onClick={() => setOpen(t)}
                      className="group grid w-full gap-1 py-5 text-left sm:grid-cols-12 sm:items-baseline sm:gap-4"
                      aria-haspopup="dialog"
                    >
                      <span className="font-display text-[18px] font-bold text-ink group-hover:text-action sm:col-span-4">{t.name}</span>
                      <span className="text-[15px] text-slate sm:col-span-5">{t.fixes}</span>
                      <span className="flex items-center justify-between gap-3 text-[14px] sm:col-span-3 sm:justify-end">
                        <span className="font-semibold tabular-nums text-ink">{formatFrom(t.from)}</span>
                        <Plus className="h-4 w-4 text-clinic transition-transform group-hover:rotate-90" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <TreatmentDrawer treatment={open} onClose={close} onBook={(name) => { setOpen(null); onBook(name); }} />
    </section>
  );
}
