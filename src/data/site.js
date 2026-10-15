// ─────────────────────────────────────────────────────────────
// Clinic identity — edit this file first when personalising the
// demo for a new dentist (see README → "30-minute rebrand").
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Smitam Dental Care',
  shortName: 'Smitam',
  marathiWord: 'स्मितम्', // "smile" — used once as a small accent
  tagline: 'Family & specialist dentistry, Rajarampuri',
  established: 2014,

  phoneDisplay: '+91 87660 36310',
  phoneRaw: '+918766036310',
  // Demo number = LocalLeap's own WhatsApp, so prospects' test bookings reach us.
  whatsapp: '918766036310',
  email: 'hello@smitamdental.in',

  addressLines: ['1st Floor, Shree Complex, 4th Lane', 'Rajarampuri, Kolhapur 416008'],
  landmark: 'Above Mahalaxmi Medicals, near Rajarampuri Main Road',
  parking: 'Two-wheeler parking in front; cars on the 4th Lane side road.',
  mapsLink: 'https://maps.google.com/?q=Rajarampuri+Kolhapur',
  mapEmbed:
    'https://www.google.com/maps?q=Rajarampuri,+Kolhapur,+Maharashtra&output=embed',
  googleReviewsLink: 'https://maps.google.com/?q=Rajarampuri+Kolhapur+dentist',

  // Real facts shown in the hero strip (no counters, no invented numbers).
  facts: [
    { title: 'New sterilised kit', text: 'Every patient, opened in front of you' },
    { title: 'Digital RVG X-ray', text: 'Low-dose, shown to you on screen' },
    { title: 'Written plan & cost', text: 'Before any treatment begins' },
  ],

  // LocalLeap concept-demo settings
  agencyName: 'LocalLeap Digital',
  agencyUrl: 'https://localleapdigital.com',
  isConcept: true,
  showTestimonials: false, // switch on only once real patient reviews exist
};

export const nav = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Your first visit', href: '#first-visit' },
  { label: 'Clinic', href: '#clinic' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
