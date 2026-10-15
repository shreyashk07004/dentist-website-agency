const steps = [
  { t: 'Message or call', d: 'Tell us the problem and a time that suits you. We confirm on WhatsApp within OPD hours.' },
  { t: 'Check-up & X-ray', d: 'About 20 minutes. A digital X-ray only if needed — you see it on the screen with us.' },
  { t: 'Written plan & cost', d: 'Your options and the cost of each step, on paper. Take it home and think it over.' },
  { t: 'Treatment & re-check', d: 'Booked at your convenience, with a free follow-up visit within 30 days.' },
];

export default function FirstVisit() {
  return (
    <section id="first-visit" aria-labelledby="visit-title" className="bg-ink py-20 text-white md:py-28">
      <div className="wrap">
        <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-3 flex items-center gap-3 font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-clinic">
              <span className="block h-px w-8 bg-clinic" /> Your first visit
            </p>
            <h2 id="visit-title" className="text-[2rem] font-bold leading-[1.1] text-white sm:text-[2.6rem]">
              Four steps, and nothing starts until you say yes.
            </h2>
          </div>
        </div>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="reveal bg-ink p-7">
              <span className="outline-numeral block text-[4.25rem]" aria-hidden="true">0{i + 1}</span>
              <h3 className="mt-4 text-[1.25rem] font-bold text-white">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/75">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
