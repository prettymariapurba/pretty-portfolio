import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Download,
  Eye,
  ChevronDown,
  ArrowUpRight,
  Briefcase,
  BookOpen,
  Coffee,
  FileText,
  Mic,
  Sparkles,
  Trophy,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 0,
    title: "CMS DOTS",
    role: "Collection Management System",
    tags: ["Next.js", "React Native", "TypeScript", "Tailwind CSS"],
    year: "2025",
    overview:
      "Built responsive collection dashboard, early warning system, and PTP workflow for field collection operations.",
    problem:
      "Collection teams needed clearer visibility for accounts, follow-up status, and operational risk signals.",
    contributions: [
      "Developed modular frontend features for dashboard and mobile collection workflows.",
      "Translated complex financial collection processes into usable interfaces.",
      "Collaborated with backend engineers on API integration and data flow.",
    ],
    results:
      "Improved interface clarity for collection monitoring, early warning review, and promise-to-pay tracking.",
    image: "/images/projects/bimbel-farmasi-dashboard.png",
    alt: "CMS DOTS collection management system preview",
    github: null,
    demo: null,
    documentationUrl: null,
    figmaUrl: null,
    caseStudyUrl: "#experience",
  },
  {
    id: 1,
    title: "DOTS RIA",
    role: "Risk Intelligence Assistant",
    tags: ["Next.js", "TypeScript", "API Integration", "UI Components"],
    year: "2026",
    overview:
      "Designed and built interface patterns for reviewing collection risk signals, account context, and follow-up decisions in one focused workspace.",
    problem:
      "Collection teams needed a faster way to understand risk context without jumping across scattered operational screens.",
    contributions: [
      "Mapped analyst workflows into compact screens for reviewing customer risk and action history.",
      "Built reusable frontend components for risk summaries, filters, and decision support views.",
      "Collaborated with backend engineers to shape API responses into usable interface states.",
    ],
    results:
      "Created a clearer review flow for risk-aware collection decisions and reduced interface friction for daily operations.",
    image: "/images/projects/bimbel-farmasi-dashboard.png",
    alt: "DOTS RIA risk intelligence assistant preview",
    github: null,
    demo: null,
    documentationUrl: null,
    figmaUrl: null,
    caseStudyUrl: "#experience",
  },
  {
    id: 2,
    title: "REWEAVE",
    role: "Circular Textile Supply Chain Platform",
    tags: ["Product Strategy", "System Analysis", "Figma", "Business Plan"],
    year: "2026",
    overview:
      "A circular textile platform concept connecting waste suppliers, graders, and buyers through marketplace, inventory, escrow, and AI material matching flows.",
    problem:
      "Textile waste ecosystems often lack transparent inventory, standardized material grading, and trusted transaction workflows.",
    contributions: [
      "Defined the product concept, core user journeys, and marketplace workflow for circular textile transactions.",
      "Designed system modules for inventory digitization, escrow flow, grading, and material matching.",
      "Presented the business and product strategy in a national business plan competition.",
    ],
    results:
      "Reached Top 5 finalist in a Business Plan Competition with a product concept focused on circular economy impact.",
    image: "/images/projects/reweave-preview.jpg",
    alt: "REWEAVE circular textile platform preview",
    github: null,
    demo: null,
    documentationUrl: null,
    figmaUrl: null,
    caseStudyUrl: "#proud",
  },
  {
    id: 3,
    title: "Bimbel Farmasi",
    role: "Project Manager & Full-Stack Developer",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    year: "2025",
    overview: "Full-stack web-based learning platform for pharmacy education, including UKOM, CPNS/P3K preparation, and academic consultation.",
    problem: "Pharmacy students lacked a centralized platform for exam preparation and consultations.",
    contributions: [
      "Built authentication, program enrollment, transaction management, and content delivery features.",
      "Designed relational database structure using MySQL.",
      "Developed responsive landing pages, dashboards, and admin panels.",
      "Performed system testing and deployment."
    ],
    results: "Successfully deployed a scalable platform facilitating exam prep and academic growth.",
    image: "/images/projects/bimbel-farmasi-dashboard.png",
    alt: "Bimbel Farmasi dashboard screenshot",
    github: "https://github.com/BImbelFarmasi-ppw06/BimbelFarmasi-ppw06",
    demo: null,
    documentationUrl: "https://drive.google.com/drive/folders/1466A5HIZcNRKmpt5HZI-y4WTvaPLKnIx?usp=sharing",
    figmaUrl: null,
    caseStudyUrl: null,
  },
  {
    id: 4,
    title: "LaporLink",
    role: "Project Manager / System Analyst",
    tags: ["Scrum", "BPMN", "SRS", "Wireframes", "Project Management"],
    year: "2025",
    overview: "Campus ticketing web application for managing service reports.",
    problem: "Inefficient manual reporting process causing delays in resolving campus service issues.",
    contributions: [
      "Conducted requirement analysis and stakeholder discussions.",
      "Defined functional and non-functional requirements.",
      "Created BPMN, WBS, SRS, user flows, and wireframes.",
      "Applied Scrum methodology to manage team execution.",
      "Designed features such as ticket submission, status tracking, SLA monitoring, and community-based prioritization."
    ],
    results: "Delivered comprehensive system design and managed successful sprint executions.",
    image:
      "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "LaporLink service ticketing platform preview",
    github: null,
    demo: null,
    documentationUrl: "https://drive.google.com/drive/folders/1xxVwsnzw0mjLmaN7ou3UHDjRFGUEfUsN?usp=sharing",
    figmaUrl: null,
    caseStudyUrl: null,
  },
  {
    id: 5,
    title: "Pertanix",
    role: "Project Analyst & UI Designer",
    tags: ["Figma", "Use Case", "BPMN", "System Design"],
    year: "2025",
    overview: "Integrated digital agriculture platform with AI consultation, product marketplace, and purchasing modules.",
    problem: "Farmers faced challenges related to agricultural information, market prices, and reliable transactions.",
    contributions: [
      "Analyzed farmer challenges related to agricultural information, market prices, and transactions.",
      "Designed use case diagrams, business process flows, and UI prototypes.",
      "Created Figma prototypes and system design documentation."
    ],
    results: "Designed an intuitive prototype bridging technology with agricultural needs.",
    image:
      "https://images.unsplash.com/photo-1586819158505-d7f6227d19d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Pertanix digital agriculture platform preview",
    github: null,
    demo: null,
    documentationUrl: "https://drive.google.com/drive/folders/1osqFFi-0p5Xt5sddc_gjmYfX6bhH7k7F?usp=sharing",
    figmaUrl: null,
    caseStudyUrl: null,
  },
  {
    id: 6,
    title: "Rumah Kreatif Toba Redesign",
    role: "UI/UX Designer",
    tags: ["Figma", "Heuristic Eval", "SUS", "UX Research"],
    year: "2025",
    overview: "Evaluation and redesign of an MSME e-commerce platform.",
    problem: "The existing platform suffered from poor usability (SUS score: 31.75), hindering user engagement and sales.",
    contributions: [
      "Conducted heuristic evaluation, competitive analysis, and SUS measurement.",
      "Identified 25+ high-severity usability issues.",
      "Redesigned user flows and interactive UI prototypes in Figma."
    ],
    results: "Delivered high-fidelity interactive prototypes focused on improved user experience.",
    image:
      "https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Rumah Kreatif Toba UI/UX redesign preview",
    github: null,
    demo: null,
    documentationUrl: "https://drive.google.com/drive/folders/1fDNTTL6h8cLKPKC2lCZV28itM7TILlqG?usp=sharing",
    figmaUrl: null,
    caseStudyUrl: null,
  },
  {
    id: 7,
    title: "Edu-Map Nusantara",
    role: "Data-Driven Education Mapping Concept",
    tags: ["Data Analysis", "Geospatial Mapping", "Education", "Research"],
    year: "2026",
    overview:
      "A data-driven concept for mapping educational inequality and accessibility gaps across Indonesian regions.",
    problem:
      "Education access challenges are often difficult to prioritize without clear regional visibility and supporting data.",
    contributions: [
      "Explored education accessibility problems through research and data-based analysis.",
      "Designed a concept for visualizing regional gaps using mapping and indicator-driven insights.",
      "Connected research findings with practical recommendations for education planning.",
    ],
    results:
      "Recognized through essay competition work focused on geospatial mapping and educational accessibility analysis.",
    image: "/images/projects/edu-map-nusantara-preview.png",
    alt: "Edu-Map Nusantara education mapping concept preview",
    github: null,
    demo: null,
    documentationUrl: null,
    figmaUrl: null,
    caseStudyUrl: "#proud",
  },
];

const featuredProjectTitles = [
  "Bimbel Farmasi",
  "LaporLink",
  "Rumah Kreatif Toba Redesign",
  "Edu-Map Nusantara",
  "REWEAVE",
  "Pertanix",
];

const currentlyCards = [
  {
    label: "Currently Building",
    title: "Software Engineer Intern at PT DKN",
    detail: "Collection systems, risk review interfaces, and frontend workflows.",
    icon: Briefcase,
  },
  {
    label: "Currently Teaching",
    title: "Algorithms & Statistics Assistant",
    detail: "Helping students turn abstract logic into practical problem solving.",
    icon: BookOpen,
  },
  {
    label: "Currently Leading",
    title: "Chief Organizer of Del Debate Championship",
    detail: "Coordinating people, timelines, stakeholders, and event operations.",
    icon: Mic,
  },
  {
    label: "Currently Exploring",
    title: "Data analytics, science, and engineering",
    detail: "Learning Python, data visualization, data wrangling, AI/ML basics, and business insight workflows.",
    icon: Coffee,
  },
];

const aboutBlocks = [
  {
    title: "Who I Am",
    items: [
      "Information Systems student who enjoys the space between business logic, interface design, and engineering.",
      "Frontend builder with a system analyst brain and a product designer's curiosity.",
    ],
  },
  {
    title: "What I Enjoy",
    items: [
      "Translating messy workflows into clear screens, flows, and useful product decisions.",
      "Working with teams, asking better questions, and turning ambiguity into something shippable.",
    ],
  },
  {
    title: "What I Focus On",
    items: ["Frontend Engineering", "System Analysis", "Data Analytics", "Data Science", "Data Engineering"],
  },
  {
    title: "Outside of Tech",
    items: ["Debate", "Research", "Coffee", "Competitions", "Teaching"],
  },
];

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "PT Dimensi Kreasi Nusantara",
    period: "Feb 2025 – Present",
    type: "work",
    isPrimary: true,
    points: [
      "Developed responsive and modular frontend features for CMS DOTS using Next.js and React Native.",
      "Built interfaces for Collection Dashboard, Early Warning System, and PTP Management.",
      "Translated complex financial collection workflows into intuitive UI/UX for collectors and supervisors.",
      "Collaborated with backend engineers on API integration, data flow, and microservices-based architecture."
    ],
  },
  {
    role: "Teaching Assistant – Algorithms & Data Structure",
    company: "Institut Teknologi Del",
    period: "Aug – Dec 2025",
    type: "teaching",
    isPrimary: false,
    points: [
      "Prepared practical materials on data structures (arrays, linked lists, trees, graphs) and algorithms.",
      "Improved students' comprehension and problem-solving skills.",
    ],
  },
  {
    role: "Teaching Assistant – Probability & Statistics",
    company: "Institut Teknologi Del",
    period: "Jan 2025 – Dec 2025",
    type: "teaching",
    isPrimary: false,
    points: [
      "Provided academic assistance on probability theory, distributions, and hypothesis testing.",
      "Facilitated discussion sessions to strengthen conceptual understanding.",
    ],
  },
  {
    role: "Teaching Assistant – English 1 & 2",
    company: "Institut Teknologi Del",
    period: "Aug 2024 – May 2025",
    type: "teaching",
    isPrimary: false,
    points: [
      "Led conversation exercises, academic writing, and presentation skills coaching.",
      "Reviewed written assignments and provided feedback for accuracy and clarity.",
    ],
  },
];

const skills = {
  "System Analysis": ["Requirement Analysis", "BPMN", "SRS", "Use Case Diagram", "User Flow", "Wireframing"],
  "Frontend & Mobile": ["React", "Next.js", "React Native", "JavaScript", "TypeScript", "Tailwind CSS"],
  "Backend & Database": ["Laravel", "PHP", "MySQL", "REST API"],
  "UI/UX Design": ["Figma", "Prototyping", "Heuristic Evaluation", "SUS", "UX Research"],
  "Tools": ["Git", "Postman", "Draw.io", "Trello", "VS Code", "Microsoft Office"],
  "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Teamwork", "Teaching", "Project Coordination"]
};

const orgs = [
  {
    name: "Del Debate Championship",
    role: "Chief Executive",
    period: "Mar 2026 – Present",
  },
  {
    name: "Del English Club (DEC)",
    role: "Leader",
    period: "Aug 2025 – Present",
  },
  {
    name: "Student Executive Board (BEM)",
    role: "Treasurer, Dept. of Facilities & Infrastructure",
    period: "Dec 2024 – Present",
  },
  {
    name: "HIMSI – IS Student Association",
    role: "Member",
    period: "Mar 2024 – Present",
  },
];

const organizationCards = [
  {
    organization: "Del Debate Championship - Institut Teknologi Del",
    role: "Chief Organizer",
    period: "March 2026 - May 2026",
    type: "LEADERSHIP",
    highlights: [
      "Led planning and delivery of a campus-wide debate competition with participants, judges, and institutional stakeholders.",
      "Coordinated logistics, administration, documentation, consumption, and event operations across multiple committees.",
      "Managed scheduling, registration workflows, venue preparation, and end-to-end operational execution.",
    ],
    tags: ["Leadership", "Project Management", "Stakeholder Coordination", "Event Operations"],
  },
  {
    organization: "Del English Club (DEC)",
    role: "Leader",
    period: "August 2025 - Present",
    type: "COMMUNITY",
    highlights: [
      "Led weekly English development programs focused on communication, confidence, and member participation.",
      "Organized workshops and collaborative activities to improve engagement across club members.",
      "Managed internal coordination, activity planning, and execution for recurring club programs.",
    ],
    tags: ["Leadership", "Communication", "Team Management"],
  },
  {
    organization: "Student Executive Board (BEM)",
    role: "Treasurer, Department of Facilities & Infrastructure",
    period: "December 2024 - Present",
    type: "OPERATIONS",
    highlights: [
      "Supported facility evaluation and infrastructure planning initiatives for student organization needs.",
      "Coordinated maintenance-related activities and operational improvement efforts with organization stakeholders.",
      "Assisted budgeting, resource planning, and administrative tracking for department programs.",
    ],
    tags: ["Operations", "Planning", "Resource Management"],
  },
  {
    organization: "Information Systems Student Association (HIMSI)",
    role: "Master of Ceremony",
    period: "January 2025 - Present",
    type: "ACADEMIC",
    highlights: [
      "Supported academic and student development programs through event execution and communication roles.",
      "Contributed to technology outreach activities for younger students and community audiences.",
      "Strengthened public speaking, audience engagement, and cross-team coordination during events.",
    ],
    tags: ["Public Speaking", "Community Engagement", "Communication"],
  },
  {
    organization: "Bebras Challenge 2025 - IT Del",
    role: "Committee Member",
    period: "2025",
    type: "COMMUNITY",
    highlights: [
      "Supported the execution of Bebras Challenge activities at Institut Teknologi Del.",
      "Assisted event operations, participant coordination, and documentation needs during the program.",
      "Contributed to a computational thinking initiative that introduces students to problem-solving through informatics.",
    ],
    tags: ["Committee", "Event Operations", "Computational Thinking", "Education"],
  },
  {
    organization: "TRY OUT PRE-UTBK",
    role: "Head of Public Engagement Division",
    period: "March 2025 - April 2025",
    type: "ENGAGEMENT",
    highlights: [
      "Led participant engagement strategy and public-facing communication for the tryout program.",
      "Managed outreach, information dissemination, and participant coordination across multiple channels.",
      "Coordinated public relations execution to improve awareness and participant engagement.",
    ],
    tags: ["Public Relations", "Communication", "Leadership"],
  },
];

const achievements = [
  {
    rank: "Finalist",
    title: "International Future Leaders Competition (IFLC)",
    organizer: "Sentosa Foundation & Universitas Gadjah Mada",
    year: "2026",
    summary:
      "Contributed to a research-driven system concept for MSME finance, combining AI-based financial inclusion, digital workflow analysis, and platform design thinking.",
  },
  {
    rank: "Finalist",
    title: "Neira Competition 3 - Essay Category",
    organizer: "Sentosa Foundation & Universitas Gadjah Mada",
    year: "2026",
    summary:
      "Selected among 1,368 participants and 419 teams in a national essay competition, contributing research on coding and AI curriculum transformation in education.",
  },
  {
    rank: "Top 5 Finalist",
    title: "Business Plan Competition",
    organizer: "Universitas Atma Jaya Yogyakarta",
    year: "2026",
    summary:
      "Reached the Top 5 with REWEAVE, a circular textile supply chain platform concept covering marketplace, inventory digitization, escrow, grading, and AI-based material matching.",
  },
  {
    rank: "Silver Medal",
    title: "Lombok Essay Competition 6 (LEC 6)",
    organizer:
      "Ruang Inovasi Sains dan Karya Ilmiah (RISKI) & Fakultas Pertanian Universitas Muhammadiyah Mataram",
    year: "2026",
    summary:
      "Recognized for a data-driven solution addressing educational inequality through geospatial mapping and accessibility analysis.",
  },
  {
    rank: "Best Adjudicator",
    title: "Del Debate Championship",
    organizer: "Institut Teknologi Del",
    year: "2025",
    summary:
      "Awarded for analytical judgment, fair assessment, decision-making accuracy, and strong communication in debate evaluation.",
  },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pretty-maria-purba",
    icon: Linkedin,
  },
];

const experienceCards = [
  {
    role: "Software Engineer Intern",
    company: "PT Dimensi Kreasi Nusantara",
    period: "Feb 2026 - Present",
    type: "INTERNSHIP",
    isPrimary: true,
    tags: ["Next.js", "React Native", "TypeScript", "API Integration", "UI Development"],
    points: [],
  },
  {
    role: "Teaching Assistant - Algorithms & Data Structure",
    company: "Institut Teknologi Del",
    period: "Aug - Dec 2025",
    type: "TEACHING",
    isPrimary: false,
    tags: ["Mentoring", "Algorithms", "Data Structures"],
    points: [
      "Prepared practical materials and helped students strengthen algorithmic thinking and data structure fundamentals.",
    ],
  },
  {
    role: "Teaching Assistant - Probability & Statistics",
    company: "Institut Teknologi Del",
    period: "Jan 2025 - Dec 2025",
    type: "ACADEMIC",
    isPrimary: false,
    tags: ["Statistics", "Discussion", "Academic Support"],
    points: [
      "Facilitated discussions on probability, distributions, and hypothesis testing to improve conceptual understanding.",
    ],
  },
  {
    role: "Teaching Assistant - English 1 & 2",
    company: "Institut Teknologi Del",
    period: "Aug 2024 - May 2025",
    type: "TEACHING",
    isPrimary: false,
    tags: ["Communication", "Writing", "Presentation"],
    points: [
      "Coached students through conversation practice, academic writing, presentation skills, and assignment feedback.",
    ],
  },
];

const skillGroups = {
  "Frontend & Mobile": ["React", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"],
  "System Analysis": ["Requirement Analysis", "SRS", "BPMN", "Use Case Diagram", "User Flow", "Wireframing"],
  "Backend & API": ["REST API", "Laravel", "PHP", "MySQL"],
  "UI/UX": ["Figma", "Prototyping", "UX Research", "Heuristic Evaluation", "SUS"],
  "Tools": ["Git", "GitHub", "Postman", "VS Code", "Draw.io", "Trello"],
  "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Teamwork"],
};

const achievementTags: Record<string, string[]> = {
  "International Future Leaders Competition (IFLC)": ["AI Finance", "MSME", "System Design"],
  "Neira Competition 3 - Essay Category": ["Essay", "AI Education", "Research"],
  "Business Plan Competition": ["Business Plan", "Circular Economy", "Platform Design"],
  "Lombok Essay Competition 6 (LEC 6)": ["Geospatial", "Education", "Data Analysis"],
  "Del Debate Championship": ["Debate", "Adjudication", "Communication"],
};

const experienceDocuments: Record<string, { title: string; src: string }[]> = {
  "Software Engineer Intern": [
    {
      title: "CMS DOTS interface screenshot",
      src: "/images/experience/software-engineer-intern.jpg",
    },
    {
      title: "Software Engineer Internship documentation",
      src: "/docs/experience/software-engineer-intern.pdf",
    },
  ],
  "Teaching Assistant - Algorithms & Data Structure": [
    {
      title: "Algorithms & Data Structure teaching documentation",
      src: "/images/experience/ta-algorithms-data-structure.jpg",
    },
    {
      title: "Algorithms & Data Structure PDF documentation",
      src: "/docs/experience/ta-algorithms-data-structure.pdf",
    },
  ],
  "Teaching Assistant - Probability & Statistics": [
    {
      title: "Probability & Statistics teaching documentation",
      src: "/images/experience/ta-probability-statistics.jpg",
    },
    {
      title: "Probability & Statistics PDF documentation",
      src: "/docs/experience/ta-probability-statistics.pdf",
    },
  ],
  "Teaching Assistant - English 1 & 2": [
    {
      title: "English teaching documentation",
      src: "/images/experience/ta-english.jpg",
    },
    {
      title: "English Teaching Assistant PDF documentation",
      src: "/docs/experience/ta-english.pdf",
    },
  ],
};

const achievementDocuments: Record<string, { title: string; src: string }[]> = {
  "International Future Leaders Competition (IFLC)": [
    {
      title: "IFLC certificate",
      src: "/images/achievements/iflc-2026.jpg",
    },
    {
      title: "IFLC PDF documentation",
      src: "/docs/achievements/iflc-2026.pdf",
    },
  ],
  "Neira Competition 3 - Essay Category": [
    {
      title: "Neira Competition certificate",
      src: "/images/achievements/neira-competition-2026.jpg",
    },
    {
      title: "Neira Competition PDF documentation",
      src: "/docs/achievements/neira-competition-2026.pdf",
    },
  ],
  "Business Plan Competition": [
    {
      title: "Business Plan Competition certificate",
      src: "/images/achievements/business-plan-2026.jpg",
    },
    {
      title: "Business Plan Competition PDF documentation",
      src: "/docs/achievements/business-plan-2026.pdf",
    },
  ],
  "Lombok Essay Competition 6 (LEC 6)": [
    {
      title: "Lombok Essay Competition certificate",
      src: "/images/achievements/lombok-essay-2026.jpeg",
    },
    {
      title: "Lombok Essay Competition PDF documentation",
      src: "/docs/achievements/Pretty Maria Purba_Silver Medal_LEC 6.pdf",
    },
  ],
  "Del Debate Championship": [
    {
      title: "Del Debate Championship certificate",
      src: "/images/achievements/del-debate-2025.jpg",
    },
    {
      title: "Del Debate Championship PDF documentation",
      src: "/docs/achievements/del-debate-certificate.pdf",
    },
  ],
};

const organizationDocuments: Record<string, { title: string; src: string }[]> = {
  "Del Debate Championship - Institut Teknologi Del": [
    {
      title: "Del Debate Championship event photo",
      src: "/images/organizations/del-debate-championship.jpg",
    },
    {
      title: "Del Debate Championship event documentation",
      src: "/docs/organizations/del-debate-championship.pdf",
    },
  ],
  "Del English Club (DEC)": [
    {
      title: "Del English Club program documentation",
      src: "/images/organizations/del-english-club.jpg",
    },
    {
      title: "Del English Club PDF documentation",
      src: "/docs/organizations/del-english-club.pdf",
    },
  ],
  "Student Executive Board (BEM)": [
    {
      title: "BEM Facilities & Infrastructure documentation",
      src: "/images/organizations/bem-facilities-infrastructure.jpg",
    },
    {
      title: "BEM Facilities & Infrastructure PDF documentation",
      src: "/docs/organizations/bem-facilities-infrastructure.pdf",
    },
  ],
  "Information Systems Student Association (HIMSI)": [
    {
      title: "HIMSI event documentation",
      src: "/images/organizations/himsi-mc.jpg",
    },
    {
      title: "HIMSI PDF documentation",
      src: "/docs/organizations/himsi-mc.pdf",
    },
  ],
  "Bebras Challenge 2025 - IT Del": [
    {
      title: "Bebras Challenge 2025 event documentation",
      src: "/images/organizations/bebras-challenge-2025-it-del.jpg",
    },
    {
      title: "Bebras Challenge 2025 committee certificate",
      src: "/docs/organizations/bebras-challenge-2025-it-del.pdf",
    },
  ],
  "TRY OUT PRE-UTBK": [
    {
      title: "TRY OUT PRE-UTBK public engagement documentation",
      src: "/images/organizations/try-out-pre-utbk.jpg",
    },
    {
      title: "TRY OUT PRE-UTBK PDF documentation",
      src: "/docs/organizations/try-out-pre-utbk.pdf",
    },
  ],
};

type DocumentationSheetData = {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  year: string;
  tags: string[];
  documents?: { title: string; src: string }[];
};

const contactEmail = "prettymaria110406@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=Portfolio%20Contact%20-%20Pretty%20Maria%20Purba`;
const mailtoUrl = `mailto:${contactEmail}?subject=Portfolio%20Contact%20-%20Pretty%20Maria%20Purba`;
const resumeUrl = "/cv/CV%20Pretty%20Maria%20Purba.pdf";
const resumeFileName = "Pretty_Maria_Purba_CV.pdf";
const profileImageUrl = "/images/profile/pretty-maria-profile.jpg";

// ─── Components ───────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-[#5B6472] transition-colors duration-200 hover:text-[#0B1F3A]"
    >
      {label}
    </a>
  );
}

function IOSCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`ios-card ${className}`}>{children}</div>;
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <FadeIn className="lg:sticky lg:top-24">
      <p className="tech-badge mb-2 text-[#5B6472]">{eyebrow}</p>
      <h2 className="text-[clamp(1.85rem,3vw,2.6rem)] font-bold leading-tight tracking-tight text-[#0A0A0A]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#5B6472]">
          {description}
        </p>
      )}
    </FadeIn>
  );
}

function Badge({
  children,
  variant = "navy",
}: {
  children: React.ReactNode;
  variant?: "navy" | "outline";
}) {
  return (
    <span
      className={`tech-badge inline-flex w-fit items-center rounded-full px-3 py-1 ${
        variant === "navy"
          ? "bg-[#0B1F3A] text-white"
          : "border border-[#E5E7EB] bg-white text-[#0B1F3A]"
      }`}
    >
      {children}
    </span>
  );
}

function SkillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="tech-badge rounded-full border border-[#D7DFEA] bg-white px-3 py-1.5 text-[#0B1F3A]">
      {children}
    </span>
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
  download,
  target,
  rel,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: string;
  target?: string;
  rel?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} inline-flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </a>
  );
}

function ModalSheet({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#0B1F3A]/30 p-4 backdrop-blur-sm md:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-[#E5E7EB] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.22)] md:p-7"
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition-colors hover:bg-[#F8FAFC]"
          >
            Close
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

function InteractiveAccordionCard({
  title,
  subtitle,
  badge,
  year,
  tags,
  defaultOpen = false,
  onViewDocumentation,
  children,
}: {
  title: string;
  subtitle: string;
  badge: string;
  year: string;
  tags: string[];
  defaultOpen?: boolean;
  onViewDocumentation: () => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.article
      layout
      className="ios-card overflow-hidden p-0 transition-shadow hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)]"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <div className="flex min-w-0 items-center gap-4">
          <div className="hidden size-10 shrink-0 rounded-2xl bg-[#A3B18A]/35 ring-1 ring-[#A3B18A]/55 sm:block" />
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge>{badge}</Badge>
              <Badge variant="outline">{year}</Badge>
            </div>
            <h3 className="text-lg font-bold leading-snug tracking-tight text-[#0A0A0A]">
              {title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#5B6472]">
              {subtitle}
            </p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-[#0B1F3A]"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="border-t border-[#E5E7EB] px-5 pb-5 pt-4">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <SkillTag key={tag}>{tag}</SkillTag>
            ))}
          </div>
          {children}
          <button
            type="button"
            onClick={onViewDocumentation}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#A3B18A] hover:text-[#0B1F3A]"
          >
            View Documentation
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </motion.div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: (typeof projects)[0];
  index: number;
  onOpen: (project: (typeof projects)[0]) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const detailUrl =
    project.demo ||
    project.documentationUrl ||
    project.github ||
    project.figmaUrl ||
    project.caseStudyUrl ||
    "#contact";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 34 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="ios-card group relative flex min-h-[20rem] flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-[#E5E7EB]" />

      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-[16px] bg-[#0B1F3A] text-base font-bold text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)]">
            {project.title
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight tracking-tight text-[#0A0A0A]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#5B6472]">
              {project.role}
            </p>
          </div>
        </div>
        <span className="tech-badge rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-[#5B6472]">
          {project.year}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="tech-badge rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-[#0B1F3A]"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-4 line-clamp-3 text-[0.92rem] leading-relaxed text-[#5B6472]">
        {project.overview}
      </p>

      <div className="mt-auto overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white">
        <div className="aspect-[16/8] overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.alt || project.title}
            className="size-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="btn-primary inline-flex w-fit items-center gap-2 py-2.5 text-sm"
          aria-label={`View case study for ${project.title}`}
        >
          View Case Study
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="btn-secondary inline-flex w-fit items-center gap-2 py-2.5 text-sm"
          aria-label={`View documentation for ${project.title}`}
        >
          View Documentation
        </button>
      </div>
    </motion.article>
  );
}

function ExperienceRow({
  exp,
  index,
}: {
  exp: (typeof experienceCards)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className={`ios-card relative overflow-hidden ${exp.isPrimary ? "p-6" : "p-5"}`}
    >
      <div className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-[#0B1F3A]" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge>{exp.type}</Badge>
            {exp.isPrimary && (
              <Badge variant="outline">Current</Badge>
            )}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-[#0A0A0A] md:text-2xl">
            {exp.role}
          </h3>
          <p className="mt-1 text-sm font-semibold text-[#123B73]">
            {exp.company}
          </p>
        </div>
        <p className="tech-badge shrink-0 rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-[#5B6472]">
          {exp.period}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <SkillTag key={tag}>{tag}</SkillTag>
        ))}
      </div>

      <ul className={`${exp.isPrimary ? "mt-4 grid gap-2.5" : "mt-3 grid gap-2"}`}>
        {exp.points.map((pt, i) => (
          <li
            key={i}
            className="flex gap-3 text-[0.95rem] leading-relaxed text-[#5B6472]"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function OrganizationCard({
  org,
  index,
}: {
  org: (typeof organizationCards)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const visibleHighlights = expanded ? org.highlights : org.highlights.slice(0, 1);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="ios-card relative overflow-hidden p-5"
    >
      <div className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-[#0B1F3A]" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <Badge>{org.type}</Badge>
          <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-[#0A0A0A]">
            {org.organization}
          </h3>
          <p className="mt-1 text-sm font-semibold text-[#123B73]">
            {org.role}
          </p>
        </div>
        <Badge variant="outline">{org.period}</Badge>
      </div>

      <ul className="mt-4 grid gap-2">
        {visibleHighlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-3 text-sm leading-relaxed text-[#5B6472]"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <motion.div
        initial={false}
        animate={{ opacity: expanded ? 1 : 0.88 }}
        className="mt-4 flex flex-wrap gap-1.5"
      >
        {org.tags.map((tag) => (
          <SkillTag key={tag}>{tag}</SkillTag>
        ))}
      </motion.div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-4 text-sm font-semibold text-[#0B1F3A] transition-colors hover:text-[#123B73]"
      >
        {expanded ? "Show less" : "View execution details"}
      </button>
    </motion.article>
  );
}

function AchievementCard({
  achievement,
  index,
  onOpenDocumentation,
}: {
  achievement: (typeof achievements)[0];
  index: number;
  onOpenDocumentation: (achievement: (typeof achievements)[0]) => void;
}) {
  return (
    <FadeIn delay={index * 0.04}>
      <IOSCard className="h-full p-5 transition-transform hover:-translate-y-0.5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge>{achievement.rank}</Badge>
          <Badge variant="outline">{achievement.year}</Badge>
        </div>
        <h3 className="text-lg font-bold leading-snug tracking-tight text-[#0A0A0A]">
          {achievement.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-[#123B73]">
          {achievement.organizer}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#5B6472]">
          {achievement.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {(achievementTags[achievement.title] ?? []).map((tag) => (
            <SkillTag key={tag}>{tag}</SkillTag>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpenDocumentation(achievement)}
          className="mt-4 text-sm font-semibold text-[#0B1F3A] transition-colors hover:text-[#123B73]"
        >
          View Documentation
        </button>
      </IOSCard>
    </FadeIn>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [selectedDocumentation, setSelectedDocumentation] = useState<DocumentationSheetData | null>(null);

  return (
    <div className="size-full overflow-y-auto bg-transparent text-black font-sans">
      {/* ── Navigation ── */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-4 z-50 mx-auto my-4 flex w-[min(1120px,calc(100%_-_32px))] items-center justify-between rounded-full border border-[#E5E7EB] bg-white/90 px-5 py-3 shadow-[0_16px_40px_rgba(11,31,58,0.06)] md:px-8"
      >
        <span className="text-sm tracking-widest uppercase font-medium">
          Pretty Maria Purba
        </span>
        <div className="flex items-center gap-6">
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#currently" label="Currently" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#about" label="About" />
          <NavLink href="#contact" label="Contact" />
        </div>
      </motion.nav>

      {/* ── Hero ── */}
      <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden px-6 pb-10 pt-8 md:px-10 lg:px-16">
        <div className="grid w-full max-w-[1080px] items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <p className="tech-badge mb-3 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-[#6B7280]">
                <Sparkles className="size-3.5 text-[#A3B18A]" />
                Software Engineer Intern
              </p>
              <h1 className="text-5xl font-extrabold leading-none tracking-tight text-[#0A0A0A] md:text-6xl lg:text-7xl">
                Hi, I'm Pretty
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-5 max-w-xl text-base leading-relaxed text-[#5B6472] md:text-lg"
            >
              Passionate about creating impactful digital solutions through frontend engineering, system analysis, and user-centered design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.36 }}
              className="mb-5 flex flex-wrap gap-2"
            >
              {["Software Engineer Intern", "System Analysis Enthusiast", "UI/UX Explorer"].map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm font-semibold text-[#0B1F3A]"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-5 flex flex-wrap gap-3"
            >
              <CTAButton href="#projects">
                View Projects
              </CTAButton>
              <CTAButton
                href={resumeUrl}
                variant="secondary"
              >
                <Eye className="size-4" />
                View CV
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.48 }}
              className="mb-4 grid max-w-xl gap-2 sm:grid-cols-2"
            >
              {currentlyCards.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#E5E7EB] bg-white/85 p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                >
                  <p className="tech-badge text-[#6B7280]">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-[#111827]">{item.title}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2 border-t border-[#E5E7EB] pt-3"
            >
              {["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="tech-badge rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-[#0B1F3A]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative h-80 w-80 xl:h-88 xl:w-88">
              <div className="absolute inset-0 rounded-full border border-[#E5E7EB] bg-white shadow-[0_24px_60px_rgba(11,31,58,0.10)]" />
              <div className="absolute inset-3 overflow-hidden rounded-full bg-white">
                <ImageWithFallback
                  src={profileImageUrl}
                  alt="Pretty Maria Purba profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:hidden flex justify-center items-center"
          >
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 rounded-full border border-[#E5E7EB] bg-white shadow-[0_24px_60px_rgba(11,31,58,0.10)]" />
              <div className="absolute inset-3 overflow-hidden rounded-full bg-white">
                <ImageWithFallback
                  src={profileImageUrl}
                  alt="Pretty Maria Purba profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="bg-transparent px-6 py-11 text-black md:px-10 lg:px-16 max-md:py-8"
      >
        <FadeIn className="mb-8 text-center">
          <p className="tech-badge mb-2 text-[#6B7280]">Featured Projects</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
            Products, systems, and ideas I have shaped.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6B7280]">
            A focused look at the work that best represents how I think: from operational systems to product concepts with real user workflows.
          </p>
        </FadeIn>

        <div className="mx-auto grid max-w-[1080px] gap-5 md:grid-cols-2">
          {featuredProjectTitles
            .map((title) => projects.find((project) => project.title === title))
            .filter((project): project is (typeof projects)[number] => Boolean(project))
            .map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section
        id="currently"
        className="bg-transparent px-6 py-11 md:px-10 lg:px-16 max-md:py-8"
      >
        <div className="mx-auto max-w-[1080px]">
          <FadeIn className="mb-8 text-center">
            <p className="tech-badge mb-2 text-[#6B7280]">Currently</p>
            <h2 className="text-[clamp(1.85rem,3vw,2.6rem)] font-bold leading-tight tracking-tight text-[#111827]">
              What I am building, teaching, and exploring.
            </h2>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {currentlyCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.label} delay={index * 0.04}>
                  <IOSCard className="h-full p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-[#A3B18A]">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-[#A3B18A]/25 text-[#0B1F3A]">
                      <Icon className="size-5" />
                    </div>
                    <p className="tech-badge mb-2 text-[#6B7280]">{item.label}</p>
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                      {item.detail}
                    </p>
                  </IOSCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="bg-transparent px-6 py-11 md:px-10 lg:px-16 max-md:py-8"
      >
        <div className="mx-auto max-w-[1080px]">
          <FadeIn className="mb-8 text-center">
            <p className="tech-badge mb-2 text-[#6B7280]">Experience</p>
            <h2 className="text-[clamp(1.85rem,3vw,2.6rem)] font-bold leading-tight tracking-tight text-[#0A0A0A]">
              Where I turn complex workflows into usable interfaces.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#6B7280]">
              Expand each card for role overview, key contributions, technologies, and documentation context.
            </p>
          </FadeIn>

          <div className="mx-auto max-w-3xl space-y-4">
            {experienceCards.map((exp, index) => (
              <InteractiveAccordionCard
                key={`${exp.role}-${exp.period}`}
                title={exp.role}
                subtitle={`${exp.company} · ${exp.period}`}
                badge={exp.type}
                year={exp.period}
                tags={exp.tags}
                defaultOpen={index === 0}
                onViewDocumentation={() =>
                  setSelectedDocumentation({
                    title: exp.role,
                    subtitle: exp.company,
                    description: exp.points.length
                      ? exp.points.join(" ")
                      : `${exp.role} at ${exp.company}, focused on practical product work, mentoring, and clear communication.`,
                    badge: exp.type,
                    year: exp.period,
                    tags: exp.tags,
                    documents: experienceDocuments[exp.role] ?? [],
                  })
                }
              >
                <div className="mb-4 rounded-2xl border border-[#E5E7EB] bg-[#FAFAF8] p-4">
                  <p className="tech-badge mb-2 text-[#6B7280]">Role Overview</p>
                  <p className="text-sm leading-relaxed text-[#6B7280]">
                    {exp.role} at {exp.company}, focused on practical product work, mentoring, and clear communication.
                  </p>
                </div>
                {exp.points.length > 0 && (
                  <>
                    <p className="tech-badge mb-3 text-[#6B7280]">Key Contributions</p>
                    <ul className="grid gap-2">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#5B6472]">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#A3B18A]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </InteractiveAccordionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="legacy-about" className="hidden">
        <div className="mx-auto grid max-w-[1080px] gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <IOSCard className="h-full p-6">
              <p className="tech-badge mb-3 text-[#5B6472]">About Me</p>
              <h2 className="mb-4 text-[clamp(1.85rem,3vw,2.55rem)] font-bold leading-tight tracking-tight text-[#0A0A0A]">
                Bridging systems <span className="text-[#123B73]">and product interfaces.</span>
              </h2>
              <div className="space-y-3 text-[0.98rem] leading-relaxed text-[#5B6472]">
                <p>
                  I'm a 6th-semester Information Systems student at Institut Teknologi Del focused on system analysis, UI/UX design, and frontend product development.
                </p>
                <p>
                  As a Software Engineer Intern at PT Dimensi Kreasi Nusantara, I build responsive web and mobile interfaces for collection workflows using Next.js, React Native, and API-driven UI patterns.
                </p>
              </div>
              <div className="mt-6 border-t border-[#E5E7EB] pt-4">
                <p className="tech-badge mb-3 text-[#5B6472]">Education</p>
                <p className="text-lg font-semibold tracking-tight text-[#0A0A0A]">Institut Teknologi Del</p>
                <p className="mt-1 text-sm text-[#5B6472]">Bachelor of Information Systems</p>
                <p className="mt-0.5 text-sm text-[#5B6472]">2023 - Present · GPA 3.66 / 4.00</p>
              </div>
            </IOSCard>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skillGroups).map(([category, items], index) => (
              <FadeIn key={category} delay={index * 0.04}>
                <IOSCard className="h-full p-5">
                  <h3 className="mb-3 text-base font-bold tracking-tight text-[#0A0A0A]">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </div>
                </IOSCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="proud" className="bg-transparent px-6 py-11 md:px-10 lg:px-16 max-md:py-8">
        <div className="mx-auto max-w-[1080px]">
          <FadeIn className="mb-8 text-center">
            <p className="tech-badge mb-2 text-[#6B7280]">Selected Highlights</p>
            <h2 className="text-[clamp(1.85rem,3vw,2.6rem)] font-bold leading-tight tracking-tight text-[#111827]">
              Things I'm Proud Of
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6B7280]">
              Competitions and recognitions that shaped how I research, present, design, and collaborate.
            </p>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <InteractiveAccordionCard
                key={`${achievement.title}-${achievement.year}`}
                title={achievement.title}
                subtitle={achievement.organizer}
                badge={achievement.rank}
                year={achievement.year}
                tags={achievementTags[achievement.title] ?? []}
                defaultOpen={index === 0}
                onViewDocumentation={() =>
                  setSelectedDocumentation({
                    title: achievement.title,
                    subtitle: achievement.organizer,
                    description: achievement.summary,
                    badge: achievement.rank,
                    year: achievement.year,
                    tags: achievementTags[achievement.title] ?? [],
                    documents: achievementDocuments[achievement.title] ?? [],
                  })
                }
              >
                <p className="tech-badge mb-3 text-[#6B7280]">Overview</p>
                <p className="text-sm leading-relaxed text-[#5B6472]">
                  {achievement.summary}
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAF8] p-4">
                    <p className="tech-badge mb-2 text-[#6B7280]">My Contribution</p>
                    <p className="text-sm leading-relaxed text-[#6B7280]">
                      Research, analysis, presentation, and product thinking.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAF8] p-4">
                    <p className="tech-badge mb-2 text-[#6B7280]">Impact</p>
                    <p className="text-sm leading-relaxed text-[#6B7280]">
                      Sharpened my confidence in turning ideas into clear, defensible work.
                    </p>
                  </div>
                </div>
              </InteractiveAccordionCard>
            ))}
          </div>
        </div>
      </section>

      <section id="legacy-about" className="hidden">
        <div className="mx-auto grid max-w-[1080px] gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">
                About Me
              </p>
              <h2 className="mb-8 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#0A0A0A]">
                Bridging systems <br />
                <span className="text-[#123B73]">& people</span>
              </h2>
              <div className="space-y-4 text-[1.05rem] leading-relaxed text-[#5B6472]">
                <p>
                  I'm a 6th-semester Information Systems student at Institut Teknologi Del 
                  with a strong focus on <strong>system analysis, UI/UX design, and web-based product development</strong>. 
                  I specialize in translating complex business needs into clear requirements, user flows, wireframes, and scalable digital solutions.
                </p>
                <p>
                  Currently, I am working as a <strong>Software Engineer Intern at PT Dimensi Kreasi Nusantara</strong>, 
                  where I develop responsive frontend features for a collection management system using Next.js and React Native. 
                  My diverse background allows me to bridge the gap between user experience, business logic, and technical implementation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="ios-card mt-8">
              <p className="tech-badge mb-4 text-[#5B6472]">
                Education
              </p>
              <p className="text-lg font-semibold tracking-tight text-[#0A0A0A]">Institut Teknologi Del</p>
              <p className="mt-1 text-sm text-[#5B6472]">
                Bachelor of Information Systems
              </p>
              <p className="mt-0.5 text-sm text-[#5B6472]">
                2023 – Present · GPA 3.66 / 4.00
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-8">
              <div className="flex items-end justify-between gap-6 mb-5">
                <div>
                  <p className="tech-badge mb-3 text-[#5B6472]">
                    Achievements
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#0A0A0A]">
                    Competition Highlights
                  </h3>
                </div>
                <div className="hidden sm:flex size-11 items-center justify-center rounded-full bg-[#0B1F3A] text-white">
                  <Trophy className="size-5" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {achievements.map((achievement, index) => (
                  <article
                    key={`${achievement.title}-${achievement.year}`}
                    className="ios-card group p-5 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="tech-badge inline-flex items-center rounded-full bg-[#0B1F3A] px-3 py-1 text-white">
                            {achievement.rank}
                          </span>
                          <span className="text-xs text-[#5B6472]">
                            {achievement.year}
                          </span>
                        </div>
                        <h4 className="text-base font-semibold leading-snug tracking-tight text-[#0A0A0A]">
                          {achievement.title}
                        </h4>
                        <p className="mt-1 line-clamp-1 text-sm text-[#5B6472]">
                          {achievement.organizer}
                        </p>
                      </div>
                      <span className="hidden shrink-0 text-2xl font-semibold text-[#E5E7EB] transition-colors group-hover:text-[#0B1F3A] sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#5B6472]">
                      {achievement.summary}
                    </p>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn className="mb-10">
              <p className="tech-badge mb-6 text-[#5B6472]">
                Skills
              </p>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#5B6472]">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="tech-badge rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-[#0B1F3A]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="tech-badge mb-6 text-[#5B6472]">
                Organizations
              </p>
              <div className="space-y-4">
                {orgs.map((org) => (
                  <div
                    key={org.name}
                    className="flex items-start justify-between gap-4 border-b border-[#E5E7EB] pb-4"
                  >
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-[#0A0A0A]">{org.name}</p>
                      <p className="mt-0.5 text-xs text-[#5B6472]">{org.role}</p>
                    </div>
                    <p className="mt-0.5 shrink-0 text-right text-xs text-[#5B6472]">
                      {org.period}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-transparent px-6 py-11 md:px-10 lg:px-16 max-md:py-8">
        <div className="mx-auto max-w-[1080px]">
          <FadeIn className="mb-8 text-center">
            <p className="tech-badge mb-2 text-[#6B7280]">Beyond the Classroom</p>
            <h2 className="text-[clamp(1.85rem,3vw,2.6rem)] font-bold leading-tight tracking-tight text-[#111827]">
              Leadership & Community
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6B7280]">
              The people side of my work: leading events, coordinating teams, and learning how to make ideas move.
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-4xl gap-4">
            {organizationCards.map((org, index) => (
              <InteractiveAccordionCard
                key={`${org.organization}-${org.period}`}
                title={org.organization}
                subtitle={`${org.role} · ${org.period}`}
                badge={org.type}
                year={org.period}
                tags={org.tags}
                defaultOpen={index === 0}
                onViewDocumentation={() =>
                  setSelectedDocumentation({
                    title: org.organization,
                    subtitle: org.role,
                    description: org.highlights.join(" "),
                    badge: org.type,
                    year: org.period,
                    tags: org.tags,
                    documents: organizationDocuments[org.organization] ?? [],
                  })
                }
              >
                <p className="tech-badge mb-3 text-[#6B7280]">Responsibilities & Impact</p>
                <ul className="grid gap-2">
                  {org.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-[#5B6472]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#A3B18A]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </InteractiveAccordionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="about" className="bg-transparent px-6 py-11 md:px-10 lg:px-16 max-md:py-8">
        <div className="mx-auto max-w-[1080px]">
          <FadeIn className="mb-8 text-center">
            <p className="tech-badge mb-2 text-[#6B7280]">About Me</p>
            <h2 className="text-[clamp(1.85rem,3vw,2.6rem)] font-bold leading-tight tracking-tight text-[#111827]">
              A little more human than a resume.
            </h2>
          </FadeIn>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <IOSCard className="relative h-full overflow-hidden p-0">
                <div className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-2xl bg-[#A3B18A]/25 text-[#0B1F3A]">
                  <Sparkles className="size-5" />
                </div>

                <div className="p-6">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                      <ImageWithFallback
                        src={profileImageUrl}
                        alt="Pretty Maria Purba"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 pr-12">
                      <p className="tech-badge mb-1 text-[#6B7280]">Quick Read</p>
                      <h3 className="text-xl font-bold leading-tight tracking-tight text-[#111827]">
                        Pretty Maria Purba
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#6B7280]">
                        Frontend, systems, and product-minded details.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-[#E5E7EB] bg-[#FAFAF8] p-5">
                    <p className="text-xl font-bold leading-snug tracking-tight text-[#111827]">
                      I enjoy translating business needs into intuitive digital solutions.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Frontend Engineering", "System Analysis", "UI/UX Design"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-semibold text-[#0B1F3A]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4">
                      <p className="tech-badge mb-2 text-[#6B7280]">Education</p>
                      <p className="text-sm font-bold text-[#111827]">Institut Teknologi Del</p>
                      <p className="mt-1 text-sm text-[#6B7280]">Information Systems</p>
                    </div>
                    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4">
                      <p className="tech-badge mb-2 text-[#6B7280]">Now</p>
                      <p className="text-sm font-bold text-[#111827]">2023 - Present</p>
                      <p className="mt-1 text-sm text-[#6B7280]">Building, teaching, leading.</p>
                    </div>
                  </div>
                </div>
              </IOSCard>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutBlocks.map((block, index) => (
                <FadeIn key={block.title} delay={index * 0.04}>
                  <IOSCard className="group h-full p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-[#A3B18A]">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold tracking-tight text-[#111827]">
                        {block.title}
                      </h3>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-[#A3B18A]/20 text-xs font-bold text-[#0B1F3A] transition-colors group-hover:bg-[#A3B18A]/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="grid gap-2.5">
                      {block.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAF8] px-3.5 py-3 text-sm leading-relaxed text-[#6B7280]"
                        >
                          <span className="mr-2 inline-block size-1.5 rounded-full bg-[#A3B18A] align-middle" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </IOSCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-transparent px-6 py-11 text-[#0A0A0A] md:px-10 lg:px-16 max-md:py-8"
      >
        <div className="ios-card mx-auto max-w-[1080px]">
          <FadeIn>
            <p className="tech-badge mb-3 text-[#5B6472]">
              Let's Connect
            </p>
            <h2 className="mb-3 text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-tight tracking-tight">
              Let's build something useful.
            </h2>
            <p className="mb-7 max-w-2xl leading-relaxed text-[#6B7280]">
              Open to internships, collaborations, and interesting conversations.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            <CTAButton
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full"
            >
              <Mail className="size-4 text-[#0B1F3A]" />
              <span>Email</span>
            </CTAButton>
            <CTAButton
              href="https://www.linkedin.com/in/pretty-maria-purba"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full"
            >
              <Linkedin className="size-4 text-[#0B1F3A]" />
              <span>LinkedIn</span>
            </CTAButton>
            <CTAButton
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full"
            >
              <Github className="size-4 text-[#0B1F3A]" />
              <span>GitHub</span>
            </CTAButton>
            <CTAButton
              href={resumeUrl}
              download={resumeFileName}
              className="w-full"
            >
              <Download className="size-4" />
              <span>Download CV</span>
            </CTAButton>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-transparent px-6 pb-8 pt-1 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1080px] border-t border-[#E5E7EB] pt-6">
          <div className="mb-6 grid grid-cols-1 gap-6 border-b border-[#E5E7EB] pb-6 sm:grid-cols-2">
            <div>
              <p className="tech-badge mb-4 text-[#5B6472]">
                Location
              </p>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-[#0B1F3A]" />
                <p className="text-sm text-[#5B6472]">Medan, Indonesia</p>
              </div>
            </div>
            <div>
              <p className="tech-badge mb-4 text-[#5B6472]">
                Quick Links
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#5B6472] transition-colors hover:text-[#0B1F3A]"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pretty-maria-purba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#5B6472] transition-colors hover:text-[#0B1F3A]"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href={mailtoUrl}
                  className="text-sm text-[#5B6472] transition-colors hover:text-[#0B1F3A]"
                  aria-label="Email"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-[#5B6472]">
              © 2026 Pretty Maria Purba. All rights reserved.
            </p>
            <p className="text-xs text-[#5B6472]">
              Information Systems · Institut Teknologi Del
            </p>
          </div>
        </div>
      </footer>

      <ModalSheet
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Badge>{selectedProject.year}</Badge>
              {selectedProject.tags.slice(0, 4).map((tag) => (
                <SkillTag key={tag}>{tag}</SkillTag>
              ))}
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A]">
              {selectedProject.title}
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#123B73]">
              {selectedProject.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5B6472]">
              {selectedProject.overview}
            </p>

            <div className="mt-6 overflow-hidden rounded-[22px] border border-[#E5E7EB]">
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.alt || selectedProject.title}
                className="aspect-[16/8] w-full object-cover"
              />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <IOSCard className="p-5">
                <p className="tech-badge mb-2 text-[#5B6472]">Problem</p>
                <p className="text-sm leading-relaxed text-[#5B6472]">
                  {selectedProject.problem}
                </p>
              </IOSCard>
              <IOSCard className="p-5">
                <p className="tech-badge mb-2 text-[#5B6472]">Result</p>
                <p className="text-sm leading-relaxed text-[#5B6472]">
                  {selectedProject.results}
                </p>
              </IOSCard>
            </div>

            <IOSCard className="mt-4 p-5">
              <p className="tech-badge mb-3 text-[#5B6472]">Evidence & Contributions</p>
              <ul className="grid gap-2">
                {selectedProject.contributions.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#5B6472]">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </IOSCard>

            <div className="mt-5 flex flex-wrap gap-3">
              {selectedProject.documentationUrl && (
                <CTAButton
                  href={selectedProject.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  Documentation
                  <ArrowUpRight className="size-4" />
                </CTAButton>
              )}
              {selectedProject.github && (
                <CTAButton
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  GitHub
                  <ArrowUpRight className="size-4" />
                </CTAButton>
              )}
            </div>
          </div>
        )}
      </ModalSheet>

      <ModalSheet
        open={Boolean(selectedDocumentation)}
        onClose={() => setSelectedDocumentation(null)}
      >
        {selectedDocumentation && (
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Badge>{selectedDocumentation.badge}</Badge>
              <Badge variant="outline">{selectedDocumentation.year}</Badge>
              {selectedDocumentation.tags.map((tag) => (
                <SkillTag key={tag}>{tag}</SkillTag>
              ))}
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A]">
              {selectedDocumentation.title}
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#123B73]">
              {selectedDocumentation.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5B6472]">
              {selectedDocumentation.description}
            </p>

            {selectedDocumentation.documents?.length ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {selectedDocumentation.documents.map((document) => (
                  <IOSCard key={document.src} className="p-4">
                    {document.src.toLowerCase().endsWith(".pdf") ? (
                      <a
                        href={document.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-[18px] border border-[#E5E7EB] bg-[#FAFAF8] p-5 transition-colors hover:border-[#A3B18A]"
                      >
                        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 text-center">
                          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#A3B18A]/25 text-[#0B1F3A]">
                            <FileText className="size-7" />
                          </div>
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A]">
                            Open PDF
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-[#FAFAF8]">
                        <ImageWithFallback
                          src={document.src}
                          alt={document.title}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                    )}
                    <p className="mt-3 text-sm font-semibold text-[#0A0A0A]">
                      {document.title}
                    </p>
                  </IOSCard>
                ))}
              </div>
            ) : (
              <IOSCard className="mt-6 p-5">
                <p className="tech-badge mb-2 text-[#5B6472]">Documentation</p>
                <p className="text-sm leading-relaxed text-[#5B6472]">
                  Documentation photos can be added later for this item. The interaction is ready for certificates, event photos, screenshots, or supporting files.
                </p>
              </IOSCard>
            )}
          </div>
        )}
      </ModalSheet>
    </div>
  );
}
