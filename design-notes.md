# Design notes — Smitam Dental Care (dentist concept sample)

Written before building, from studying the references in Chrome at 1440px (computed fonts and colours were read from the live pages) and from page text where the browser blocked a site.

## 1. References studied

| Reference | What I saw | Take | Leave |
|---|---|---|---|
| **infinitesmiles.in** (main base) | Quicksand headings; navy `#283B6A` + sky `#1EAEDD`; top utility strip (address, hours, socials); hero with headline and doctor photo; a **white facts strip + blue "Opening Hours" card overlapping the bottom of the hero**; big "12+" numeral beside a clinic photo; full-width sky-blue band "Facing any dental problem?"; doctors; reviews | The section rhythm: utility strip → hero → overlapping hours card → about with big numeral → blue problem band → treatments → doctors | Slider, pill "Read More" buttons, centred everything, vague "12+ years" stat |
| **kolhapurdentalclinic.com** | Urbanist (h2) + Inter; deep navy `#10244B` band; blue `#0E8FC9` services band; `#4A7CD2` buttons; preloader | Urbanist as the display face; deep navy colour block | "333+ happy patients" counter, identical icon cards, preloader |
| **oralvalue.com** | Dated table layout, but two doctors with **separate timings**, separate ortho and pedo (kids) centres | Per-doctor OPD timings; dedicated children's block | Pink/cyan palette, 3-image slider, italic serif links |
| **smylexl.com** (text only — blocked in browser) | ~21 treatment links, doctor card, WhatsApp CTA with **pre-filled message**, refund/re-treatment policy page | Deep treatment index; pre-filled WhatsApp; a written "clinic promise" | Chain-network clutter |
| **madhavmission.org** (text only — blocked in browser) | Top address/call strip, clear OPD hours (Mon–Sat / Sun), 9 treatment cards with photos, booking block | Clear OPD hours everywhere | Lorem ipsum, broken links, inflated counters, partner logos |
| **ekdantdentist.in** | Inter, `#006EB8`, "Book an Appointment" + "View Locations" CTA pair, orange icon tiles | Two-CTA hero | Empty image blocks, orange icon-tile grid |

**Decision:** I replicated Infinite Smiles' structure and its overlapping hours card, then added the strongest single idea from each other reference. The design is calmer and more editorial, and it uses no invented numbers.

## 2. Tokens

| Token | Hex | Use | ~Share |
|---|---|---|---|
| Ink Navy | `#13294B` | Headings, first-visit band, text on light | 25% |
| Ink Deep | `#0D1E38` | Footer, concept banner | — |
| Clinic Blue | `#1A9BD7` | Thin rules, icons, outline numerals, motif | 10% |
| Clinic Dark | `#1281B5` | Symptom-finder band, kicker text | — |
| Action Blue | `#0B6FA8` | Buttons and links with white text (AA) | 5% |
| Enamel | `#F4F8FB` | Alternate sections | 15% |
| White | `#FFFFFF` | Base | 40% |
| Slate | `#3B4758` / `#5E6B7D` | Body / secondary text | — |
| Mint | `#2FB37A` | "Open now" dot only | <1% |

Type: **Urbanist** 600–800 (display and numerals), **Figtree** 400–600 (body), **Tiro Devanagari Marathi** (one word, "स्मितम्"). Banned: Inter, Poppins, Quicksand, Montserrat.

Radii: 4–6px. 1px `#DCE5EE` borders instead of shadows. Max width 1200px. Headings are left-aligned, and grids are asymmetric (7/5, 3/9, 4/8).

## 3. Signature motifs
1. An **overlapping facts + OPD-hours card** across the bottom edge of the hero (after Infinite Smiles).
2. A **live Open/Closed badge** in Asia/Kolkata time, which knows the lunch break and Sunday hours.
3. **Outline numerals** (Urbanist with a stroke), used only for true things: "2014" and the steps 01–04.
4. A **line-drawn tooth-arch SVG**, used large and faint in the blue band and the footer.
5. An **editorial treatment index** (name · what it fixes · from ₹) in place of icon cards.

## 4. Anti-generic checklist (all pass)
- [x] No gradients, glow blobs, glassmorphism, or purple
- [x] No rows of identical icon-in-circle cards
- [x] No emoji icons; lucide line icons only, used sparingly
- [x] No fake counters, awards or reviews (testimonials are hidden until real ones exist)
- [x] No lorem ipsum, no dummy social links (none are shown)
- [x] No "state-of-the-art / elevate / look no further / best dentist"
- [x] Not everything centred; no pill + rounded-2xl + soft-shadow everywhere
- [x] Photos are real dental-clinic photos in cool, neutral tones
