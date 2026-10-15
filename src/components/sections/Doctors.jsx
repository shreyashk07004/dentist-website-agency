import { doctors } from '../../data/doctors';

export default function Doctors() {
  return (
    <section id="doctors" aria-labelledby="doctors-title" className="bg-enamel py-20 md:py-28">
      <div className="wrap">
        <div className="reveal max-w-2xl">
          <p className="kicker">Your doctors</p>
          <h2 id="doctors-title" className="h-section">You’ll be treated by the same two people every time.</h2>
        </div>

        <div className="mt-14 space-y-16">
          {doctors.map((d, i) => (
            <article key={d.id} className="reveal grid gap-8 md:grid-cols-12 md:gap-10" aria-labelledby={`dr-${d.id}`}>
              <div className={`md:col-span-5 lg:col-span-4 ${i % 2 ? 'md:order-2 md:col-start-8 lg:col-start-9' : ''}`}>
                <img
                  src={d.image}
                  alt={`Portrait of ${d.name}`}
                  className="aspect-square w-full rounded-md object-cover md:aspect-[4/5]"
                  style={{ objectPosition: d.imagePosition }}
                  loading="lazy"
                  width="800"
                  height="1000"
                />
              </div>
              <div className={`md:col-span-7 lg:col-span-7 ${i % 2 ? 'md:order-1 md:col-start-1' : 'lg:col-start-6'}`}>
                <p className="font-display text-[14px] font-semibold text-clinic-dark">{d.role}</p>
                <h3 id={`dr-${d.id}`} className="mt-1 text-[2rem] font-bold leading-tight">{d.name}</h3>
                <p className="mt-1 text-[15px] text-slate-soft">{d.degrees} · {d.regNo}</p>
                <p className="mt-5 max-w-xl text-[17px]">{d.bio}</p>

                <div className="mt-7 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-soft">Special interest</p>
                    <ul className="mt-2 space-y-1.5 text-[15.5px] text-ink">
                      {d.interests.map((x) => (
                        <li key={x} className="flex items-center gap-2.5"><span className="h-px w-3 bg-clinic" />{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-soft">Available</p>
                    <dl className="mt-2 divide-y divide-line border-y border-line text-[14.5px]">
                      {d.timings.map((t) => (
                        <div key={t.days + t.time} className="flex justify-between gap-3 py-2">
                          <dt className="text-slate">{t.days}</dt>
                          <dd className="whitespace-nowrap font-semibold tabular-nums text-ink">{t.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
