import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../data/faqs';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="reveal lg:col-span-4">
          <p className="kicker">Questions</p>
          <h2 id="faq-title" className="h-section">What patients usually ask us first.</h2>
        </div>
        <ul className="reveal border-t border-ink lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-line">
                <h3 className="text-[18px]">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-display font-bold text-ink hover:text-action"
                  >
                    {f.q}
                    {isOpen ? <Minus className="h-5 w-5 shrink-0 text-clinic" /> : <Plus className="h-5 w-5 shrink-0 text-clinic" />}
                  </button>
                </h3>
                <div id={`faq-${i}`} hidden={!isOpen} className="max-w-2xl pb-6 text-[16px]">{f.a}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
