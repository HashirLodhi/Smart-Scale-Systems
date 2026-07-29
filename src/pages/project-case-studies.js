const customerStories = {
  llm: {
    quote: "The LLM fine-tuning work exceeded our performance benchmarks. They didn't just train a model, they designed the entire data pipeline and evaluation suite.",
    author: "Sarah R.",
    role: "CTO, AI Research Lab",
  },
  automation: {
    quote: "Exceptional automation work. Communication throughout was clear and professional. The system has saved our team 20+ hours per week.",
    author: "Ahmed K.",
    role: "Operations Lead, SaaS Company",
  },
  annotation: {
    quote: "Smart Scale Systems delivered an annotation project at a scale and accuracy level we hadn't seen before. Their QA process is genuinely best-in-class.",
    author: "James M.",
    role: "ML Director, Computer Vision Startup",
  },
  vision: {
    quote: "They delivered ahead of schedule with quality that exceeded expectations. Their communication was responsive and transparent.",
    author: "Tom P.",
    role: "Engineering Director, Security Tech",
  },
};

export const projectCaseStudies = [
  {
    number: "01",
    slug: "agentic-rag",
    title: "Agentic RAG",
    category: "Agentic AI / Knowledge Systems",
    image: "/assets/projects/01-agentic-rag.jpg",
    imageAlt: "Agentic retrieval system connecting knowledge, tools, memory, and verification around an intelligence core",
    summary: "A grounded knowledge system that plans, searches, evaluates, and synthesizes answers across company data and connected tools.",
    briefTitle: "Turn scattered knowledge into answers teams can inspect and trust.",
    briefBody: "Traditional search returns documents. Basic RAG returns passages. This system is designed to understand the task, choose the right sources, verify what it finds, and produce a useful answer with evidence attached.",
    focus: "Knowledge operations",
    system: "Multi-agent retrieval",
    delivery: "Architecture to evaluation",
    capabilities: [
      ["Plan the question", "A coordinator breaks complex requests into focused retrieval and tool-use steps."],
      ["Ground every answer", "Hybrid retrieval, reranking, and citations keep outputs connected to approved sources."],
      ["Evaluate continuously", "Quality checks test relevance, completeness, faithfulness, and failure behavior."],
    ],
    steps: [
      ["Discover", "Map the decisions, source systems, permissions, and answer-quality requirements."],
      ["Connect", "Prepare content, retrieval indexes, live tools, and access-aware source connectors."],
      ["Orchestrate", "Build planning, retrieval, verification, and response agents around clear guardrails."],
      ["Improve", "Use evaluation traces and reviewer feedback to strengthen weak questions and sources."],
    ],
    signals: ["Grounded", "Traceable", "Scalable"],
    testimonial: "llm",
  },
  {
    number: "02",
    slug: "custom-chatbot",
    title: "Custom Chatbot",
    category: "Conversational AI / Customer Experience",
    image: "/assets/projects/02-custom-chatbot.jpg",
    imageAlt: "Glass conversation forms orbiting a semantic intelligence core above layered knowledge",
    summary: "A branded conversational experience built around your knowledge, customer journeys, and support operations.",
    briefTitle: "Make every conversation feel useful, on-brand, and connected to the business.",
    briefBody: "A production chatbot needs more than fluent replies. It needs the right content, a clear conversational role, safe escalation paths, and integrations that let the customer actually complete their next step.",
    focus: "Customer experience",
    system: "RAG chatbot",
    delivery: "Conversation to launch",
    capabilities: [
      ["Know the business", "Responses draw from curated knowledge with citations, freshness rules, and clear boundaries."],
      ["Speak in your voice", "Tone, terminology, and conversation flows are shaped around the brand and audience."],
      ["Resolve the request", "Lead capture, booking, ticketing, and human handoff connect chat to real outcomes."],
    ],
    steps: [
      ["Discover", "Prioritize high-value questions, audience needs, brand voice, and escalation scenarios."],
      ["Design", "Create conversation flows, knowledge boundaries, actions, and fallback behavior."],
      ["Build", "Connect retrieval, business systems, analytics, and a responsive web experience."],
      ["Improve", "Review unanswered questions and conversation signals to expand coverage over time."],
    ],
    signals: ["On-brand", "Helpful", "Connected"],
    testimonial: "llm",
  },
  {
    number: "03",
    slug: "custom-ai-agent",
    title: "Custom AI Agent",
    category: "Agentic AI / Digital Operations",
    image: "/assets/projects/03-custom-ai-agent.jpg",
    imageAlt: "Autonomous intelligence core coordinating modular tools, memory capsules, and task pathways",
    summary: "A goal-driven agent that reasons across tools, coordinates multi-step tasks, and completes work with controlled autonomy.",
    briefTitle: "Give repetitive digital work to an agent that knows when to act and when to ask.",
    briefBody: "Useful autonomy comes from good boundaries. The agent is designed around a specific job, approved tools, observable decisions, and human checkpoints for actions that carry risk or need judgment.",
    focus: "Digital operations",
    system: "Tool-using AI agent",
    delivery: "Workflow to control layer",
    capabilities: [
      ["Plan multi-step work", "The agent turns a goal into an ordered, inspectable sequence of tasks."],
      ["Use approved tools", "Typed actions connect the agent to data, software, and internal services safely."],
      ["Keep humans in control", "Permissions, approval gates, budgets, and audit logs govern every sensitive action."],
    ],
    steps: [
      ["Define", "Select a narrow job, success criteria, allowed actions, and escalation points."],
      ["Equip", "Connect tools, memory, structured context, and access controls."],
      ["Test", "Run scenario suites for normal work, ambiguous requests, and edge-case failures."],
      ["Operate", "Monitor traces, costs, approvals, and outcomes as the agent handles live work."],
    ],
    signals: ["Autonomous", "Governed", "Observable"],
    testimonial: "automation",
  },
  {
    number: "04",
    slug: "voice-calling-agent",
    title: "Voice Calling Agent",
    category: "Voice AI / Customer Operations",
    image: "/assets/projects/04-voice-calling-agent.jpg",
    imageAlt: "A sculptural voice waveform moving from an acoustic capsule into a conversational intelligence core",
    summary: "A natural inbound and outbound voice agent for qualification, scheduling, service, and follow-up calls.",
    briefTitle: "Create phone conversations that move at human speed and end with a clear next step.",
    briefBody: "Voice systems must handle interruptions, accents, pauses, uncertainty, and live business data without losing the thread. This architecture keeps conversations responsive while enforcing clear rules for consent, escalation, and action.",
    focus: "Customer operations",
    system: "Real-time voice AI",
    delivery: "Call flow to CRM",
    capabilities: [
      ["Converse naturally", "Low-latency speech, interruption handling, and contextual memory keep calls fluid."],
      ["Complete the workflow", "Scheduling, qualification, CRM updates, and follow-up actions happen during the call."],
      ["Escalate gracefully", "Confidence rules and live transfer paths protect high-value or sensitive conversations."],
    ],
    steps: [
      ["Script", "Map call intents, disclosures, objection paths, transfers, and successful outcomes."],
      ["Connect", "Integrate telephony, calendars, CRM records, and approved knowledge."],
      ["Rehearse", "Test accents, noise, interruptions, silence, edge cases, and tool failures."],
      ["Tune", "Review call outcomes and transcripts to improve pacing, coverage, and resolution."],
    ],
    signals: ["Natural", "Responsive", "Action-ready"],
    testimonial: "automation",
  },
  {
    number: "05",
    slug: "ai-integrations",
    title: "AI Integrations",
    category: "Product AI / Applications",
    image: "/assets/projects/05-ai-integrations.jpg",
    imageAlt: "A central AI module connected to multiple blank glass application and device planes",
    summary: "AI capabilities embedded directly into apps and websites, from intelligent search to recommendations and workflow actions.",
    briefTitle: "Put intelligence inside the product experience, not beside it.",
    briefBody: "The strongest AI features feel native to the product. They use the right context at the right moment, respect the application's permissions, and help users finish a task without forcing them into a separate tool.",
    focus: "Digital products",
    system: "AI application layer",
    delivery: "API to user experience",
    capabilities: [
      ["Use product context", "AI receives the relevant page, account, history, and permissions for each request."],
      ["Fit the interface", "Search, assistants, recommendations, and generation are designed into existing journeys."],
      ["Measure real value", "Feedback, task completion, latency, and cost signals guide continuous improvement."],
    ],
    steps: [
      ["Prioritize", "Choose the product moments where AI can remove friction or unlock a new capability."],
      ["Prototype", "Test interaction patterns, context needs, and response expectations with real workflows."],
      ["Integrate", "Build APIs, secure context assembly, interface states, and fallback behavior."],
      ["Measure", "Track adoption, quality, latency, cost, and completion after launch."],
    ],
    signals: ["Product-native", "Context-aware", "Measurable"],
    testimonial: "llm",
  },
  {
    number: "06",
    slug: "business-automation",
    title: "Business Automation",
    category: "AI Automation / Operations",
    image: "/assets/projects/06-business-automation.jpg",
    imageAlt: "A connected sequence of intelligent machines routing documents and decisions through an automated workflow",
    summary: "Connected automations that reduce repetitive work across sales, operations, support, reporting, and internal processes.",
    briefTitle: "Transform a chain of manual handoffs into one visible, dependable operating flow.",
    briefBody: "Automation creates value when the whole process is understood: triggers, decisions, exceptions, owners, and downstream systems. The solution combines deterministic workflow logic with AI only where language or judgment is actually needed.",
    focus: "Business operations",
    system: "AI workflow automation",
    delivery: "Process to production",
    capabilities: [
      ["Map the real workflow", "Every trigger, handoff, exception, dependency, and approval becomes visible."],
      ["Use AI selectively", "Extraction, classification, drafting, and reasoning sit inside dependable workflow rules."],
      ["Keep operations clear", "Queues, alerts, logs, and human review make the system easy to supervise."],
    ],
    steps: [
      ["Map", "Document the current process, volume, pain points, systems, and exception paths."],
      ["Simplify", "Remove unnecessary steps before designing automation and AI decisions."],
      ["Automate", "Connect triggers, business rules, AI tasks, approvals, and destination systems."],
      ["Operate", "Monitor throughput, failure reasons, review queues, and improvement opportunities."],
    ],
    signals: ["Efficient", "Reliable", "Visible"],
    testimonial: "automation",
  },
  {
    number: "07",
    slug: "autonomous-data-annotation",
    title: "Autonomous Data Annotation",
    category: "Data Operations / Active Learning",
    image: "/assets/projects/07-autonomous-annotation.jpg",
    imageAlt: "Image data passing through a glass machine-vision scanner and sorting into validated annotation groups",
    summary: "A model-assisted labeling loop that pre-annotates, validates, prioritizes uncertainty, and improves dataset quality.",
    briefTitle: "Focus expert review where it changes the dataset most.",
    briefBody: "Annotation automation is not about removing quality control. It is about using model confidence, validation rules, and targeted review to reduce repetitive labeling while directing human attention to uncertain and high-impact examples.",
    focus: "Training data operations",
    system: "Human-in-the-loop labeling",
    delivery: "Guidelines to QA loop",
    capabilities: [
      ["Pre-label at speed", "Models generate structured first-pass annotations using task-specific thresholds."],
      ["Route uncertainty", "Low-confidence, novel, and high-value examples move to the right reviewer."],
      ["Learn from review", "Accepted corrections flow back into model and guideline improvements."],
    ],
    steps: [
      ["Calibrate", "Define ontology, guidelines, quality thresholds, and representative benchmark data."],
      ["Pre-label", "Apply baseline models and validation rules to create a reliable first pass."],
      ["Review", "Route uncertain samples through expert queues and multi-stage quality checks."],
      ["Improve", "Use disagreement and correction patterns to strengthen models and instructions."],
    ],
    signals: ["Efficient", "Reviewable", "Adaptive"],
    testimonial: "annotation",
  },
  {
    number: "08",
    slug: "custom-model-training",
    title: "Custom Model Training",
    category: "Machine Learning / Model Engineering",
    image: "/assets/projects/08-custom-model-training.jpg",
    imageAlt: "Layered training data refined through a transparent model lattice into a polished intelligence core",
    summary: "Purpose-built training and fine-tuning aligned to domain data, evaluation criteria, and production requirements.",
    briefTitle: "Train for the behavior the product needs, then prove it before deployment.",
    briefBody: "A custom model project starts with the task and evaluation standard, not the model name. Data design, baseline comparison, experiment tracking, safety checks, and deployment constraints shape every training decision.",
    focus: "Model performance",
    system: "Training and evaluation",
    delivery: "Dataset to deployment",
    capabilities: [
      ["Design the data", "Training, validation, and challenge sets reflect the domain and real failure modes."],
      ["Run controlled training", "Tracked experiments compare prompts, fine-tunes, architectures, and parameters."],
      ["Evaluate for production", "Quality, safety, latency, and cost are tested against defined acceptance criteria."],
    ],
    steps: [
      ["Baseline", "Define the task, metrics, test set, constraints, and current performance."],
      ["Prepare", "Curate, clean, balance, and document the data used for training and evaluation."],
      ["Train", "Run reproducible experiments and compare results against the baseline."],
      ["Deploy", "Package the selected model with monitoring, versioning, and retraining signals."],
    ],
    signals: ["Purpose-built", "Evaluated", "Deployable"],
    testimonial: "llm",
  },
  {
    number: "09",
    slug: "video-action-recognition",
    title: "Video Action Recognition",
    category: "Computer Vision / Temporal Intelligence",
    image: "/assets/projects/09-action-recognition.jpg",
    imageAlt: "Sequential motion frames passing through a temporal scanner for action recognition and tracking",
    summary: "Frame-accurate video annotation and temporal models that identify actions, events, movement, and behavior.",
    briefTitle: "Teach a vision system to understand what happened, when it happened, and what changed.",
    briefBody: "Video intelligence depends on temporal context. The system combines consistent event definitions, tracked objects, precise time boundaries, and review tools that make complex motion data usable for training and operational analysis.",
    focus: "Video intelligence",
    system: "Temporal vision pipeline",
    delivery: "Annotation to recognition",
    capabilities: [
      ["Label time precisely", "Events, actions, and transitions are marked with consistent temporal boundaries."],
      ["Track context", "Object identity, movement, and scene relationships persist across frames."],
      ["Recognize behavior", "Temporal models classify actions while surfacing uncertain clips for review."],
    ],
    steps: [
      ["Define", "Specify actions, event boundaries, edge cases, and evaluation scenarios."],
      ["Annotate", "Create frame and sequence labels with tracking and structured quality review."],
      ["Train", "Build temporal features and recognition models against representative video."],
      ["Validate", "Inspect confusion cases across camera conditions, durations, and overlapping actions."],
    ],
    signals: ["Temporal", "Precise", "Reviewable"],
    testimonial: "vision",
  },
  {
    number: "10",
    slug: "data-segmentation",
    title: "Data Segmentation",
    category: "Data Intelligence / Decision Systems",
    image: "/assets/projects/10-data-segmentation.jpg",
    imageAlt: "Mixed data particles organizing into distinct structured clusters inside a transparent chamber",
    summary: "Intelligent segmentation pipelines that organize complex records into meaningful groups for targeting and decisions.",
    briefTitle: "Replace one-size-fits-all decisions with groups the business can understand and use.",
    briefBody: "Good segments are stable enough to act on and clear enough to explain. The pipeline combines relevant features, statistical validation, business interpretation, and activation rules so clusters become useful decisions rather than a static chart.",
    focus: "Decision intelligence",
    system: "Segmentation pipeline",
    delivery: "Features to activation",
    capabilities: [
      ["Build meaningful features", "Behavioral, transactional, and contextual signals are prepared around the decision."],
      ["Find useful groups", "Clustering and classification approaches are compared for stability and separation."],
      ["Activate the insight", "Segment definitions connect to reporting, campaigns, prioritization, and product logic."],
    ],
    steps: [
      ["Frame", "Define the business decision, available data, and what makes a segment useful."],
      ["Prepare", "Engineer features, resolve data quality issues, and establish a trusted analysis layer."],
      ["Model", "Compare segmentation approaches and validate stability, separation, and interpretability."],
      ["Activate", "Name, document, monitor, and connect segments to the systems that use them."],
    ],
    signals: ["Meaningful", "Explainable", "Actionable"],
    testimonial: "automation",
  },
  {
    number: "11",
    slug: "churn-value-optimization",
    title: "Churn & Value Optimization",
    category: "Customer Analytics / Predictive AI",
    image: "/assets/projects/11-churn-value.jpg",
    imageAlt: "Customer value paths being detected and redirected toward stable long-term retention orbits",
    summary: "Predictive analytics that identifies churn risk, customer value, and the right moment for a meaningful intervention.",
    briefTitle: "See customer risk and value early enough to do something useful about it.",
    briefBody: "A score alone does not retain a customer. The system is designed to connect predictive signals with understandable drivers, prioritized segments, intervention playbooks, and measurement that shows which actions genuinely change outcomes.",
    focus: "Customer growth",
    system: "Predictive decisioning",
    delivery: "Signals to intervention",
    capabilities: [
      ["Predict meaningful events", "Models estimate churn risk and value using behavior available before the outcome."],
      ["Explain the drivers", "Reason codes show teams which changes and signals influenced each priority."],
      ["Guide the action", "Scores feed segments, outreach, offers, and experiments with measurable follow-through."],
    ],
    steps: [
      ["Define", "Align churn, value, prediction windows, intervention points, and success measures."],
      ["Unify", "Create customer timelines from product, billing, support, and engagement signals."],
      ["Predict", "Train and calibrate models with attention to leakage, drift, and useful lead time."],
      ["Act", "Connect priorities to playbooks and measure incremental retention or value."],
    ],
    signals: ["Predictive", "Explainable", "Actionable"],
    testimonial: "automation",
  },
  {
    number: "12",
    slug: "fraud-anomaly-detection",
    title: "Fraud & Anomaly Detection",
    category: "Financial Risk / Decision Intelligence",
    image: "/assets/projects/12-fraud-detection.jpg",
    imageAlt: "A precision scanner isolating an anomalous transaction pattern from a field of uniform financial events",
    summary: "Risk detection that surfaces suspicious behavior, abnormal transactions, and emerging patterns for faster investigation.",
    briefTitle: "Surface the unusual behavior that rules alone cannot anticipate.",
    briefBody: "Fraud changes quickly and legitimate behavior is rarely uniform. A layered detection system combines business rules, supervised risk signals, anomaly models, and investigator feedback to prioritize cases without hiding the reason behind an alert.",
    focus: "Risk operations",
    system: "Layered anomaly detection",
    delivery: "Signals to investigation",
    capabilities: [
      ["Combine detection layers", "Rules, known-pattern models, and anomaly signals contribute to one risk view."],
      ["Prioritize investigators", "Calibrated scores, reason codes, and case context bring the riskiest events forward."],
      ["Adapt to change", "Feedback, drift monitoring, and threshold reviews keep detection aligned with new behavior."],
    ],
    steps: [
      ["Map", "Define fraud patterns, review capacity, costs, labels, and acceptable friction."],
      ["Engineer", "Build behavioral, network, velocity, and contextual risk signals."],
      ["Detect", "Combine rules and models into calibrated decisions with clear explanations."],
      ["Learn", "Feed investigation outcomes back into thresholds, features, and training data."],
    ],
    signals: ["Layered", "Explainable", "Adaptive"],
    testimonial: "vision",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProjectPage(project, index) {
  const nextProject = projectCaseStudies[(index + 1) % projectCaseStudies.length];
  const story = customerStories[project.testimonial];
  const canonical = `https://smartscalesystems.com/projects/${project.slug}`;
  const description = `${project.summary} Explore the approach, capabilities, and delivery process from Smart Scale Systems.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(project.title)} Project | Smart Scale Systems</title>
  <link rel="icon" href="/logo-main.png" />
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="keywords" content="${escapeHtml(`${project.title}, ${project.category}, AI project, AI case study, Smart Scale Systems`)}" />
  <meta property="og:title" content="${escapeHtml(project.title)} Project | Smart Scale Systems" />
  <meta property="og:description" content="${escapeHtml(project.summary)}" />
  <link rel="canonical" href="${canonical}" />
</head>
<body>
<div class="noise-overlay"></div>
<div id="nav-placeholder"></div>

<section class="project-detail-hero">
  <div class="section-inner project-detail-hero-inner">
    <a class="project-detail-back" href="/projects" aria-label="Back to all projects"><span aria-hidden="true">←</span> All projects</a>
    <div class="project-detail-hero-grid">
      <div class="project-detail-hero-copy">
        <div class="project-detail-eyebrow"><span>Case study ${escapeHtml(project.number)}</span><span>${escapeHtml(project.category)}</span></div>
        <h1>${escapeHtml(project.title)}</h1>
        <p>${escapeHtml(project.summary)}</p>
        <div class="project-detail-signals" aria-label="Project qualities">
          ${project.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}
        </div>
      </div>
      <figure class="project-detail-visual">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" width="1717" height="916" decoding="async" />
        <figcaption><span>SSS / ${escapeHtml(project.number)}</span><span>${escapeHtml(project.category)}</span></figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="project-detail-brief">
  <div class="section-inner project-detail-brief-grid">
    <div class="project-detail-brief-copy project-reveal">
      <p class="project-detail-label">Project brief</p>
      <h2>${escapeHtml(project.briefTitle)}</h2>
      <p>${escapeHtml(project.briefBody)}</p>
    </div>
    <aside class="project-detail-facts project-reveal" aria-label="Project overview">
      <div><span>Focus</span><strong>${escapeHtml(project.focus)}</strong></div>
      <div><span>System</span><strong>${escapeHtml(project.system)}</strong></div>
      <div><span>Delivery</span><strong>${escapeHtml(project.delivery)}</strong></div>
    </aside>
  </div>
</section>

<section class="project-detail-system">
  <div class="section-inner">
    <div class="project-detail-section-head project-reveal">
      <p class="project-detail-label">The system</p>
      <h2>Built as one connected intelligence layer.</h2>
    </div>
    <div class="project-detail-capability-grid">
      ${project.capabilities.map(([title, text], capabilityIndex) => `
        <article class="project-detail-capability project-reveal">
          <span>0${capabilityIndex + 1}</span>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(text)}</p>
        </article>
      `).join("")}
    </div>
  </div>
</section>

<section class="project-detail-process">
  <div class="section-inner project-detail-process-grid">
    <div class="project-detail-process-title project-reveal">
      <p class="project-detail-label">Delivery process</p>
      <h2>From first workflow to a system ready for real work.</h2>
    </div>
    <ol class="project-detail-steps">
      ${project.steps.map(([title, text], stepIndex) => `
        <li class="project-reveal">
          <span>0${stepIndex + 1}</span>
          <div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></div>
        </li>
      `).join("")}
    </ol>
  </div>
</section>

<section class="project-detail-proof">
  <div class="section-inner project-detail-proof-grid project-reveal">
    <div class="project-detail-proof-heading">
      <p class="project-detail-label">Customer proof</p>
      <h2>See what our real customers said.</h2>
      <a href="/testimonials">Read every customer story <span aria-hidden="true">↗</span></a>
    </div>
    <blockquote>
      <div class="project-detail-rating" aria-label="Five out of five stars">5 / 5</div>
      <p>“${escapeHtml(story.quote)}”</p>
      <footer><strong>${escapeHtml(story.author)}</strong><span>${escapeHtml(story.role)}</span></footer>
    </blockquote>
  </div>
</section>

<section class="project-detail-next">
  <a href="/projects/${escapeHtml(nextProject.slug)}" class="section-inner project-detail-next-link" aria-label="View next project: ${escapeHtml(nextProject.title)}">
    <div>
      <p class="project-detail-label">Next project / ${escapeHtml(nextProject.number)}</p>
      <h2>${escapeHtml(nextProject.title)}</h2>
      <span class="project-detail-next-cta">Explore case study <i aria-hidden="true">↗</i></span>
    </div>
    <figure>
      <img src="${escapeHtml(nextProject.image)}" alt="" width="1717" height="916" loading="lazy" decoding="async" />
    </figure>
  </a>
</section>

<section class="projects-cta">
  <div class="section-inner projects-cta-inner">
    <span>Have a complex AI brief?</span>
    <h2>Let's turn it into<br/>your next advantage.</h2>
    <a href="/contact" class="projects-cta-link">Start a project <i aria-hidden="true">↗</i></a>
  </div>
</section>

<div id="footer-placeholder"></div>
</body>
</html>`;
}

export const projectPages = Object.fromEntries(
  projectCaseStudies.flatMap((project, index) => {
    const html = renderProjectPage(project, index);
    const path = `/projects/${project.slug}`;
    return [
      [path, html],
      [`${path}.html`, html],
    ];
  })
);
