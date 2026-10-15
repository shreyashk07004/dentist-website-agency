import { Phone, Navigation } from 'lucide-react';
import { site } from '../../data/site';
import { waLink, quickMessage } from '../../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function MobileActionBar() {
  const item = 'flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 font-display text-[12px] font-semibold';
  return (
    <>
      <div className="h-[62px] md:hidden" aria-hidden="true" />
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a href={`tel:${site.phoneRaw}`} className={`${item} text-ink`}><Phone className="h-5 w-5" />Call</a>
        <a href={waLink(quickMessage())} target="_blank" rel="noopener noreferrer" className={`${item} bg-[#1B8F4A] text-white`}>
          <WhatsAppIcon className="h-5 w-5" />WhatsApp
        </a>
        <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className={`${item} text-ink`}><Navigation className="h-5 w-5" />Directions</a>
      </nav>
    </>
  );
}
