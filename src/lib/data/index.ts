import aboutData from "./about.json";
import educationData from "./education.json";
import experienceData from "./experience.json";
import personalData from "./personal.json";
import skillsData from "./skills.json";

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

type AboutData = {
  aboutStatement: string;
  contactInfo: ContactInfo;
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

type ExperienceData = {
  workExperience: WorkExperienceItem[];
};

const about = aboutData as AboutData;
const educationDataItems = educationData as EducationItem[];
const experience = experienceData as ExperienceData;
const skillGroups = skillsData as SkillGroup[];

export const personal = personalData as PersonalData;
export const aboutStatement = about.aboutStatement;
export const contactInfo = about.contactInfo;
export const skills = skillGroups;
export const education = educationDataItems;
export const workExperience = experience.workExperience;
