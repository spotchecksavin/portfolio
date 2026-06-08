
import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Savinkumar N",
  title: "AI Developer at SpotCheck",
  email: "savinkumarnsk10@gmail.com",
  phone: "+91 9597934436",
  linkedin: "savinkumarn",
  github: "savinkumarnsk",
  location: "Coimbatore, India",
  summary: "AI/ML Engineer with 1+ year of production experience building LLM-powered automation systems and healthcare AI platforms. Specialized in GenAI applications, RAG architectures, LLM fine-tuning, and MLOps. Proven track record of deploying scalable AI solutions processing 100K+ transactions with 80% latency reduction. Seeking senior AI/ML/GenAI engineering roles to architect next-generation intelligent systems."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "AI Developer",
    company: "Spotcheck Global",
    location: "Coimbatore, India",
    period: "August 2025 – Present",
    points: [
      "Architected production-grade healthcare AI platform processing 100,000+ daily transactions with 80% latency reduction using FastAPI microservices, Playwright-based RPA, and intelligent workflow orchestration",
      "Engineered end-to-end Document Intelligence pipeline combining OCR (Docling, PaddleOCR) with LLM-based extraction, achieving 70% reduction in manual data entry and 95% accuracy for medical document processing",
      "Optimized distributed billing workflow system handling 100K+ records, improving throughput by 90% (6-7 hours to 30-40 minutes) through async processing, database query optimization, and parallel execution strategies",
      "Developed RESTful APIs and async task pipelines for real-time healthcare data transformation, integrating MySQL and MongoDB with advanced caching and connection pooling for high-concurrency scenarios",
      "Implemented production monitoring, logging, and error handling systems ensuring 99.9% uptime for mission-critical healthcare automation workflows"
    ]
  },
  {
    role: "Database Engineer Intern",
    company: "Spotcheck Global",
    location: "Coimbatore, India",
    period: "April 2025 – August 2025",
    points: [
      "Optimized complex database schemas and queries (MySQL, MongoDB) supporting high-volume AI workflows, reducing query execution time by 60% through indexing strategies and query rewriting",
      "Built robust data validation and ETL pipelines processing healthcare records with 99.5% accuracy, enabling downstream ML model training and automation systems",
      "Designed data normalization frameworks and implemented database backup/recovery procedures for HIPAA-compliant healthcare data infrastructure",
      "Promoted to Backend Engineer after 4 months based on exceptional performance and technical leadership"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Production LLM Fine-Tuning & Medical NLP System",
    tech: ["Python", "LangChain", "Unsloth", "LoRA", "QLoRA"],
    description: [
      "Fine-tuned Llama 3.1 8B and Mistral 7B models on 50K+ custom medical datasets using Unsloth",
      "Implemented LoRA/QLoRA techniques for parameter-efficient fine-tuning on consumer-grade GPUs",
      "Built end-to-end ML pipeline including data preprocessing, tokenization, training, and model evaluation"
    ],
    impact: "Achieved 3x faster training, 40% memory reduction, and maintained 92% accuracy on medical entity extraction tasks."
  },
  {
    title: "Intelligent Healthcare RPA & Insurance Verification Platform",
    tech: ["Python", "Playwright", "FastAPI", "HTTPX"],
    description: [
      "Engineered production-scale RPA system automating insurance eligibility verification across 15+ payer portals",
      "Implemented AJAX-level browser automation eliminating redundant authentication flows",
      "Designed RESTful API layer with async task queuing, retry logic, and circuit breakers"
    ],
    impact: "Reduced verification time from 5 minutes to 30 seconds per transaction, handling 1000+ concurrent requests."
  },
  {
    title: "RAG-Based Medical Records Intelligence Agent",
    tech: ["Python", "LangChain", "RAG", "Vector DBs", "FastAPI"],
    description: [
      "Architected Retrieval-Augmented Generation (RAG) system converting complex HTML medical records to structured JSON",
      "Implemented hybrid search combining dense embeddings (OpenAI Ada-002) and sparse retrieval (BM25) across Pinecone",
      "Optimized prompt engineering and context window management for GPT-4 and Claude"
    ],
    impact: "Reduced hallucinations by 75% and achieved sub-5-second latency with 94% accuracy."
  },
  {
    title: "Advanced OCR & Document Intelligence Pipeline",
    tech: ["Python", "Docling", "PaddleOCR", "OpenCV", "PyTorch"],
    description: [
      "Built multi-stage OCR pipeline processing 10K+ medical documents daily",
      "Implemented computer vision preprocessing (adaptive thresholding, deskewing, noise reduction)",
      "Developed post-processing NLP layer using regex patterns and medical ontologies"
    ],
    impact: "Extracted structured CPT/ICD codes with 96% precision and achieved 10x throughput improvement."
  },
  {
    title: "Healthcare Data Normalization & ETL Engine",
    tech: ["Python", "SQL", "Pandas", "n8n", "FastAPI"],
    description: [
      "Engineered rule-based transformation engine normalizing CPT/ICD medical coding data",
      "Built distributed ETL workflows with n8n orchestration including data quality checks",
      "Designed database schema optimizations and materialized views"
    ],
    impact: "Reduced billing reconciliation errors by 60% and report generation time from 2 hours to 5 minutes."
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "AI/ML & GenAI", items: ["LLM Fine-Tuning", "RAG", "LangChain & LlamaIndex", "Hugging Face", "Vector DBs (Pinecone, ChromaDB)"] },
  { category: "Deep Learning & CV", items: ["PyTorch", "TensorFlow", "OpenCV", "OCR (Docling, PaddleOCR)", "YOLO"] },
  { category: "Backend & APIs", items: ["Python", "FastAPI", "Flask", "RESTful APIs", "Microservices", "HTTPX"] },
  { category: "Automation & RPA", items: ["Playwright", "Selenium", "n8n", "Browser Automation", "AJAX Scraping"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "SQL Optimization"] },
  { category: "DevOps & Cloud", items: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Linux"] }
];

export const FULL_RESUME_TEXT = `
SAVINKUMAR N
AI Developer at SpotCheck
Email: savinkumarnsk10@gmail.com | Mobile: +91 9597934436

PROFESSIONAL SUMMARY
AI/ML Engineer with 1+ year of production experience building LLM-powered automation systems and healthcare AI platforms. Specialized in GenAI applications, RAG architectures, LLM fine-tuning, and MLOps.

EXPERIENCE
Spotcheck Global - AI Developer (Aug 2025 - Present)
- Architected production-grade healthcare AI platform processing 100,000+ daily transactions with 80% latency reduction
- Engineered end-to-end Document Intelligence pipeline combining OCR with LLM-based extraction (95% accuracy)
- Optimized distributed billing workflow system improving throughput by 90%
- Developed RESTful APIs and async task pipelines for real-time healthcare data transformation

Spotcheck Global - Database Engineer Intern (Apr 2025 - Aug 2025)
- Optimized complex database schemas and queries reducing query execution time by 60%
- Built robust data validation and ETL pipelines processing healthcare records with 99.5% accuracy
- Promoted to Backend Engineer after 4 months based on exceptional performance

PROJECTS
- Production LLM Fine-Tuning & Medical NLP System: Fine-tuned Llama 3.1 8B and Mistral 7B models on 50K+ custom medical datasets
- Intelligent Healthcare RPA & Insurance Verification Platform: Engineered production-scale RPA system automating insurance eligibility verification
- RAG-Based Medical Records Intelligence Agent: Architected RAG system converting complex HTML medical records to structured JSON
- Advanced OCR & Document Intelligence Pipeline: Built multi-stage OCR pipeline processing 10K+ medical documents daily
- Healthcare Data Normalization & ETL Engine: Engineered rule-based transformation engine normalizing CPT/ICD medical coding data

SKILLS
AI/ML & GenAI, Deep Learning & CV, Python Backend, FastAPI, Flask, Playwright, RPA, SQL, Vector DBs, MySQL, MongoDB, Docker

EDUCATION
B.Tech in Artificial Intelligence & Data Science, Hindusthan Institute of Technology (2021-2025), CGPA: 8.61/10
`;
