import ContactInformation from "@/components/about/ContactInformation";
import Education from "@/components/about/Education";
import Skills from "@/components/about/Skills";
import AboutStatement from "@/components/about/AboutStatement";
import CertificationsAndAwards from "@/components/about/CertificationsAndAwards";

const profile = {
  name: "Chuong Tran",
  contactInfo: {
    email: "chuongtran2001@gmail.com",
    phone: "+1 (346) 401-8929",
    location: "United States",
  },
  education: [{ degree: "Bachelor of Science in Computer Science, Minor in Mathematics", university: "University of Houston", gpa: "Summa Cum Laude", date: "2019 - 2023" }],
  skills: [
    {
      name: "Skills",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "C/C++",
        "Node.js",
        "React.js",
        "Ember.js",
        "Angular",
        "Spring Boot",
        ".NET",
        "HTML/CSS",
        "D3.js",
        "Tensorflow",
        "Selenium",
        "MongoDB",
        "MySQL",
        "Docker",
        "Apache Kafka",
        "REST APIs",
        "Git",
      ],
    },
    {
      name: "Languages",
      skills: ["English", "Vietnamese", "Mandarin Chinese"],
    },
  ],
  aboutStatement:
    "I'm a dedicated software developer with 2+ years of experience building web applications and solving complex problems. I enjoy working with modern technologies and am always eager to learn new skills.",
  certificationsAndAwards: [
    {
      title: "Summa Cum Laude",
      company: "University of Houston",
      date: "2023",
    },
    {
      title: "Dean's List",
      company: "University of Houston",
      date: "2019 - 2023",
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex items-start xl:items-center justify-center min-h-screen px-8 py-16 pt-24">
        <div className="max-w-4xl w-full space-y-12">
          <AboutStatement statement={profile.aboutStatement} />
          <ContactInformation contactInfo={profile.contactInfo} />
          <Skills skills={profile.skills} />
          <Education education={profile.education} />
          <CertificationsAndAwards certificationsAndAwards={profile.certificationsAndAwards} />
        </div>
      </main>
    </div>
  );
}
