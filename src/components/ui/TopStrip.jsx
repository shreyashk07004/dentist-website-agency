import { MapPin, Clock, Phone } from 'lucide-react';
import { site } from '../../data/site';

export default function TopStrip() {
  return (
    <div className="hidden border-b border-line bg-enamel text-[13px] text-slate md:block">
      <div className="wrap flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink">
            <MapPin className="h-3.5 w-3.5 text-clinic-dark" /> {site.addressLines.join(', ')}
          </a>
          <span className="hidden items-center gap-1.5 lg:flex">
            <Clock className="h-3.5 w-3.5 text-clinic-dark" /> Mon–Sat 10–1:30 &amp; 5–8:30 · Sun 10–1
          </span>
        </div>
        <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-1.5 font-semibold text-ink hover:text-action">
          <Phone className="h-3.5 w-3.5 text-clinic-dark" /> {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
