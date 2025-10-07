"use client";

import { Accordion } from './ui/Accordion';

interface FAQAccordionProps {
  serviceFAQs?: Array<{ question: string; answer: string }>;
  generalFAQs?: Array<{ q: string; a: string }>;
  title?: string;
}

export default function FAQAccordion({ 
  serviceFAQs = [], 
  generalFAQs = [],
  title = "Frequently Asked Questions" 
}: FAQAccordionProps) {
  // Combine service-specific FAQs with general ones
  const allFAQs = [
    ...serviceFAQs.map(faq => ({
      id: `service-${faq.question.toLowerCase().replace(/\s+/g, '-')}`,
      title: faq.question,
      content: <p className="text-gray-700 dark:text-white/80 leading-relaxed">{faq.answer}</p>
    })),
    ...generalFAQs.map(faq => ({
      id: `general-${faq.q.toLowerCase().replace(/\s+/g, '-')}`,
      title: faq.q,
      content: <p className="text-gray-700 dark:text-white/80 leading-relaxed">{faq.a}</p>
    }))
  ];

  if (allFAQs.length === 0) {
    return null;
  }

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-gray-900 dark:text-white mb-6">
            {title}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion 
            items={allFAQs}
            allowMultiple={false}
          />
        </div>
      </div>
    </section>
  );
}