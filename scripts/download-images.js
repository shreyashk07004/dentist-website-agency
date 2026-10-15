// Downloads the Unsplash photos used on the site into public/images/.
// Run once with: npm run images   (credits are listed in CREDITS.md)
import fs from 'fs';
import path from 'path';
import https from 'https';

const base = 'https://images.unsplash.com/photo-';

const images = [
  { file: 'hero-consult.jpg', id: '1777331903190-341a3dd0441b', w: 1400 },
  { file: 'doctor-aditi.jpg', id: '1757125736482-328a3cdd9743', w: 800 },
  { file: 'doctor-rohan.jpg', id: '1612349317150-e413f6a5b16d', w: 800 },
  { file: 'clinic-operatory.jpg', id: '1629909613654-28e377c37b09', w: 1200 },
  { file: 'clinic-blue-chair.jpg', id: '1643660527190-4f401370f788', w: 1000 },
  { file: 'clinic-window-chair.jpg', id: '1728342057953-94bfad8f0e7e', w: 1000 },
  { file: 'clinic-consult-desk.jpg', id: '1704455306251-b4634215d98f', w: 1000 },
  { file: 'clinic-xray-monitor.jpg', id: '1755526739866-c73f65b82f8e', w: 1000 },
  { file: 'clinic-instruments.jpg', id: '1642844744022-d76a9af3711a', w: 1000 },
  { file: 'clinic-chair-art.jpg', id: '1643660526741-094639fbe53a', w: 1000 },
  { file: 'kids-checkup.jpg', id: '1758205307836-0829c799890b', w: 1000 },
  { file: 'aligner-smile.jpg', id: '1609840113929-b130355987e1', w: 900 },
  { file: 'implant-model.jpg', id: '1593022356769-11f762e25ed9', w: 900 },
  { file: 'doctor-explaining.jpg', id: '1606811841689-23dfddce3e95', w: 1000 },
];

const outDir = path.resolve('public/images');
fs.mkdirSync(outDir, { recursive: true });

function get(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} ${url}`));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

for (const img of images) {
  const dest = path.join(outDir, img.file);
  if (fs.existsSync(dest)) { console.log('skip', img.file); continue; }
  const url = `${base}${img.id}?auto=format&fm=jpg&fit=crop&w=${img.w}&q=78`;
  await get(url, dest);
  console.log('saved', img.file);
}
