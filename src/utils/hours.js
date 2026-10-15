import { clinicHours } from '../data/hours';

const toMin = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

export function formatTime(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  const suffix = h >= 12 ? 'pm' : 'am';
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}:${String(m).padStart(2, '0')} ${suffix}`;
}

// Current day/minute in the clinic's timezone, regardless of the visitor's device.
export function clinicNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: clinicHours.timezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const minutes = (Number(get('hour')) % 24) * 60 + Number(get('minute'));
  return { day, minutes };
}

// { open: boolean, label: string } e.g. "Open · closes 1:30 pm" / "Closed · opens 5:00 pm"
export function openStatus(date = new Date()) {
  const { day, minutes } = clinicNow(date);
  const today = clinicHours.sessions[day] || [];
  for (const s of today) {
    if (minutes >= toMin(s.from) && minutes < toMin(s.to)) {
      return { open: true, label: `Open now · until ${formatTime(toMin(s.to))}` };
    }
  }
  const later = today.find((s) => toMin(s.from) > minutes);
  if (later) return { open: false, label: `Closed · opens ${formatTime(toMin(later.from))} today` };
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const first = (clinicHours.sessions[d] || [])[0];
    if (first) {
      const name = i === 1 ? 'tomorrow' : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d];
      return { open: false, label: `Closed · opens ${name} ${formatTime(toMin(first.from))}` };
    }
  }
  return { open: false, label: 'Closed' };
}

// Bookable slots for a YYYY-MM-DD date. Past slots are hidden for today.
export function slotsFor(dateStr) {
  if (!dateStr) return [];
  const [y, m, d] = dateStr.split('-').map(Number);
  const day = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  const sessions = clinicHours.sessions[day] || [];
  const now = clinicNow();
  const isToday = dateStr === todayISO();
  const step = clinicHours.slotMinutes;
  const out = [];
  for (const s of sessions) {
    for (let t = toMin(s.from); t + step <= toMin(s.to); t += step) {
      if (isToday && t <= now.minutes + 30) continue;
      out.push(formatTime(t));
    }
  }
  return out;
}

export function todayISO(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return new Intl.DateTimeFormat('en-CA', { timeZone: clinicHours.timezone }).format(d);
}
