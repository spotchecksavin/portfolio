
import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Savinkumar N",
  title: "Backend AI & Automation Engineer",
  email: "savinkumarnsk10@gmail.com",
  phone: "+91 9597934436",
  linkedin: "savinkumarn",
  github: "savinkumarnsk",
  location: "Coimbatore, India",
  summary: "Backend AI & Automation Engineer with 1+ year of experience specializing in AI-SDLC, MDLC, and high-scale automation. Expert in building production-grade AI solutions, integrating LLMs (LangChain, LlamaIndex, OpenClaw), and optimizing complex workflows using n8n (90% performance gains). Proven track record in healthcare automation, processing 100K+ daily transactions with 95% accuracy."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "AI/ML Product Engineer – Backend & Automation",
    company: "Spotcheck Global",
    location: "India",
    period: "August 2025 – Present",
    points: [
      "Played a pivotal role in the development of Axora.ai, architecting and building the core backend infrastructure and AI integration components.",
      "Architected healthcare automation platforms processing 100K+ transactions daily, reducing eligibility verification latency by 80%.",
      "Implemented complete AI-SDLC and MDLC (Model Development Lifecycle) for production-grade AI capabilities.",
      "Integrated OpenClaw and advanced LLM frameworks (LangChain, LlamaIndex) to build low-latency RAG pipelines and medical agents.",
      "Optimized n8n billing workflows handling 100K+ records, improving throughput by 90% (reduced processing from 7 hours to 30 mins).",
      "Developed OCR + LLM document intelligence pipelines (Docling, PaddleOCR) reducing manual extraction by 70%.",
      "Collaborated with cross-functional teams to translate product roadmaps into well-defined technical requirements and innovative AI solutions."
    ]
  },
  {
    role: "Data Science & Database Engineer Intern",
    company: "Spotcheck Global",
    location: "India",
    period: "April 2025 – August 2025",
    points: [
      "Optimized database schemas and queries (MySQL, MongoDB) supporting high-volume healthcare AI workflows with 60% performance improvement.",
      "Built data validation and normalization pipelines for downstream automation systems using Python and SQL.",
      "Performed data analytics on large datasets, building dashboards that enabled data-driven decision making with 99.5% accuracy.",
      "Promoted to AI/ML Product Engineer after 4 months based on technical excellence and rapid skill acquisition."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Axora.ai",
    tech: ["Python", "FastAPI", "LLMs", "LangChain", "Vector DBs", "Async Processing"],
    description: [
      "Architected and built the core backend infrastructure for Axora.ai, a cutting-edge AI platform.",
      "Implemented high-performance AI integration components and optimized data processing pipelines."
    ],
    impact: [
      "Played a lead role in building the foundational backend for a production-grade AI platform",
      "Enabled low-latency AI responses and scalable data handling"
    ]
  },
  {
    title: "Scalable Healthcare Automation Platform",
    tech: ["Python", "Playwright", "Flask", "HTTPX", "REST APIs", "n8n"],
    description: [
      "Designed and implemented an end-to-end automation platform for insurance eligibility verification.",
      "Engineered session-persistent browser automation and optimized AJAX-level requests."
    ],
    impact: [
      "Reduced eligibility processing latency by ~80%",
      "Enabled high-throughput, API-driven automation"
    ]
  },
  {
    title: "AI-Driven Medical Document Intelligence",
    tech: ["Python", "OCR", "OpenVINO", "LangChain", "Unsloth"],
    description: [
      "Built a document intelligence pipeline to extract structured medical data from unstructured PDFs.",
      "Fine-tuned open-source LLMs using Unsloth to improve domain-specific medical response accuracy."
    ],
    impact: [
      "Reduced manual data extraction effort by ~70%",
      "Improved accuracy through fine-tuned LLMs",
      "Expertise in LLM fine-tuning and model development"
    ]
  },
  {
    title: "Custom LLM Architecture & Fine-Tuning",
    tech: ["Python", "PyTorch", "Transformers", "LangChain", "Unsloth", "LoRA", "QLoRA"],
    description: [
      "Designed and implemented a custom LLM architecture from scratch, focusing on efficient transformer layers.",
      "Fine-tuned pre-trained models using LoRA and QLoRA techniques to adapt them for specialized tasks."
    ],
    impact: [
      "Demonstrated ability to build and optimize custom LLM architectures",
      "Achieved a 15% improvement in task-specific accuracy compared to off-the-shelf models",
      "Proven capability to build and deploy custom LLM models"
    ]
  },
  {
    title: "High-Scale Outpatient Billing Workflow",
    tech: ["n8n", "JavaScript", "REST APIs", "SQL"],
    description: [
      "Developed a large-scale outpatient billing automation workflow handling lakhs of records.",
      "Re-architected the workflow for parallel processing and efficient batching."
    ],
    impact: [
      "Reduced processing time from 6–7 hours to 30–40 minutes (~90% performance improvement)"
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "Languages", items: ["Python (Expert)", "SQL", "JavaScript", "C++", "R", "Java"] },
  { category: "AI / GenAI", items: ["AI-SDLC", "MDLC", "LLMs", "RAG", "LangChain", "LlamaIndex", "OpenClaw", "Fine-Tuning (Unsloth, LoRA, QLoRA)", "Vector DBs", "LLM Architecture", "Custom Model Development"] },
  { category: "Automation & MLOps", items: ["n8n (Advanced)", "Playwright", "RPA", "CI/CD", "Docker", "Model Monitoring", "MLflow"] },
  { category: "Backend & Cloud", items: ["FastAPI", "Flask", "REST APIs", "Async Processing", "GCP (Vertex AI, BigQuery)", "Microservices"] },
  { category: "Computer Vision", items: ["OCR (Docling, PaddleOCR)", "OpenCV", "YOLO", "Object Detection"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "ChromaDB", "Pinecone"] }
];

export const FULL_RESUME_TEXT = `
SAVINKUMAR N
Backend AI & Automation Engineer
Email: savinkumarnsk10@gmail.com | Mobile: +91 9597934436
LinkedIn: linkedin.com/in/savinkumarn | GitHub: github.com/savinkumarnsk

PROFESSIONAL SUMMARY
Results-driven AI/ML Engineer with 1+ year of experience designing, developing, and deploying production-grade machine learning models and automation systems. Expert in AI-SDLC, MDLC, and high-scale workflow orchestration. Successfully delivered AI solutions that improved decision-making by 80% and reduced manual effort by 70%.

EXPERIENCE
Spotcheck Global | Backend AI & Automation Engineer | Aug 2025 – Present
- Played a pivotal role in the development of Axora.ai, architecting and building the core backend infrastructure and AI integration components.
- Architected healthcare automation platform processing 100K+ transactions, reducing latency by 80%.
- Built OCR + LLM document intelligence pipeline (Docling, PaddleOCR, LangChain) reducing manual extraction by 70%.
- Optimized n8n billing workflow handling 100K+ records, improving throughput by 90% (7 hrs to 30 mins).
- Integrated OpenClaw and LlamaIndex for advanced medical RAG agents.
- Developed scalable REST APIs using FastAPI/Flask and async processing.

Spotcheck Global | Data Science Intern | Apr 2025 – Aug 2025
- Optimized database schemas (MySQL, MongoDB) with 60% performance improvement.
- Built data validation and normalization pipelines for automation systems.
- Performed data analytics on large datasets with 99.5% accuracy.

PROJECTS
- Axora.ai: Lead Backend Engineer for a production-grade AI platform, architecting core infrastructure and AI integrations.
- Scalable Healthcare Automation Platform: RPA system using Python, Playwright, and n8n.
- AI-Driven Medical Document Intelligence: Fine-tuned LLMs (Unsloth) and OCR for structured data extraction.
- Custom LLM Architecture & Fine-Tuning: Designed and built custom LLM architectures, fine-tuned models using LoRA/QLoRA for specialized tasks, achieving 15% accuracy improvement.
- High-Scale Outpatient Billing Workflow: n8n automation achieving 90% performance improvement.

SKILLS
- AI/ML: AI-SDLC, MDLC, LLMs, RAG, LangChain, LlamaIndex, Fine-tuning (LoRA, QLoRA), Vector DBs, LLM Architecture, Custom Model Development.
- Automation & MLOps: n8n, Playwright, Selenium, RPA, CI/CD, Docker, Model Monitoring, MLflow.
- Backend: Python, FastAPI, Flask, REST APIs, Microservices, Async Processing.
- Computer Vision: OCR (Docling, PaddleOCR), OpenCV, YOLO, Object Detection.
- Databases: MySQL, MongoDB, PostgreSQL, Redis, ChromaDB, Pinecone.
- Cloud: GCP (Vertex AI, BigQuery, Cloud Functions).

EDUCATION
B.Tech in Artificial Intelligence & Data Science | Hindusthan Institute of Technology | CGPA: 8.61/10
`;
