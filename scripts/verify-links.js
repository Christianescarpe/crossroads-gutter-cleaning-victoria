const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('d:/antigravity projects/Crossroads Gutter Cleaning Victoria/src/data/pages.json', 'utf8'));
const blogs = JSON.parse(fs.readFileSync('d:/antigravity projects/Crossroads Gutter Cleaning Victoria/src/data/blogs.json', 'utf8'));

// All valid site paths
const validPaths = new Set([
  '/',
  '/faq',
  '/areas-we-serve',
  '/contact',
  '/blog',
  ...pages.map(p => p.url),
  ...blogs.map(b => b.url)
]);

const allItems = [...pages, ...blogs];
let brokenCount = 0;

allItems.forEach(item => {
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(item.contentHtml)) !== null) {
    const href = m[1];
    if (href.startsWith('/')) {
      const cleanPath = href.split('#')[0].replace(/\/$/, '') || '/';
      if (!validPaths.has(cleanPath)) {
        console.warn(`[BROKEN LINK] in "${item.title}" (${item.url}) -> "${href}"`);
        brokenCount++;
      }
    }
  }
});

if (brokenCount === 0) {
  console.log(`✓ All internal links verified! 0 broken links found across ${allItems.length} pages.`);
} else {
  console.log(`Found ${brokenCount} broken internal links.`);
}
