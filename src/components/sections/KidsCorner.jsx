const points = [
  { t: 'First visit by age one', d: 'Or as soon as the first teeth appear. It’s a two-minute look, mostly on your lap.' },
  { t: 'Tell-show-do', d: 'We show every instrument on a finger first and name it. Nothing happens by surprise.' },
  { t: 'Sealants & fluoride', d: 'A quick coating on new back teeth that prevents most cavities in children.' },
  { t: 'Habits & early bite checks', d: 'Thumb-sucking, mouth breathing and crowding are easier to correct early.' },
];

export default function KidsCorner() {
  return (
    <section aria-labelledby="kids-title" className="py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="reveal lg:col-span-6">
          <p className="kicker">For parents</p>
          <h2 id="kids-title" className="h-section">Children’s visits are short, slow and explained.</h2>
          <p className="mt-5 max-w-lg text-[17px]">
            A good first experience decides how a child feels about dentists for years. We book children in the
            morning when they’re fresh, keep a parent in the room, and stop if they need a break.
          </p>
          <dl className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.t} className="border-l-2 border-clinic pl-4">
                <dt className="font-display text-[17px] font-bold text-ink">{p.t}</dt>
                <dd className="mt-1 text-[15px] leading-snug text-slate-soft">{p.d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal lg:col-span-5 lg:col-start-8">
          <img
            src="/images/kids-checkup.jpg"
            alt="Dentist gently checking a young boy's teeth"
            className="aspect-[4/5] w-full rounded-md object-cover object-[30%_50%]"
            loading="lazy"
            width="1000"
            height="1250"
          />
        </div>
      </div>
    </section>
  );
}
