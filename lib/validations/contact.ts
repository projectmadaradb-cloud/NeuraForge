import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
  honeypot: z.string().optional().refine((value) => !value || value === "", "Suspicious activity detected"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address')
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

export const projectInquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  projectType: z.enum(['web-development', 'app-development', 'ai-solutions', 'web-scraping', 'trading-bots', 'business-automation', 'ai-agents', 'other']),
  budget: z.enum(['under-5k', '5k-15k', '15k-50k', '50k-plus', 'not-sure']),
  timeline: z.enum(['asap', '1-month', '2-3-months', '3-plus-months', 'flexible']),
  description: z.string().min(20, 'Please provide more details about your project'),
  goals: z.string().optional(),
  honeypot: z.string().optional() // Spam protection
});

export type ProjectInquiryData = z.infer<typeof projectInquirySchema>;