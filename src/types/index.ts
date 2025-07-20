export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  url?: string;
  technologies: string[];
  status: "PRODUCTION" | "DEMO" | "OPEN_SOURCE" | "PERSONAL_PROJECT";
  year: string;
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
  skills: string[];
}

export interface SkillDetail {
  level: "EXPERT" | "ADVANCED" | "INTERMEDIATE";
  experience: string;
  description: string;
}

export interface SkillsData {
  frontend: string[];
  backend: string[];
  tools: string[];
  architecture: string[];
}

export interface VisibleSections {
  [key: string]: boolean;
}
