const fs = require('fs');
const path = require('path');
const { SITE_URL, pageRoutes, projectRoutes } = require('./prerender-routes');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'src', 'main.jsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const robots = fs.readFileSync(path.join(root, 'public', 'robots.txt'), 'utf8');
const faviconIco = fs.readFileSync(path.join(root, 'public', 'favicon.ico'));
const favicon48 = fs.readFileSync(path.join(root, 'public', 'favicon-48x48.png'));
const favicon192 = fs.readFileSync(path.join(root, 'public', 'favicon-192x192.png'));
const appleTouchIcon = fs.readFileSync(path.join(root, 'public', 'apple-touch-icon.png'));
const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));

function check(condition, message) {
  if (!condition) throw new Error(`FAIL ${message}`);
  console.log(`PASS ${message}`);
}

function pngDimensions(buffer) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (!buffer.subarray(0, 8).equals(signature)) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function icoDimensions(buffer) {
  if (buffer.readUInt16LE(0) !== 0 || buffer.readUInt16LE(2) !== 1) return [];
  const count = buffer.readUInt16LE(4);
  return Array.from({ length: count }, (_, index) => {
    const offset = 6 + index * 16;
    return {
      width: buffer[offset] || 256,
      height: buffer[offset + 1] || 256,
    };
  });
}

function collectTextFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const location = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectTextFiles(location));
    else if (/\.(?:html|js|jsx|json|txt|xml)$/.test(entry.name)) files.push(location);
  }
  return files;
}

const seoSources = [
  path.join(root, 'index.html'),
  ...collectTextFiles(path.join(root, 'src')),
  ...collectTextFiles(path.join(root, 'public')),
  path.join(root, 'scripts', 'generate-rag-pdf.js'),
];
const combinedSeoSource = seoSources.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

check(!combinedSeoSource.includes('smartscalesystems.com'), 'retired .com domain is absent from public SEO sources');
check(app.includes(`const SITE_URL = '${SITE_URL}';`), 'client metadata uses the canonical .tech hostname');
const faviconTags = [
  '<link rel="icon" href="/favicon.ico" sizes="any" />',
  '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />',
  '<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />',
  '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />',
];
check(faviconTags.every((tag) => html.includes(tag)), 'initial home HTML declares every stable favicon URL');
check(!html.includes('favicon-circle.png'), 'obsolete full-wordmark favicon declaration is removed');
check(
  !collectTextFiles(path.join(root, 'src', 'pages')).some((file) => fs.readFileSync(file, 'utf8').includes('<link rel="icon"')),
  'page templates contain no conflicting favicon declarations'
);
check(
  JSON.stringify(icoDimensions(faviconIco)) === JSON.stringify([
    { width: 16, height: 16 },
    { width: 32, height: 32 },
    { width: 48, height: 48 },
  ]),
  'favicon.ico contains square 16px, 32px, and 48px images'
);
check(JSON.stringify(pngDimensions(favicon48)) === JSON.stringify({ width: 48, height: 48 }), '48px favicon PNG dimensions are correct');
check(JSON.stringify(pngDimensions(favicon192)) === JSON.stringify({ width: 192, height: 192 }), '192px favicon PNG dimensions are correct');
check(JSON.stringify(pngDimensions(appleTouchIcon)) === JSON.stringify({ width: 180, height: 180 }), 'Apple touch icon dimensions are correct');
check(html.includes('logo-main.png'), 'Organization schema keeps the complete official logo');
check(robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`), 'robots.txt advertises the canonical sitemap');

const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedRoutes = [
  ...pageRoutes.map(([route]) => route),
  ...projectRoutes.map(([slug]) => `/projects/${slug}`),
];
const expectedUrls = expectedRoutes.map((route) => route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`);
check(sitemapUrls.length === new Set(sitemapUrls).size, 'sitemap has no duplicate URLs');
check(
  sitemapUrls.length === expectedUrls.length && expectedUrls.every((url) => sitemapUrls.includes(url)),
  'sitemap exactly matches every indexable route'
);

const catchAll = vercel.routes.at(-1);
check(catchAll.status === 404 && catchAll.dest === '/404/index.html', 'unknown URLs return the real 404 document');

const dist = path.join(root, 'dist');
if (fs.existsSync(path.join(dist, 'index.html'))) {
  for (const asset of ['favicon.ico', 'favicon-48x48.png', 'favicon-192x192.png', 'apple-touch-icon.png']) {
    check(fs.existsSync(path.join(dist, asset)), `production output includes ${asset}`);
  }
  const builtHome = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
  check(faviconTags.every((tag) => builtHome.includes(tag)), 'production homepage includes all favicon tags in its initial HTML');
  for (const route of expectedRoutes) {
    const output = route === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, ...route.slice(1).split('/'), 'index.html');
    check(fs.existsSync(output), `prerendered output exists for ${route}`);
    const rendered = fs.readFileSync(output, 'utf8');
    const canonical = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
    check(rendered.includes(`<link rel="canonical" href="${canonical}" />`), `canonical is correct for ${route}`);
    check(/<title>[^<]+<\/title>/.test(rendered), `title is present for ${route}`);
    check(/<h1[\s>]/i.test(rendered), `crawlable heading is present for ${route}`);
  }
  const notFound = fs.readFileSync(path.join(dist, '404', 'index.html'), 'utf8');
  check(notFound.includes('noindex, follow'), '404 page is excluded from search results');
}

console.log(`SEO behavior passed for ${expectedRoutes.length} canonical routes.`);
