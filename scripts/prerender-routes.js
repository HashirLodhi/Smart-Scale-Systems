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
  ['/about', 'about.html'],
  ['/insights', 'insights.html'],
  ['/ai-agency', 'ai-agency.html'],
  ['/team', 'team.html'],
  ['/careers', 'careers.html'],
  ['/contact', 'contact.html'],
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

const insightRoutes = [
  ['/insights/agentic-rag-architecture', 'insight-agentic-rag.html', 'Building Production Agentic RAG Systems', 'A comprehensive guide to architecting agentic retrieval-augmented generation systems that handle source ingestion, hybrid retrieval, agent planning, citation validation, and production evaluation.'],
  ['/insights/llm-fine-tuning-production', 'insight-llm-fine-tuning.html', 'LLM Fine-Tuning for Production Deployments', 'Practical guidance on fine-tuning large language models for real-world applications, covering data preparation, training strategies, RLHF, evaluation, and deployment considerations.'],
  ['/insights/ai-automation-workflows', 'insight-ai-automation.html', 'Designing AI Automation Workflows That Scale', 'How to design AI-powered automation workflows that combine deterministic logic with language model capabilities, covering trigger design, error handling, monitoring, and continuous improvement.'],
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
    title: 'Smart Scale Systems | Custom AI & Automation',
    description: 'Smart Scale Systems builds custom AI agents, data analytics, integrations, and automation for teams worldwide.',
  },
  '/services': {
    title: 'AI Development & Automation Services | Smart Scale Systems',
    description: 'Explore AI model training, automation, custom AI agents, data analytics, AI integrations, computer vision, NLP, LLM solutions, and data services by Smart Scale Systems.',
  },
  '/projects': {
    title: 'AI Projects & Blueprints | Smart Scale Systems',
    description: 'Explore Smart Scale Systems project blueprints across Agentic RAG, custom chatbots, AI agents, automation, model training, computer vision, analytics, and risk detection.',
  },
  '/about': {
    title: 'About Smart Scale Systems | Global AI Development Agency',
    description: 'Learn about Smart Scale Systems, a global AI development and automation agency delivering custom AI systems, data operations, and intelligent automation.',
  },
  '/insights': {
    title: 'AI Insights & Technical Articles | Smart Scale Systems',
    description: 'Technical articles on AI development, agentic RAG systems, LLM fine-tuning, and practical automation from Smart Scale Systems.',
  },
  '/ai-agency': {
    title: 'Global AI Development Agency | Smart Scale Systems',
    description: 'Smart Scale Systems is a global AI development agency delivering custom AI systems, automation, data operations, and intelligent workflows for teams worldwide.',
  },
  '/team': { title: 'Our Team | AI Engineers & Specialists' },
  '/careers': { title: 'Careers at Smart Scale Systems | Join Our AI Team' },
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
  if (route.startsWith('/insights/')) {
    items.push({ '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` });
  }
  if (route === '/insights') {
    // Only Home -> Insights
  } else if (route !== '/') {
    items.push({ '@type': 'ListItem', position: items.length + 1, name: title.replace(/ \| Smart Scale Systems$/, ''), item: `${SITE_URL}${route}` });
  }
  return items;
}

function structuredData(route, title, description) {
  const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const graph = [];

  // Only include full Organization on homepage
  if (route === '/') {
    graph.push(
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
      }
    );
  }

  graph.push({
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  });

  // BreadcrumbList for non-home pages
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
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta property="og:image:type" content="image/png" />',
    '<meta property="og:image:alt" content="Smart Scale Systems — Custom AI development and automation" />',
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

  for (const [route, filename, title, description] of insightRoutes) {
    const source = fs.readFileSync(path.join(PAGES, filename), 'utf8');
    const meta = extractPageMeta(source, route);
    writeRoute(route, renderDocument(baseHead, route, meta.title || title, meta.description || description, bodyFromSource(source, nav, footer)));
  }

  // Load project pages from CommonJS data module
  let projectPagesData = [];
  try {
    const projectModule = require(path.join(ROOT, 'scripts', 'project-data.js'));
    projectPagesData = projectModule.projectData || [];
  } catch (e) {
    console.warn('Could not load project data module:', e.message);
  }

  for (const [slug, title, description] of projectRoutes) {
    const route = `/projects/${slug}`;
    const projectData = projectPagesData.find(p => p.slug === slug);
    
    let bodyContent = '';
    if (projectData && projectData.sections) {
      // Build full project content from the data
      const sectionsHtml = projectData.sections.map(section => `
<section class="content-section">
  <div class="section-inner">
    <h2>${escapeHtml(section.title)}</h2>
    <div class="legal-content">${section.content}</div>
  </div>
</section>`).join('\n');

      const capabilitiesHtml = projectData.capabilities ? projectData.capabilities.map(([capTitle, capText], i) => `
<article class="project-detail-capability">
  <span>0${i + 1}</span>
  <h3>${escapeHtml(capTitle)}</h3>
  <p>${escapeHtml(capText)}</p>
</article>`).join('\n') : '';

      const stepsHtml = projectData.steps ? projectData.steps.map(([stepTitle, stepText], i) => `
<li>
  <span>0${i + 1}</span>
  <div><h3>${escapeHtml(stepTitle)}</h3><p>${escapeHtml(stepText)}</p></div>
</li>`).join('\n') : '';

      bodyContent = `
<section class="content-section">
  <div class="section-inner">
    <nav aria-label="Breadcrumb" class="breadcrumbs"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/projects">Projects</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(projectData.title)}</span></nav>
    <p class="section-tag">AI Project Blueprint</p>
    <h1>${escapeHtml(projectData.title)}</h1>
    <p>${escapeHtml(projectData.summary)}</p>
    <div class="pillars-grid">
      <div class="pillar-card"><h3>Focus</h3><p>${escapeHtml(projectData.focus)}</p></div>
      <div class="pillar-card"><h3>System Type</h3><p>${escapeHtml(projectData.system)}</p></div>
      <div class="pillar-card"><h3>Delivery</h3><p>${escapeHtml(projectData.delivery)}</p></div>
    </div>
  </div>
</section>

<section class="content-section alt">
  <div class="section-inner">
    <h2>Key Capabilities</h2>
    <div class="pillars-grid">${capabilitiesHtml}</div>
  </div>
</section>

<section class="content-section">
  <div class="section-inner">
    <h2>Delivery Process</h2>
    <ol class="pillars-grid">${stepsHtml}</ol>
  </div>
</section>

${sectionsHtml}

<section class="content-section cta-section">
  <div class="section-inner center">
    <h2>Interested in a similar system?</h2>
    <p>Let's discuss your project requirements.</p>
    <div class="cta-actions">
      <a href="/contact" class="btn-primary">Start a Project</a>
      <a href="/projects" class="btn-ghost">View All Projects</a>
    </div>
  </div>
</section>`;
    } else {
      // Fallback minimal content
      bodyContent = `
<section class="content-section">
  <div class="section-inner">
    <nav aria-label="Breadcrumb" class="breadcrumbs"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/projects">Projects</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(title)}</span></nav>
    <p class="section-tag">AI Project Blueprint</p>
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(description)}</p>
    <p><a href="/projects">Explore all AI project blueprints</a></p>
  </div>
</section>`;
    }

    const body = `${nav}\n${bodyContent}\n${footer}`;
    writeRoute(route, renderDocument(baseHead, route, `${title} Blueprint | Smart Scale Systems`, description, body));
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

  console.log(`Prerendered ${pageRoutes.length + insightRoutes.length + projectRoutes.length} indexable routes and a 404 page.`);
}

if (require.main === module) run();

module.exports = { SITE_URL, pageRoutes, insightRoutes, projectRoutes };
