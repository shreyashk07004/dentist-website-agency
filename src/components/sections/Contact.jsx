import { MapPin, Phone, Mail, Car, Navigation } from 'lucide-react';
import { site } from '../../data/site';
import { clinicHours } from '../../data/hours';
import OpenBadge from '../ui/OpenBadge';

export default function Contact() {
  const row = 'flex gap-3.5 border-b border-line py-4';
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-enamel">
      <div className="grid lg:grid-cols-2">
        <div className="wrap py-20 md:py-24 lg:ml-auto lg:mr-0 lg:max-w-[600px] lg:pr-14">
          <p className="kicker">Find us</p>
          <h2 id="contact-title" className="h-section">First floor, Shree Complex, Rajarampuri.</h2>
          <OpenBadge className="mt-5" />
          <ul className="mt-8 border-t border-line text-[15.5px]">
            <li className={row}>
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-clinic-dark" />
              <span>{site.addressLines.join(', ')}<br /><span className="text-slate-soft">{site.landmark}</span></span>
            </li>
            <li className={row}>
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-clinic-dark" />
              <a href={`tel:${site.phoneRaw}`} className="font-semibold text-ink hover:text-action">{site.phoneDisplay}</a>
            </li>
            <li className={row}>
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-clinic-dark" />
              <a href={`mailto:${site.email}`} className="hover:text-action">{site.email}</a>
            </li>
            <li className={row}>
              <Car className="mt-0.5 h-5 w-5 shrink-0 text-clinic-dark" />
              <span>{site.parking}</span>
            </li>
          </ul>
          <dl className="mt-6 space-y-1 text-[15px]">
            {clinicHours.summary.map((r) => (
              <div key={r.note} className="flex justify-between gap-4">
                <dt>{r.days} <span className="text-slate-soft">· {r.note}</span></dt>
                <dd className="whitespace-nowrap font-semibold tabular-nums text-ink">{r.time}</dd>
              </div>
            ))}
          </dl>
          <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            <Navigation className="h-4 w-4" /> Get directions
          </a>
        </div>
        <div className="min-h-[360px] lg:min-h-full">
          <iframe
            title="Map showing the clinic location in Rajarampuri, Kolhapur"
            src={site.mapEmbed}
            className="h-full min-h-[360px] w-full border-0 grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
