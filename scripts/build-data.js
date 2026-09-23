const fs = require('fs');
const path = require('path');

const s1Path = 'C:/Users/Christian/.gemini/antigravity/brain/f1b3cccc-605a-4d3d-8011-f01a9ddaa522/scratch/sheet1_seo_plan.json';
const s2Path = 'C:/Users/Christian/.gemini/antigravity/brain/f1b3cccc-605a-4d3d-8011-f01a9ddaa522/scratch/sheet2_blog_plan.json';

const s1 = JSON.parse(fs.readFileSync(s1Path, 'utf8'));
const s2 = JSON.parse(fs.readFileSync(s2Path, 'utf8'));

const outDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function cleanRow(r) {
  return {
    title: r['Page Title'] || '',
    seoTitle: r['SEO Title'] || '',
    metaDescription: r['Meta Description'] || '',
    url: r['URL'] || '',
    focusKeywords: r['Focus Keywords'] || '',
    contentHtml: r['Page Content (HTML, ~800 words)'] || '',
    internalAnchor1: r['Internal Anchor 1'] || '',
    internalAnchor2: r['Internal Anchor 2'] || '',
    internalAnchor3: r['Internal Anchor 3'] || '',
    externalAnchor: r['External Anchor'] || ''
  };
}

const pages = s1.rows.map(cleanRow);
const blogs = s2.rows.map(cleanRow);

fs.writeFileSync(path.join(outDir, 'pages.json'), JSON.stringify(pages, null, 2));
fs.writeFileSync(path.join(outDir, 'blogs.json'), JSON.stringify(blogs, null, 2));

console.log(`Saved ${pages.length} pages to src/data/pages.json`);
console.log(`Saved ${blogs.length} blogs to src/data/blogs.json`);
