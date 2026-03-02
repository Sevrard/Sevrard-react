import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '..', 'src', 'assets');

const images = ['HoleRed.png', 'Mountain.png', 'mountain2.png', 'p2.jpeg'];

for (const file of images) {
  const input = path.join(assetsDir, file);
  const output = path.join(assetsDir, path.basename(file, path.extname(file)) + '.webp');
  await sharp(input)
    .webp({ quality: 85 })
    .toFile(output);
  console.log(`Converted ${file} -> ${path.basename(output)}`);
}

console.log('Done.');
