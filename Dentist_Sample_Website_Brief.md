# Dentist Sample Website — Build Brief (LocalLeap Digital)

> This brief describes the site that was built in this folder. Use it to rebuild or extend the site with Antigravity or Claude Code, or as the template for future clinic briefs. The full reference study is in `design-notes.md`.

## Project overview
- **Business (fictional):** Smitam Dental Care, a two-doctor family + specialist clinic
- **Tagline:** Family & specialist dentistry, Rajarampuri
- **Location placeholder:** 1st Floor, Shree Complex, 4th Lane, Rajarampuri, Kolhapur 416008
- **Hours:** Mon–Sat 10:00–1:30 & 5:00–8:30 · Sunday 10:00–1:00 (appointment only)
- **Purpose for LocalLeap:** the main sales demo for dentist outreach. It must be personalisable for a real clinic in about 30 minutes (see README).

## A. Design Direction

**A1 Process.** Open every reference at 1440 and 390, screenshot them, write `design-notes.md`, build the hero first and compare it with the references, then build section by section. *(Done; see design-notes.md.)*

**A2 Take / leave.** See the table in design-notes.md. In short: take the structure from Infinite Smiles (overlapping hours card, blue problem band, big numeral), Urbanist + deep navy from Kolhapur Dental Clinic, per-doctor timings from Oral Value, treatment depth + pre-filled WhatsApp from SmyleXL, and clear OPD hours from Madhav Mission. Leave sliders, counters, icon-card grids, lorem ipsum and preloaders.

**A3 Palette.** Ink Navy `#13294B` (25%), Clinic Blue `#1A9BD7` (10%, accents only), Action Blue `#0B6FA8` (buttons, 5%), Enamel `#F4F8FB` (15%), White (40%), Slate `#3B4758` text, Mint `#2FB37A` for the open dot only.

**A4 Typography.** Urbanist 600–800 for headings, Figtree 400–600 for body, Tiro Devanagari Marathi for one accent word. Banned: Inter, Poppins, Quicksand, Montserrat, Roboto.

**A5 Signature motifs.** The overlapping facts + OPD hours card; a live Open/Closed badge (IST, aware of the lunch break); outline numerals for true facts only (2014, steps 01–04); a line-drawn tooth-arch SVG; an editorial treatment index.

**A6 Copy tone.** Calm, specific, the way a doctor speaks. It explains costs and timelines plainly. Banned: "state-of-the-art", "elevate", "look no further", "best dentist in…", "painless guaranteed", "world-class".

**A7 Layout.** Left-aligned headings; asymmetric 12-column grids; 4–6px radii; 1px borders instead of shadows; max width 1200px; 16px+ side gutters on mobile.

**A8 Motion.** A 14px fade-up on scroll, a 150ms hover underline, and a slow pulse on the open dot. All of it is disabled under `prefers-reduced-motion`. No carousels.

**A9 Fail conditions.** Gradients or glow blobs; identical icon-in-circle cards; emoji icons; fake counters, reviews or awards; lorem ipsum; dummy social links; everything centred; pill + rounded-2xl + soft shadow on everything.

**A10 Photography.** Real dental clinic interiors, a dentist talking with a patient, X-ray on a screen, instruments, a child's check-up. Cool, neutral tones. No cartoon teeth, no glossy "perfect smile" close-ups as the hero.

## B. Content & features
- **Stack:** React 18 + Vite 6 + Tailwind 3 + lucide-react, static, deployed on Vercel.
- **Data files:** `site.js`, `hours.js`, `doctors.js`, `treatments.js` (12, in 3 groups), `symptoms.js` (8), `faqs.js` (8), `gallery.js` (6).
- **Sections in order:** concept banner → utility strip → sticky header → hero + overlapping facts/hours card → about + clinic promise → symptom finder (blue band) → treatment index + drawer → doctors (2, alternating, own timings) → kids' block → first visit 01–04 (navy) → clinic gallery + lightbox → testimonials (hidden flag) → booking form → FAQ accordion → contact + map → footer with LocalLeap credit.
- **WhatsApp automations:**
  1. Booking form (name, mobile, reason, doctor, date, time slot generated from OPD hours, first visit, note). It validates input, then opens wa.me with a formatted *bold-label* message.
  2. Symptom finder: "Ask the doctor on WhatsApp" with the problem pre-filled.
  3. Treatment drawer: "Ask a question" with the treatment name pre-filled.
  4. Floating WhatsApp (desktop) + mobile action bar (Call · WhatsApp · Directions).
- **Concept banner** (dismissible) and footer credit "Concept website by LocalLeap Digital".

## C. SEO, quality, handover
- Title/description/OG tags; `og-image.jpg`; JSON-LD `Dentist` with opening hours; `noindex` meta + `robots.txt` Disallow for the demo.
- Targets: Lighthouse Performance 90+, Accessibility 95+. Tested at 360/390/768/1024/1440 with no horizontal scroll.
- Accessibility: skip link, labelled form fields with error messages, `aria-expanded` accordions, dialogs with Escape + focus handling, keyboard-reachable gallery.
- `screenshots/` holds portfolio images. The README has rebrand steps, PLACEHOLDERS.md lists every fictional value, and CREDITS.md lists the photos.

## Final checklist
- [x] Hero matches the reference structure (overlapping hours card)
- [x] All content in `src/data/*`
- [x] Booking slots respect hours, the lunch gap and Sunday; past slots are hidden for today
- [x] Open/Closed badge uses Asia/Kolkata time regardless of the visitor's timezone
- [x] Concept banner, footer credit, noindex
- [x] No fake stats or reviews; testimonials off
- [x] Build passes; no overflow at 360–1440
- [ ] Confirm agency domain (`localleapdigital.com` vs `localleap.digital`)
- [ ] Agree "from ₹" prices with the partner before showing them to real dentists
- [ ] Add to the agency site's `projects.js` with `screenshots/smitam_1440_hero.png`
