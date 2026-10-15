// "from" prices are PLACEHOLDERS — confirm with the clinic before showing a live site.
// Set `from: null` to hide a price and show "Ask for estimate" instead.
export const treatmentGroups = [
  { id: 'everyday', label: 'Everyday care' },
  { id: 'restore', label: 'Saving & replacing teeth' },
  { id: 'align', label: 'Straightening & appearance' },
];

export const treatments = [
  {
    id: 'checkup',
    group: 'everyday',
    name: 'Check-up & consultation',
    fixes: 'A full look at teeth and gums, with an X-ray if needed',
    visits: '1 visit · 20–30 min',
    from: 300,
    detail:
      'We check every tooth, your gums and your bite, and take a digital X-ray only if something needs a closer look. You leave with a written note of what we found and what (if anything) needs doing.',
    recovery: 'Nothing to recover from.',
  },
  {
    id: 'cleaning',
    group: 'everyday',
    name: 'Scaling & polishing',
    fixes: 'Tartar, stains, bleeding gums, bad breath',
    visits: '1 visit · 40 min',
    from: 800,
    detail:
      'An ultrasonic scaler removes hardened tartar above and just below the gum line, then a polish takes off tea and coffee stains. Recommended every 6–12 months.',
    recovery: 'Mild sensitivity for a day or two in some people.',
  },
  {
    id: 'filling',
    group: 'everyday',
    name: 'Tooth-coloured fillings',
    fixes: 'Cavities, small chips, food getting stuck',
    visits: '1 visit · 30–45 min',
    from: 900,
    detail:
      'Decay is removed and the tooth is rebuilt with composite resin matched to your tooth shade. No silver amalgam is used.',
    recovery: 'Eat normally once the numbness wears off.',
  },
  {
    id: 'kids',
    group: 'everyday',
    name: 'Children’s dentistry',
    fixes: 'First check-up, cavities in milk teeth, fluoride, sealants',
    visits: 'Short visits · 15–30 min',
    from: 300,
    detail:
      'We keep children’s visits short and explain everything with a mirror and models first. Fluoride varnish and pit-and-fissure sealants help prevent cavities in new back teeth.',
    recovery: 'None — most children go straight back to school.',
  },
  {
    id: 'rct',
    group: 'restore',
    name: 'Root canal treatment',
    fixes: 'Throbbing pain, pain at night, an infected or abscessed tooth',
    visits: '1–2 visits · 45–60 min each',
    from: 3500,
    detail:
      'The infected pulp inside the tooth is cleaned out with rotary files, shaped, disinfected and sealed. Done under local anaesthesia — most patients say it feels like a long filling. A crown is usually advised afterwards on back teeth.',
    recovery: 'Tenderness when biting for 2–3 days.',
  },
  {
    id: 'crown',
    group: 'restore',
    name: 'Crowns & bridges',
    fixes: 'Weak or root-canal-treated teeth, one missing tooth',
    visits: '2 visits · about a week apart',
    from: 3000,
    detail:
      'A crown is a cap that covers and protects a weak tooth. A bridge uses the teeth on both sides to hold a replacement for a missing tooth. Options: metal-ceramic or full zirconia (metal-free).',
    recovery: 'Avoid very sticky food for the first day.',
  },
  {
    id: 'implant',
    group: 'restore',
    name: 'Dental implants',
    fixes: 'One or more missing teeth, a loose bridge',
    visits: '2–3 stages over 3–4 months',
    from: 25000,
    detail:
      'A titanium post is placed in the jawbone and, once it has bonded (about 3 months), a crown is fixed on top. It does not depend on neighbouring teeth. We check bone with an X-ray (or CBCT scan at a partner centre) before advising you.',
    recovery: 'Mild swelling for 2–3 days after placement.',
  },
  {
    id: 'extraction',
    group: 'restore',
    name: 'Extractions & wisdom teeth',
    fixes: 'Badly broken teeth, painful or stuck wisdom teeth',
    visits: '1 visit · 20–60 min',
    from: 700,
    detail:
      'Simple extractions take a few minutes. Impacted wisdom teeth need a minor surgical procedure; we take an X-ray first and tell you plainly how difficult yours looks.',
    recovery: 'Soft food for 24 hours; stitches (if any) out in a week.',
  },
  {
    id: 'dentures',
    group: 'restore',
    name: 'Dentures',
    fixes: 'Many or all teeth missing, loose old dentures',
    visits: '4–5 short visits',
    from: 12000,
    detail:
      'Complete or partial dentures, made from impressions of your mouth and adjusted until they sit comfortably. Implant-supported dentures are available for a firmer fit.',
    recovery: 'A week or two to get used to speaking and eating.',
  },
  {
    id: 'braces',
    group: 'align',
    name: 'Braces (metal & ceramic)',
    fixes: 'Crooked or crowded teeth, gaps, forward teeth, bite problems',
    visits: 'Monthly visits · 12–24 months',
    from: 30000,
    detail:
      'Brackets and a wire slowly move teeth into place. Ceramic (tooth-coloured) brackets are less visible. Best started around age 11–14, but adults do well too.',
    recovery: 'Soreness for a few days after each adjustment.',
  },
  {
    id: 'aligners',
    group: 'align',
    name: 'Clear aligners',
    fixes: 'Mild to moderate crowding and gaps — without visible braces',
    visits: 'Visits every 6–8 weeks · 6–18 months',
    from: 75000,
    detail:
      'A series of near-invisible plastic trays, each worn for 1–2 weeks, made from a 3D scan of your teeth. You remove them to eat. They need to be worn about 22 hours a day to work.',
    recovery: 'Slight pressure for a day with each new tray.',
  },
  {
    id: 'whitening',
    group: 'align',
    name: 'Teeth whitening',
    fixes: 'Yellowing from age, tea, coffee or tobacco',
    visits: '1 visit · 60 min',
    from: 6000,
    detail:
      'In-clinic whitening gel lightens natural teeth by a few shades. It does not change the colour of crowns or fillings, so we check those first.',
    recovery: 'Some sensitivity for 24–48 hours; avoid tea and coffee for a day.',
  },
];
