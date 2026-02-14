
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  company: string;
  icon: string;
  color: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Backend' | 'Frontend' | 'Databases' | 'Tools' | 'DevOps';
  icon: string;
}
