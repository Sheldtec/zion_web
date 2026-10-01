/**
 * Builds the social-sharing images from photographs already on the site.
 *
 * Facebook, WhatsApp and LinkedIn all want a wide JPEG or PNG; the site's own photographs are
 * 16:9 WebP, which several of them will not render in a link preview. This crops them to the
 * 1.91:1 that every platform expects and writes JPEG.
 *
 * Run it again only when the source photographs change:
 *   node scripts/build-social-images.mjs
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const from = (name) => path.join(root, 'public', 'img', name);
const to = (name) => path.join(root, 'public', 'img', 'og', name);

const CARDS = [
  { source: 'hero-1-1600.webp', out: 'college.jpg' },
  { source: 'hero-2-1600.webp', out: 'campus.jpg' },
  { source: 'hero-4-1600.webp', out: 'early-school.jpg' },
];

await mkdir(path.join(root, 'public', 'img', 'og'), { recursive: true });

for (const card of CARDS) {
  const info = await sharp(from(card.source))
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 78, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(to(card.out));
  console.log(`${card.out.padEnd(18)} ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}

// Google asks for the organisation logo as PNG or JPEG in structured data, and the crest only
// exists as WebP. Same pixels, different container.
const logo = await sharp(from('crest-192.webp')).png({ compressionLevel: 9 }).toFile(to('logo.png'));
console.log(`logo.png           ${logo.width}x${logo.height}  ${Math.round(logo.size / 1024)} KB`);
