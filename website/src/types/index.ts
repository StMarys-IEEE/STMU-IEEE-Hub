export interface Member {
  id: string;
  name: string;
  role: string;
  email?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  avatar?: string;
  contributions: string[];
  bio?: string;
  funFacts?: string[];
  talkAbout?: string[];
  type: 'current' | 'alumni';
  graduationYear?: string;
  currentPosition?: string;
  company?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  contributors: string[];
  status: 'active' | 'completed' | 'archived';
  featured?: boolean;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}


