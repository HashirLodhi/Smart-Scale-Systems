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
    metaTitle: "Agentic RAG Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for agentic RAG systems covering source ingestion, hybrid retrieval, agent planning, citation validation, hallucination controls, and retrieval evaluation.",
    briefTitle: "Turn scattered knowledge into answers teams can inspect and trust.",
    briefBody: "Traditional search returns documents. Basic RAG returns passages. An agentic retrieval system understands the task, chooses the right sources, verifies what it finds, and produces a useful answer with evidence attached. This blueprint covers the full stack from source connectors to retrieval evaluation.",
    focus: "Knowledge operations",
    system: "Multi-agent retrieval",
    delivery: "Architecture to evaluation",
    relatedServices: ["/service-llm", "/service-custom-ai-agents"],
    relatedBlueprints: ["/projects/custom-chatbot", "/projects/custom-ai-agent"],
    relatedInsight: null,
    capabilities: [
      ["Source ingestion and permissions", "Connect databases, APIs, document stores, and file systems with per-role access controls enforced at query time."],
      ["Document processing and chunking", "Parse PDFs, HTML, slides, and spreadsheets into overlapping semantic chunks with configurable boundaries and metadata."],
      ["Hybrid retrieval and reranking", "Combine keyword, dense vector, and sparse retrieval signals, then rerank results using cross-encoder scoring."],
      ["Agent planning and routing", "A coordinator decomposes complex questions, selects retrieval strategies, and sequences tool calls before synthesis."],
      ["Citation validation and hallucination controls", "Every generated claim is checked against retrieved passages; unsupported statements are flagged or suppressed."],
    ],
    steps: [
      ["Audit knowledge sources", "Inventory documents, databases, APIs, permissions, freshness requirements, and existing search gaps."],
      ["Build retrieval indexes", "Chunk content, generate embeddings, construct keyword indexes, and configure access-aware source connectors."],
      ["Design agent workflows", "Define question decomposition rules, retrieval tool selection, reranking logic, and answer synthesis prompts."],
      ["Implement evaluation", "Build test question sets, measure recall, answer faithfulness, and end-to-end latency against acceptance thresholds."],
      ["Operate and improve", "Monitor retrieval quality, failed queries, source freshness, and drift; retrain or re-index as the knowledge base evolves."],
    ],
    signals: ["Grounded", "Traceable", "Scalable"],
    testimonial: "llm",
    sections: [
      {
        title: "Source Ingestion and Access Control",
        content: `<p>Every agentic RAG system begins with reliable source access. This blueprint covers connectors for SQL databases, REST APIs, cloud storage, CMS platforms, and internal wikis. Each connector enforces role-based access control so the retrieval layer never surfaces documents a user is not authorized to see. Incremental synchronization keeps indexes fresh without full re-ingestion, and webhook listeners trigger re-indexing when source content changes.</p>
<p>Document processing handles PDFs, Word files, HTML pages, spreadsheets, and slide decks. A configurable chunking pipeline splits documents into overlapping segments of 256 to 1024 tokens, preserving paragraph boundaries and section headings. Each chunk carries metadata including source URL, author, publication date, department, and content type, enabling filtered retrieval and citation generation downstream.</p>`
      },
      {
        title: "Hybrid Retrieval Architecture",
        content: `<p>Single-mode retrieval misses relevant content. This architecture combines BM25 keyword search for exact term matches with dense vector similarity for semantic understanding. A learned sparse retrieval layer adds term-weighting that adapts to the corpus. Results from all three channels are merged using reciprocal rank fusion, then passed through a cross-encoder reranker that scores each candidate against the original query.</p>
<p>The reranking stage typically improves top-5 precision by 15 to 30 percent over unranked retrieval. The system supports configurable top-k values, minimum score thresholds, and diversity constraints that prevent multiple results from the same source document from dominating the context window.</p>`
      },
      {
        title: "Agent Planning and Answer Synthesis",
        content: `<p>Simple RAG pipelines retrieve once and generate once. Agentic RAG adds a planning layer that decomposes complex questions into sub-queries, retrieves for each, evaluates intermediate results, and synthesizes a final answer. The planner uses tool-calling patterns to invoke retrieval, web search, database queries, or calculator functions as needed.</p>
<p>Answer synthesis follows a structured prompting pattern: the model receives the query, retrieved passages with source attribution, and instructions to cite each claim. Unsupported claims are explicitly marked. Confidence scores are assigned at the sentence level, and low-confidence passages trigger additional retrieval rounds or clarification prompts rather than speculative generation.</p>`
      },
      {
        title: "Evaluation and Quality Measurement",
        content: `<p>The evaluation framework tests three dimensions: retrieval quality, answer faithfulness, and end-to-end utility. Retrieval quality measures recall@k, precision@k, and mean reciprocal rank against a labeled test set of 200 or more questions. Answer faithfulness uses an LLM-as-judge approach to verify that every claim in the generated response is grounded in the retrieved context.</p>
<p>End-to-end utility measures task completion: did the answer resolve the question, was it cited correctly, and did it arrive within the latency budget? The system tracks these metrics continuously and surfaces regressions in a quality dashboard. Common failure modes include chunking boundary errors, stale source content, and reranker overconfidence on ambiguous queries.</p>`
      },
      {
        title: "Risks and Implementation Considerations",
        content: `<p><strong>Knowledge freshness:</strong> Sources change at different rates. A document that was accurate last month may now be wrong. The system implements source-level freshness tracking, TTL policies, and priority re-indexing for high-velocity content.</p>
<p><strong>Retrieval recall gaps:</strong> If relevant content is not retrieved, no synthesis model can recover it. Regular recall audits against real user questions catch coverage gaps before they affect answers.</p>
<p><strong>Hallucination under pressure:</strong> Complex or multi-hop questions increase the risk of unsupported claims. Confidence thresholds and retrieval-then-verify loops mitigate this, but require tuning for each domain.</p>
<p><strong>Evaluation at scale:</strong> Manual evaluation does not scale. The blueprint includes automated faithfulness checking, retrieval metric dashboards, and human review sampling for calibration.</p>`
      }
    ]
  },
  {
    number: "02",
    slug: "custom-chatbot",
    title: "Custom Chatbot",
    category: "Conversational AI / Customer Experience",
    image: "/assets/projects/02-custom-chatbot.jpg",
    imageAlt: "Glass conversation forms orbiting a semantic intelligence core above layered knowledge",
    summary: "A branded conversational experience built around your knowledge, customer journeys, and support operations.",
    metaTitle: "Custom Chatbot Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for production chatbots covering conversation state, intent routing, knowledge grounding, tone controls, help-desk integrations, and abuse handling.",
    briefTitle: "Make every conversation feel useful, on-brand, and connected to the business.",
    briefBody: "A production chatbot needs more than fluent replies. It needs the right content, a clear conversational role, safe escalation paths, and integrations that let the customer actually complete their next step. This blueprint covers conversation design, knowledge grounding, and operational integration from first message to post-launch improvement.",
    focus: "Customer experience",
    system: "RAG chatbot",
    delivery: "Conversation to launch",
    relatedServices: ["/service-llm", "/service-business-automations"],
    relatedBlueprints: ["/projects/agentic-rag", "/projects/voice-calling-agent"],
    relatedInsight: null,
    capabilities: [
      ["Conversation state and context", "Session memory tracks prior messages, user preferences, and workflow progress across multi-turn interactions."],
      ["Intent routing and knowledge grounding", "Classifies user goals, routes to the right knowledge source, and grounds responses in verified content."],
      ["Tone, brand, and escalation controls", "Enforces brand voice, detects frustration, and transfers to human agents with full conversation history."],
      ["Help-desk and CRM integrations", "Creates tickets, updates records, and logs conversations in Zendesk, Salesforce, Intercom, or custom systems."],
      ["Lead capture and abuse handling", "Extracts contact information from natural conversation and filters inappropriate or malicious inputs."],
    ],
    steps: [
      ["Map conversation scenarios", "Identify high-value questions, audience segments, brand voice guidelines, and escalation triggers."],
      ["Design conversation flows", "Create intent trees, response templates, knowledge boundaries, and fallback behavior for each scenario."],
      ["Build and integrate", "Connect retrieval pipelines, business system APIs, analytics tracking, and a responsive web chat interface."],
      ["Launch and iterate", "Monitor unanswered questions, conversation drop-off points, and user satisfaction to expand coverage continuously."],
    ],
    signals: ["On-brand", "Helpful", "Connected"],
    testimonial: "llm",
    sections: [
      {
        title: "Conversation State Management",
        content: `<p>Production chatbots must maintain context across multiple turns. This blueprint implements session-level memory that tracks the conversation history, extracted entities, and workflow state. Short-term memory holds the last ten to twenty exchanges for coherent follow-up. Long-term memory, where permitted, remembers returning users' preferences and past interactions across sessions.</p>
<p>The state machine manages conversation phases: greeting, information gathering, task execution, and closure. Each phase has defined entry conditions, expected user inputs, and transition rules. When the conversation strays outside the defined flow, a fallback handler either redirects gracefully or escalates to a human agent.</p>`
      },
      {
        title: "Intent Routing and Response Generation",
        content: `<p>Every incoming message passes through an intent classifier trained on domain-specific utterances. The classifier assigns a confidence score and routes to the appropriate handler: knowledge retrieval, action execution, clarification request, or human escalation. Low-confidence intents trigger a disambiguation prompt rather than a speculative response.</p>
<p>Response generation uses a retrieval-augmented approach: relevant passages are fetched from the knowledge base, injected into the prompt template, and synthesized into a conversational reply. The system enforces citation requirements, maximum response length, and prohibited content filters to maintain quality and safety.</p>`
      },
      {
        title: "Brand Voice and Tone Controls",
        content: `<p>Every organization has a distinct communication style. This blueprint defines tone parameters including formality level, emoji usage, technical depth, and empathy expressions. A tone classifier evaluates each generated response against these parameters and adjusts phrasing before delivery. Escalation messages automatically shift to a more formal, reassuring tone.</p>
<p>Brand-specific terminology is maintained in a glossary that the response generator references. Product names, service descriptions, and company values are consistently represented. Off-brand language triggers automatic regeneration with corrected terminology.</p>`
      },
      {
        title: "Integrations and Operational Handoff",
        content: `<p>The chatbot connects to help-desk platforms through their APIs, creating tickets with full conversation transcripts and sentiment analysis. CRM integration captures lead information, qualifies prospects using conversational signals, and creates opportunities in the sales pipeline. Calendar integration enables direct scheduling without human intervention.</p>
<p>Human handoff transfers the complete conversation context to a live agent, including the user's intent, extracted information, sentiment trajectory, and any actions already taken. The agent sees a summary rather than reading the full transcript, reducing response time.</p>`
      },
      {
        title: "Abuse Handling and Quality Evaluation",
        content: `<p>Public-facing chatbots face prompt injection, jailbreak attempts, and inappropriate content. This blueprint layers input filtering, output moderation, and rate limiting. Detected abuse triggers a polite deflection response and logs the incident for review. Repeated abuse from the same session escalates to automatic suspension.</p>
<p>Quality evaluation tracks conversation completion rate, user satisfaction scores, first-response accuracy, and escalation frequency. A weekly review cycle analyzes dropped conversations, failed intents, and low-rated interactions to identify knowledge gaps and conversation design improvements.</p>`
      }
    ]
  },
  {
    number: "03",
    slug: "custom-ai-agent",
    title: "Custom AI Agent",
    category: "Agentic AI / Digital Operations",
    image: "/assets/projects/03-custom-ai-agent.jpg",
    imageAlt: "Autonomous intelligence core coordinating modular tools, memory capsules, and task pathways",
    summary: "A goal-driven agent that reasons across tools, coordinates multi-step tasks, and completes work with controlled autonomy.",
    metaTitle: "Custom AI Agent Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for autonomous AI agents covering tool registries, planning, memory, approval gates, retry logic, idempotency, and cost controls.",
    briefTitle: "Give repetitive digital work to an agent that knows when to act and when to ask.",
    briefBody: "Useful autonomy comes from good boundaries. The agent is designed around a specific job, approved tools, observable decisions, and human checkpoints for actions that carry risk or need judgment. This blueprint covers tool integration, planning logic, memory, safety controls, and operational observability.",
    focus: "Digital operations",
    system: "Tool-using AI agent",
    delivery: "Workflow to control layer",
    relatedServices: ["/service-custom-ai-agents", "/service-business-automations"],
    relatedBlueprints: ["/projects/agentic-rag", "/projects/voice-calling-agent"],
    relatedInsight: null,
    capabilities: [
      ["Tool registry and permissions", "Each tool is typed, documented, and scoped with read, write, or admin permissions per agent role."],
      ["Planning and execution loops", "The agent decomposes goals into steps, selects tools, executes actions, and evaluates outcomes before proceeding."],
      ["Short-term and long-term memory", "Working memory holds task context; persistent memory stores learned patterns, preferences, and past outcomes."],
      ["Approval gates and audit trails", "High-risk actions require human confirmation; every decision, tool call, and result is logged for review."],
      ["Cost controls and observability", "Token budgets, API call limits, and execution timeouts prevent runaway costs; traces provide full visibility."],
    ],
    steps: [
      ["Define the agent job", "Select a narrow, well-bounded task with clear success criteria, failure modes, and escalation points."],
      ["Equip with tools and memory", "Connect typed tool APIs, configure permission scopes, and establish short-term and long-term memory stores."],
      ["Test with scenario suites", "Run normal operations, ambiguous inputs, tool failures, permission denials, and budget limit scenarios."],
      ["Operate with monitoring", "Track execution traces, cost accumulation, approval rates, and outcome quality in a live dashboard."],
    ],
    signals: ["Autonomous", "Governed", "Observable"],
    testimonial: "automation",
    sections: [
      {
        title: "Tool Registry and Permission Model",
        content: `<p>Every tool the agent can use is registered in a typed registry that defines the tool's name, description, input schema, output schema, and permission level. Read-only tools query data without side effects. Write tools create records, send messages, or modify state. Admin tools perform destructive or irreversible actions and require explicit human approval.</p>
<p>Permission scopes are assigned per agent role, not per tool call. An agent assigned the "support" role can read customer records and create tickets but cannot delete accounts or access billing data. Scope violations are logged and blocked at the execution layer before the tool is invoked.</p>`
      },
      {
        title: "Planning, Execution, and Retry Logic",
        content: `<p>The agent uses a planning loop that decomposes the goal into ordered steps, selects the appropriate tool for each step, executes the action, and evaluates the result before proceeding. If a tool call fails due to a transient error, the agent retries with exponential backoff up to a configured maximum. Persistent failures trigger a graceful degradation path: the agent reports what it accomplished, what failed, and what manual intervention is needed.</p>
<p>Timeouts are enforced at both the tool level and the overall task level. A tool that takes longer than its SLA is killed, and the agent is notified. The overall task timeout prevents infinite loops when the agent cannot make progress. Both timeouts are configurable per agent role and task type.</p>`
      },
      {
        title: "Memory Architecture",
        content: `<p>Short-term memory holds the current task context: the original goal, intermediate results, pending steps, and tool call history. This memory is ephemeral and cleared when the task completes or times out. Long-term memory persists across tasks, storing learned patterns such as frequently accessed data sources, common failure modes, and user preferences.</p>
<p>Memory writes are append-only to prevent corruption. Reads are scoped to the current task to avoid context pollution. Memory cleanup policies archive old entries and enforce storage limits. Sensitive data in memory is encrypted at rest and purged according to data retention policies.</p>`
      },
      {
        title: "Idempotency and Execution Traces",
        content: `<p>Every tool call includes an idempotency key derived from the task ID, step number, and tool name. If a tool is called twice with the same key, the second call returns the cached result without re-executing the side effect. This prevents duplicate record creation, double payments, and other non-idempotent failures.</p>
<p>Execution traces record every decision point: the agent's reasoning, the tool selected, the input provided, the output received, and the time taken. Traces are stored in an append-only log and surfaced in a debugging dashboard. They enable post-incident analysis, cost attribution, and performance optimization.</p>`
      },
      {
        title: "Cost Controls and Evaluation Criteria",
        content: `<p><strong>Token budgets:</strong> Each task is allocated a maximum number of LLM tokens. The agent tracks cumulative usage and pauses before exceeding the budget, requesting approval for additional spend if needed.</p>
<p><strong>API call limits:</strong> External tool calls are rate-limited per minute and per task. The agent spaces calls to stay within provider rate limits and avoids cascading throttling.</p>
<p><strong>Evaluation metrics:</strong> Task completion rate, average execution time, cost per task, approval rate, and failure reason distribution are tracked continuously. Regression in any metric triggers investigation.</p>
<p><strong>Observability:</strong> Real-time dashboards show active tasks, pending approvals, recent failures, and cost accumulation. Alerts fire when tasks approach timeout or budget limits.</p>`
      }
    ]
  },
  {
    number: "04",
    slug: "voice-calling-agent",
    title: "Voice Calling Agent",
    category: "Voice AI / Customer Operations",
    image: "/assets/projects/04-voice-calling-agent.jpg",
    imageAlt: "A sculptural voice waveform moving from an acoustic capsule into a conversational intelligence core",
    summary: "A natural inbound and outbound voice agent for qualification, scheduling, service, and follow-up calls.",
    metaTitle: "Voice Calling Agent Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for voice AI agents covering telephony, speech-to-text, turn-taking, barge-in handling, latency budgets, consent rules, and call-quality evaluation.",
    briefTitle: "Create phone conversations that move at human speed and end with a clear next step.",
    briefBody: "Voice systems must handle interruptions, accents, pauses, uncertainty, and live business data without losing the thread. This blueprint covers telephony integration, speech processing, conversation management, compliance, and call-quality evaluation from architecture to operations.",
    focus: "Customer operations",
    system: "Real-time voice AI",
    delivery: "Call flow to CRM",
    relatedServices: ["/service-custom-ai-agents", "/service-business-automations"],
    relatedBlueprints: ["/projects/custom-chatbot", "/projects/ai-integrations"],
    relatedInsight: null,
    capabilities: [
      ["Telephony integration", "SIP, PSTN, and WebRTC connections with carrier-grade redundancy, call routing, and number provisioning."],
      ["Speech-to-text and text-to-speech", "Real-time transcription with speaker diarization and natural-sounding synthesis with configurable voice profiles."],
      ["Turn-taking and barge-in handling", "Detects when the caller is speaking, manages pauses, and handles interruptions without losing conversation context."],
      ["Consent, recording, and compliance", "Records calls with disclosure, manages consent per jurisdiction, and stores recordings with retention policies."],
      ["Call transfer and failure recovery", "Graceful handoff to live agents with context, and automatic retry or callback for failed connections."],
    ],
    steps: [
      ["Script the call flows", "Map intents, disclosure requirements, objection handling, transfer criteria, and successful outcome definitions."],
      ["Connect telephony and data", "Integrate SIP trunks, calendars, CRM records, knowledge bases, and approved real-time data sources."],
      ["Test with realistic conditions", "Evaluate accents, background noise, barge-in, silence, hesitation, tool failures, and network degradation."],
      ["Tune and operate", "Review call transcripts, latency metrics, and completion rates to improve pacing and conversation quality."],
    ],
    signals: ["Natural", "Responsive", "Action-ready"],
    testimonial: "automation",
    sections: [
      {
        title: "Telephony and Speech Architecture",
        content: `<p>The voice agent connects to telephony infrastructure through SIP trunks for inbound and outbound calls. WebRTC provides browser-based calling for web and mobile applications. Carrier-grade redundancy ensures call continuity even when individual connections fail. Call routing logic directs incoming calls to the appropriate agent persona based on caller identification, time of day, and queue status.</p>
<p>Speech-to-text runs in real time with streaming transcription that delivers partial results as the caller speaks. Speaker diarization separates the caller from the agent voice for clean transcript generation. Text-to-speech uses neural synthesis with configurable speaking rate, pitch, and prosody to match the desired brand voice. Latency from end of speech to start of response is targeted below 500 milliseconds.</p>`
      },
      {
        title: "Turn-Taking and Interruption Handling",
        content: `<p>Natural conversation requires precise turn detection. The system monitors audio energy levels, speech activity, and prosodic cues to determine when the caller has finished speaking. A configurable pause threshold (typically 600 to 1200 milliseconds) separates turns without creating awkward silence.</p>
<p>Barge-in handling detects when the caller speaks during the agent's response. The system immediately stops synthesis, preserves the conversation state, and processes the caller's input. Partial synthesis results are discarded rather than completing outdated information. This creates a conversational rhythm that feels responsive rather than scripted.</p>`
      },
      {
        title: "Consent, Recording, and Regulatory Compliance",
        content: `<p>Call recording requirements vary by jurisdiction. This blueprint implements a consent framework that plays disclosure messages at call start, logs consent status, and respects recording prohibitions in two-party consent jurisdictions. Recordings are stored with encryption at rest, access controls, and configurable retention periods.</p>
<p>Do-not-call lists, call time restrictions, and purpose limitations are enforced at the routing layer. The system blocks calls to numbers on suppression lists and restricts outbound calling hours to legally permitted windows. Audit logs capture every dial, consent event, and recording access for compliance reporting.</p>`
      },
      {
        title: "Call Flow and Business Integration",
        content: `<p>The voice agent executes structured call flows: greeting, identity verification, intent discovery, information gathering, action execution, and closure. Each flow step has defined success criteria and timeout behavior. If the caller's intent does not match any defined flow, the agent offers to transfer to a live representative with full context.</p>
<p>During the call, the agent updates CRM records, creates support tickets, schedules appointments, and sends confirmation messages in real time. Post-call actions include sending follow-up emails, updating pipeline stages, and triggering downstream workflows. Every action is logged with timestamp and outcome.</p>`
      },
      {
        title: "Call Quality and Evaluation Metrics",
        content: `<p><strong>Latency budget:</strong> End-to-end response latency is measured from the end of caller speech to the start of agent speech. The target is below 500 milliseconds for conversational exchanges.</p>
<p><strong>Task completion rate:</strong> The percentage of calls that reach the defined successful outcome (qualified lead, scheduled appointment, resolved issue) is tracked per flow type.</p>
<p><strong>Call quality scores:</strong> Audio quality (MOS scores), transcription accuracy, and conversation naturalness are evaluated through automated scoring and human review sampling.</p>
<p><strong>Failure analysis:</strong> Dropped calls, failed transfers, and incomplete flows are categorized by root cause: network issues, speech recognition errors, intent misclassification, or tool failures.</p>`
      }
    ]
  },
  {
    number: "05",
    slug: "ai-integrations",
    title: "AI Integrations",
    category: "Product AI / Applications",
    image: "/assets/projects/05-ai-integrations.jpg",
    imageAlt: "A central AI module connected to multiple blank glass application and device planes",
    summary: "AI capabilities embedded directly into apps and websites, from intelligent search to recommendations and workflow actions.",
    metaTitle: "AI Integrations Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for AI product integrations covering API patterns, authentication, data contracts, webhooks, error handling, rate limits, and monitoring.",
    briefTitle: "Put intelligence inside the product experience, not beside it.",
    briefBody: "The strongest AI features feel native to the product. They use the right context at the right moment, respect the application's permissions, and help users finish a task without forcing them into a separate tool. This blueprint covers integration architecture, API design, and operational monitoring from prototype to production.",
    focus: "Digital products",
    system: "AI application layer",
    delivery: "API to user experience",
    relatedServices: ["/service-ai-integrations", "/service-ai-automation"],
    relatedBlueprints: ["/projects/business-automation", "/projects/custom-ai-agent"],
    relatedInsight: null,
    capabilities: [
      ["API and SDK integration patterns", "RESTful and GraphQL APIs with typed schemas, versioning, and client SDKs for web, mobile, and server."],
      ["Authentication and data contracts", "OAuth2, API keys, and JWT tokens with schema validation, input sanitization, and output contracts."],
      ["Webhooks and event queues", "Asynchronous event delivery with retry logic, dead-letter queues, and delivery confirmation."],
      ["Error handling and rate limits", "Graceful degradation, circuit breakers, exponential backoff, and per-client rate limiting."],
      ["Monitoring and fallback behavior", "Latency tracking, error rate dashboards, cost attribution, and automatic fallback to cached or simplified responses."],
    ],
    steps: [
      ["Prioritize integration points", "Choose product moments where AI adds the most value: search, recommendations, generation, or decision support."],
      ["Prototype interaction patterns", "Test response formats, loading states, error messages, and user expectations with real workflows."],
      ["Build production APIs", "Implement typed endpoints, authentication, context assembly, caching layers, and fallback behavior."],
      ["Measure and iterate", "Track adoption, latency, error rates, cost per request, and task completion after launch."],
    ],
    signals: ["Product-native", "Context-aware", "Measurable"],
    testimonial: "llm",
    sections: [
      {
        title: "API Design and Integration Patterns",
        content: `<p>AI integrations work best when they follow the existing API patterns of the host application. This blueprint supports REST, GraphQL, and gRPC interfaces with typed request and response schemas. Each endpoint is documented with OpenAPI specifications, example payloads, and error codes. Client SDKs are generated for JavaScript, Python, and Swift to reduce integration friction.</p>
<p>The API layer handles request validation, context assembly, and response formatting. Input sanitization prevents prompt injection and malformed data. Output contracts ensure responses conform to the expected schema, including structured metadata like confidence scores, source citations, and latency measurements.</p>`
      },
      {
        title: "Authentication and Data Flow",
        content: `<p>Every API call carries authentication credentials that determine data access scope. OAuth2 flows handle user-delegated access. API keys identify service-to-service communication. JWT tokens carryClaims that the AI service uses to filter results and enforce permissions. The system never accesses data beyond what the authenticated context permits.</p>
<p>Data flows are designed to minimize latency. Hot paths (user-facing search, real-time suggestions) use pre-computed indexes and caching. Warm paths (batch recommendations, scheduled reports) process data asynchronously. Cold paths (full retraining, bulk analysis) run on scheduled pipelines with cost-managed compute.</p>`
      },
      {
        title: "Webhooks and Asynchronous Processing",
        content: `<p>Not all AI operations complete in a single request-response cycle. Long-running tasks like model inference, batch scoring, and report generation use webhook-based delivery. The system registers a callback URL, processes the request asynchronously, and delivers results via HTTP POST with retry logic and delivery confirmation.</p>
<p>Failed webhook deliveries are retried with exponential backoff up to a configured maximum. Unrecoverable failures are logged in a dead-letter queue with the full request context, enabling manual inspection and replay. Event queues decouple request submission from processing, allowing the system to absorb traffic spikes without dropping requests.</p>`
      },
      {
        title: "Error Handling and Resilience",
        content: `<p>AI services can fail for many reasons: model overload, network timeouts, invalid inputs, or upstream dependency failures. This blueprint implements circuit breaker patterns that stop calling a failing service after a threshold of consecutive errors, then periodically test recovery. Fallback responses provide degraded but useful behavior: cached results, simplified heuristics, or graceful error messages.</p>
<p>Rate limiting is enforced per client, per endpoint, and globally. Limits are communicated via response headers (X-RateLimit-Remaining, X-RateLimit-Reset). Clients that exceed limits receive a 429 status with retry-after guidance. Burst allowances accommodate legitimate traffic spikes during product launches or campaigns.</p>`
      },
      {
        title: "Monitoring and Operational Metrics",
        content: `<p><strong>Latency tracking:</strong> P50, P95, and P99 latencies are measured per endpoint and surfaced in real-time dashboards. Latency regressions trigger alerts for investigation.</p>
<p><strong>Error rate monitoring:</strong> Error rates by type (4xx, 5xx, timeout, circuit-open) are tracked per endpoint. Sudden increases trigger automated rollback or fallback activation.</p>
<p><strong>Cost attribution:</strong> API calls are attributed to the calling client, endpoint, and use case. Cost dashboards enable capacity planning and pricing decisions.</p>
<p><strong>Adoption metrics:</strong> Feature usage, completion rates, and user satisfaction scores guide prioritization of AI capability investments.</p>`
      }
    ]
  },
  {
    number: "06",
    slug: "business-automation",
    title: "Business Automation",
    category: "AI Automation / Operations",
    image: "/assets/projects/06-business-automation.jpg",
    imageAlt: "A connected sequence of intelligent machines routing documents and decisions through an automated workflow",
    summary: "Connected automations that reduce repetitive work across sales, operations, support, reporting, and internal processes.",
    metaTitle: "Business Automation Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for business automation covering trigger-action workflows, CRM processes, approval queues, audit logs, SLA monitoring, and baseline measurement.",
    briefTitle: "Transform a chain of manual handoffs into one visible, dependable operating flow.",
    briefBody: "Automation creates value when the whole process is understood: triggers, decisions, exceptions, owners, and downstream systems. This blueprint combines deterministic workflow logic with AI where language or judgment is actually needed, covering process mapping, integration, monitoring, and continuous improvement.",
    focus: "Business operations",
    system: "AI workflow automation",
    delivery: "Process to production",
    relatedServices: ["/service-business-automations", "/service-ai-integrations"],
    relatedBlueprints: ["/projects/custom-ai-agent", "/projects/ai-integrations"],
    relatedInsight: null,
    capabilities: [
      ["Trigger-and-action workflows", "Event-driven automation chains triggered by form submissions, database changes, schedules, or API calls."],
      ["CRM and sales routing", "Automatic lead assignment, deal stage updates, follow-up reminders, and pipeline reporting."],
      ["Approval workflows and queues", "Multi-level approval routing with escalation, deadline tracking, and delegation support."],
      ["Audit logs and exception management", "Every action, decision, and failure is logged; exceptions route to the right human with full context."],
      ["SLA monitoring and baseline measurement", "Process cycle times, throughput, and completion rates measured against defined service-level targets."],
    ],
    steps: [
      ["Map the current process", "Document every step, decision point, exception path, system touchpoint, and owner."],
      ["Simplify before automating", "Remove redundant approvals,合并 parallel steps, and eliminate unnecessary data collection."],
      ["Build the automation", "Connect triggers, business rules, AI classification, approval routing, and destination systems."],
      ["Monitor and improve", "Track throughput, failure rates, SLA compliance, and exception patterns for continuous refinement."],
    ],
    signals: ["Efficient", "Reliable", "Visible"],
    testimonial: "automation",
    sections: [
      {
        title: "Trigger-and-Action Workflow Design",
        content: `<p>Every automation begins with a trigger: a form submission, a database record change, a scheduled time, an incoming email, or an API webhook. The trigger payload is validated and normalized into an internal event format. Actions follow in a defined sequence: data transformation, conditional routing, API calls, database updates, and notification delivery.</p>
<p>The workflow engine supports branching logic, parallel execution, and loop constructs. Each step has defined input and output schemas, enabling type checking at design time. Failed steps trigger configurable retry policies, compensation actions (rollbacks), or exception routing to human reviewers.</p>`
      },
      {
        title: "CRM and Sales Process Automation",
        content: `<p>Sales automation connects lead capture forms, email outreach, calendar scheduling, and CRM record updates into a unified pipeline. New leads are scored based on demographic fit and behavioral signals, then assigned to the appropriate sales representative using round-robin, territory, or capacity-based routing.</p>
<p>Deal stages advance automatically based on activity signals: email opens, meeting completions, document views, and form submissions. Stalled deals trigger follow-up reminders. Lost deal analysis identifies common exit points and feeds improvement recommendations back to the sales process design.</p>`
      },
      {
        title: "Approval Workflows and Exception Handling",
        content: `<p>Multi-level approval workflows route requests through the appropriate chain based on request type, value threshold, and organizational hierarchy. Each approver receives the full request context, related history, and a deadline. Escalation rules activate when approvals exceed their SLA, routing to backup approvers or management.</p>
<p>Exception management captures process deviations: missing data, conflicting rules, integration failures, and policy violations. Each exception is categorized, assigned a severity level, and routed to the appropriate handler with diagnostic information. Exception resolution patterns are tracked and used to improve the automation rules.</p>`
      },
      {
        title: "Audit Logging and Compliance",
        content: `<p>Every automation action generates an audit record: timestamp, actor (human or system), action type, affected records, input data, output data, and outcome. Audit logs are append-only and stored in an immutable format for compliance requirements. Log retention policies archive older entries while maintaining queryability.</p>
<p>Compliance reporting generates summaries of process execution, approval patterns, exception rates, and SLA adherence. These reports are scheduled weekly or generated on demand for management review and regulatory audit preparation.</p>`
      },
      {
        title: "Baseline Measurement and Value Assessment",
        content: `<p><strong>Process baseline:</strong> Before automation, measure current cycle times, error rates, manual effort hours, and throughput for the target process. This baseline quantifies the improvement delivered by automation.</p>
<p><strong>Throughput metrics:</strong> Track items processed per hour, queue depth, and backlog age. Degradation in throughput triggers investigation into bottlenecks or integration failures.</p>
<p><strong>Exception rate:</strong> The percentage of automation runs that require human intervention. High exception rates indicate process design gaps or data quality issues.</p>
<p><strong>Value realization:</strong> Map automation metrics to business outcomes: reduced labor cost, faster response times, fewer errors, and improved customer satisfaction. Report value quarterly to justify continued investment.</p>`
      }
    ]
  },
  {
    number: "07",
    slug: "autonomous-data-annotation",
    title: "Autonomous Data Annotation",
    category: "Data Operations / Active Learning",
    image: "/assets/projects/07-autonomous-annotation.jpg",
    imageAlt: "Image data passing through a glass machine-vision scanner and sorting into validated annotation groups",
    summary: "A model-assisted labeling loop that pre-annotates, validates, prioritizes uncertainty, and improves dataset quality.",
    metaTitle: "Autonomous Data Annotation Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for autonomous annotation covering pre-labeling, confidence thresholds, human review routing, annotation guidelines, inter-annotator agreement, and dataset QA.",
    briefTitle: "Focus expert review where it changes the dataset most.",
    briefBody: "Annotation automation is not about removing quality control. It is about using model confidence, validation rules, and targeted review to reduce repetitive labeling while directing human attention to uncertain and high-impact examples. This blueprint covers pre-labeling, review routing, quality measurement, and continuous improvement.",
    focus: "Training data operations",
    system: "Human-in-the-loop labeling",
    delivery: "Guidelines to QA loop",
    relatedServices: ["/service-data-annotation", "/service-ai-training-data"],
    relatedBlueprints: ["/projects/custom-model-training", "/projects/video-action-recognition"],
    relatedInsight: null,
    capabilities: [
      ["Pre-labeling with confidence thresholds", "Models generate first-pass annotations; confidence scores determine whether human review is required."],
      ["Human-review routing and calibration", "Uncertain examples route to expert reviewers; inter-annotator agreement calibrates guidelines and training."],
      ["Annotation guidelines and gold standards", "Documented ontologies, visual examples, and gold-standard tasks ensure consistent labeling across reviewers."],
      ["Error taxonomy and correction flows", "Structured error categories capture label quality issues; corrections feed back into model and guideline improvements."],
      ["Dataset drift detection and ongoing QA", "Statistical monitors detect distribution shifts, annotation quality degradation, and emerging edge cases."],
    ],
    steps: [
      ["Define ontology and guidelines", "Create label taxonomies, visual examples, edge-case rules, and quality thresholds for each annotation task."],
      ["Establish baseline quality", "Run a calibration round with multiple annotators on gold-standard data to measure inter-annotator agreement."],
      ["Deploy pre-labeling pipeline", "Train and deploy baseline models that generate confident first-pass annotations for high-agreement categories."],
      ["Route and review uncertain examples", "Build review queues that prioritize high-impact uncertainty, surface model disagreements, and track correction patterns."],
      ["Monitor and improve continuously", "Track dataset drift, annotation throughput, quality metrics, and model performance; update guidelines and models accordingly."],
    ],
    signals: ["Efficient", "Reviewable", "Adaptive"],
    testimonial: "annotation",
    sections: [
      {
        title: "Pre-labeling and Confidence-Based Routing",
        content: `<p>The pre-labeling pipeline runs trained models over raw data to generate structured first-pass annotations. Each annotation carries a confidence score derived from the model's output probability distribution. High-confidence annotations (above a configurable threshold, typically 0.9 or higher) are accepted without human review. Medium-confidence annotations are routed for spot-check review. Low-confidence annotations are flagged for full expert review.</p>
<p>Confidence thresholds are calibrated per label category. Categories with high inter-annotator agreement can use higher thresholds, accepting more automated labels. Categories with inherent ambiguity use lower thresholds, ensuring human oversight. Threshold calibration is reviewed monthly as models improve and annotation guidelines evolve.</p>`
      },
      {
        title: "Annotation Guidelines and Quality Standards",
        content: `<p>Every annotation task begins with a documented ontology that defines each label, its boundaries, and its relationship to other labels. The ontology includes visual examples for common cases, edge-case examples with correct labels, and explicit anti-patterns showing common mistakes. Guidelines are versioned and linked to specific dataset releases.</p>
<p>Gold-standard tasks are embedded in review queues at known positions. Annotator performance on gold tasks is tracked over time, and systematic deviations trigger re-training or guideline clarification. Inter-annotator agreement (measured by Cohen's kappa or Fleiss' kappa) is computed weekly and surfaced in a quality dashboard.</p>`
      },
      {
        title: "Error Taxonomy and Correction Flows",
        content: `<p>Label quality issues are categorized into a structured taxonomy: missed labels, incorrect labels, imprecise boundaries, inconsistent application of guidelines, and systematic model biases. Each error category has defined severity levels and resolution procedures. High-severity errors (incorrect labels on training-critical examples) trigger immediate correction and guideline updates.</p>
<p>Corrected annotations are logged with the original label, the corrected label, the reviewer identity, and the correction rationale. This correction log is used to generate targeted training data for model improvement and to identify guideline gaps that need clarification.</p>`
      },
      {
        title: "Dataset Drift and Ongoing Quality Assurance",
        content: `<p>Statistical monitors track the distribution of labels, annotation confidence scores, and inter-annotator agreement over time. Shifts in any metric trigger investigation. A sudden increase in low-confidence annotations may indicate new edge cases not covered by the current model. A decrease in inter-annotator agreement may indicate guideline ambiguity.</p>
<p>Ongoing quality assurance includes random sampling audits, cross-reviewer comparisons, and periodic re-annotation of previously labeled data to detect consistency drift. These activities are scheduled weekly for active projects and monthly for stable datasets.</p>`
      },
      {
        title: "Evaluation Criteria and Risk Factors",
        content: `<p><strong>Annotation accuracy:</strong> Measured against gold-standard benchmarks and cross-reviewer agreement. Target accuracy depends on task complexity: 95 percent for simple classification, 85 percent for complex multi-label annotation.</p>
<p><strong>Throughput:</strong> Items processed per hour per reviewer, including both automated pre-labeling and human review time. Throughput is tracked to identify bottlenecks and optimize queue routing.</p>
<p><strong>Model improvement:</strong> Each review cycle should produce measurable improvement in pre-labeling accuracy. If model performance plateaus, investigate data quality, guideline issues, or model architecture limitations.</p>
<p><strong>Cost efficiency:</strong> Compare the total cost (model compute + human review time) against fully manual annotation. The goal is 40 to 60 percent cost reduction while maintaining or improving quality.</p>`
      }
    ]
  },
  {
    number: "08",
    slug: "custom-model-training",
    title: "Custom Model Training",
    category: "Machine Learning / Model Engineering",
    image: "/assets/projects/08-custom-model-training.jpg",
    imageAlt: "Layered training data refined through a transparent model lattice into a polished intelligence core",
    summary: "Purpose-built training and fine-tuning aligned to domain data, evaluation criteria, and production requirements.",
    metaTitle: "Custom Model Training Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for custom model training covering dataset readiness, train-test splits, baseline models, evaluation metrics, error analysis, deployment, and monitoring.",
    briefTitle: "Train for the behavior the product needs, then prove it before deployment.",
    briefBody: "A custom model project starts with the task and evaluation standard, not the model name. Data design, baseline comparison, experiment tracking, safety checks, and deployment constraints shape every training decision. This blueprint covers the full pipeline from data preparation to production monitoring.",
    focus: "Model performance",
    system: "Training and evaluation",
    delivery: "Dataset to deployment",
    relatedServices: ["/service-ai-model-training", "/service-data-annotation"],
    relatedBlueprints: ["/projects/autonomous-data-annotation", "/projects/data-segmentation"],
    relatedInsight: null,
    capabilities: [
      ["Dataset readiness and split design", "Train, validation, and test splits designed to prevent leakage, represent production distribution, and support stratified evaluation."],
      ["Baseline models and architecture selection", "Start with simple baselines; compare architectures, hyperparameters, and training strategies against defined metrics."],
      ["Evaluation metrics and error analysis", "Multi-dimensional evaluation: accuracy, precision, recall, calibration, latency, and cost with structured error categorization."],
      ["Calibration and deployment validation", "Probability calibration, confidence threshold selection, and shadow deployment against production traffic."],
      ["Monitoring and retraining triggers", "Data drift detection, performance degradation alerts, and scheduled retraining with versioned model artifacts."],
    ],
    steps: [
      ["Define the task and metrics", "Specify the prediction target, evaluation metrics, test set design, latency constraints, and cost budget."],
      ["Prepare and validate data", "Curate training data, remove duplicates, handle class imbalance, and document data lineage."],
      ["Train and compare experiments", "Run controlled experiments tracking parameters, metrics, and resource usage against the baseline."],
      ["Evaluate for production", "Test quality, safety, latency, and cost; perform error analysis; select the model that meets all acceptance criteria."],
      ["Deploy and monitor", "Package the model with versioning, deploy to staging then production, and monitor performance continuously."],
    ],
    signals: ["Purpose-built", "Evaluated", "Deployable"],
    testimonial: "llm",
    sections: [
      {
        title: "Dataset Readiness and Split Design",
        content: `<p>Model quality starts with data quality. This blueprint includes data profiling that checks for missing values, label noise, duplicate records, and class imbalance. Data lineage is documented: source, collection method, preprocessing steps, and known limitations. This documentation is essential for reproducing results and debugging production issues.</p>
<p>Train, validation, and test splits are designed to prevent data leakage. Temporal data is split by time (training on past data, evaluating on future data). User-level data is split by user (no user appears in both training and test sets). Stratified sampling preserves class distribution across splits. The test set is held out until final evaluation to prevent overfitting to evaluation metrics.</p>`
      },
      {
        title: "Baseline Models and Experiment Design",
        content: `<p>Every custom model project begins with a simple baseline: a logistic regression, a small neural network, or an off-the-shelf pre-trained model. The baseline establishes the minimum acceptable performance and reveals whether the problem is tractable with the available data. Complex models must demonstrate meaningful improvement over the baseline to justify their additional cost and complexity.</p>
<p>Experiments are tracked in a structured format: model architecture, hyperparameters, training data version, evaluation metrics, and resource usage. Each experiment produces a reproducible artifact with saved weights, configuration, and evaluation results. Experiment comparison dashboards surface the best-performing configurations across multiple metrics.</p>`
      },
      {
        title: "Evaluation Metrics and Error Analysis",
        content: `<p>Single-metric optimization is insufficient. This blueprint evaluates models across accuracy, precision, recall, F1 score, ROC-AUC, calibration (expected calibration error), inference latency, and model size. Each metric is weighted according to the production requirements: a fraud detection system prioritizes recall, while a real-time recommendation system prioritizes latency.</p>
<p>Error analysis categorizes model failures by type: false positives, false negatives, confidence miscalibration, and edge-case blindness. Each failure category is investigated for root cause: insufficient training data, label noise, feature engineering gaps, or architecture limitations. Findings feed into the next iteration of data collection and model design.</p>`
      },
      {
        title: "Calibration and Deployment Pipeline",
        content: `<p>Raw model outputs are often poorly calibrated: a prediction with 90 percent confidence may be correct only 75 percent of the time. Temperature scaling or Platt scaling calibrates probabilities to match observed accuracy. Calibration is evaluated on a held-out calibration set and monitored in production.</p>
<p>Deployment follows a staged rollout: shadow deployment (running alongside the existing system without serving traffic), canary deployment (serving a small percentage of traffic), and full deployment. Each stage monitors latency, error rate, and output quality. Rollback is automated if metrics degrade beyond thresholds.</p>`
      },
      {
        title: "Monitoring, Retraining, and Versioning",
        content: `<p><strong>Data drift detection:</strong> Statistical tests compare production input distributions against training data. Significant drift triggers investigation and potential retraining.</p>
<p><strong>Performance monitoring:</strong> Prediction accuracy, latency, and throughput are tracked in real time. Degradation below acceptance thresholds triggers alerts and potential rollback.</p>
<p><strong>Model versioning:</strong> Every model version is stored with its training data, configuration, evaluation results, and deployment history. Rollback to any previous version is supported.</p>
<p><strong>Retraining triggers:</strong> Scheduled retraining (monthly or quarterly), performance degradation alerts, and significant data drift events each initiate the retraining pipeline with automated evaluation against the previous version.</p>`
      }
    ]
  },
  {
    number: "09",
    slug: "video-action-recognition",
    title: "Video Action Recognition",
    category: "Computer Vision / Temporal Intelligence",
    image: "/assets/projects/09-action-recognition.jpg",
    imageAlt: "Sequential motion frames passing through a temporal scanner for action recognition and tracking",
    summary: "Frame-accurate video annotation and temporal models that identify actions, events, movement, and behavior.",
    metaTitle: "Video Action Recognition Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for video action recognition covering temporal annotation, frame sampling, clip construction, overlapping actions, streaming latency, and privacy.",
    briefTitle: "Teach a vision system to understand what happened, when it happened, and what changed.",
    briefBody: "Video intelligence depends on temporal context. This blueprint combines consistent event definitions, tracked objects, precise time boundaries, and review tools that make complex motion data usable for training and operational analysis.",
    focus: "Video intelligence",
    system: "Temporal vision pipeline",
    delivery: "Annotation to recognition",
    relatedServices: ["/service-computer-vision", "/service-data-annotation"],
    relatedBlueprints: ["/projects/autonomous-data-annotation", "/projects/custom-model-training"],
    relatedInsight: null,
    capabilities: [
      ["Temporal annotation and event boundaries", "Actions are labeled with precise start and end frames, consistent event ontologies, and overlap handling."],
      ["Frame sampling and clip construction", "Keyframe selection, sliding-window clips, and variable-length segments optimize training data coverage."],
      ["Object tracking and scene context", "Identity, position, and movement persist across frames; scene relationships inform action classification."],
      ["Streaming latency and real-time inference", "Frame-by-frame processing with minimal latency for live monitoring and alerting applications."],
      ["Privacy considerations and production monitoring", "Face blurring, data retention policies, and performance monitoring for deployment in sensitive environments."],
    ],
    steps: [
      ["Define actions and evaluation criteria", "Specify action taxonomy, temporal boundaries, edge cases, overlapping action rules, and evaluation metrics."],
      ["Annotate with temporal precision", "Create frame-level and sequence-level labels with tracking, quality review, and inter-annotator agreement checks."],
      ["Build temporal models", "Select and train models using temporal features, clip-based architectures, and frame-sampling strategies."],
      ["Validate across conditions", "Test against camera angles, lighting, durations, overlapping actions, and real-world noise conditions."],
    ],
    signals: ["Temporal", "Precise", "Reviewable"],
    testimonial: "vision",
    sections: [
      {
        title: "Temporal Annotation and Event Ontology",
        content: `<p>Video action recognition requires precise temporal boundaries: the exact frame where an action starts and the exact frame where it ends. This blueprint defines an event ontology that specifies each action class, its typical duration range, and its relationship to overlapping actions. Annotation guidelines address ambiguous boundaries, multi-step actions, and actions that pause and resume.</p>
<p>Annotators mark action boundaries using frame-accurate tools. Each annotation includes the action class, start frame, end frame, confidence level, and notes on edge-case handling. Inter-annotator agreement is measured using temporal intersection over union (tIoU) with a threshold typically set at 0.5 to 0.7 depending on action complexity.</p>`
      },
      {
        title: "Frame Sampling and Clip Construction",
        content: `<p>Processing every frame of a long video is computationally expensive and often unnecessary. This blueprint uses keyframe extraction to select representative frames at regular intervals (typically 1 to 5 frames per second depending on action speed). Sliding-window clips of fixed duration (2 to 10 seconds) are constructed from the keyframe stream, with overlap to capture actions that span clip boundaries.</p>
<p>Variable-length clips handle actions with different durations. Short actions (hand gestures, button presses) use 1 to 3 second clips. Long actions (walking sequences, assembly tasks) use 5 to 10 second clips. The clip construction pipeline tracks the source video, timestamp offsets, and action labels for each clip.</p>`
      },
      {
        title: "Model Architecture and Feature Design",
        content: `<p>Temporal models must capture motion patterns across frames, not just appearance in individual frames. This blueprint evaluates 3D convolutional architectures (C3D, I3D), two-stream networks (spatial + temporal), and transformer-based video models. The choice depends on the action complexity, available compute, and latency requirements.</p>
<p>Optical flow features capture motion magnitude and direction independently of appearance. Pose estimation features track body joint positions over time. Both complement appearance features from RGB frames. Feature fusion strategies (early fusion, late fusion, attention-based fusion) are evaluated against the specific action recognition task.</p>`
      },
      {
        title: "Overlapping Actions and Temporal Evaluation",
        content: `<p>Real-world videos frequently contain overlapping actions: a person talking while walking, or two people interacting simultaneously. The system must detect and classify each action independently, even when they share the same timeframe. Multi-label temporal classification handles overlapping predictions, and non-maximum suppression resolves conflicting detections.</p>
<p>Evaluation uses temporal metrics: segment-level accuracy (correct classification of fixed-length segments), event-level accuracy (correct detection and classification of complete actions), and mean average precision across temporal IoU thresholds. These metrics provide a more complete picture than frame-level accuracy alone.</p>`
      },
      {
        title: "Privacy, Streaming, and Production Monitoring",
        content: `<p><strong>Privacy:</strong> Video data often contains identifiable faces and personal information. This blueprint includes face detection and blurring for privacy-sensitive applications, configurable data retention periods, and access controls that limit who can view raw video.</p>
<p><strong>Streaming latency:</strong> For real-time applications, the system processes frames as they arrive with a target latency below 200 milliseconds from frame capture to action classification. This requires optimized models, efficient frame buffering, and GPU acceleration.</p>
<p><strong>Production monitoring:</strong> Model accuracy is monitored against known ground truth samples. Distribution shifts in camera angle, lighting, or action patterns trigger alerts. Model performance is re-evaluated monthly with newly collected validation data.</p>`
      }
    ]
  },
  {
    number: "10",
    slug: "data-segmentation",
    title: "Data Segmentation",
    category: "Data Intelligence / Decision Systems",
    image: "/assets/projects/10-data-segmentation.jpg",
    imageAlt: "Mixed data particles organizing into distinct structured clusters inside a transparent chamber",
    summary: "Intelligent segmentation pipelines that organize complex records into meaningful groups for targeting and decisions.",
    metaTitle: "Data Segmentation Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for data segmentation covering feature engineering, clustering, segment stability, CRM activation, experiment design, privacy, and drift monitoring.",
    briefTitle: "Replace one-size-fits-all decisions with groups the business can understand and use.",
    briefBody: "Good segments are stable enough to act on and clear enough to explain. This pipeline combines relevant features, statistical validation, business interpretation, and activation rules so clusters become useful decisions rather than a static chart.",
    focus: "Decision intelligence",
    system: "Segmentation pipeline",
    delivery: "Features to activation",
    relatedServices: ["/service-data-analytics", "/service-ai-integrations"],
    relatedBlueprints: ["/projects/churn-value-optimization", "/projects/business-automation"],
    relatedInsight: null,
    segments: [
      ["Build meaningful features", "Behavioral, transactional, and contextual signals are prepared around the decision."],
      ["Find useful groups", "Clustering and classification approaches are compared for stability and separation."],
      ["Activate the insight", "Segment definitions connect to reporting, campaigns, prioritization, and product logic."],
    ],
    capabilities: [
      ["Feature engineering for segmentation", "Behavioral, transactional, and contextual signals are engineered around the business decision."],
      ["Clustering and supervised approaches", "K-means, DBSCAN, Gaussian mixture models, and supervised classifiers are compared for stability."],
      ["Segment naming and interpretation", "Statistical profiles, persona descriptions, and visual dashboards make segments interpretable."],
      ["CRM and analytics activation", "Segment definitions push to CRM tags, audience lists, analytics dimensions, and product logic."],
      ["Experiment design and privacy controls", "A/B tests measure segment-level impact; privacy filters protect sensitive attributes."],
    ],
    steps: [
      ["Frame the business decision", "Define what decisions the segments will inform, what data is available, and what makes a segment useful."],
      ["Prepare features", "Engineer behavioral, transactional, and contextual features; resolve quality issues; establish a trusted analysis layer."],
      ["Model and validate", "Compare segmentation approaches; validate stability, separation, interpretability, and business relevance."],
      ["Activate and monitor", "Name, document, and connect segments to the systems that use them; monitor drift and refresh schedules."],
    ],
    signals: ["Meaningful", "Explainable", "Actionable"],
    testimonial: "automation",
    sections: [
      {
        title: "Business Objective and Feature Engineering",
        content: `<p>Segmentation begins with the decision it will support: personalizing marketing, prioritizing sales outreach, allocating support resources, or designing product features. Each decision requires different features. Marketing segments benefit from engagement frequency, channel preference, and purchase patterns. Sales segments need firmographic data, deal stage signals, and budget indicators.</p>
<p>Feature engineering transforms raw data into segmentation-ready signals. Behavioral features aggregate event counts, recency, and frequency. Transactional features calculate average order value, purchase intervals, and lifetime revenue. Contextual features capture device type, location, time of day, and referral source. Feature distributions are normalized and outliers handled to prevent any single feature from dominating the clustering.</p>`
      },
      {
        title: "Clustering Approaches and Model Selection",
        content: `<p>This blueprint compares multiple segmentation approaches. K-means provides fast, interpretable clusters with spherical boundaries. DBSCAN discovers clusters of arbitrary shape and automatically identifies noise points. Gaussian mixture models assign soft cluster membership probabilities. Supervised classifiers (when labeled data exists) create segments aligned with known business outcomes.</p>
<p>Model selection evaluates silhouette score (cluster cohesion), Davies-Bouldin index (cluster separation), cluster size distribution (no cluster should be negligibly small), and temporal stability (segments should persist across time windows). The best approach depends on the data structure, business requirements, and interpretability needs.</p>`
      },
      {
        title: "Segment Naming, Interpretation, and Documentation",
        content: `<p>Statistical clusters become business segments when they are named, described, and documented. Each segment receives a descriptive name (e.g., "High-Value Engaged," "At-Risk Newcomer"), a statistical profile showing the defining characteristics, and a persona description that makes the segment relatable to non-technical stakeholders.</p>
<p>Segment documentation includes the data cutoff date, feature definitions, model parameters, and known limitations. This documentation ensures that marketing, sales, and product teams interpret segments consistently and use them correctly in their respective systems.</p>`
      },
      {
        title: "CRM Activation and Experiment Design",
        content: `<p>Segments are pushed to CRM systems as contact tags, audience lists, or custom fields. Analytics platforms receive segment dimensions for reporting and funnel analysis. Product teams use segment assignments to personalize user experiences, adjust feature access, or trigger automated workflows.</p>
<p>A/B tests measure the incremental impact of segment-based actions against control groups. Test design accounts for segment size, expected effect duration, and statistical power. Results are attributed to specific segments, enabling investment in high-impact segments and deprioritizing low-impact ones.</p>`
      },
      {
        title: "Privacy, Drift Monitoring, and Refresh Schedules",
        content: `<p><strong>Privacy:</strong> Segmentation features must not encode protected attributes (race, gender, religion) directly or through proxy variables. Privacy filters detect and remove or suppress sensitive features. Segment definitions are reviewed for potential disparate impact before deployment.</p>
<p><strong>Drift monitoring:</strong> Segment sizes, compositions, and feature distributions are tracked over time. Significant drift indicates changing customer behavior or data quality issues. Drift alerts trigger investigation and potential re-segmentation.</p>
<p><strong>Refresh schedules:</strong> Segments are refreshed on a defined cadence (weekly for fast-moving consumer data, monthly for B2B). Refresh pipelines re-run feature engineering, re-apply the clustering model, and compare new segments against previous ones for continuity.</p>`
      }
    ]
  },
  {
    number: "11",
    slug: "churn-value-optimization",
    title: "Churn & Value Optimization",
    category: "Customer Analytics / Predictive AI",
    image: "/assets/projects/11-churn-value.jpg",
    imageAlt: "Customer value paths being detected and redirected toward stable long-term retention orbits",
    summary: "Predictive analytics that identifies churn risk, customer value, and the right moment for a meaningful intervention.",
    metaTitle: "Churn & Value Optimization Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for churn prediction and customer value optimization covering churn definition, CLV, survival analysis, uplift modeling, retention targeting, and fairness.",
    briefTitle: "See customer risk and value early enough to do something useful about it.",
    briefBody: "A score alone does not retain a customer. This blueprint connects predictive signals with understandable drivers, prioritized segments, intervention playbooks, and measurement that shows which actions genuinely change outcomes.",
    focus: "Customer growth",
    system: "Predictive decisioning",
    delivery: "Signals to intervention",
    relatedServices: ["/service-data-analytics", "/service-ai-model-training"],
    relatedBlueprints: ["/projects/data-segmentation", "/projects/fraud-anomaly-detection"],
    relatedInsight: null,
    capabilities: [
      ["Churn-event definition and prediction horizon", "Define churn precisely: cancellation, non-renewal, or behavioral disengagement; set prediction windows aligned with intervention timing."],
      ["Customer lifetime value modeling", "Predict CLV using historical revenue, engagement trends, and survival analysis to prioritize high-value at-risk accounts."],
      ["Uplift modeling and intervention targeting", "Estimate which customers will respond to intervention, not just which will churn, to allocate retention spend efficiently."],
      ["Calibration and reason codes", "Calibrated risk scores with interpretable reason codes enable teams to understand and act on predictions."],
      ["Experimentation and fairness monitoring", "A/B tests measure intervention effectiveness; fairness audits check for disparate impact across customer segments."],
    ],
    steps: [
      ["Define churn and value metrics", "Align on churn event definition, prediction horizon, CLV calculation method, and intervention triggers."],
      ["Unify customer data", "Create customer timelines from product usage, billing, support, and engagement signals."],
      ["Build predictive models", "Train churn and CLV models with attention to label leakage, class imbalance, and useful lead time."],
      ["Connect to intervention playbooks", "Route predictions to retention campaigns, account reviews, and product experience adjustments."],
      ["Measure and iterate", "Track intervention response rates, incremental retention, CLV changes, and model drift over time."],
    ],
    signals: ["Predictive", "Explainable", "Actionable"],
    testimonial: "automation",
    sections: [
      {
        title: "Churn Definition and Prediction Horizon",
        content: `<p>Churn means different things in different businesses. This blueprint defines churn precisely before building any model. For SaaS, churn is subscription non-renewal or plan downgrade. For e-commerce, churn is the absence of purchase within a defined window. For marketplaces, churn is account inactivity exceeding a threshold. Each definition determines the label generation process and the prediction horizon.</p>
<p>The prediction window must be long enough to allow meaningful intervention. Predicting churn one day before cancellation is technically accurate but operationally useless. Typical prediction windows range from 30 to 90 days for subscription businesses and 7 to 30 days for transactional businesses. The window is calibrated against the business's intervention timeline and customer communication cadence.</p>`
      },
      {
        title: "Customer Lifetime Value Modeling",
        content: `<p>CLV estimation combines historical revenue data with predictive modeling. The simplest approach sums past revenue; more sophisticated approaches use BG/NBD (Beta-Geometric/Negative Binomial Distribution) models to predict future purchase frequency and Gamma-Gamma models to predict monetary value. These probabilistic models handle customer heterogeneity and censoring (customers who have not yet churned).</p>
<p>CLV predictions are used to prioritize retention efforts. A high-CLV customer at moderate churn risk may warrant more aggressive intervention than a low-CLV customer at high churn risk. The system generates both churn probability and expected CLV for each customer, enabling risk-weighted prioritization.</p>`
      },
      {
        title: "Uplift Modeling and Intervention Design",
        content: `<p>Traditional churn models identify who will churn. Uplift models identify who will change their behavior because of an intervention. This distinction is critical: intervening with customers who would have stayed anyway wastes resources, and failing to intervene with customers who would respond misses opportunities.</p>
<p>Uplift models are trained on historical intervention data using treatment and control groups. The model estimates the incremental impact of intervention for each customer. Intervention playbooks are designed for different uplift segments: proactive outreach for high-uplift customers, product experience adjustments for medium-uplift customers, and monitoring-only for low-uplift customers.</p>`
      },
      {
        title: "Calibration, Reason Codes, and Explainability",
        content: `<p>Raw model scores are poorly calibrated by default. Temperature scaling or isotonic regression calibrates scores so that a predicted 30 percent churn probability corresponds to approximately 30 percent observed churn. Calibrated scores enable direct comparison across customers and time periods.</p>
<p>Reason codes explain why each customer is flagged as at-risk. SHAP (SHapley Additive exPlanations) values or LIME (Local Interpretable Model-agnostic Explanations) identify the top contributing features for each prediction. Common reason codes include declining usage frequency, increased support ticket volume, payment failures, and reduced feature adoption.</p>`
      },
      {
        title: "Experimentation, Fairness, and Monitoring",
        content: `<p><strong>Experimentation:</strong> Intervention effectiveness is measured through randomized A/B tests. Treatment groups receive the intervention; control groups do not. Incremental retention lift, CLV change, and ROI are calculated per intervention type and customer segment.</p>
<p><strong>Fairness:</strong> Churn predictions and intervention targeting are audited for disparate impact across demographic segments. If the model systematically under-predicts churn for a specific group, the model is retrained with balanced data or adjusted thresholds.</p>
<p><strong>Monitoring:</strong> Model performance is tracked monthly. Feature drift, prediction distribution shifts, and calibration degradation trigger investigation. Retraining is scheduled quarterly or triggered by significant performance degradation.</p>`
      }
    ]
  },
  {
    number: "12",
    slug: "fraud-anomaly-detection",
    title: "Fraud & Anomaly Detection",
    category: "Financial Risk / Decision Intelligence",
    image: "/assets/projects/12-fraud-detection.jpg",
    imageAlt: "A precision scanner isolating an anomalous transaction pattern from a field of uniform financial events",
    summary: "Risk detection that surfaces suspicious behavior, abnormal transactions, and emerging patterns for faster investigation.",
    metaTitle: "Fraud & Anomaly Detection Solution Blueprint | Smart Scale Systems",
    metaDescription: "Solution blueprint for fraud detection covering real-time scoring, imbalanced data, rules-ML hybrid, PR-AUC, investigation queues, feedback loops, and drift monitoring.",
    briefTitle: "Surface the unusual behavior that rules alone cannot anticipate.",
    briefBody: "Fraud changes quickly and legitimate behavior is rarely uniform. This blueprint combines business rules, supervised risk signals, anomaly models, and investigator feedback to prioritize cases without hiding the reason behind an alert.",
    focus: "Risk operations",
    system: "Layered anomaly detection",
    delivery: "Signals to investigation",
    relatedServices: ["/service-data-analytics", "/service-ai-model-training"],
    relatedBlueprints: ["/projects/churn-value-optimization", "/projects/business-automation"],
    relatedInsight: null,
    capabilities: [
      ["Real-time and batch scoring", "Streaming inference for transaction-time decisions; batch scoring for periodic portfolio risk assessment."],
      ["Rules combined with machine learning", "Deterministic business rules for known patterns; ML models for emerging and complex fraud schemes."],
      ["Precision, recall, and threshold selection", "PR-AUC optimization with cost-sensitive threshold selection balancing false positive and false negative costs."],
      ["Investigation queues and feedback loops", "Alerts are prioritized by risk score and enriched with evidence; investigator decisions feed back into model retraining."],
      ["Adversarial adaptation and concept drift", "Monitoring for model degradation, adversarial evasion, and shifting fraud patterns with scheduled retraining."],
    ],
    steps: [
      ["Map fraud patterns and costs", "Define fraud types, label sources, investigation capacity, false positive costs, and acceptable friction."],
      ["Engineer risk features", "Build behavioral, network, velocity, device, and contextual risk signals from transaction and user data."],
      ["Detect with calibrated scoring", "Combine rules and models into risk scores with clear explanations and configurable decision thresholds."],
      ["Learn from investigation outcomes", "Feed investigator decisions back into labels, thresholds, features, and training data for continuous improvement."],
    ],
    signals: ["Layered", "Explainable", "Adaptive"],
    testimonial: "vision",
    sections: [
      {
        title: "Real-Time and Batch Scoring Architecture",
        content: `<p>Fraud detection operates in two modes. Real-time scoring evaluates each transaction or action at the moment it occurs, returning a risk decision within 100 milliseconds. The real-time pipeline processes streaming events through feature computation, model inference, and decision logic. High-risk transactions are blocked or challenged; low-risk transactions proceed; uncertain transactions are flagged for review.</p>
<p>Batch scoring evaluates entire portfolios on a scheduled basis (daily or weekly). It uses richer features that require longer computation: network analysis, historical behavioral profiles, and cross-entity risk signals. Batch results update risk profiles and identify accounts or patterns that have evolved since the last real-time scoring event.</p>`
      },
      {
        title: "Imbalanced Data and Model Design",
        content: `<p>Fraud is rare: typically less than 1 percent of transactions. This class imbalance makes standard accuracy metrics meaningless. This blueprint uses precision-recall AUC (PR-AUC) as the primary evaluation metric, which focuses on the model's ability to identify the minority class. Techniques for handling imbalance include class weighting, SMOTE (Synthetic Minority Over-sampling Technique), and focal loss functions.</p>
<p>The detection system layers multiple model types. Supervised models trained on historical fraud labels catch known patterns. Unsupervised anomaly models (isolation forests, autoencoders) detect novel fraud schemes that have no labeled training data. Rules engines catch known fraud signatures that are too specific for statistical models. The three layers contribute to a unified risk score.</p>`
      },
      {
        title: "Feature Engineering and Risk Signals",
        content: `<p>Risk features capture behavioral deviation from established patterns. Velocity features measure transaction frequency and amount changes over short windows (last hour, last day, last week). Network features identify unusual recipient patterns, shared device fingerprints, and connections to known fraudulent accounts. Contextual features capture device type, geolocation, time of day, and channel.</p>
<p>Feature computation must be real-time for streaming scoring. Pre-computed features are stored in fast-access caches (Redis, DynamoDB) and updated incrementally. Complex features like graph-based network signals are pre-computed in batch pipelines and made available to the real-time scoring layer through materialized views.</p>`
      },
      {
        title: "Threshold Selection and Investigation Workflow",
        content: `<p>Threshold selection balances false positive cost (customer friction, investigation burden) against false negative cost (fraud loss). The system uses cost-sensitive optimization: the threshold is set to minimize the total cost of false positives and false negatives, weighted by their respective business costs. Thresholds are reviewed monthly as fraud rates and investigation capacity change.</p>
<p>Investigation queues present alerts enriched with supporting evidence: the risk score, reason codes, transaction history, network connections, and similar past cases. Investigators mark alerts as confirmed fraud, false positive, or uncertain. Confirmed fraud triggers account actions and reporting. False positives improve the model's precision. Uncertain cases are escalated for deeper analysis.</p>`
      },
      {
        title: "Adversarial Adaptation and Concept Drift",
        content: `<p><strong>Concept drift:</strong> Fraud patterns evolve as attackers adapt. The system monitors model performance metrics (PR-AUC, false positive rate, alert conversion rate) weekly. Degradation triggers investigation into whether the drift is temporary (seasonal variation) or structural (new fraud scheme).</p>
<p><strong>Adversarial evasion:</strong> Sophisticated attackers study detection systems and adapt their behavior. Feature monitoring detects sudden changes in feature distributions that may indicate evasion. Adversarial robustness testing simulates attack scenarios to identify model vulnerabilities.</p>
<p><strong>Retraining pipeline:</strong> New confirmed fraud cases are added to the training dataset. The model is retrained on a rolling window that emphasizes recent data. A/B testing compares the retrained model against the production model before full deployment. Champion-challenger evaluation ensures no regression in detection quality.</p>`
      }
    ]
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
  const canonical = `https://www.smartscalesystems.tech/projects/${project.slug}`;
  const description = project.metaDescription || `${project.summary} Explore the approach, capabilities, and delivery process from Smart Scale Systems.`;

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.title, url: `/projects/${project.slug}` },
  ];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://www.smartscalesystems.tech${item.url}`,
    })),
  };

  const sectionsHtml = (project.sections || []).map((section) => `
    <section class="project-detail-content-section project-reveal">
      <div class="section-inner">
        <h2>${escapeHtml(section.title)}</h2>
        ${section.content}
      </div>
    </section>
  `).join('');

  const relatedLinks = [];
  if (project.relatedServices) {
    project.relatedServices.forEach((s) => relatedLinks.push(`<li><a href="${escapeHtml(s)}">Explore related service</a></li>`));
  }
  if (project.relatedBlueprints) {
    project.relatedBlueprints.forEach((b) => relatedLinks.push(`<li><a href="${escapeHtml(b)}">Read related blueprint</a></li>`));
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(project.metaTitle || project.title + ' Project | Smart Scale Systems')}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta property="og:title" content="${escapeHtml(project.metaTitle || project.title + ' Project | Smart Scale Systems')}" />
  <meta property="og:description" content="${escapeHtml(project.summary)}" />
  <link rel="canonical" href="${canonical}" />
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
</head>
<body>
<div class="noise-overlay"></div>
<div id="nav-placeholder"></div>

<nav aria-label="Breadcrumb" class="breadcrumb-nav">
  <a href="/">Home</a>
  <span aria-hidden="true">/</span>
  <a href="/projects">Projects</a>
  <span aria-hidden="true">/</span>
  <span aria-current="page">${escapeHtml(project.title)}</span>
</nav>

<section class="project-detail-hero">
  <div class="section-inner project-detail-hero-inner">
    <a class="project-detail-back" href="/projects" aria-label="Back to all projects"><span aria-hidden="true">←</span> All projects</a>
    <div class="project-detail-hero-grid">
      <div class="project-detail-hero-copy">
        <div class="project-detail-eyebrow"><span>Blueprint ${escapeHtml(project.number)}</span><span>${escapeHtml(project.category)}</span></div>
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

${sectionsHtml}

${relatedLinks.length ? `
<section class="project-detail-related">
  <div class="section-inner">
    <div class="project-detail-section-head project-reveal">
      <p class="project-detail-label">Related resources</p>
      <h2>Continue exploring.</h2>
    </div>
    <ul class="project-detail-related-links">
      ${relatedLinks.join('\n      ')}
    </ul>
  </div>
</section>
` : ''}

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
