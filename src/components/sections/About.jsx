import { Check } from 'lucide-react';
import { site } from '../../data/site';

const promise = [
  'A written treatment plan with the cost of each step — before we start.',
  'Options explained side by side (for example implant vs bridge), including doing nothing.',
  'A new sterilised instrument kit for every patient, opened in front of you.',
  'A free re-check visit within 30 days of any filling, root canal or crown.',
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="reveal relative lg:col-span-5">
          <img
            src="/images/clinic-operatory.jpg"
            alt="Treatment room at the clinic with dental chair and overhead lamp"
            className="aspect-[4/5] w-full rounded-md object-cover"
            loading="lazy"
            width="1200"
            height="1500"
          />
          <div className="absolute -bottom-6 right-4 rounded-md bg-white px-5 py-4 shadow-[0_1px_0_#DCE5EE,0_0_0_1px_#DCE5EE] sm:-right-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-soft">In Rajarampuri since</p>
            <p className="outline-numeral text-[4.5rem]">{site.established}</p>
          </div>
        </div>

        <div className="reveal lg:col-span-7 lg:pl-8">
          <p className="kicker">About the clinic</p>
          <h2 id="about-title" className="h-section max-w-xl">
            A neighbourhood clinic run by two specialists.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-[17px]">
            <p>
              Smitam — <span className="font-marathi text-[1.15em] text-ink">{site.marathiWord}</span>, “a smile” — is a
              two-chair clinic on the first floor of Shree Complex, Rajarampuri. Dr. Rohan started it in {site.established};
              Dr. Aditi joined in 2017 and now looks after braces, aligners and most of our younger patients.
            </p>
            <p>
              Most people who come to us have been putting off a visit because of a bad experience or a fear of
              surprise bills. So we slow down: we show you the X-ray, explain what we see, and write down what each
              option costs. You decide; we don’t push.
            </p>
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <h3 className="font-display text-[19px] font-bold">Our clinic promise</h3>
            <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {promise.map((p) => (
                <li key={p} className="flex gap-3 text-[15.5px] leading-snug">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-clinic" strokeWidth={2.2} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
