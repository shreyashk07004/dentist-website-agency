import { useEffect, useMemo, useState } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { site } from '../../data/site';
import { doctors } from '../../data/doctors';
import { treatments } from '../../data/treatments';
import { clinicHours } from '../../data/hours';
import { slotsFor, todayISO } from '../../utils/hours';
import { waLink, bookingMessage } from '../../utils/whatsapp';
import WhatsAppIcon from '../ui/WhatsAppIcon';

const empty = {
  name: '', phone: '', treatment: 'Check-up & consultation', doctor: 'Any available doctor',
  date: '', slot: '', firstVisit: true, note: '',
};

export default function Appointment({ preset }) {
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (preset) setF((x) => ({ ...x, treatment: preset }));
  }, [preset]);

  const slots = useMemo(() => slotsFor(f.date), [f.date]);
  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setF((x) => ({ ...x, [k]: v, ...(k === 'date' ? { slot: '' } : {}) }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (f.name.trim().length < 2) er.name = 'Please enter your name.';
    if (!/^[6-9]\d{9}$/.test(f.phone.replace(/\D/g, '').slice(-10))) er.phone = 'Enter a 10-digit mobile number.';
    if (!f.date) er.date = 'Choose a date.';
    else if (!slots.length) er.date = 'No slots left on this day — please pick another date.';
    if (f.date && slots.length && !f.slot) er.slot = 'Choose a time.';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(waLink(bookingMessage(f)), '_blank', 'noopener');
    setSent(true);
  };

  const err = (k) => errors[k] && <p id={`${k}-err`} className="mt-1 text-[13px] font-medium text-[#B23A2B]">{errors[k]}</p>;
  const aria = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined });

  return (
    <section id="book" aria-labelledby="book-title" className="bg-enamel py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-4">
          <p className="kicker">Book a visit</p>
          <h2 id="book-title" className="h-section">Pick a time. We’ll confirm on WhatsApp.</h2>
          <p className="mt-5 text-[16.5px]">
            Fill this in and WhatsApp opens with your request already written. Press send — we reply during OPD
            hours to confirm, or suggest the nearest free slot.
          </p>
          <div className="mt-8 border-t border-line pt-6 text-[15px]">
            <p className="font-semibold text-ink">Prefer to call?</p>
            <a href={`tel:${site.phoneRaw}`} className="mt-1 inline-flex items-center gap-2 font-display text-[22px] font-bold text-action hover:underline">
              <Phone className="h-5 w-5" /> {site.phoneDisplay}
            </a>
            <p className="mt-3 text-slate-soft">{clinicHours.emergencyNote}</p>
          </div>
        </div>

        <form onSubmit={submit} noValidate className="reveal rounded-md border border-line bg-white p-6 md:p-9 lg:col-span-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="b-name" className="label">Full name</label>
              <input id="b-name" className="field" value={f.name} onChange={set('name')} autoComplete="name" {...aria('name')} />
              {err('name')}
            </div>
            <div>
              <label htmlFor="b-phone" className="label">Mobile number</label>
              <input id="b-phone" className="field" value={f.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" placeholder="98xxxxxxxx" {...aria('phone')} />
              {err('phone')}
            </div>
            <div>
              <label htmlFor="b-treat" className="label">Reason for visit</label>
              <select id="b-treat" className="field" value={f.treatment} onChange={set('treatment')}>
                {treatments.map((t) => <option key={t.id}>{t.name}</option>)}
                <option>Pain / emergency</option>
                <option>Not sure — need a check-up</option>
              </select>
            </div>
            <div>
              <label htmlFor="b-doc" className="label">Doctor</label>
              <select id="b-doc" className="field" value={f.doctor} onChange={set('doctor')}>
                <option>Any available doctor</option>
                {doctors.map((d) => <option key={d.id}>{d.name}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="b-date" className="label">Preferred date</label>
              <input id="b-date" type="date" className="field" value={f.date} min={todayISO()} max={todayISO(60)} onChange={set('date')} {...aria('date')} />
              {err('date')}
            </div>
            <div>
              <label htmlFor="b-slot" className="label">Preferred time</label>
              <select id="b-slot" className="field" value={f.slot} onChange={set('slot')} disabled={!f.date || !slots.length} {...aria('slot')}>
                <option value="">{!f.date ? 'Choose a date first' : slots.length ? 'Select a time' : 'No slots on this day'}</option>
                {slots.map((s) => <option key={s}>{s}</option>)}
              </select>
              {err('slot')}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="b-note" className="label">Anything we should know? <span className="font-normal text-slate-soft">(optional)</span></label>
              <textarea id="b-note" rows={3} className="field resize-y" value={f.note} onChange={set('note')} placeholder="e.g. pain in lower left tooth since 3 days" />
            </div>
            <label className="flex items-center gap-3 text-[15px] text-ink sm:col-span-2">
              <input type="checkbox" checked={f.firstVisit} onChange={set('firstVisit')} className="h-4 w-4 accent-action" />
              This is my first visit to the clinic
            </label>
          </div>

          <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-slate-soft">Your details go only to the clinic’s WhatsApp. Nothing is stored on this website.</p>
            <button type="submit" className="btn-primary shrink-0">
              <WhatsAppIcon className="h-[18px] w-[18px]" /> Send request on WhatsApp
            </button>
          </div>
          {sent && (
            <p role="status" className="mt-5 flex items-start gap-2 rounded bg-clinic-light p-3.5 text-[14.5px] text-ink">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-action" />
              WhatsApp should have opened with your request — just press send. If it didn’t open, call us on {site.phoneDisplay}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
