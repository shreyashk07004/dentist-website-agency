import { site } from '../data/site';

export function waLink(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const quickMessage = () =>
  `Hello ${site.name}, I'd like to book a dental appointment. Please share the available times.`;

export function treatmentMessage(name) {
  return `Hello ${site.name}, I'd like to know more about *${name}* and book a consultation. Please share the available times.`;
}

export function symptomMessage(label) {
  return `Hello ${site.name}, I have a problem: *${label}*. Can I get an appointment to have it checked?`;
}

function prettyDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  });
}

export function bookingMessage(f) {
  const lines = [
    `*Appointment request — ${site.name}*`,
    '',
    `*Name:* ${f.name.trim()}`,
    `*Phone:* ${f.phone.trim()}`,
    `*Visit for:* ${f.treatment}`,
    `*Doctor:* ${f.doctor}`,
    `*Preferred date:* ${prettyDate(f.date)}`,
    `*Preferred time:* ${f.slot}`,
    `*First visit:* ${f.firstVisit ? 'Yes' : 'No, returning patient'}`,
  ];
  if (f.note.trim()) lines.push(`*Note:* ${f.note.trim()}`);
  lines.push('', 'Please confirm the time. Thank you.');
  return lines.join('\n');
}
