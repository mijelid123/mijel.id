
export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
