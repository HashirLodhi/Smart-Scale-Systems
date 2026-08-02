const fs = require('fs');
const path = require('path');
const { SITE_URL, pageRoutes, projectRoutes } = require('./prerender-routes');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'src', 'main.jsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const robots = fs.readFileSync(path.join(root, 'public', 'robots.txt'), 'utf8');
const favicon = fs.readFileSync(path.join(root, 'public', 'favicon-circle.png'));
const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));

function check(condition, message) {
  if (!condition) throw new Error(`FAIL ${message}`);
  console.log(`PASS ${message}`);
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
check(
  (html.match(/href="\/favicon-circle\.png"/g) || []).length === 3,
  'home page uses one stable circular favicon URL'
);
check(
  favicon.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) && favicon.length > 1000,
  'favicon is a valid non-empty PNG'
);
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
