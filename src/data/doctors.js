// Two-doctor setup (common in Kolhapur clinics). Remove one entry for a solo practice.
export const doctors = [
  {
    id: 'aditi',
    name: 'Dr. Aditi Kulkarni',
    degrees: 'BDS, MDS (Orthodontics)',
    role: 'Orthodontist · Braces & clear aligners',
    regNo: 'MSDC Reg. No. A-XXXXX',
    image: '/images/doctor-aditi.jpg',
    imagePosition: '50% 20%',
    bio: 'Aditi straightens teeth for teenagers and adults — metal and ceramic braces, and clear aligners for people who would rather not show their treatment. She also sees most of the clinic’s young patients.',
    interests: ['Braces & aligners', 'Children’s dentistry', 'Habit correction (thumb-sucking)'],
    timings: [
      { days: 'Mon, Wed, Fri', time: '10:00 am – 1:30 pm' },
      { days: 'Tue – Sat', time: '5:00 pm – 8:30 pm' },
    ],
  },
  {
    id: 'rohan',
    name: 'Dr. Rohan Kulkarni',
    degrees: 'BDS, MDS (Prosthodontics)',
    role: 'Prosthodontist · Implants, crowns & dentures',
    regNo: 'MSDC Reg. No. A-XXXXX',
    image: '/images/doctor-rohan.jpg',
    imagePosition: '50% 15%',
    bio: 'Rohan replaces and rebuilds teeth — implants, crowns, bridges and dentures — and handles most root canal treatments. He started the clinic in 2014 after six years in practice in Pune.',
    interests: ['Dental implants', 'Root canal treatment', 'Full-mouth rehabilitation'],
    timings: [
      { days: 'Mon – Sat', time: '10:00 am – 1:30 pm' },
      { days: 'Mon, Thu', time: '5:00 pm – 8:30 pm' },
      { days: 'Sunday', time: '10:00 am – 1:00 pm' },
    ],
  },
];
