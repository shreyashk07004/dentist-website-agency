# Smitam Dental Care — dentist concept website (LocalLeap Digital)

A sample dental-clinic website used as a **reusable demo template** for dentist outreach. It is a single page built with React 18, Vite 6, Tailwind 3 and lucide-react. It is fully static and needs no backend: bookings go through WhatsApp.

## Run it
```bash
npm install
npm run images    # only if public/images is empty — downloads the Unsplash photos
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```
Deploy: push to GitHub and import into Vercel. `vercel.json` is included, and no settings are needed.

## What's on the page
Concept banner → top info strip → sticky header → hero with an overlapping facts + live OPD-hours card → about + clinic promise → **"what's bothering you?" symptom finder** → treatment index with detail drawer and "from ₹" prices → two doctors with separate timings → children's block → first visit in 4 steps → clinic gallery with lightbox → (hidden) testimonials → **WhatsApp booking form** with date + time slots from the OPD hours → FAQ → map & contact → footer. On desktop there is a floating WhatsApp button; on mobile there is a bottom Call / WhatsApp / Directions bar.

## 30-minute rebrand for a new dentist (the demo workflow)
1. Copy this folder, for example `demo-dr-sharma/`.
2. Edit `src/data/site.js`: clinic name, short name, area, address, landmark, Google Maps link, established year. **Keep `whatsapp` as LocalLeap's number** so the dentist's test booking reaches you.
3. Edit `src/data/doctors.js`: doctor name(s), degrees, timings. Delete the second doctor if it's a solo clinic. If you have no photo, use the clinic's Google Maps photo or keep the stock one.
4. Edit `src/data/hours.js`: copy their hours from Google Maps.
5. In `index.html`, update the `<title>`, description, OG tags and JSON-LD name/address/phone.
6. Optional: swap 2–3 gallery photos for photos from their Google Maps listing.
7. Run `npm run build` and deploy to Vercel as `dr-sharma-demo.vercel.app`. Send the link on WhatsApp.

The hero headline mentions the area ("Rajarampuri, Kolhapur") in `src/components/sections/Hero.jsx`. Change it there too.

## Files
- `src/data/`: all content (site, hours, doctors, treatments, symptoms, faqs, gallery)
- `src/utils/hours.js`: Open/Closed status (Asia/Kolkata) and booking slots
- `src/utils/whatsapp.js`: wa.me links and the formatted booking message
- `design-notes.md`: reference study, palette, type, motifs, anti-generic checklist
- `Dentist_Sample_Website_Brief.md`: the full brief in the agency's standard format
- `PLACEHOLDERS.md`: everything that's fictional and must change for a real client
- `CREDITS.md`: photo credits
- `screenshots/`: portfolio screenshots at 1440 / 1024 / 768 / 390 / 360
