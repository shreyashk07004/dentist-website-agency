import { useState } from 'react';
import { gallery } from '../../data/gallery';
import Lightbox from '../ui/Lightbox';

export default function Gallery() {
  const [index, setIndex] = useState(null);

  return (
    <section id="clinic" aria-labelledby="clinic-title" className="py-20 md:py-28">
      <div className="wrap">
        <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Inside the clinic</p>
            <h2 id="clinic-title" className="h-section">Two treatment rooms, daylight, and equipment you can see being cleaned.</h2>
          </div>
          <p className="text-[15.5px] text-slate-soft lg:col-span-4 lg:col-start-9">
            Instruments go through a Class B autoclave after every patient, and each pouch is opened at the chair.
          </p>
        </div>

        <ul className="reveal mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <li key={g.src} className={g.span === 'wide' ? 'col-span-2' : ''}>
              <button
                onClick={() => setIndex(i)}
                className="group block w-full overflow-hidden rounded-md text-left"
                aria-label={`Open photo: ${g.caption}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${g.span === 'wide' ? 'aspect-[16/9] md:aspect-[2/1]' : 'aspect-square'}`}
                  loading="lazy"
                />
              </button>
              <p className="mt-2 text-[13px] text-slate-soft">{g.caption}</p>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox items={gallery} index={index} setIndex={setIndex} />
    </section>
  );
}
