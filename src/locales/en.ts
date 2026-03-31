export const en = {
  sidebar: {
    role: "AI Engineer",
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    copyright: "© 2026 Vũ Minh Anh"
  },
  about: {
    greeting: "Hi, I'm Vũ Minh Anh",
    location: "Ha Noi, Vietnam",
    status: "Open to work",
    description: "I specialize in building intelligent systems that prioritize performance and user experience. From complex RAG architectures to polished interfaces, I deliver end-to-end AI solutions.",
    stackTag: "icon",
    skillsTitle: "Skills & Technologies",
    skillsDescription: "A comprehensive toolkit for building modern applications, with deep expertise in AI orchestration and full-stack development."
  },
  experience: {
    tag: "Professional Journey",
    title: "Work Experience",
    description: "A track record of shipping production-grade applications that bridge complex AI logic with intuitive user experiences.",
    viewProject: "View Project",
    technologies: "Technologies:",
    showRes: "Show responsibilities",
    hideRes: "Hide responsibilities",
    keyRes: "Key Responsibilities:",
    items: [
      {
        role: "AI/ML Engineer",
        company: "Physcode",
        location: "Hanoi, Vietnam",
        employmentType: "Full-time",
        workType: "Onsite",
        summary: "Focused on AI-driven solutions and robust backend architectures for high-scale platforms.",
        projects: [
          {
            name: "Agentic AI Chatbot Platform",
            description: "High-scale multi-tenant AI platform featuring voice-to-voice interaction, agentic RAG workflows, and high-precision hybrid search architectures.",
            responsibilities: [
              "Orchestrated advanced agentic RAG workflows using LangGraph to implement state-machine logic for rewriting, retrieving, and evidence-based generation",
              "Implemented a rigorous retrieval quality gate using Pydantic structured output and citation thresholds to prevent hallucinations and enforce information integrity",
              "Built a sophisticated hybrid search engine in Qdrant combining Dense and BM25 sparse embeddings with RRF fusion, contextual compression, and listwise reranking",
              "Developed a low-latency intent routing system using cosine similarity and MongoDB embedding caches, bypassing LLM calls for routing to maximize speed and cost-efficiency",
              "Enhanced system reliability with stage-level timeouts, circuit breakers, and comprehensive observability through LangSmith tracing and shadow traffic analysis"
            ]
          },
          {
            name: "Mosyne AI",
            description: "Diffusion-based assistant for creative teams involving text-to-image generation (including Flux), mask-driven inpainting, background removal/replacement, and upscaling with blend compositing.",
            responsibilities: [
              "Developed end-to-end image generation and editing features: text-to-image, background removal/replacement, and mask-driven remove/fill inpainting workflows",
              "Optimized diffusion execution by orchestrating serverless Runpod jobs (ComfyUI workflow payloads) and implementing unified async status polling",
              "Built reliable image preprocessing and editing data flow: EXIF transpose, resize/letterbox + zoom-crop framing, polygon/base64 masks, and compositing/blending",
              "Implemented prompt enhancement and templating using LangChain and OpenAI to improve generation quality and batch consistency across pipelines"
            ]
          },
          {
            name: "Eduprompt",
            description: "AI learning platform helping students master prompt engineering for image generation through quantitative feedback, embedding similarity scoring, and LLM-guided pedagogical suggestions.",
            responsibilities: [
              "Designed and implemented the primary grading engine using embedding similarity between student generations and teacher reference models",
              "Orchestrated complex inference pipelines involving image processing (PIL), base64 encoding, and vision-to-captioning via RunPod APIs",
              "Integrated LLMs to generate pedagogical feedback, delivering specific, actionable suggestions for prompt improvement and technical growth",
              "Designed structured API contracts with Pydantic and built secure JWT authentication layers with MongoDB token management",
              "Developed standardized scoring algorithms using NumPy and implemented robust error-handling for large-scale inference failovers"
            ]
          }
        ]
      },
      {
        role: "AI Engineer",
        company: "AI Soft",
        location: "Hanoi, Vietnam",
        employmentType: "Full-time",
        workType: "Hybrid",
        summary: "Focused on building multimodal AI detection systems and establishing rigorous evaluation regimes for production LLMs.",
        projects: [
          {
            name: "AI KC IoT",
            description: "Multimodal detection system for IoT attack surfaces including brute-force, port scanning, and DDoS vectors.",
            responsibilities: [
              "Designed and trained detection models achieving 98.4% accuracy across 4 major attack classes",
              "Processed and normalized complex multimodal telemetry data to capture diverse threat vectors",
              "Optimized inference pipelines to ensure low-latency detection on constrained edge devices"
            ]
          },
          {
            name: "LLM Evaluation Framework",
            description: "Comprehensive quantitative benchmark and evaluation pipeline for testing Large Language Models in domain-specific tasks.",
            responsibilities: [
              "Established rigorous evaluation methodologies to detect hallucinations, response consistency, and context retrieval accuracy",
              "Curated high-quality golden datasets and test suites for systematic automated LLM benchmarking",
              "Designed human-in-the-loop (HITL) review interfaces for continuous model alignment and prompt optimization"
            ]
          }
        ]
      },
      {
        role: "AI Engineer",
        company: "Hyperlogy",
        location: "Hanoi, Vietnam",
        employmentType: "Full-time",
        workType: "Onsite",
        summary: "Developed computer vision solutions for enterprise identity verification and healthcare automation.",
        projects: [
          {
            name: "AI eKYC for Banking",
            description: "Face verification, OCR, and fraud heuristics deployed for onboarding journeys.",
            responsibilities: [
              "Designed and trained face verification models including liveness detection to prevent spoofing attacks",
              "Implemented specialized OCR pipelines for automatic extraction of identity document data with high precision",
              "Integrated real-time inference endpoints into the core banking onboarding flow, reducing manual review by 55%"
            ]
          },
          {
            name: "Facial Recognition Attendance System",
            description: "Automated time-tracking and attendance system deployed across hospital facilities using real-time face recognition.",
            responsibilities: [
              "Developed a robust facial recognition pipeline capable of identifying medical staff accurately under varied lighting and masking conditions",
              "Optimized edge deployment to achieve sub-second latency for continuous multi-face stream processing",
              "Engineered secure logging and attendance tracking integration with the hospital's central HR system"
            ]
          }
        ]
      },
      {
        role: "Fullstack Web & AI Developer",
        company: "Freelance Experience",
        location: "Remote",
        employmentType: "Freelance",
        workType: "Remote",
        summary: "Developing custom AI agents, RAG pipelines, and fullstack web applications for diverse business use cases.",
        projects: [
          {
            name: "Discipline QR — Educational Conduct Management",
            description: "A specialized student discipline management system enabling instantaneous conduct evaluation via QR scanning, transparent audit logging, and an integrated AI assistant for real-time inquiries.",
            responsibilities: [
              "Developed high-speed QR scanning module for rapid recording of student conduct infractions and point awards",
              "Implemented a transparent audit logging system to ensure data integrity and traceability for school administrators and parents",
              "Built an AI virtual assistant to handle policy inquiries and system troubleshooting, reducing organizational friction",
              "Designed a mobile-optimized dashboard for on-the-go management by teachers and staff"
            ]
          },
          {
            name: "Enterprise RAG Assistant",
            description: "Built a document-aware chatbot for internal knowledge management with sub-second latency.",
            responsibilities: [
              "Implemented vector search and semantic retrieval",
              "Optimized prompt templates for accuracy"
            ]
          }
        ]
      },
      {
        role: "Full Stack Engineer",
        company: "Tech Startups (Project Based)",
        location: "Hanoi, Vietnam",
        employmentType: "Project-based",
        workType: "Hybrid",
        summary: "Delivered scalable web architectures and performed data engineering tasks.",
        projects: [
          {
            name: "E-Commerce Analytics",
            description: "Developed a real-time sales dashboard tracking $50k+ in monthly transactions.",
            responsibilities: [
              "Visualized data using D3.js and Chart.js",
              "Built data ingestion pipelines"
            ]
          }
        ]
      }
    ]
  },
  education: {
    tag: "Education",
    title: "Grounded in computer science fundamentals",
    description: "Strong algorithmic thinking plus practical experience make it easy for me to collaborate with research, data, and product teams alike.",
    focusLabel: "Focus",
    items: [
      {
        degree: "B.Eng Information Technology",
        institution: "PTIT",
        period: "2019 — 2024",
        focus: "Specialized in AI systems, distributed computing, and data platforms."
      },
      {
        degree: "Algorithm & Data Structure Fellowship",
        institution: "Samsung",
        period: "2020 — 2021",
        focus: "Advanced graph theory, optimization, and large-scale problem solving."
      }
    ],
    certTag: "Certification",
    viewPdf: "View PDF ↗",
    digitalCredentials: "Digital Credentials",
    certificates: [
      {
        title: "Ubuntu with WSL",
        issuer: "Canonical",
        description: "Official Ubuntu certification covering WSL setup, Linux tooling, and cross-platform developer environments."
      },
      {
        title: "JavaScript Advanced",
        issuer: "F8",
        description: "Advanced JavaScript certification covering asynchronous programming, ES6+, DOM manipulation, and performance optimization."
      }
    ]
  },
  projects: {
    tag: "Creative Portfolio",
    title: "Personal side projects",
    description: "Exploration of AI capabilities through independent builds, experimental tools, and open-source contributions.",
    moreBuilds: "More builds & experiments",
    footer: "Interested in the architecture behind these? I'm always open to discussing technical trade-offs and design decisions.",
    items: [
      {
        title: "AI Resume Parser",
        description: "LLM pipeline that ingests PDFs, structures candidate profiles, and ranks via bespoke evaluation loops.",
        impact: "Cuts recruiter triage time by 70%."
      }
    ]
  },
  contact: {
    tag: "Contact",
    title: "Let’s build something together",
    description: "Prefer a quick call, async brief, or dropping me a note? Pick the channel that fits and we can dive into roadmaps, scoping, or demos.",
    tap: "Tap to connect",
    messageTag: "Message",
    messageTitle: "Tell me about your idea",
    messageDesc: "Response within 24h weekdays.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    nameReq: "Name is required",
    emailReq: "Email is required",
    emailInvalid: "Invalid email address",
    messageReq: "Message is required",
    sending: "Sending...",
    sendBtn: "Send message",
    success: "Message sent successfully!"
  }
};
