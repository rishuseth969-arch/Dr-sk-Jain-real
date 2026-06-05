export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  type: string;
  message: string;
  status: 'Confirmed' | 'Pending';
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Wellness' | 'Heart Health' | 'Diabetes' | 'Preventive' | 'Consultation';
  readTime: string;
  date: string;
  author: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  condition: string;
  rating: number;
  review: string;
  date: string;
  avatarSeed: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  benefits: string[];
}

export interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  triageChoice?: string[];
}
