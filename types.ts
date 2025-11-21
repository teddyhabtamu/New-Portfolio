export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  live: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}