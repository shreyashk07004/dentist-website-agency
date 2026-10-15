// OPD timings. Days use JS numbering: 0 = Sunday … 6 = Saturday.
// Each day can have several sessions (morning / evening). Times are 24h "HH:MM".
export const clinicHours = {
  timezone: 'Asia/Kolkata',
  slotMinutes: 30,
  sessions: {
    0: [{ from: '10:00', to: '13:00' }], // Sunday — morning only, by appointment
    1: [{ from: '10:00', to: '13:30' }, { from: '17:00', to: '20:30' }],
    2: [{ from: '10:00', to: '13:30' }, { from: '17:00', to: '20:30' }],
    3: [{ from: '10:00', to: '13:30' }, { from: '17:00', to: '20:30' }],
    4: [{ from: '10:00', to: '13:30' }, { from: '17:00', to: '20:30' }],
    5: [{ from: '10:00', to: '13:30' }, { from: '17:00', to: '20:30' }],
    6: [{ from: '10:00', to: '13:30' }, { from: '17:00', to: '20:30' }],
  },
  // Short rows shown in the hours card and footer
  summary: [
    { days: 'Mon – Sat', time: '10:00 am – 1:30 pm', note: 'Morning' },
    { days: 'Mon – Sat', time: '5:00 pm – 8:30 pm', note: 'Evening' },
    { days: 'Sunday', time: '10:00 am – 1:00 pm', note: 'Appointment only' },
  ],
  emergencyNote: 'Severe pain or swelling after hours? Call — we answer until 10 pm.',
};
