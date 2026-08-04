const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const issues = [];
const warnings = [];

function checkFile(filePath, route) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(DIST, filePath);

  // Skip Google verification files
  if (relativePath.startsWith('google')) {
    return;
  }

  // Check title
  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch) {
    issues.push(`${relativePath}: Missing <title> tag`);
  } else {
    const title = titleMatch[1].trim();
    if (title.length < 20) {
      warnings.push(`${relativePath}: Title too short (${title.length} chars): "${title}"`);
    }
    if (title.length > 70) {
      warnings.push(`${relativePath}: Title too long (${title.length} chars): "${title}"`);
    }
  }

  // Check meta description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (!descMatch) {
    issues.push(`${relativePath}: Missing meta description`);
  } else {
    const desc = descMatch[1].trim();
    if (desc.length < 100) {
      warnings.push(`${relativePath}: Description too short (${desc.length} chars)`);
    }
    if (desc.length > 200) {
      warnings.push(`${relativePath}: Description too long (${desc.length} chars)`);
    }
  }

  // Check canonical URL
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    issues.push(`${relativePath}: Missing canonical URL`);
  } else {
    const canonical = canonicalMatch[1];
    if (!canonical.startsWith('https://www.smartscalesystems.tech')) {
      issues.push(`${relativePath}: Canonical URL does not use HTTPS WWW: ${canonical}`);
    }
  }

  // Check for Pakistan references (should be removed)
  const pakistanPatterns = [/pakistan/gi, /pk\b/gi];
  for (const pattern of pakistanPatterns) {
    if (pattern.test(content) && !filePath.includes('ai-agency-pakistan') && !filePath.includes('ai-services-pakistan')) {
      issues.push(`${relativePath}: Contains Pakistan reference`);
    }
  }

  // Check structured data
  const structuredDataMatch = content.match(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
  if (!structuredDataMatch) {
    warnings.push(`${relativePath}: No structured data found`);
  } else {
    try {
      const structuredData = JSON.parse(structuredDataMatch[1]);
      if (!structuredData['@context']) {
        issues.push(`${relativePath}: Structured data missing @context`);
      }
      if (!structuredData['@graph'] && !structuredData['@type']) {
        issues.push(`${relativePath}: Structured data missing @type or @graph`);
      }
    } catch (e) {
      issues.push(`${relativePath}: Invalid JSON-LD structured data`);
    }
  }

  // Check for Open Graph tags
  const ogTitleMatch = content.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
  const ogDescMatch = content.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i);
  const ogImageMatch = content.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  
  if (!ogTitleMatch) warnings.push(`${relativePath}: Missing og:title`);
  if (!ogDescMatch) warnings.push(`${relativePath}: Missing og:description`);
  if (!ogImageMatch) warnings.push(`${relativePath}: Missing og:image`);

  // Check for Twitter card tags
  const twitterCardMatch = content.match(/<meta\s+name=["']twitter:card["']/i);
  if (!twitterCardMatch) warnings.push(`${relativePath}: Missing twitter:card`);

  // Check for robots meta
  const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
  if (!robotsMatch && route !== '/404') {
    warnings.push(`${relativePath}: Missing robots meta tag`);
  }

  // Check for H1 tag
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match && route !== '/404') {
    warnings.push(`${relativePath}: Missing H1 tag`);
  }

  // Check for images without alt text
  const imgTags = content.match(/<img[^>]+>/gi) || [];
  for (const imgTag of imgTags) {
    if (!imgTag.match(/alt=["'][^"']+["']/i)) {
      warnings.push(`${relativePath}: Image missing alt text`);
    }
  }
}

function run() {
  console.log('Running SEO QA checks...\n');

  // Check all HTML files in dist
  const htmlFiles = [];
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.html')) {
        htmlFiles.push(filePath);
      }
    }
  }
  walkDir(DIST);

  for (const filePath of htmlFiles) {
    const relativePath = path.relative(DIST, filePath);
    const route = '/' + relativePath.replace(/index\.html$/, '').replace(/\.html$/, '');
    checkFile(filePath, route);
  }

  // Report results
  if (issues.length === 0 && warnings.length === 0) {
    console.log('✅ All SEO checks passed!');
  } else {
    if (issues.length > 0) {
      console.log(`❌ ${issues.length} issues found:`);
      for (const issue of issues) {
        console.log(`  - ${issue}`);
      }
    }
    if (warnings.length > 0) {
      console.log(`\n⚠️  ${warnings.length} warnings:`);
      for (const warning of warnings) {
        console.log(`  - ${warning}`);
      }
    }
  }

  console.log(`\nChecked ${htmlFiles.length} HTML files.`);
}

if (require.main === module) run();

module.exports = { run };
