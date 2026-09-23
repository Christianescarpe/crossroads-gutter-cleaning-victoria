const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'D:/images/gutter cleaning';
const destDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function run() {
  const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));
  console.log(`Found ${files.length} images to optimize.`);
  
  const manifest = [];

  for (const file of files) {
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    // simplify name: remove date stamps like -2026-03-18-13-21-56-utc
    const cleanName = baseName.replace(/-\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-utc$/i, '');
    const outFileName = `${cleanName}.webp`;
    const inPath = path.join(srcDir, file);
    const outPath = path.join(destDir, outFileName);

    try {
      const image = sharp(inPath);
      const metadata = await image.metadata();

      // Resize if wider than 1600px
      let pipeline = sharp(inPath);
      if (metadata.width && metadata.width > 1600) {
        pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
      }

      await pipeline
        .webp({ quality: 80, effort: 4 })
        .toFile(outPath);

      const stats = fs.statSync(outPath);
      console.log(`Optimized: ${file} -> ${outFileName} (${(stats.size / 1024).toFixed(1)} KB)`);

      manifest.push({
        original: file,
        filename: outFileName,
        url: `/images/${outFileName}`,
        title: cleanName.replace(/-/g, ' '),
        sizeKB: Math.round(stats.size / 1024)
      });
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  const manifestPath = path.join(__dirname, '..', 'src', 'data', 'images.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Saved image manifest with ${manifest.length} images to ${manifestPath}`);
}

run().catch(console.error);
