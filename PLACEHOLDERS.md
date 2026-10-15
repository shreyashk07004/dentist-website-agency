# Placeholders — Smitam Dental Care

Everything a real clinic would change. Content lives in `src/data/*`. No layout code needs editing.

## 1. Clinic identity — `src/data/site.js`

| Item | Current (fictional) value | Notes |
|---|---|---|
| `name` / `shortName` | Smitam Dental Care / Smitam | Also update `<title>`, meta and JSON-LD in `index.html` |
| `marathiWord` | स्मितम् | Optional; used once in About |
| `established` | 2014 | Shown as the outline numeral |
| `phoneDisplay` / `phoneRaw` | +91 87660 36310 | LocalLeap's number in demos |
| `whatsapp` | 918766036310 | **Keep LocalLeap's number for demos** so test bookings reach us |
| `email` | hello@smitamdental.in | Fictional |
| `addressLines`, `landmark`, `parking` | Shree Complex, Rajarampuri | Fictional address |
| `mapsLink`, `mapEmbed`, `googleReviewsLink` | Generic Rajarampuri search | Replace with the clinic's Google Maps place link and embed |
| `facts` (3) | Sterilised kit · RVG X-ray · Written plan | Change only to things the clinic really does |
| `agencyUrl` | https://localleapdigital.com | ⚠ Other samples use `localleap.digital` — confirm the final agency domain |
| `isConcept` | true | Shows the Concept banner. Set false for a live client site |
| `showTestimonials` | false | Turn on only after adding real reviews in `Testimonials.jsx` |

## 2. Hours — `src/data/hours.js`
Sessions per weekday (morning/evening), slot length (30 min), summary rows and the emergency note. The booking slots and the Open/Closed badge both read from this file.

## 3. Doctors — `src/data/doctors.js`
Names, degrees, **MSDC registration numbers (`A-XXXXX` placeholders)**, bio, interests, per-doctor timings and photos. Delete one entry for a solo practice.

## 4. Treatments & prices — `src/data/treatments.js`
The `from` prices (₹300 – ₹75,000) are **placeholders based on typical Tier-2 city ranges**. Confirm them with the clinic, or set `from: null` to show "Ask for estimate".

## 5. Other content
- `src/data/symptoms.js`: symptom finder text (general guidance)
- `src/data/faqs.js`: 8 FAQs (the parking answer mentions a lift; check this)
- `src/data/gallery.js`: 6 clinic photos (replace with the clinic's own)
- `src/components/sections/About.jsx`: clinic story paragraph and "clinic promise" list (the free 30-day re-check is a placeholder policy)

## 6. SEO / deployment — `index.html`, `public/`
- `<meta name="robots" content="noindex, nofollow">` and `public/robots.txt` (Disallow: /). **Remove both for a live client site.**
- JSON-LD `Dentist` schema: name, phone, address, hours
- `public/og-image.jpg`: WhatsApp link preview image
- `public/favicon.svg`: tooth outline
