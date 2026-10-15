import { site } from '../../data/site';

// Hidden by default (site.showTestimonials = false).
// Add ONLY real reviews, copied with permission from the clinic's Google profile.
const reviews = [
  // { quote: '…', name: 'First name, area', treatment: 'Root canal' },
];

export default function Testimonials() {
  if (!reviews.length) return null;
  return (
    <section aria-labelledby="reviews-title" className="bg-enamel py-20 md:py-28">
      <div className="wrap">
        <p className="kicker">Patients</p>
        <h2 id="reviews-title" className="h-section">In their words</h2>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="border-t-2 border-clinic pt-5">
              <blockquote className="text-[17px] text-ink">“{r.quote}”</blockquote>
              <p className="mt-4 text-[14px] text-slate-soft">{r.name} · {r.treatment}</p>
            </li>
          ))}
        </ul>
        <a href={site.googleReviewsLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-10">Read all reviews on Google</a>
      </div>
    </section>
  );
}
