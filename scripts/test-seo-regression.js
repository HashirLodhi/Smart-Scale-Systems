const fs = require('fs');
const path = require('path');
const { SITE_URL, pageRoutes, projectRoutes } = require('./prerender-routes');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

let passed = 0;
let failed = 0;

function check(condition, message) {
  if (!condition) {
    console.log(`FAIL ${message}`);
    failed++;
  } else {
    console.log(`PASS ${message}`);
    passed++;
  }
}

function readDist(route) {
  const file = route === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, ...route.slice(1).split('/'), 'index.html');
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}

// 1. All sitemap URLs return 200 (exist in dist)
const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const allRoutes = [...pageRoutes.map(([r]) => r), ...projectRoutes.map(([s]) => `/projects/${s}`)];

for (const route of allRoutes) {
  const expected = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  check(sitemapUrls.includes(expected), `sitemap includes ${route}`);
}

// 2. No redirecting URLs in sitemap
check(!sitemapUrls.includes(`${SITE_URL}/testimonials`), 'testimonials not in sitemap');
check(!sitemapUrls.includes(`${SITE_URL}/testimonials/`), 'testimonials/ not in sitemap');

// 3. Exactly one H1 per indexable page
for (const route of allRoutes) {
  const content = readDist(route);
  if (!content) { check(false, `missing dist output for ${route}`); continue; }
  const h1Matches = content.match(/<h1[\s>]/gi) || [];
  check(h1Matches.length === 1, `exactly one H1 for ${route} (found ${h1Matches.length})`);
}

// 4. H1 text contains natural whitespace (no concatenated words)
const h1ConcatPatterns = ['unfairadvantage', 'madefor', 'BuiltAround', 'TeamBehind', 'ScaleSystems', 'YourAI'];
for (const route of allRoutes) {
  const content = readDist(route);
  if (!content) continue;
  // Extract just H1 content
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    const h1Text = h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    for (const pattern of h1ConcatPatterns) {
      check(!h1Text.includes(pattern), `no concatenated text "${pattern}" in H1 of ${route}`);
    }
  }
}

// 5. No hreflang tags anywhere
const srcIndex = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
check(!srcIndex.includes('hreflang'), 'no hreflang in root index.html');
const mainJsx = fs.readFileSync(path.join(root, 'src', 'main.jsx'), 'utf8');
check(!mainJsx.includes("hreflang: 'en'"), 'no hreflang en in main.jsx');
check(!mainJsx.includes("hreflang: 'x-default'"), 'no hreflang x-default in main.jsx');

// 6. No meta keywords anywhere
check(!srcIndex.includes('meta name="keywords"'), 'no meta keywords in root index.html');
const pagesDir = path.join(root, 'src', 'pages');
const htmlPages = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.html'));
for (const page of htmlPages) {
  const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
  check(!content.includes('meta name="keywords"'), `no meta keywords in ${page}`);
}

// 7. Unique titles
const titles = [];
for (const route of allRoutes) {
  const content = readDist(route);
  if (!content) continue;
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch) titles.push({ route, title: titleMatch[1] });
}
const titleSet = new Set(titles.map((t) => t.title));
check(titleSet.size === titles.length, `all titles unique (${titleSet.size}/${titles.length})`);

// 8. Unique descriptions
const descriptions = [];
for (const route of allRoutes) {
  const content = readDist(route);
  if (!content) continue;
  const descMatch = content.match(/<meta name="description" content="([^"]+)"/i);
  if (descMatch) descriptions.push({ route, desc: descMatch[1] });
}
const descSet = new Set(descriptions.map((d) => d.desc));
check(descSet.size === descriptions.length, `all descriptions unique (${descSet.size}/${descriptions.length})`);

// 9. Correct self-referencing canonicals
for (const route of allRoutes) {
  const content = readDist(route);
  if (!content) continue;
  const canonical = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  check(content.includes(`<link rel="canonical" href="${canonical}" />`), `canonical correct for ${route}`);
}

// 10. Valid JSON-LD
for (const route of allRoutes) {
  const content = readDist(route);
  if (!content) continue;
  const jsonLdMatches = [...content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  for (const match of jsonLdMatches) {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      check(false, `invalid JSON-LD in ${route}: ${e.message}`);
    }
  }
  check(jsonLdMatches.length > 0, `has JSON-LD for ${route}`);
}

// 11. Correct Organization schema logo dimensions
for (const route of allRoutes) {
  const content = readDist(route);
  if (!content) continue;
  if (content.includes('"Organization"')) {
    check(content.includes('"width":600') || content.includes('"width": 600'), `Organization logo width 600 in ${route}`);
    check(content.includes('"height":600') || content.includes('"height": 600'), `Organization logo height 600 in ${route}`);
  }
}

// 12. Visible breadcrumbs on service pages
const serviceRoutes = pageRoutes.filter(([r]) => r.startsWith('/service-')).map(([r]) => r);
for (const route of serviceRoutes) {
  const content = readDist(route);
  if (!content) continue;
  check(content.includes('aria-label="Breadcrumb"'), `visible breadcrumb on ${route}`);
  check(content.includes('aria-current="page"'), `aria-current on ${route}`);
}

// 13. No broken internal links (check href targets exist in dist)
const linkPattern = /href="\/([^"#]*)"/g;
const allInternalLinks = new Set();
for (const route of allRoutes) {
  const content = readDist(route);
  if (!content) continue;
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    const target = '/' + match[1].replace(/\/$/, '');
    if (target && !target.startsWith('/assets') && !target.startsWith('/src')) {
      allInternalLinks.add(target);
    }
  }
}
for (const link of allInternalLinks) {
  const normalized = link === '/' ? '/' : link;
  const exists = allRoutes.includes(normalized) || fs.existsSync(path.join(dist, ...normalized.slice(1).split('/'), 'index.html'));
  check(exists || normalized.includes('.'), `internal link target exists: ${normalized}`);
}

// 14. No redirecting URLs in sitemap
check(!allRoutes.includes('/testimonials'), 'testimonials route removed from indexable routes');

// 15. Image width and height attributes on project cards
const projectsPage = readDist('/projects');
if (projectsPage) {
  const projectImgTags = [...projectsPage.matchAll(/<img[^>]*class="[^"]*project[^"]*"[^>]+>/gi)];
  if (projectImgTags.length > 0) {
    check(projectImgTags[0][0].includes('width='), `project image has width attribute in /projects`);
    check(projectImgTags[0][0].includes('height='), `project image has height attribute in /projects`);
  } else {
    check(false, 'no project images found in /projects');
  }
}

// 16. No repeated substantive paragraphs across blueprints
const blueprintParagraphs = new Map();
for (const [slug] of projectRoutes) {
  const content = readDist(`/projects/${slug}`);
  if (!content) continue;
  const paragraphs = content.match(/<p>([^<]{50,})<\/p>/g) || [];
  for (const p of paragraphs) {
    const text = p.replace(/<[^>]+>/g, '').trim();
    if (text.length > 50) {
      if (!blueprintParagraphs.has(text)) blueprintParagraphs.set(text, []);
      blueprintParagraphs.get(text).push(slug);
    }
  }
}
let repeatedCount = 0;
for (const [text, slugs] of blueprintParagraphs) {
  if (slugs.length > 2) {
    repeatedCount++;
  }
}
check(repeatedCount === 0, `no paragraphs repeated across >2 blueprints (${repeatedCount} found)`);

// 17. BreadcrumbList schema present on service pages
for (const route of serviceRoutes) {
  const content = readDist(route);
  if (!content) continue;
  check(content.includes('BreadcrumbList'), `BreadcrumbList schema on ${route}`);
}

// 18. Organization schema areaServed is Worldwide
const homeContent = readDist('/');
if (homeContent) {
  check(homeContent.includes('"areaServed":"Worldwide"') || homeContent.includes('"areaServed": "Worldwide"'), 'Organization areaServed is Worldwide');
  check(!homeContent.includes('"@type":"Country"') && !homeContent.includes('"@type": "Country"'), 'Organization areaServed is not a Country object');
}

console.log(`\n${passed} passed, ${failed} failed out of ${passed + failed} checks.`);
if (failed > 0) process.exit(1);
