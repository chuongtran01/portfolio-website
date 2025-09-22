import WorkExperience from "@/components/experience/WorkExperience";

const workExperience = [
  {
    title: "Software Developer",
    company: "Infodat",
    date: "January 2024 - Present",
    location: "Houston, TX",
    description: [
      "Contributed to a 32% increase in user base and an 18% rise in purchases through the maintenance and enhancement of a web application.",
      "Boosted user satisfaction 15% by designing interactive dashboard widgets using TypeScript and Java, improving usability and engagement.",
      "Reduced chart implementation time by 70% by building reusable D3 components, contributing them to an open-source library, and accelerating integration across internal tools.",
      "Designed and implemented RESTful APIs for integration with an RFID-enabled cabinet, enabling real-time inventory tracking and improving stock accuracy.",
      "Built and integrated a Google Cloud Pub/Sub subscriber to filter and process category-based messages for item creation and modification, reducing processing time by 50% and improving system throughput.",
      "Ensured system stability and performance by debugging and resolving issues through detailed code analysis and troubleshooting.",
    ],
    techStack: ["TypeScript", "Ember.js", "Spring Boot", "Java", "D3.js", "REST APIs", "Google Cloud Pub/Sub"],
    current: true,
  },
  {
    title: "Software Developer Intern",
    company: "Infodat",
    date: "May 2023 - December 2023",
    location: "Houston, TX",
    description: [
      "Shipped 5 production-ready features using Spring Boot and React within the first 10 weeks of onboarding.",
      "Maintained 80% test coverage through unit and integration testing, ensuring reliability and reducing bugs.",
      "Built a CI/CD pipeline with GitHub Actions to automate build, test, and deployment on AWS EC2, cutting release time and enabling continuous delivery.",
    ],
    techStack: ["Spring Boot", "React", "GitHub Actions", "AWS EC2", "CI/CD", "Testing"],
    current: false,
  },
  {
    title: "Teaching Assistant",
    company: "University of Houston",
    date: "August 2022 - May 2023",
    location: "Houston, TX",
    description: [
      "Led weekly lab sessions for 50+ students, improving understanding of data structures and algorithms in C++.",
      "Designed over 20 hands-on coding challenges to reinforce concepts in recursion, sorting, tree, and graphs.",
    ],
    techStack: ["C++", "Data Structures and Algorithms", "Teaching"],
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
