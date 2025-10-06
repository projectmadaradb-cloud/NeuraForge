export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'A. Sharma',
    company: 'D2C brand',
    role: 'Founder (demo)',
    content: 'NeuraForge shipped a working automation in two weeks that cut our manual ops by half. Clean, fearless execution.',
    rating: 5,
    avatar: '/img/demo/ava1.png'
  },
  {
    id: '2',
    name: 'R. Kapoor',
    company: 'SaaS',
    role: 'Head of Growth (demo)',
    content: 'They think in outcomes. We asked for features; they delivered revenue. The dashboard became our daily driver.',
    rating: 5,
    avatar: '/img/demo/ava2.png'
  },
  {
    id: '3',
    name: 'M. Iyer',
    company: 'FinTech',
    role: 'COO (demo)',
    content: 'Great taste. Great speed. The agent work saved us dozens of hours per week without breaking our risk rules.',
    rating: 5,
    avatar: '/img/demo/ava3.png'
  }
];