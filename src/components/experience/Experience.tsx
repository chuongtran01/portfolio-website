import WorkExperience from "@/components/experience/WorkExperience";

const workExperience = [
  {
    title: "Software Developer",
    company: "Infodat",
    date: "January 2024 - Present",
    location: "Houston, TX",
    description: [
      "Developed and maintained a full-stack TypeScript/Java (Spring Boot) application for the Consignment Program, collaborating in Agile sprints to drive design decisions and code reviews.",
      "Optimized backend services and queries to cut auto-ordering latency by 15%, supporting higher customer capacity and order volume.",
      "Enhanced front-end workflows and UX through responsive UI and caching optimizations, improving page load times by 30%.",
      "Partnered with PMs to develop admin-controlled user permissions feature, enabling view-only access and achieving 10% adoption rate.",
      "Designed reusable D3.js visualization component, cutting chart implementation time by 70% and ensuring consistent analytics UI.",
      "Developed event-driven microservices using Google Cloud Pub/Sub, increasing item processing efficiency by 50% and enabling reliable asynchronous workflows.",
      "Leveraged AI-assisted development tools to accelerate feature delivery by 20% and improve sprint iteration speed.",
      "Resolved 10+ customer-reported issues per month, troubleshooting complex code and integration problems to improve system reliability and user satisfaction.",
      "Drove key components of a frontend framework upgrade, replacing legacy data-layer patterns and refactoring core modules to modernize architecture and improve maintainability.",
    ],
    techStack: ["TypeScript", "Java", "Spring Boot", "Ember.js", "D3.js", "Google Cloud Pub/Sub"],
    current: true,
  },
  {
    title: "Software Developer Intern",
    company: "Infodat",
    date: "May 2023 - December 2023",
    location: "Houston, TX",
    description: [
      "Delivered 5 production-ready features using React and Spring Boot, enhancing user experience and product adoption.",
      "Implemented a CI/CD pipeline with GitHub Actions and AWS EC2, reducing release time and enabling continuous delivery.",
      "Maintained 80% test coverage through unit and integration testing, improving reliability and minimizing bugs.",
    ],
    techStack: ["React", "Spring Boot", "GitHub Actions", "AWS EC2"],
    current: false,
  },
  {
    title: "Teaching Assistant",
    company: "University of Houston",
    date: "August 2022 - May 2023",
    location: "Houston, TX",
    description: [
      "Led weekly labs for 50+ students, creating C++ exercises that strengthened understanding of data structures and algorithms.",
    ],
    techStack: ["C++"],
    current: false,
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex items-start xl:items-center justify-center min-h-screen px-8 py-16 pt-24">
        <div className="max-w-4xl w-full space-y-12">
          <WorkExperience workExperience={workExperience} />
        </div>
      </main>
    </div>
  );
}
