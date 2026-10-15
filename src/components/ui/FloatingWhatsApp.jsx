import { waLink, quickMessage } from '../../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(quickMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the clinic on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-[#1B8F4A] py-3 pl-3.5 pr-4 font-display text-[14px] font-semibold text-white shadow-[0_6px_20px_rgba(19,41,75,0.25)] transition-transform hover:-translate-y-0.5 md:inline-flex"
    >
      <WhatsAppIcon className="h-6 w-6" /> WhatsApp us
    </a>
  );
}
