const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PAGES = path.join(ROOT, 'src', 'pages');
const SITE_URL = 'https://www.smartscalesystems.tech';

const pageRoutes = [
  ['/', 'index.html'],
  ['/services', 'services.html'],
  ['/projects', 'projects.html'],
  ['/team', 'team.html'],
  ['/careers', 'careers.html'],
  ['/contact', 'contact.html'],
  ['/ai-agency-pakistan', 'ai-agency-pakistan.html'],
  ['/ai-services-pakistan', 'ai-services-pakistan.html'],
  ['/service-ai-model-training', 'service-ai-model-training.html'],
  ['/service-ai-automation', 'service-ai-automation.html'],
  ['/service-custom-ai-agents', 'service-custom-ai-agents.html'],
  ['/service-data-analytics', 'service-data-analytics.html'],
  ['/service-ai-integrations', 'service-ai-integrations.html'],
  ['/service-business-automations', 'service-business-automations.html'],
  ['/service-computer-vision', 'service-computer-vision.html'],
  ['/service-nlp', 'service-nlp.html'],
  ['/service-llm', 'service-llm.html'],
  ['/service-data-annotation', 'service-data-annotation.html'],
  ['/service-ai-training-data', 'service-ai-training-data.html'],
  ['/service-custom-ai-solutions', 'service-custom.html'],
  ['/privacy-policy', 'privacy-policy.html'],
  ['/terms-of-service', 'terms-of-service.html'],
];

const projectRoutes = [
  ['agentic-rag', 'Agentic RAG', 'Solution blueprint for agentic RAG systems covering source ingestion, hybrid retrieval, agent planning, citation validation, hallucination controls, and retrieval evaluation.'],
  ['custom-chatbot', 'Custom Chatbot', 'Solution blueprint for production chatbots covering conversation state, intent routing, knowledge grounding, tone controls, help-desk integrations, and abuse handling.'],
  ['custom-ai-agent', 'Custom AI Agent', 'Solution blueprint for autonomous AI agents covering tool registries, planning, memory, approval gates, retry logic, idempotency, and cost controls.'],
  ['voice-calling-agent', 'Voice Calling Agent', 'Solution blueprint for voice AI agents covering telephony, speech-to-text, turn-taking, barge-in handling, latency budgets, consent rules, and call-quality evaluation.'],
  ['ai-integrations', 'AI Integrations', 'Solution blueprint for AI product integrations covering API patterns, authentication, data contracts, webhooks, error handling, rate limits, and monitoring.'],
  ['business-automation', 'Business Automation', 'Solution blueprint for business automation covering trigger-action workflows, CRM processes, approval queues, audit logs, SLA monitoring, and baseline measurement.'],
  ['autonomous-data-annotation', 'Autonomous Data Annotation', 'Solution blueprint for autonomous annotation covering pre-labeling, confidence thresholds, human review routing, annotation guidelines, inter-annotator agreement, and dataset QA.'],
  ['custom-model-training', 'Custom Model Training', 'Solution blueprint for custom model training covering dataset readiness, train-test splits, baseline models, evaluation metrics, error analysis, deployment, and monitoring.'],
  ['video-action-recognition', 'Video Action Recognition', 'Solution blueprint for video action recognition covering temporal annotation, frame sampling, clip construction, overlapping actions, streaming latency, and privacy.'],
  ['data-segmentation', 'Data Segmentation', 'Solution blueprint for data segmentation covering feature engineering, clustering, segment stability, CRM activation, experiment design, privacy, and drift monitoring.'],
  ['churn-value-optimization', 'Churn & Value Optimization', 'Solution blueprint for churn prediction and customer value optimization covering churn definition, CLV, survival analysis, uplift modeling, retention targeting, and fairness.'],
  ['fraud-anomaly-detection', 'Fraud & Anomaly Detection', 'Solution blueprint for fraud detection covering real-time scoring, imbalanced data, rules-ML hybrid, PR-AUC, investigation queues, feedback loops, and drift monitoring.'],
];

const routeOverrides = {
  '/': {
    title: 'Smart Scale Systems | AI Agency in Pakistan',
    description: 'Smart Scale Systems is an AI agency in Pakistan for custom AI agents, data analytics, website and app integrations, business automations, model training, and data annotation.',
  },
  '/services': {
    title: 'Services | AI Services in Pakistan',
    description: 'Explore AI model training, automation, custom AI agents, analytics, integrations, computer vision, NLP, LLM solutions, and data services by Smart Scale Systems.',
  },
  '/projects': {
    title: 'AI Projects & Case Studies | Smart Scale Systems',
    description: 'Explore Smart Scale Systems projects across Agentic RAG, custom chatbots, AI agents, automation, model training, computer vision, analytics, and risk detection.',
  },
  '/team': { title: 'Our Team | AI Experts in Pakistan' },
  '/careers': { title: 'Careers | AI Jobs in Pakistan' },
  '/contact': { title: 'Contact Us | Start Your AI Project' },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function extract(source, pattern, fallback = '') {
  return source.match(pattern)?.[1]?.trim() || fallback;
}

function extractPageMeta(source, route) {
  const override = routeOverrides[route] || {};
  return {
    title: override.title || extract(source, /<title>([\s\S]*?)<\/title>/i, 'Smart Scale Systems'),
    description: override.description || extract(
      source,
      /<meta\s+name=["']description["']\s+content=["']([^"']+)["'][^>]*>/i,
      'Smart Scale Systems builds practical AI systems, automation, models, and data solutions.'
    ),
  };
}

function cleanHead(head) {
  return head
    .replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '')
    .split(/\r?\n/)
    .filter((line) => !(
      /<title>/i.test(line) ||
      /<meta\s+(?:name|property)=["'](?:description|keywords|robots|author|theme-color|og:|twitter:)/i.test(line) ||
      /<link\s+rel=["'](?:canonical|alternate)["']/i.test(line)
    ))
    .join('\n')
    .trim();
}

function bodyFromSource(source, nav, footer) {
  let body = extract(source, /<body[^>]*>([\s\S]*?)<\/body>/i, source);
  body = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<div\s+id=["']nav-placeholder["']\s*><\/div>/gi, nav);
  body = body.replace(/<div\s+id=["']footer-placeholder["']\s*><\/div>/gi, footer);
  if (!/<nav\b/i.test(body)) body = `${nav}\n${body}`;
  if (!/<footer\b/i.test(body)) body = `${body}\n${footer}`;
  return body.trim();
}

function breadcrumbItems(route, title) {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }];
  if (route.startsWith('/projects/')) {
    items.push({ '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` });
  }
  if (route !== '/') {
    items.push({ '@type': 'ListItem', position: items.length + 1, name: title, item: `${SITE_URL}${route}` });
  }
  return items;
}

function structuredData(route, title, description) {
  const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Smart Scale Systems',
      url: `${SITE_URL}/`,
      description: 'Smart Scale Systems provides custom AI development, intelligent automation, machine learning, analytics, integrations and training-data services for global teams.',
      email: 'contact@smartscalesystems.tech',
      areaServed: 'Worldwide',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-main.png`,
        width: 600,
        height: 600,
      },
      sameAs: [
        'https://www.instagram.com/smart.scale.systems/',
        'https://x.com/SmartScaleSyst',
        'https://github.com/SmartScaleSystems',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Smart Scale Systems',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
  ];
  if (route !== '/') {
    graph.push({ '@type': 'BreadcrumbList', itemListElement: breadcrumbItems(route, title) });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

function seoHead(route, title, description, robots = 'index, follow') {
  const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    '<meta name="author" content="Smart Scale Systems" />',
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${url}" />`,
    '<meta property="og:site_name" content="Smart Scale Systems" />',
    `<meta property="og:image" content="${SITE_URL}/og.png" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${SITE_URL}/og.png" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData(route, title, description))}</script>`,
  ].join('\n    ');
}

function renderDocument(baseHead, route, title, description, body, robots) {
  return `<!doctype html>
<html lang="en">
  <head>
${baseHead}
    ${seoHead(route, title, description, robots)}
  </head>
  <body>
    <div id="root">${body}</div>
  </body>
</html>
`;
}

function writeRoute(route, html) {
  const directory = route === '/' ? DIST : path.join(DIST, ...route.slice(1).split('/'));
  fs.mkdirSync(directory, { recursive: true });
  const output = path.join(directory, 'index.html');
  fs.writeFileSync(output, html);
  fs.writeFileSync(`${output}.gz`, zlib.gzipSync(Buffer.from(html), { level: 9 }));
}

function run() {
  const builtIndex = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const baseHead = cleanHead(extract(builtIndex, /<head[^>]*>([\s\S]*?)<\/head>/i));
  const nav = fs.readFileSync(path.join(ROOT, 'src', 'components', 'nav.html'), 'utf8');
  const footer = fs.readFileSync(path.join(ROOT, 'src', 'components', 'footer.html'), 'utf8');

  for (const [route, filename] of pageRoutes) {
    const source = fs.readFileSync(path.join(PAGES, filename), 'utf8');
    const { title, description } = extractPageMeta(source, route);
    writeRoute(route, renderDocument(baseHead, route, title, description, bodyFromSource(source, nav, footer)));
  }

  for (const [slug, title, description] of projectRoutes) {
    const route = `/projects/${slug}`;
    const body = `${nav}
<main class="content-section"><article class="section-inner">
  <p class="section-tag">AI Project Case Study</p>
  <h1>${escapeHtml(title)}</h1>
  <p>${escapeHtml(description)}</p>
  <p><a href="/projects">Explore all AI projects and case studies</a></p>
</article></main>
${footer}`;
    writeRoute(route, renderDocument(baseHead, route, `${title} Case Study | Smart Scale Systems`, description, body));
  }

  const errorSource = fs.readFileSync(path.join(PAGES, 'error-404.html'), 'utf8');
  writeRoute('/404', renderDocument(
    baseHead,
    '/404',
    'Page Not Found | Smart Scale Systems',
    'The requested page could not be found.',
    bodyFromSource(errorSource, nav, footer),
    'noindex, follow'
  ));

  console.log(`Prerendered ${pageRoutes.length + projectRoutes.length} indexable routes and a 404 page.`);
}

if (require.main === module) run();

module.exports = { SITE_URL, pageRoutes, projectRoutes };
