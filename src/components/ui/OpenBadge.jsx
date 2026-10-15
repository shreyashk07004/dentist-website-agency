import { useEffect, useState } from 'react';
import { openStatus } from '../../utils/hours';

export default function OpenBadge({ tone = 'light', className = '' }) {
  const [status, setStatus] = useState(() => openStatus());
  useEffect(() => {
    const t = setInterval(() => setStatus(openStatus()), 60000);
    return () => clearInterval(t);
  }, []);
  const text = tone === 'dark' ? 'text-white' : 'text-ink';
  return (
    <span className={`inline-flex items-center gap-2 text-[13px] font-semibold ${text} ${className}`} aria-live="polite">
      <span className="relative flex h-2.5 w-2.5">
        {status.open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60 motion-reduce:hidden" />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${status.open ? 'bg-mint' : 'bg-[#E0685A]'}`} />
      </span>
      {status.label}
    </span>
  );
}
