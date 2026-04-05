import aboutData from "./about.json";
import experienceData from "./experience.json";
import personalData from "./personal.json";

export type SocialIconId = "github" | "linkedin";

export type SocialLink = {
  name: string;
  icon: SocialIconId;
  href: string;
};

export type PersonalData = {
  name: string;
  title: string;
  socialLinks: SocialLink[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type EducationItem = {
  degree: string;
  university: string;
  date: string;
  gpa?: string;
};

export type CertificationItem = {
  title: string;
  company: string;
  date: string;
};

export type AboutData = {
  aboutStatement: string;
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
  skills: SkillGroup[];
  education: EducationItem[];
  certificationsAndAwards: CertificationItem[];
};

export type WorkExperienceItem = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  techStack: string[];
  current: boolean;
};

export const personal = personalData as PersonalData;
export const about = aboutData as AboutData;
export const workExperience = experienceData.workExperience as WorkExperienceItem[];
