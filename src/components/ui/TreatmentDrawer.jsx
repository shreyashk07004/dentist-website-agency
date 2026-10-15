import { useEffect, useRef } from 'react';
import { X, Clock, HeartPulse, IndianRupee } from 'lucide-react';
import { waLink, treatmentMessage } from '../../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

const fmt = (n) => (n ? `from ₹${new Intl.NumberFormat('en-IN').format(n)}` : 'Ask for estimate');

export default function TreatmentDrawer({ treatment, onClose, onBook }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!treatment) return;
    const prev = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus?.();
    };
  }, [treatment, onClose]);

  if (!treatment) return null;
  const t = treatment;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      <button className="absolute inset-0 bg-ink-deep/50" onClick={onClose} aria-label="Close" tabIndex={-1} />
      <div className="relative flex h-full w-full max-w-[480px] flex-col overflow-y-auto bg-white">
        <div className="flex items-start justify-between gap-4 border-b border-line p-6 md:p-8">
          <div>
            <p className="kicker !mb-2">Treatment</p>
            <h3 id="drawer-title" className="text-[1.75rem] font-bold leading-tight">{t.name}</h3>
          </div>
          <button ref={closeRef} onClick={onClose} className="rounded p-1.5 text-ink hover:bg-enamel" aria-label="Close details">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 space-y-6 p-6 md:p-8">
          <p className="text-[16.5px]">{t.detail}</p>
          <dl className="divide-y divide-line border-y border-line text-[15px]">
            <div className="flex gap-3 py-3.5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-clinic" />
              <dt className="sr-only">Visits</dt><dd>{t.visits}</dd>
            </div>
            <div className="flex gap-3 py-3.5">
              <HeartPulse className="mt-0.5 h-5 w-5 shrink-0 text-clinic" />
              <dt className="sr-only">Recovery</dt><dd>{t.recovery}</dd>
            </div>
            <div className="flex gap-3 py-3.5">
              <IndianRupee className="mt-0.5 h-5 w-5 shrink-0 text-clinic" />
              <dt className="sr-only">Cost</dt>
              <dd><span className="font-semibold text-ink">{fmt(t.from)}</span> — exact cost in writing after your check-up.</dd>
            </div>
          </dl>
          <p className="text-[14px] text-slate-soft"><span className="font-semibold text-ink">Usually helps with:</span> {t.fixes}.</p>
        </div>
        <div className="grid gap-2 border-t border-line p-6 md:p-8">
          <button onClick={() => onBook(t.name)} className="btn-primary w-full">Book a consultation for this</button>
          <a href={waLink(treatmentMessage(t.name))} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
            <WhatsAppIcon className="h-[18px] w-[18px]" /> Ask a question on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
