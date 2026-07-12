import projectsData from '@data/projects.yaml';

export interface Project {
  slug: string;
  title: string;
  authors: string[];
  date: string | Date;
  venue?: string;
  tags: string[];
  thumbnail?: string;
  blurb?: string;
  featured?: boolean;
  highlight?: boolean;
  links?: {
    paper?: string;
    technicalreport?: string;
    code?: string;
    video?: string;
    dataset?: string;
    project?: string;
  };
  bibtex?: string;
}

export const projects = projectsData as Project[];
