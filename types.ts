
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  company: string;
  icon: string;
  logo?: string;
  color: string;
  features?: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  responsibilities?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: 'Backend' | 'Frontend' | 'Databases' | 'Tools' | 'DevOps';
  icon: string;
}
