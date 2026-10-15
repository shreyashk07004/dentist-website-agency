import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, index, setIndex }) {
  const closeRef = useRef(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % items.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + items.length) % items.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, items.length, setIndex]);

  if (!isOpen) return null;
  const item = items[index];
  const nav = 'absolute top-1/2 -translate-y-1/2 rounded bg-white/10 p-2.5 text-white hover:bg-white/20';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-deep/95 p-4" role="dialog" aria-modal="true" aria-label="Clinic photo">
      <button ref={closeRef} onClick={() => setIndex(null)} className="absolute right-4 top-4 rounded p-2 text-white hover:bg-white/10" aria-label="Close photo">
        <X className="h-7 w-7" />
      </button>
      <button onClick={() => setIndex((index - 1 + items.length) % items.length)} className={`${nav} left-3`} aria-label="Previous photo">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <figure className="max-w-5xl">
        <img src={item.src} alt={item.alt} className="max-h-[78vh] w-auto rounded-md object-contain" />
        <figcaption className="mt-3 text-center text-[14px] text-white/80">
          {item.caption} <span className="text-white/45">· {index + 1} / {items.length}</span>
        </figcaption>
      </figure>
      <button onClick={() => setIndex((index + 1) % items.length)} className={`${nav} right-3`} aria-label="Next photo">
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
