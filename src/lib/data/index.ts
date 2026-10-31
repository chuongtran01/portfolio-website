export type SocialIconId = "github" | "linkedin";

type SocialLink = {
  name: string;
  icon: SocialIconId;
  href: string;
};

type PersonalData = {
  name: string;
  title: string;
  socialLinks: SocialLink[];
};

type ContactInfo = {
  email: string;
};

type SkillGroup = {
  name: string;
  skills: string[];
};

type EducationItem = {
  degree: string;
  university: string;
  date: string;
  gpa?: string;
};

type WorkExperienceItem = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  techStack: string[];
  current: boolean;
};

export const personal: PersonalData = {
  name: "Chuong Tran",
  title: "Software Engineer",
  socialLinks: [
    {
      name: "Github",
      icon: "github",
      href: "https://github.com/chuongtran01",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/chuongtran2001/",
    },
  ],
};

export const aboutStatement: string =
  "I build full-stack systems and AI agents that turn complex workflows into clean, reliable software.";

export const contactInfo: ContactInfo = {
  email: "chuongtran2001@gmail.com",
};

export const workExperience: WorkExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Cardinal Health",
    date: "September 2026 - Present",
    location: "Remote",
    description: [
      "Developed real-time, bidirectional audio streaming between a FastAPI backend and the Gemini Live API over WebSockets, enabling interactive conversations with AI-simulated customers.",
      "Implemented a multimodal LLM evaluation pipeline that scores conversation transcripts and audio recordings across five performance criteria, generating structured feedback for each training session.",
    ],
    techStack: ["Python", "FastAPI", "WebSockets", "Gemini Live API"],
    current: true,
  },
  {
    title: "Software Developer",
    company: "Infodat",
    date: "January 2024 - September 2026",
    location: "Houston, TX",
    description: [
      "Drove the full-stack modernization of user management for a platform serving 1,000+ hospital-pharmacy sites, using Spring Boot and Ember.js to enable Okta integration across user onboarding, account administration, and role-based access control.",
      "Automated Okta provisioning for 6,000+ users with Python scripts, building admin dashboards for migration tracking and failure recovery, reducing manual effort by 80%.",
      "Cut auto-ordering runtime by 40% through N+1 query optimization and service-level caching, reducing redundant database fetches.",
      "Engineered a Google Cloud Pub/Sub consumer with idempotent processing to automate item synchronization across systems, eliminating manual cross-team coordination.",
      "Built an Apache POI-based Excel export service with configurable templates, powering 10+ report types and cutting new-report development time from days to hours.",
    ],
    techStack: [
      "TypeScript",
      "Ember.js",
      "Java",
      "Spring Boot",
      "Python",
      "Okta",
      "Google Cloud Pub/Sub",
      "Apache POI",
    ],
    current: false,
  },
  {
    title: "Software Developer Intern",
    company: "Infodat",
    date: "May 2023 - December 2023",
    location: "Houston, TX",
    description: [
      "Built order and inventory charts, plus data tables with server-side filtering and pagination, using React and Spring Boot, with 80% test coverage (Jest, JUnit, Mockito).",
    ],
    techStack: ["React", "Spring Boot", "Jest", "JUnit", "Mockito"],
    current: false,
  },
  {
    title: "Teaching Assistant",
    company: "University of Houston",
    date: "August 2022 - May 2023",
    location: "Houston, TX",
    description: [
      "Led weekly labs for 100+ students, creating C++ exercises and providing office hours and code review support to reinforce data structures and algorithms fundamentals.",
    ],
    techStack: ["C++"],
    current: false,
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.S. in Computer Science (Part-Time)",
    university: "University of Texas at Austin",
    date: "Expected December 2029",
  },
  {
    degree: "B.S. in Computer Science, Minor in Mathematics",
    university: "University of Houston",
    gpa: "GPA: 3.9",
    date: "December 2023",
  },
];

export const skills: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C/C++"],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "FastAPI",
      "React",
      "Next.js",
      "Ember.js",
      "LangGraph",
      "LangChain",
    ],
  },
  {
    name: "Databases & Messaging",
    skills: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Google Cloud Pub/Sub"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["GCP", "AWS EC2", "Docker", "Git"],
  },
];
