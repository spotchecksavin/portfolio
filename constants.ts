
import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Savinkumar N",
  title: "Backend Engineer (Python) / Automation & AI Engineer",
  email: "savinkumarnsk10@gmail.com",
  phone: "+91 9597934436",
  linkedin: "savinkumarn",
  github: "savinkumarnsk",
  location: "Coimbatore, India",
  summary: "Backend Engineer (Python) / Automation & AI Engineer with 1 year of hands-on experience building scalable healthcare automation platforms, high-throughput data pipelines, and AI-driven systems. Proven expertise in Playwright-based RPA, FastAPI/Flask services, and large-scale workflow orchestration using n8n."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Backend Engineer (Python) – Automation & AI Systems",
    company: "Spotcheck Global",
    location: "India",
    period: "August 2025 – Present",
    points: [
      "Built and deployed AI-driven automation systems using Python, FastAPI, and Flask for healthcare workflows.",
      "Developed end-to-end RPA pipelines using Playwright and HTTPX for session-based and AJAX web automation.",
      "Implemented OCR and document intelligence pipelines (Docling, PaddleOCR, OpenCV) for structured data extraction.",
      "Designed and integrated LLM-powered solutions using LangChain, including embeddings and RAG pipelines.",
      "Optimized data storage and retrieval using MySQL and MongoDB."
    ]
  },
  {
    role: "Database Engineer Intern",
    company: "Spotcheck Global",
    location: "India",
    period: "April 2025 – August 2025",
    points: [
      "Supported database design and optimization using MySQL and MongoDB.",
      "Performed data cleaning, normalization, and validation for downstream AI and automation pipelines.",
      "Wrote optimized SQL queries and assisted with backend API integrations."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Scalable Healthcare Automation Platform",
    tech: ["Python", "Playwright", "Flask", "HTTPX", "REST APIs", "n8n"],
    description: [
      "Designed and implemented an end-to-end automation platform for insurance eligibility verification.",
      "Engineered session-persistent browser automation and optimized AJAX-level requests."
    ],
    impact: "Reduced eligibility processing latency by ~80% and enabled high-throughput, API-driven automation."
  },
  {
    title: "AI-Driven Medical Document Intelligence",
    tech: ["Python", "OCR", "OpenVINO", "LangChain", "Unsloth"],
    description: [
      "Built a document intelligence pipeline to extract structured medical data from unstructured PDFs.",
      "Fine-tuned open-source LLMs using Unsloth to improve domain-specific medical response accuracy."
    ],
    impact: "Reduced manual data extraction effort by ~70% while improving accuracy."
  },
  {
    title: "High-Scale Outpatient Billing Workflow",
    tech: ["n8n", "JavaScript", "REST APIs", "SQL"],
    description: [
      "Developed a large-scale outpatient billing automation workflow handling lakhs of records.",
      "Re-architected the workflow for parallel processing and efficient batching."
    ],
    impact: "Reduced processing time from 6–7 hours to 30–40 minutes (~90% performance improvement)."
  }
];

export const SKILLS: SkillCategory[] = [
  { 
    category: "Generative AI & LLM Engineering", 
    items: ["Fine-Tuning (LoRA, QLoRA, Unsloth)", "RAG Architecture (Hybrid Search)", "Vector DBs (Pinecone, ChromaDB)", "Structured Output (JSON Schema)", "Prompt Engineering", "Token Efficiency", "LLM Evaluation (ROUGE, BLEU)", "Quantization (4-bit/8-bit)"] 
  },
  { 
    category: "AI System Architecture", 
    items: ["End-to-End AI Pipelines", "Async Microservices (FastAPI)", "High-Concurrency Design", "Workflow Orchestration (n8n)", "Failure Recovery (Circuit Breakers)", "Semantic Caching (Redis)", "Database Performance"] 
  },
  { 
    category: "Performance Engineering", 
    items: ["Latency Reduction (80-90%)", "Throughput Optimization (10x)", "Parallel Execution", "Connection Pooling", "Memory & GPU Profiling", "Batch Inference", "Async Task Queues"] 
  },
  { 
    category: "Intelligent Automation & RPA", 
    items: ["Playwright Anti-Detection", "Network Interception (AJAX)", "Session Lifecycle Management", "Insurance Portal Automation", "Real-Time Eligibility Verification"] 
  },
  { 
    category: "Healthcare AI Domain", 
    items: ["Medical Code Structuring (CPT/ICD)", "Insurance Eligibility Systems", "Billing Workflow Optimization", "HIPAA-Compliant Pipelines", "Medical Entity Extraction (95%+)"] 
  }
];

export const FULL_RESUME_TEXT = `
SAVINKUMAR N
Backend Engineer (Python) / Automation & AI Engineer
Email: savinkumarnsk10@gmail.com | Mobile: +91 9597934436
Experience:
- Spotcheck Global: Backend Engineer (Aug 2025-Present). Built AI systems, RPA pipelines, OCR, LLM solutions.
- Spotcheck Global: Database Intern (Apr-Aug 2025). SQL optimization, data cleaning.
Projects:
- Healthcare Automation Platform: 80% latency reduction.
- Medical Document Intel: 70% manual effort reduction using OCR & LLM.
- Outpatient Billing: 90% speed improvement (6hrs to 30mins).
Skills: Python, FastAPI, Playwright, n8n, LangChain, RAG, LLM Fine-tuning.
Education: B.Tech in AI & Data Science from Hindusthan Institute of Technology (8.61 CGPA).
`;
