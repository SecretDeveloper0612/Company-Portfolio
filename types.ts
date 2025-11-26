export type Page = 'home' | 'products' | 'about' | 'contact' | 'faq' | 'privacy' | 'terms';

export interface Product {
  id: number;
  title: string;
  price: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  category: 'software' | 'hardware';
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}