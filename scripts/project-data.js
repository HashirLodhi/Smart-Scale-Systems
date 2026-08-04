// CommonJS data for project routes used by prerenderer
// This file mirrors the project data from project-case-studies.js

const projectData = [
  {
    slug: 'agentic-rag',
    title: 'Agentic RAG',
    category: 'Agentic AI / Knowledge Systems',
    image: '/assets/projects/01-agentic-rag.jpg',
    imageAlt: 'Agentic retrieval system connecting knowledge, tools, memory, and verification around an intelligence core',
    summary: 'A grounded knowledge system that plans, searches, evaluates, and synthesizes answers across company data and connected tools.',
    focus: 'Knowledge operations',
    system: 'Multi-agent retrieval',
    delivery: 'Architecture to evaluation',
    capabilities: [
      ['Source ingestion and permissions', 'Connect databases, APIs, document stores, and file systems with per-role access controls enforced at query time.'],
      ['Document processing and chunking', 'Parse PDFs, HTML, slides, and spreadsheets into overlapping semantic chunks with configurable boundaries and metadata.'],
      ['Hybrid retrieval and reranking', 'Combine keyword, dense vector, and sparse retrieval signals, then rerank results using cross-encoder scoring.'],
      ['Agent planning and routing', 'A coordinator decomposes complex questions, selects retrieval strategies, and sequences tool calls before synthesis.'],
      ['Citation validation and hallucination controls', 'Every generated claim is checked against retrieved passages; unsupported statements are flagged or suppressed.'],
    ],
    steps: [
      ['Audit knowledge sources', 'Inventory documents, databases, APIs, permissions, freshness requirements, and existing search gaps.'],
      ['Build retrieval indexes', 'Chunk content, generate embeddings, construct keyword indexes, and configure access-aware source connectors.'],
      ['Design agent workflows', 'Define question decomposition rules, retrieval tool selection, reranking logic, and answer synthesis prompts.'],
      ['Implement evaluation', 'Build test question sets, measure recall, answer faithfulness, and end-to-end latency against acceptance thresholds.'],
      ['Operate and improve', 'Monitor retrieval quality, failed queries, source freshness, and drift; retrain or re-index as the knowledge base evolves.'],
    ],
    sections: [
      {
        title: 'Source Ingestion and Access Control',
        content: '<p>Every agentic RAG system begins with reliable source access. This blueprint covers connectors for SQL databases, REST APIs, cloud storage, CMS platforms, and internal wikis. Each connector enforces role-based access control so the retrieval layer never surfaces documents a user is not authorized to see. Incremental synchronization keeps indexes fresh without full re-ingestion, and webhook listeners trigger re-indexing when source content changes.</p><p>Document processing handles PDFs, Word files, HTML pages, spreadsheets, and slide decks. A configurable chunking pipeline splits documents into overlapping segments of 256 to 1024 tokens, preserving paragraph boundaries and section headings. Each chunk carries metadata including source URL, author, publication date, department, and content type, enabling filtered retrieval and citation generation downstream.</p>'
      },
      {
        title: 'Hybrid Retrieval Architecture',
        content: '<p>Single-mode retrieval misses relevant content. This architecture combines BM25 keyword search for exact term matches with dense vector similarity for semantic understanding. A learned sparse retrieval layer adds term-weighting that adapts to the corpus. Results from all three channels are merged using reciprocal rank fusion, then passed through a cross-encoder reranker that scores each candidate against the original query.</p><p>The reranking stage typically improves top-5 precision by 15 to 30 percent over unranked retrieval. The system supports configurable top-k values, minimum score thresholds, and diversity constraints that prevent multiple results from the same source document from dominating the context window.</p>'
      },
      {
        title: 'Agent Planning and Answer Synthesis',
        content: '<p>Simple RAG pipelines retrieve once and generate once. Agentic RAG adds a planning layer that decomposes complex questions into sub-queries, retrieves for each, evaluates intermediate results, and synthesizes a final answer. The planner uses tool-calling patterns to invoke retrieval, web search, database queries, or calculator functions as needed.</p><p>Answer synthesis follows a structured prompting pattern: the model receives the query, retrieved passages with source attribution, and instructions to cite each claim. Unsupported claims are explicitly marked. Confidence scores are assigned at the sentence level, and low-confidence passages trigger additional retrieval rounds or clarification prompts rather than speculative generation.</p>'
      },
      {
        title: 'Evaluation and Quality Measurement',
        content: '<p>The evaluation framework tests three dimensions: retrieval quality, answer faithfulness, and end-to-end utility. Retrieval quality measures recall@k, precision@k, and mean reciprocal rank against a labeled test set of 200 or more questions. Answer faithfulness uses an LLM-as-judge approach to verify that every claim in the generated response is grounded in the retrieved context.</p><p>End-to-end utility measures task completion: did the answer resolve the question, was it cited correctly, and did it arrive within the latency budget? The system tracks these metrics continuously and surfaces regressions in a quality dashboard. Common failure modes include chunking boundary errors, stale source content, and reranker overconfidence on ambiguous queries.</p>'
      },
      {
        title: 'Risks and Implementation Considerations',
        content: '<p><strong>Knowledge freshness:</strong> Sources change at different rates. A document that was accurate last month may now be wrong. The system implements source-level freshness tracking, TTL policies, and priority re-indexing for high-velocity content.</p><p><strong>Retrieval recall gaps:</strong> If relevant content is not retrieved, no synthesis model can recover it. Regular recall audits against real user questions catch coverage gaps before they affect answers.</p><p><strong>Hallucination under pressure:</strong> Complex or multi-hop questions increase the risk of unsupported claims. Confidence thresholds and retrieval-then-verify loops mitigate this, but require tuning for each domain.</p><p><strong>Evaluation at scale:</strong> Manual evaluation does not scale. The blueprint includes automated faithfulness checking, retrieval metric dashboards, and human review sampling for calibration.</p>'
      }
    ]
  },
  {
    slug: 'custom-chatbot',
    title: 'Custom Chatbot',
    category: 'Conversational AI / Customer Experience',
    image: '/assets/projects/02-custom-chatbot.jpg',
    imageAlt: 'Glass conversation forms orbiting a semantic intelligence core above layered knowledge',
    summary: 'A branded conversational experience built around your knowledge, customer journeys, and support operations.',
    focus: 'Customer experience',
    system: 'RAG chatbot',
    delivery: 'Conversation to launch',
    capabilities: [
      ['Conversation state and context', 'Session memory tracks prior messages, user preferences, and workflow progress across multi-turn interactions.'],
      ['Intent routing and knowledge grounding', 'Classifies user goals, routes to the right knowledge source, and grounds responses in verified content.'],
      ['Tone, brand, and escalation controls', 'Enforces brand voice, detects frustration, and transfers to human agents with full conversation history.'],
      ['Help-desk and CRM integrations', 'Creates tickets, updates records, and logs conversations in Zendesk, Salesforce, Intercom, or custom systems.'],
      ['Lead capture and abuse handling', 'Extracts contact information from natural conversation and filters inappropriate or malicious inputs.'],
    ],
    steps: [
      ['Map conversation scenarios', 'Identify high-value questions, audience segments, brand voice guidelines, and escalation triggers.'],
      ['Design conversation flows', 'Create intent trees, response templates, knowledge boundaries, and fallback behavior for each scenario.'],
      ['Build and integrate', 'Connect retrieval pipelines, business system APIs, analytics tracking, and a responsive web chat interface.'],
      ['Launch and iterate', 'Monitor unanswered questions, conversation drop-off points, and user satisfaction to expand coverage continuously.'],
    ],
    sections: [
      {
        title: 'Conversation State Management',
        content: '<p>Production chatbots must maintain context across multiple turns. This blueprint implements session-level memory that tracks the conversation history, extracted entities, and workflow state. Short-term memory holds the last ten to twenty exchanges for coherent follow-up. Long-term memory, where permitted, remembers returning users preferences and past interactions across sessions.</p><p>The state machine manages conversation phases: greeting, information gathering, task execution, and closure. Each phase has defined entry conditions, expected user inputs, and transition rules. When the conversation strays outside the defined flow, a fallback handler either redirects gracefully or escalates to a human agent.</p>'
      },
      {
        title: 'Intent Routing and Response Generation',
        content: '<p>Every incoming message passes through an intent classifier trained on domain-specific utterances. The classifier assigns a confidence score and routes to the appropriate handler: knowledge retrieval, action execution, clarification request, or human escalation. Low-confidence intents trigger a disambiguation prompt rather than a speculative response.</p><p>Response generation uses a retrieval-augmented approach: relevant passages are fetched from the knowledge base, injected into the prompt template, and synthesized into a conversational reply. The system enforces citation requirements, maximum response length, and prohibited content filters to maintain quality and safety.</p>'
      },
      {
        title: 'Brand Voice and Tone Controls',
        content: '<p>Every organization has a distinct communication style. This blueprint defines tone parameters including formality level, emoji usage, technical depth, and empathy expressions. A tone classifier evaluates each generated response against these parameters and adjusts phrasing before delivery. Escalation messages automatically shift to a more formal, reassuring tone.</p><p>Brand-specific terminology is maintained in a glossary that the response generator references. Product names, service descriptions, and company values are consistently represented. Off-brand language triggers automatic regeneration with corrected terminology.</p>'
      },
      {
        title: 'Integrations and Operational Handoff',
        content: '<p>The chatbot connects to help-desk platforms through their APIs, creating tickets with full conversation transcripts and sentiment analysis. CRM integration captures lead information, qualifies prospects using conversational signals, and creates opportunities in the sales pipeline. Calendar integration enables direct scheduling without human intervention.</p><p>Human handoff transfers the complete conversation context to a live agent, including the users intent, extracted information, sentiment trajectory, and any actions already taken. The agent sees a summary rather than reading the full transcript, reducing response time.</p>'
      },
      {
        title: 'Abuse Handling and Quality Evaluation',
        content: '<p>Public-facing chatbots face prompt injection, jailbreak attempts, and inappropriate content. This blueprint layers input filtering, output moderation, and rate limiting. Detected abuse triggers a polite deflection response and logs the incident for review. Repeated abuse from the same session escalates to automatic suspension.</p><p>Quality evaluation tracks conversation completion rate, user satisfaction scores, first-response accuracy, and escalation frequency. A weekly review cycle analyzes dropped conversations, failed intents, and low-rated interactions to identify knowledge gaps and conversation design improvements.</p>'
      }
    ]
  },
  {
    slug: 'custom-ai-agent',
    title: 'Custom AI Agent',
    category: 'Agentic AI / Digital Operations',
    image: '/assets/projects/03-custom-ai-agent.jpg',
    imageAlt: 'Autonomous intelligence core coordinating modular tools, memory capsules, and task pathways',
    summary: 'A goal-driven agent that reasons across tools, coordinates multi-step tasks, and completes work with controlled autonomy.',
    focus: 'Digital operations',
    system: 'Tool-using AI agent',
    delivery: 'Workflow to control layer',
    capabilities: [
      ['Tool registry and permissions', 'Each tool is typed, documented, and scoped with read, write, or admin permissions per agent role.'],
      ['Planning and execution loops', 'The agent decomposes goals into steps, selects tools, executes actions, and evaluates outcomes before proceeding.'],
      ['Short-term and long-term memory', 'Working memory holds task context; persistent memory stores learned patterns, preferences, and past outcomes.'],
      ['Approval gates and audit trails', 'High-risk actions require human confirmation; every decision, tool call, and result is logged for review.'],
      ['Cost controls and observability', 'Token budgets, API call limits, and execution timeouts prevent runaway costs; traces provide full visibility.'],
    ],
    steps: [
      ['Define the agent job', 'Select a narrow, well-bounded task with clear success criteria, failure modes, and escalation points.'],
      ['Equip with tools and memory', 'Connect typed tool APIs, configure permission scopes, and establish short-term and long-term memory stores.'],
      ['Test with scenario suites', 'Run normal operations, ambiguous inputs, tool failures, permission denials, and budget limit scenarios.'],
      ['Operate with monitoring', 'Track execution traces, cost accumulation, approval rates, and outcome quality in a live dashboard.'],
    ],
    sections: [
      {
        title: 'Tool Registry and Permission Model',
        content: '<p>Every tool the agent can use is registered in a typed registry that defines the tools name, description, input schema, output schema, and permission level. Read-only tools query data without side effects. Write tools create records, send messages, or modify state. Admin tools perform destructive or irreversible actions and require explicit human approval.</p><p>Permission scopes are assigned per agent role, not per tool call. An agent assigned the support role can read customer records and create tickets but cannot delete accounts or access billing data. Scope violations are logged and blocked at the execution layer before the tool is invoked.</p>'
      },
      {
        title: 'Planning, Execution, and Retry Logic',
        content: '<p>The agent uses a planning loop that decomposes the goal into ordered steps, selects the appropriate tool for each step, executes the action, and evaluates the result before proceeding. If a tool call fails due to a transient error, the agent retries with exponential backoff up to a configured maximum. Persistent failures trigger a graceful degradation path: the agent reports what it accomplished, what failed, and what manual intervention is needed.</p><p>Timeouts are enforced at both the tool level and the overall task level. A tool that takes longer than its SLA is killed, and the agent is notified. The overall task timeout prevents infinite loops when the agent cannot make progress. Both timeouts are configurable per agent role and task type.</p>'
      },
      {
        title: 'Memory Architecture',
        content: '<p>Short-term memory holds the current task context: the original goal, intermediate results, pending steps, and tool call history. This memory is ephemeral and cleared when the task completes or times out. Long-term memory persists across tasks, storing learned patterns such as frequently accessed data sources, common failure modes, and user preferences.</p><p>Memory writes are append-only to prevent corruption. Reads are scoped to the current task to avoid context pollution. Memory cleanup policies archive old entries and enforce storage limits. Sensitive data in memory is encrypted at rest and purged according to data retention policies.</p>'
      },
      {
        title: 'Idempotency and Execution Traces',
        content: '<p>Every tool call includes an idempotency key derived from the task ID, step number, and tool name. If a tool is called twice with the same key, the second call returns the cached result without re-executing the side effect. This prevents duplicate record creation, double payments, and other non-idempotent failures.</p><p>Execution traces record every decision point: the agents reasoning, the tool selected, the input provided, the output received, and the time taken. Traces are stored in an append-only log and surfaced in a debugging dashboard. They enable post-incident analysis, cost attribution, and performance optimization.</p>'
      },
      {
        title: 'Cost Controls and Evaluation Criteria',
        content: '<p><strong>Token budgets:</strong> Each task is allocated a maximum number of LLM tokens. The agent tracks cumulative usage and pauses before exceeding the budget, requesting approval for additional spend if needed.</p><p><strong>API call limits:</strong> External tool calls are rate-limited per minute and per task. The agent spaces calls to stay within provider rate limits and avoids cascading throttling.</p><p><strong>Evaluation metrics:</strong> Task completion rate, average execution time, cost per task, approval rate, and failure reason distribution are tracked continuously. Regression in any metric triggers investigation.</p><p><strong>Observability:</strong> Real-time dashboards show active tasks, pending approvals, recent failures, and cost accumulation. Alerts fire when tasks approach timeout or budget limits.</p>'
      }
    ]
  },
  {
    slug: 'voice-calling-agent',
    title: 'Voice Calling Agent',
    category: 'Voice AI / Customer Operations',
    image: '/assets/projects/04-voice-calling-agent.jpg',
    imageAlt: 'A sculptural voice waveform moving from an acoustic capsule into a conversational intelligence core',
    summary: 'A natural inbound and outbound voice agent for qualification, scheduling, service, and follow-up calls.',
    focus: 'Customer operations',
    system: 'Real-time voice AI',
    delivery: 'Call flow to CRM',
    capabilities: [
      ['Telephony integration', 'SIP, PSTN, and WebRTC connections with carrier-grade redundancy, call routing, and number provisioning.'],
      ['Speech-to-text and text-to-speech', 'Real-time transcription with speaker diarization and natural-sounding synthesis with configurable voice profiles.'],
      ['Turn-taking and barge-in handling', 'Detects when the caller is speaking, manages pauses, and handles interruptions without losing conversation context.'],
      ['Consent, recording, and compliance', 'Records calls with disclosure, manages consent per jurisdiction, and stores recordings with retention policies.'],
      ['Call transfer and failure recovery', 'Graceful handoff to live agents with context, and automatic retry or callback for failed connections.'],
    ],
    steps: [
      ['Script the call flows', 'Map intents, disclosure requirements, objection handling, transfer criteria, and successful outcome definitions.'],
      ['Connect telephony and data', 'Integrate SIP trunks, calendars, CRM records, knowledge bases, and approved real-time data sources.'],
      ['Test with realistic conditions', 'Evaluate accents, background noise, barge-in, silence, hesitation, tool failures, and network degradation.'],
      ['Tune and operate', 'Review call transcripts, latency metrics, and completion rates to improve pacing and conversation quality.'],
    ],
    sections: [
      {
        title: 'Telephony and Speech Architecture',
        content: '<p>The voice agent connects to telephony infrastructure through SIP trunks for inbound and outbound calls. WebRTC provides browser-based calling for web and mobile applications. Carrier-grade redundancy ensures call continuity even when individual connections fail. Call routing logic directs incoming calls to the appropriate agent persona based on caller identification, time of day, and queue status.</p><p>Speech-to-text runs in real time with streaming transcription that delivers partial results as the caller speaks. Speaker diarization separates the caller from the agent voice for clean transcript generation. Text-to-speech uses neural synthesis with configurable speaking rate, pitch, and prosody to match the desired brand voice. Latency from end of speech to start of response is targeted below 500 milliseconds.</p>'
      },
      {
        title: 'Turn-Taking and Interruption Handling',
        content: '<p>Natural conversation requires precise turn detection. The system monitors audio energy levels, speech activity, and prosodic cues to determine when the caller has finished speaking. A configurable pause threshold (typically 600 to 1200 milliseconds) separates turns without creating awkward silence.</p><p>Barge-in handling detects when the caller speaks during the agents response. The system immediately stops synthesis, preserves the conversation state, and processes the callers input. Partial synthesis results are discarded rather than completing outdated information. This creates a conversational rhythm that feels responsive rather than scripted.</p>'
      },
      {
        title: 'Consent, Recording, and Regulatory Compliance',
        content: '<p>Call recording requirements vary by jurisdiction. This blueprint implements a consent framework that plays disclosure messages at call start, logs consent status, and respects recording prohibitions in two-party consent jurisdictions. Recordings are stored with encryption at rest, access controls, and configurable retention periods.</p><p>Do-not-call lists, call time restrictions, and purpose limitations are enforced at the routing layer. The system blocks calls to numbers on suppression lists and restricts outbound calling hours to legally permitted windows. Audit logs capture every dial, consent event, and recording access for compliance reporting.</p>'
      },
      {
        title: 'Call Flow and Business Integration',
        content: '<p>The voice agent executes structured call flows: greeting, identity verification, intent discovery, information gathering, action execution, and closure. Each flow step has defined success criteria and timeout behavior. If the callers intent does not match any defined flow, the agent offers to transfer to a live representative with full context.</p><p>During the call, the agent updates CRM records, creates support tickets, schedules appointments, and sends confirmation messages in real time. Post-call actions include sending follow-up emails, updating pipeline stages, and triggering downstream workflows. Every action is logged with timestamp and outcome.</p>'
      },
      {
        title: 'Call Quality and Evaluation Metrics',
        content: '<p><strong>Latency budget:</strong> End-to-end response latency is measured from the end of caller speech to the start of agent speech. The target is below 500 milliseconds for conversational exchanges.</p><p><strong>Task completion rate:</strong> The percentage of calls that reach the defined successful outcome (qualified lead, scheduled appointment, resolved issue) is tracked per flow type.</p><p><strong>Call quality scores:</strong> Audio quality (MOS scores), transcription accuracy, and conversation naturalness are evaluated through automated scoring and human review sampling.</p><p><strong>Failure analysis:</strong> Dropped calls, failed transfers, and incomplete flows are categorized by root cause: network issues, speech recognition errors, intent misclassification, or tool failures.</p>'
      }
    ]
  },
  {
    slug: 'ai-integrations',
    title: 'AI Integrations',
    category: 'Product AI / Applications',
    image: '/assets/projects/05-ai-integrations.jpg',
    imageAlt: 'A central AI module connected to multiple blank glass application and device planes',
    summary: 'AI capabilities embedded directly into apps and websites, from intelligent search to recommendations and workflow actions.',
    focus: 'Digital products',
    system: 'AI application layer',
    delivery: 'API to user experience',
    capabilities: [
      ['API and SDK integration patterns', 'RESTful and GraphQL APIs with typed schemas, versioning, and client SDKs for web, mobile, and server.'],
      ['Authentication and data contracts', 'OAuth2, API keys, and JWT tokens with schema validation, input sanitization, and output contracts.'],
      ['Webhooks and event queues', 'Asynchronous event delivery with retry logic, dead-letter queues, and delivery confirmation.'],
      ['Error handling and rate limits', 'Graceful degradation, circuit breakers, exponential backoff, and per-client rate limiting.'],
      ['Monitoring and fallback behavior', 'Latency tracking, error rate dashboards, cost attribution, and automatic fallback to cached or simplified responses.'],
    ],
    steps: [
      ['Prioritize integration points', 'Choose product moments where AI adds the most value: search, recommendations, generation, or decision support.'],
      ['Prototype interaction patterns', 'Test response formats, loading states, error messages, and user expectations with real workflows.'],
      ['Build production APIs', 'Implement typed endpoints, authentication, context assembly, caching layers, and fallback behavior.'],
      ['Measure and iterate', 'Track adoption, latency, error rates, cost per request, and task completion after launch.'],
    ],
    sections: [
      {
        title: 'API Design and Integration Patterns',
        content: '<p>AI integrations work best when they follow the existing API patterns of the host application. This blueprint supports REST, GraphQL, and gRPC interfaces with typed request and response schemas. Each endpoint is documented with OpenAPI specifications, example payloads, and error codes. Client SDKs are generated for JavaScript, Python, and Swift to reduce integration friction.</p><p>The API layer handles request validation, context assembly, and response formatting. Input sanitization prevents prompt injection and malformed data. Output contracts ensure responses conform to the expected schema, including structured metadata like confidence scores, source citations, and latency measurements.</p>'
      },
      {
        title: 'Authentication and Data Flow',
        content: '<p>Every API call carries authentication credentials that determine data access scope. OAuth2 flows handle user-delegated access. API keys identify service-to-service communication. JWT tokens carry claims that the AI service uses to filter results and enforce permissions. The system never accesses data beyond what the authenticated context permits.</p><p>Data flows are designed to minimize latency. Hot paths (user-facing search, real-time suggestions) use pre-computed indexes and caching. Warm paths (batch recommendations, scheduled reports) process data asynchronously. Cold paths (full retraining, bulk analysis) run on scheduled pipelines with cost-managed compute.</p>'
      },
      {
        title: 'Webhooks and Asynchronous Processing',
        content: '<p>Not all AI operations complete in a single request-response cycle. Long-running tasks like model inference, batch scoring, and report generation use webhook-based delivery. The system registers a callback URL, processes the request asynchronously, and delivers results via HTTP POST with retry logic and delivery confirmation.</p><p>Failed webhook deliveries are retried with exponential backoff up to a configured maximum. Unrecoverable failures are logged in a dead-letter queue with the full request context, enabling manual inspection and replay. Event queues decouple request submission from processing, allowing the system to absorb traffic spikes without dropping requests.</p>'
      },
      {
        title: 'Error Handling and Resilience',
        content: '<p>AI services can fail for many reasons: model overload, network timeouts, invalid inputs, or upstream dependency failures. This blueprint implements circuit breaker patterns that stop calling a failing service after a threshold of consecutive errors, then periodically test recovery. Fallback responses provide degraded but useful behavior: cached results, simplified heuristics, or graceful error messages.</p><p>Rate limiting is enforced per client, per endpoint, and globally. Limits are communicated via response headers (X-RateLimit-Remaining, X-RateLimit-Reset). Clients that exceed limits receive a 429 status with retry-after guidance. Burst allowances accommodate legitimate traffic spikes during product launches or campaigns.</p>'
      },
      {
        title: 'Monitoring and Operational Metrics',
        content: '<p><strong>Latency tracking:</strong> P50, P95, and P99 latencies are measured per endpoint and surfaced in real-time dashboards. Latency regressions trigger alerts for investigation.</p><p><strong>Error rate monitoring:</strong> Error rates by type (4xx, 5xx, timeout, circuit-open) are tracked per endpoint. Sudden increases trigger automated rollback or fallback activation.</p><p><strong>Cost attribution:</strong> API calls are attributed to the calling client, endpoint, and use case. Cost dashboards enable capacity planning and pricing decisions.</p><p><strong>Adoption metrics:</strong> Feature usage, completion rates, and user satisfaction scores guide prioritization of AI capability investments.</p>'
      }
    ]
  },
  {
    slug: 'business-automation',
    title: 'Business Automation',
    category: 'AI Automation / Operations',
    image: '/assets/projects/06-business-automation.jpg',
    imageAlt: 'A connected sequence of intelligent machines routing documents and decisions through an automated workflow',
    summary: 'Connected automations that reduce repetitive work across sales, operations, support, reporting, and internal processes.',
    focus: 'Business operations',
    system: 'AI workflow automation',
    delivery: 'Process to production',
    capabilities: [
      ['Trigger-and-action workflows', 'Event-driven automation chains triggered by form submissions, database changes, schedules, or API calls.'],
      ['CRM and sales routing', 'Automatic lead assignment, deal stage updates, follow-up reminders, and pipeline reporting.'],
      ['Approval workflows and queues', 'Multi-level approval routing with escalation, deadline tracking, and delegation support.'],
      ['Audit logs and exception management', 'Every action, decision, and failure is logged; exceptions route to the right human with full context.'],
      ['SLA monitoring and baseline measurement', 'Process cycle times, throughput, and completion rates measured against defined service-level targets.'],
    ],
    steps: [
      ['Map the current process', 'Document every step, decision point, exception path, system touchpoint, and owner.'],
      ['Simplify before automating', 'Remove redundant approvals, merge parallel steps, and eliminate unnecessary data collection.'],
      ['Build the automation', 'Connect triggers, business rules, AI classification, approval routing, and destination systems.'],
      ['Monitor and improve', 'Track throughput, failure rates, SLA compliance, and exception patterns for continuous refinement.'],
    ],
    sections: [
      {
        title: 'Trigger-and-Action Workflow Design',
        content: '<p>Every automation begins with a trigger: a form submission, a database record change, a scheduled time, an incoming email, or an API webhook. The trigger payload is validated and normalized into an internal event format. Actions follow in a defined sequence: data transformation, conditional routing, API calls, database updates, and notification delivery.</p><p>The workflow engine supports branching logic, parallel execution, and loop constructs. Each step has defined input and output schemas, enabling type checking at design time. Failed steps trigger configurable retry policies, compensation actions (rollbacks), or exception routing to human reviewers.</p>'
      },
      {
        title: 'CRM and Sales Process Automation',
        content: '<p>Sales automation connects lead capture forms, email outreach, calendar scheduling, and CRM record updates into a unified pipeline. New leads are scored based on demographic fit and behavioral signals, then assigned to the appropriate sales representative using round-robin, territory, or capacity-based routing.</p><p>Deal stages advance automatically based on activity signals: email opens, meeting completions, document views, and form submissions. Stalled deals trigger follow-up reminders. Lost deal analysis identifies common exit points and feeds improvement recommendations back to the sales process design.</p>'
      },
      {
        title: 'Approval Workflows and Exception Handling',
        content: '<p>Multi-level approval workflows route requests through the appropriate chain based on request type, value threshold, and organizational hierarchy. Each approver receives the full request context, related history, and a deadline. Escalation rules activate when approvals exceed their SLA, routing to backup approvers or management.</p><p>Exception management captures process deviations: missing data, conflicting rules, integration failures, and policy violations. Each exception is categorized, assigned a severity level, and routed to the appropriate handler with diagnostic information. Exception resolution patterns are tracked and used to improve the automation rules.</p>'
      },
      {
        title: 'Audit Logging and Compliance',
        content: '<p>Every automation action generates an audit record: timestamp, actor (human or system), action type, affected records, input data, output data, and outcome. Audit logs are append-only and stored in an immutable format for compliance requirements. Log retention policies archive older entries while maintaining queryability.</p><p>Compliance reporting generates summaries of process execution, approval patterns, exception rates, and SLA adherence. These reports are scheduled weekly or generated on demand for management review and regulatory audit preparation.</p>'
      },
      {
        title: 'Baseline Measurement and Value Assessment',
        content: '<p><strong>Process baseline:</strong> Before automation, measure current cycle times, error rates, manual effort hours, and throughput for the target process. This baseline quantifies the improvement delivered by automation.</p><p><strong>Throughput metrics:</strong> Track items processed per hour, queue depth, and backlog age. Degradation in throughput triggers investigation into bottlenecks or integration failures.</p><p><strong>Exception rate:</strong> The percentage of automation runs that require human intervention. High exception rates indicate process design gaps or data quality issues.</p><p><strong>Value realization:</strong> Map automation metrics to business outcomes: reduced labor cost, faster response times, fewer errors, and improved customer satisfaction. Report value quarterly to justify continued investment.</p>'
      }
    ]
  },
  {
    slug: 'autonomous-data-annotation',
    title: 'Autonomous Data Annotation',
    category: 'Data Operations / AI Training',
    image: '/assets/projects/07-autonomous-annotation.jpg',
    imageAlt: 'Image data passing through a glass machine-vision scanner and sorting into validated annotation groups',
    summary: 'Model-assisted labeling loops that pre-annotate, validate, prioritize uncertainty, and continuously improve dataset quality.',
    focus: 'Dataset operations',
    system: 'Active learning pipeline',
    delivery: 'Guidelines to QA',
    capabilities: [
      ['Pre-labeling and model-assisted annotation', 'Initial predictions from a trained model pre-fill annotations, reducing manual effort by 60-80%.'],
      ['Confidence-based routing', 'High-confidence predictions are auto-approved; low-confidence items route to human reviewers.'],
      ['Human review and correction', 'Expert annotators review, correct, and validate model predictions with full context.'],
      ['Inter-annotator agreement', 'Multiple annotators label ambiguous items; disagreements trigger calibration and guideline refinement.'],
      ['Dataset QA and quality metrics', 'Precision, recall, and consistency metrics are tracked per annotation type and annotator.'],
    ],
    steps: [
      ['Define annotation guidelines', 'Create detailed guidelines with examples, edge cases, and quality thresholds for each annotation type.'],
      ['Build pre-labeling models', 'Train initial models on a seed dataset to generate pre-annotations for new data.'],
      ['Design review workflows', 'Configure confidence thresholds, routing rules, and escalation paths for human review.'],
      ['Iterate and improve', 'Track quality metrics, refine guidelines, retrain models, and expand coverage continuously.'],
    ],
    sections: [
      {
        title: 'Pre-Labeling and Model-Assisted Annotation',
        content: '<p>The core innovation of autonomous annotation is using a trained model to pre-fill annotations. The model processes each unlabeled item and produces predictions with confidence scores. High-confidence predictions (above a configurable threshold, typically 0.85-0.95) are auto-approved without human review. Medium-confidence predictions are flagged for human verification. Low-confidence predictions are routed to expert annotators for full manual labeling.</p><p>This approach reduces manual effort by 60-80% while maintaining annotation quality. The model improves over time as it receives corrections from human reviewers, creating a virtuous cycle of improving accuracy and reducing manual work.</p>'
      },
      {
        title: 'Confidence-Based Routing and Prioritization',
        content: '<p>Items are routed based on their confidence distribution. High-confidence items are batch-approved and added to the training set. Medium-confidence items are reviewed by junior annotators who verify or correct the prediction. Low-confidence items are reviewed by senior annotators who provide ground-truth labels.</p><p>Prioritization ensures that the most valuable items are labeled first. Active learning selects items that would most improve the model if labeled, focusing human effort on the data that matters most. This is more efficient than random sampling or sequential processing.</p>'
      },
      {
        title: 'Human Review and Quality Control',
        content: '<p>Human reviewers see the model prediction alongside the original data. They can accept the prediction, correct it, or reject it entirely. Each decision is logged with the reviewers identity, timestamp, and reasoning. This creates a rich dataset for evaluating model performance and identifying systematic errors.</p><p>Quality control uses inter-annotator agreement: multiple annotators label the same item, and disagreements trigger calibration sessions. Consistency metrics track agreement rates per annotation type and per annotator, identifying outliers and guideline ambiguities.</p>'
      },
      {
        title: 'Dataset Quality Metrics',
        content: '<p><strong>Annotation precision:</strong> The percentage of model predictions that are correct (confirmed by human review). Tracks model improvement over time.</p><p><strong>Annotation recall:</strong> The percentage of items that receive correct labels (whether from model prediction or human annotation). Tracks coverage completeness.</p><p><strong>Inter-annotator agreement:</strong> Cohen kappa or Fleiss kappa scores for multi-annotator items. Tracks guideline clarity and annotator consistency.</p><p><strong>Throughput:</strong> Items processed per hour, broken down by confidence tier. Tracks operational efficiency and capacity planning.</p>'
      },
      {
        title: 'Continuous Improvement Loop',
        content: '<p>The annotation pipeline improves through three feedback loops: model retraining (corrections improve the pre-labeling model), guideline refinement (disagreements reveal ambiguous guidelines), and routing optimization (confidence thresholds are adjusted based on quality metrics). Each loop reduces manual effort while maintaining or improving quality.</p>'
      }
    ]
  },
  {
    slug: 'custom-model-training',
    title: 'Custom Model Training',
    category: 'Machine Learning / Model Development',
    image: '/assets/projects/08-custom-model-training.jpg',
    imageAlt: 'Layered training data refined through a transparent model lattice into a polished intelligence core',
    summary: 'Purpose-built model training and fine-tuning using domain data, evaluation pipelines, and production performance targets.',
    focus: 'Model development',
    system: 'Custom ML pipeline',
    delivery: 'Dataset to deployment',
    capabilities: [
      ['Dataset readiness and preparation', 'Data cleaning, deduplication, formatting, splitting, and quality validation before training begins.'],
      ['Baseline model selection', 'Evaluate candidate architectures, pre-trained models, and training strategies against the target task.'],
      ['Training and hyperparameter optimization', 'Systematic hyperparameter search with early stopping, learning rate scheduling, and regularization.'],
      ['Evaluation and error analysis', 'Comprehensive testing on held-out data with confusion analysis, failure mode identification, and benchmark comparison.'],
      ['Deployment and monitoring', 'Model packaging, serving infrastructure, latency optimization, and production performance monitoring.'],
    ],
    steps: [
      ['Assess data readiness', 'Evaluate dataset size, quality, balance, and representativeness for the target task.'],
      ['Select architecture and strategy', 'Choose between fine-tuning, transfer learning, or training from scratch based on data and requirements.'],
      ['Train and evaluate', 'Run training with validation monitoring, early stopping, and systematic hyperparameter optimization.'],
      ['Deploy and monitor', 'Package the model, deploy to serving infrastructure, and monitor production performance.'],
    ],
    sections: [
      {
        title: 'Dataset Readiness and Preparation',
        content: '<p>Training data quality determines model performance more than architecture choice or hyperparameter tuning. This blueprint starts with a thorough data audit: checking for label errors, duplicates, class imbalance, distribution shift, and missing values. Data cleaning removes corrupted records, standardizes formatting, and resolves inconsistencies.</p><p>Dataset splitting uses stratified random assignment to ensure representative train/validation/test sets. The test set is held out completely and used only for final evaluation. A portion of the validation set is reserved for early stopping to prevent overfitting to the validation metrics.</p>'
      },
      {
        title: 'Architecture Selection and Baseline Models',
        content: '<p>Start with the simplest model that could work. Baseline models establish a performance floor: logistic regression for classification, linear regression for prediction, or a small neural network for complex tasks. Baselines are fast to train, easy to debug, and often surprisingly competitive.</p><p>Only move to more complex architectures when the baseline clearly underperforms the requirements. Transfer learning from pre-trained models is often the most efficient path when domain-specific data is limited. Fine-tuning a pre-trained model typically requires 10-100x less data than training from scratch.</p>'
      },
      {
        title: 'Training Pipeline and Optimization',
        content: '<p>The training pipeline includes data loading, preprocessing, model forward pass, loss computation, gradient calculation, parameter update, and validation evaluation. Each component is instrumented with timing and memory profiling to identify bottlenecks.</p><p>Hyperparameter optimization uses systematic search (Bayesian optimization or population-based training) rather than manual grid search. Early stopping monitors validation loss and stops training when performance plateaus. Learning rate scheduling (cosine annealing, warm-up, or reduce-on-plateau) improves convergence stability.</p>'
      },
      {
        title: 'Evaluation and Error Analysis',
        content: '<p>Automated evaluation measures task-specific metrics: accuracy, precision, recall, F1, AUC-ROC, or custom business metrics. But metrics alone do not tell the full story. Error analysis examines specific failure modes: which classes are confused, which inputs cause errors, and what patterns emerge in the failures.</p><p>A confusion matrix reveals systematic misclassifications. Per-example analysis identifies edge cases, outliers, and distribution shift. Confidence calibration analysis checks whether the models confidence scores accurately reflect prediction accuracy. These insights guide data collection, feature engineering, and model architecture decisions.</p>'
      },
      {
        title: 'Deployment and Production Monitoring',
        content: '<p>Model deployment involves packaging (ONNX, TorchScript, or SavedModel), serving infrastructure (batch inference, real-time API, or edge deployment), and latency optimization (quantization, pruning, or distillation). The deployment pipeline includes canary testing, A/B comparison with the previous model, and automatic rollback on performance degradation.</p><p>Production monitoring tracks prediction distribution, confidence scores, latency, and error rates. Data drift detection identifies when incoming data differs from the training distribution. Model decay monitoring tracks performance degradation over time. These signals trigger retraining or investigation before users notice quality issues.</p>'
      }
    ]
  },
  {
    slug: 'video-action-recognition',
    title: 'Video Action Recognition',
    category: 'Computer Vision / Video Analytics',
    image: '/assets/projects/09-action-recognition.jpg',
    imageAlt: 'Sequential motion frames passing through a temporal scanner for action recognition and tracking',
    summary: 'Frame-accurate video labeling and temporal models that identify actions, events, movement, and behavior over time.',
    focus: 'Visual intelligence',
    system: 'Temporal vision models',
    delivery: 'Annotation to inference',
    capabilities: [
      ['Temporal annotation and frame sampling', 'Keyframe selection, sliding window annotation, and temporal boundary detection for action segmentation.'],
      ['Clip construction and data augmentation', 'Sliding window clips, random temporal sampling, spatial augmentation, and temporal jittering.'],
      ['Overlapping action handling', 'Multi-label classification for simultaneous actions and action transition detection.'],
      ['Streaming inference and latency optimization', 'Real-time processing with frame buffering, model optimization, and output smoothing.'],
      ['Privacy and data governance', 'Face blurring, data retention policies, consent management, and secure storage for video data.'],
    ],
    steps: [
      ['Define action taxonomy', 'Create a clear, non-overlapping action vocabulary with examples and edge cases for each class.'],
      ['Annotate temporal boundaries', 'Label action start/end frames, handle overlapping actions, and validate inter-annotator agreement.'],
      ['Train temporal models', 'Select between 3D CNNs, Transformer-based architectures, or two-stream networks based on requirements.'],
      ['Deploy and monitor', 'Optimize for real-time inference, implement streaming pipelines, and monitor accuracy drift.'],
    ],
    sections: [
      {
        title: 'Temporal Annotation Strategy',
        content: '<p>Video action recognition requires temporal annotation: labeling not just what happens, but when it starts and ends. This blueprint uses keyframe annotation with interpolation: annotators label the start and end frames of each action, and intermediate frames are automatically labeled. This reduces annotation effort while maintaining temporal precision.</p><p>Overlapping actions (e.g., someone talking while walking) require multi-label annotation. Each frame can have multiple active actions, and the annotation tool must support concurrent temporal ranges. Inter-annotator agreement is measured using temporal intersection-over-union (tIoU) metrics.</p>'
      },
      {
        title: 'Clip Construction and Data Pipeline',
        content: '<p>Training data is organized as clips: short video segments (typically 1-10 seconds) that contain one or more labeled actions. Clips are constructed using sliding windows over longer videos, with overlap to capture action boundaries. Random temporal sampling selects diverse clips from the full video.</p><p>Data augmentation for video includes spatial transforms (crop, flip, color jitter), temporal transforms (speed change, reverse, temporal dropout), and combined transforms. Augmentation must preserve action semantics: flipping a video of someone writing changes the action, but color jitter does not.</p>'
      },
      {
        title: 'Model Architecture and Training',
        content: '<p>Three main architecture families compete for video action recognition: 3D CNNs (I3D, SlowFast) that process spatial-temporal volumes, two-stream networks that process spatial (RGB) and temporal (optical flow) separately, and Transformer-based models (TimeSformer, Video Swin) that apply attention across frames.</p><p>Training uses clip-level classification with cross-entropy loss. Temporal smoothing during inference reduces flickering predictions. Knowledge distillation from larger models to smaller ones enables real-time deployment on edge devices.</p>'
      },
      {
        title: 'Streaming Inference and Deployment',
        content: '<p>Real-time video action recognition requires streaming inference: processing frames as they arrive rather than in batch. The system maintains a frame buffer (typically 8-32 frames) and runs inference on the buffer contents at regular intervals. Output smoothing (majority voting or exponential moving average) reduces prediction flickering.</p><p>Latency optimization includes model quantization (INT8), frame subsampling (processing every Nth frame), and spatial resolution reduction. These optimizations trade small accuracy reductions for significant latency improvements, enabling real-time deployment on GPU-constrained devices.</p>'
      }
    ]
  },
  {
    slug: 'data-segmentation',
    title: 'Data Segmentation',
    category: 'Data Intelligence / Analytics',
    image: '/assets/projects/10-data-segmentation.jpg',
    imageAlt: 'Mixed data particles organizing into distinct structured clusters inside a transparent chamber',
    summary: 'Intelligent segmentation pipelines that organize complex records into meaningful groups for targeting, analysis, and decisions.',
    focus: 'Data intelligence',
    system: 'ML segmentation pipeline',
    delivery: 'Analysis to activation',
    capabilities: [
      ['Feature engineering and selection', 'Transform raw data into meaningful features using statistical analysis, domain knowledge, and automated feature discovery.'],
      ['Clustering algorithms and segment discovery', 'K-means, DBSCAN, hierarchical clustering, and Gaussian mixture models with automatic cluster count selection.'],
      ['Segment stability and validation', 'Measure segment consistency over time, validate with held-out data, and test business utility.'],
      ['CRM activation and targeting', 'Push segments to marketing platforms, sales tools, and product systems for personalized engagement.'],
      ['Privacy and compliance', 'Anonymization, consent management, and data governance for segment data across jurisdictions.'],
    ],
    steps: [
      ['Audit available data', 'Inventory data sources, quality, completeness, and freshness for segmentation features.'],
      ['Engineer features', 'Transform raw data into meaningful features: RFM scores, behavioral aggregates, and derived metrics.'],
      ['Discover segments', 'Apply clustering algorithms with parameter optimization and automatic cluster count selection.'],
      ['Activate and monitor', 'Push segments to operational systems and track segment stability, size, and business impact.'],
    ],
    sections: [
      {
        title: 'Feature Engineering for Segmentation',
        content: '<p>Raw data rarely produces meaningful segments directly. Feature engineering transforms raw records into features that capture behavioral patterns, preferences, and characteristics. Common feature types include: RFM (recency, frequency, monetary) scores for transactional data, behavioral aggregates (session count, page views, feature usage) for engagement data, and derived metrics (lifetime value, churn probability, preference scores) for predictive data.</p><p>Feature selection removes redundant and irrelevant features that add noise without improving segment quality. Techniques include correlation analysis, variance thresholding, and feature importance from tree-based models. The goal is a compact feature set that captures the essential variation in the data.</p>'
      },
      {
        title: 'Clustering and Segment Discovery',
        content: '<p>Segment discovery uses unsupervised clustering to find natural groupings in the feature space. K-means is the baseline: fast, interpretable, and effective for spherical clusters. DBSCAN handles irregular cluster shapes and identifies outliers. Gaussian mixture models provide probabilistic cluster assignments that capture uncertainty at cluster boundaries.</p><p>Cluster count selection uses the elbow method (within-cluster sum of squares), silhouette analysis (inter-cluster vs. intra-cluster distance), and business validation (do the segments make sense operationally?). The optimal cluster count balances statistical quality with operational usability.</p>'
      },
      {
        title: 'Segment Validation and Stability',
        content: '<p>Statistical validation measures segment quality: silhouette scores (how similar items are to their own cluster vs. other clusters), Davies-Bouldin index (ratio of within-cluster to between-cluster distances), and Calinski-Harabasz index (variance ratio criterion). High scores indicate well-separated, compact clusters.</p><p>Temporal stability measures how consistently items remain in their assigned segments over time. Re-clustering monthly data and measuring segment overlap (Jaccard index) identifies stable vs. transient segments. Stable segments are more actionable for long-term strategies.</p>'
      },
      {
        title: 'CRM Activation and Business Integration',
        content: '<p>Segments are only valuable if they drive action. CRM activation pushes segment labels to marketing automation platforms, sales CRMs, and product systems. Each segment receives tailored messaging, offers, and experiences based on its characteristics.</p><p>Activation tracking measures the business impact of segmentation: conversion rate lift, engagement improvement, and revenue attribution per segment. These metrics justify the investment in segmentation and guide refinement of segment definitions.</p>'
      }
    ]
  },
  {
    slug: 'churn-value-optimization',
    title: 'Churn & Value Optimization',
    category: 'Customer Analytics / Retention',
    image: '/assets/projects/11-churn-value.jpg',
    imageAlt: 'Customer value paths being detected and redirected toward stable long-term retention orbits',
    summary: 'Predictive customer analytics that identifies churn risk, lifetime value, high-impact segments, and retention opportunities.',
    focus: 'Customer retention',
    system: 'Predictive analytics pipeline',
    delivery: 'Model to retention',
    capabilities: [
      ['Churn definition and labeling', 'Define churn events, set observation windows, handle censored data, and create labeled training datasets.'],
      ['Customer lifetime value modeling', 'Predict CLV using probabilistic models (BG/NBD, Gamma-Gamma) or machine learning approaches.'],
      ['Survival analysis and time-to-event', 'Model time until churn using Cox proportional hazards, Kaplan-Meier, or deep survival models.'],
      ['Uplift modeling and treatment effects', 'Identify which customers respond to retention interventions vs. those who would stay anyway.'],
      ['Retention targeting and campaign optimization', 'Prioritize retention spend using churn risk scores, CLV predictions, and uplift estimates.'],
    ],
    steps: [
      ['Define churn and CLV', 'Establish operational definitions: what constitutes churn, the observation window, and CLV calculation methodology.'],
      ['Build predictive models', 'Train churn prediction, CLV estimation, and uplift models on historical customer data.'],
      ['Design retention campaigns', 'Create targeted interventions for different risk segments: discounts, outreach, feature education, or loyalty programs.'],
      ['Measure and optimize', 'Track retention lift, CLV improvement, and campaign ROI to refine targeting and interventions.'],
    ],
    sections: [
      {
        title: 'Churn Definition and Labeling',
        content: '<p>Churn prediction starts with a clear operational definition: what event constitutes churn? For subscription businesses, churn is non-renewal. For transactional businesses, churn is the absence of transactions for a defined period. The observation window (how long before churn do we predict?) and the prediction window (how far ahead do we predict?) must be defined based on business context.</p><p>Censored data is a key challenge: customers who have not yet churned provide partial information. Survival analysis handles censoring correctly, while standard classification treats all non-churned customers as negatives, which biases the model. This blueprint uses survival analysis as the primary approach with classification as a complementary signal.</p>'
      },
      {
        title: 'Customer Lifetime Value Modeling',
        content: '<p>CLV prediction uses two main approaches: probabilistic models (BG/NBD for transaction frequency, Gamma-Gamma for monetary value) and machine learning models (gradient boosting, neural networks) that incorporate richer feature sets. Probabilistic models are interpretable and require only transaction history. ML models can incorporate browsing behavior, support interactions, and product usage data.</p><p>CLV predictions enable differentiated retention strategies: high-CLV customers receive premium treatment, medium-CLV customers receive targeted campaigns, and low-CLV customers receive automated engagement. This allocates retention spend where it generates the most value.</p>'
      },
      {
        title: 'Uplift Modeling and Treatment Effects',
        content: '<p>Uplift modeling answers a critical question: which customers will churn unless we intervene, and which will stay regardless? This区分 is essential for efficient retention spending. Customers who would stay anyway should not receive retention discounts (which reduce revenue without preventing churn). Customers who will churn regardless may need a different intervention or should be accepted as losses.</p><p>Uplift models are trained on historical A/B test data where some customers received retention interventions and others did not. The model predicts the incremental effect of the intervention on each customer, enabling targeted treatment assignment.</p>'
      },
      {
        title: 'Retention Campaign Optimization',
        content: '<p>Retention campaigns are designed around customer segments: high-risk/high-CLV customers receive personalized outreach from account managers, medium-risk customers receive automated email campaigns, and low-risk customers receive loyalty program enrollment. Campaign timing is optimized using churn hazard curves: intervene just before the peak churn risk period.</p><p>Campaign performance is measured using uplift (incremental retention vs. control group), cost per retained customer, and CLV impact. These metrics feed back into the targeting model, creating a continuous improvement loop.</p>'
      }
    ]
  },
  {
    slug: 'fraud-anomaly-detection',
    title: 'Fraud & Anomaly Detection',
    category: 'Financial Risk / Security',
    image: '/assets/projects/12-fraud-detection.jpg',
    imageAlt: 'A precision scanner isolating an anomalous transaction pattern from a field of uniform financial events',
    summary: 'Risk detection systems that surface suspicious behavior, abnormal transactions, and emerging patterns for faster investigation.',
    focus: 'Risk management',
    system: 'Real-time scoring pipeline',
    delivery: 'Rules to investigation',
    capabilities: [
      ['Real-time scoring and alerting', 'Sub-second scoring of transactions with configurable alert thresholds and risk tiers.'],
      ['Imbalanced data handling', 'SMOTE, class weighting, focal loss, and anomaly detection approaches for rare-event prediction.'],
      ['Rules-ML hybrid architecture', 'Deterministic rules for known patterns combined with ML models for novel fraud detection.'],
      ['Investigation queues and case management', 'Alert triage, investigation workflows, evidence collection, and resolution tracking.'],
      ['Feedback loops and model retraining', 'Investigator decisions feed back into model training for continuous improvement.'],
    ],
    steps: [
      ['Define fraud patterns', 'Catalog known fraud types, their indicators, and the business impact of each type.'],
      ['Build detection models', 'Train anomaly detection, classification, or graph-based models on historical fraud data.'],
      ['Design investigation workflows', 'Create alert triage rules, investigation procedures, and resolution tracking.'],
      ['Deploy and iterate', 'Launch with human-in-the-loop review, measure detection rates, and retrain on investigator feedback.'],
    ],
    sections: [
      {
        title: 'Real-Time Scoring Architecture',
        content: '<p>Fraud detection requires real-time scoring: transactions must be evaluated in milliseconds to enable or block them at the point of sale. The scoring pipeline includes feature computation (aggregating transaction history, velocity checks, and behavioral profiles), model inference (gradient boosting, neural network, or ensemble), and decision logic (risk tiers, thresholds, and override rules).</p><p>Latency budgets are strict: feature computation must complete within 100ms, model inference within 50ms, and the total decision within 200ms. Pre-computed features (customer profiles, historical aggregates) are cached in Redis to avoid database lookups during scoring.</p>'
      },
      {
        title: 'Handling Imbalanced Data',
        content: '<p>Fraud is rare: typically 0.1-1% of transactions are fraudulent. This extreme class imbalance makes standard classification ineffective. The model learns to predict "not fraud" for everything and achieves 99%+ accuracy while catching no fraud at all.</p><p>This blueprint uses multiple approaches: class weighting (penalizing false negatives more heavily), SMOTE (synthetic oversampling of minority class), focal loss (down-weighting easy examples), and anomaly detection (modeling normal behavior and flagging deviations). The ensemble of these approaches provides robust detection across different fraud patterns.</p>'
      },
      {
        title: 'Rules-ML Hybrid Architecture',
        content: '<p>Deterministic rules catch known fraud patterns: blacklisted cards, suspicious IP addresses, velocity limits, and amount thresholds. ML models catch novel patterns: unusual spending behavior, atypical transaction sequences, and emerging fraud tactics. The hybrid architecture runs both in parallel: rules provide fast, explainable catches; ML provides adaptive, pattern-based detection.</p><p>Rules are maintained by fraud analysts and updated as new patterns emerge. ML models are retrained on labeled fraud data (including investigator confirmations). The two systems feed each other: rules catch known patterns that label training data; ML discoveries become new rules when validated by analysts.</p>'
      },
      {
        title: 'Investigation and Feedback Loops',
        content: '<p>Alerts are triaged by risk tier: high-risk alerts go to senior investigators, medium-risk to junior investigators, and low-risk are auto-closed or sampled for quality review. Each investigation records the analysts decision (fraud confirmed, false positive, or inconclusive), supporting evidence, and resolution action.</p><p>Investigator decisions are the primary source of labeled training data. Confirmed fraud cases are positive examples; false positive confirmations are negative examples. This feedback loop continuously improves the model, reducing false positives while maintaining or improving detection rates.</p>'
      }
    ]
  }
];

module.exports = { projectData };
