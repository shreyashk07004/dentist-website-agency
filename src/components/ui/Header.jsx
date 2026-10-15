import { useEffect, useState } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { nav } from '../../data/site';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="top" className={`sticky top-0 z-40 bg-white transition-shadow ${scrolled ? 'shadow-[0_1px_0_#DCE5EE]' : ''}`}>
      <div className="wrap flex h-[72px] items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 font-display text-[15px] font-semibold text-ink">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link-underline py-1 hover:text-action">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#book" className="btn-primary hidden !py-2.5 sm:inline-flex">
            <CalendarCheck className="h-4 w-4" /> Book appointment
          </a>
          <button
            className="rounded p-2 text-ink lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <ul className="wrap py-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3.5 font-display text-[17px] font-semibold text-ink">
                  {n.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a href="#book" onClick={() => setOpen(false)} className="btn-primary w-full">Book appointment</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
