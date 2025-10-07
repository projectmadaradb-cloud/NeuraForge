export interface Service {
  id: string;
  title: string;
  description: string;
  outcome: string;
  features: string[];
  stack: string[];
  pricing: {
    range: string;
    timeline: string;
  };
  icon: string;
  category: 'development' | 'automation' | 'ai' | 'scraping';
  hero?: {
    headline: string;
    subheadline: string;
    outcomes: string[];
  };
  outcomes?: Array<{
    metric: string;
    description: string;
  }>;
  process?: string[];
  deliverables?: string[];
  cases?: Array<{
    title: string;
    description: string;
    metrics: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies.',
    outcome: 'Ship fast, pixel-perfect web apps that convert visitors into customers.',
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Performance Optimization'],
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Prisma', 'PostgreSQL'],
    pricing: { range: 'Contact us for pricing', timeline: '2-4 weeks' },
    icon: 'web-development',
    category: 'development',
    hero: {
      headline: 'Ship Revenue-Driving Web Apps Fast',
      subheadline: 'Modern, conversion-optimized web applications that turn visitors into customers. Built with Next.js, TypeScript, and performance-first architecture.',
      outcomes: ['Launch in 2-4 weeks', 'Mobile-first responsive design', 'SEO optimized', 'Conversion focused']
    },
    outcomes: [
      { metric: '40%+', description: 'Average conversion rate improvement' },
      { metric: '95+', description: 'Google PageSpeed score guaranteed' },
      { metric: '2-4 weeks', description: 'From wireframe to production' },
      { metric: '99.9%', description: 'Uptime with modern hosting' },
      { metric: '3x', description: 'Faster load times vs typical sites' }
    ],
    process: [
      'Strategy: Map user journey and identify conversion opportunities',
      'Design: Create responsive wireframes with brand-aligned UI system',
      'Build: Develop with Next.js, TypeScript, and performance optimization',
      'Launch: Deploy with monitoring, analytics, and SEO configuration'
    ],
    deliverables: [
      'Production-ready web application',
      'Mobile-responsive design system',
      'SEO optimization and meta tags',
      'Google Analytics 4 integration',
      'Performance monitoring setup',
      'Clean TypeScript codebase',
      'Deployment documentation',
      'Content management training'
    ],
    cases: [
      {
        title: 'E-commerce Platform Redesign',
        description: 'Rebuilt e-commerce platform for D2C brand with optimized checkout flow and mobile-first design. Achieved 3x conversion improvement and 40% faster page loads.',
        metrics: '3x conversions, 2.1s page load, 40% bounce reduction'
      },
      {
        title: 'SaaS Landing Page & Dashboard',
        description: 'Designed and built SaaS landing page with integrated dashboard. Clean value proposition and social proof increased demo bookings by 65% in first month.',
        metrics: '65% more demos, 95 PageSpeed score, 8% trial conversion'
      }
    ],
    faqs: [
      {
        question: 'How long does a typical web development project take?',
        answer: 'Most projects are completed in 2-4 weeks depending on complexity. We provide detailed timelines during the scoping phase with clear milestones.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes, we offer maintenance packages and can provide ongoing support, updates, and feature additions. All projects include a 1-month bug-fix window.'
      },
      {
        question: 'Will my website be mobile-friendly and fast?',
        answer: 'Absolutely. All websites are built mobile-first with performance optimization. We guarantee 95+ Google PageSpeed scores and responsive design.'
      },
      {
        question: 'Can you integrate with my existing tools and systems?',
        answer: 'Yes, we specialize in integrations with CRMs, payment processors, analytics tools, and other business systems through APIs and webhooks.'
      }
    ]
  },
  {
    id: 'app-development',
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android.',
    outcome: 'Launch native-quality apps that users love and engage with daily.',
    features: ['React Native', 'Cross-platform', 'Native Performance', 'App Store Ready'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Supabase', 'App Store'],
    pricing: { range: 'Contact us for pricing', timeline: '4-6 weeks' },
    icon: 'app-development',
    category: 'development',
    hero: {
      headline: 'Launch Apps Users Actually Use',
      subheadline: 'Native-quality mobile apps that work perfectly on iOS and Android. Built with React Native for faster development and easier maintenance.',
      outcomes: ['Launch on both platforms', 'Native performance', 'App Store approved', 'User engagement focused']
    },
    outcomes: [
      { metric: '50%+', description: 'Development time saved vs native' },
      { metric: '4.5+', description: 'Average app store rating' },
      { metric: '90%+', description: 'Code sharing between platforms' },
      { metric: '4-6 weeks', description: 'From concept to App Store' },
      { metric: '24/7', description: 'Push notifications and updates' }
    ],
    process: [
      'Strategy: Define user flows and core features for MVP launch',
      'Design: Create platform-specific UI with native feel and interactions',
      'Build: Develop with React Native and integrate device features',
      'Launch: Submit to App Stores with analytics and crash reporting'
    ],
    deliverables: [
      'iOS and Android applications',
      'App Store and Play Store submissions',
      'Push notification system',
      'Analytics and crash reporting',
      'User authentication and profiles',
      'Native device integrations',
      'App maintenance documentation',
      'Store optimization guidance'
    ],
    cases: [
      {
        title: 'Fitness Tracking App',
        description: 'Built comprehensive fitness app with workout tracking, social features, and Apple Health integration. Reached 10K downloads in first month.',
        metrics: '10K downloads, 4.8 rating, 65% daily retention'
      },
      {
        title: 'Local Service Marketplace',
        description: 'Created marketplace app connecting service providers with customers. Real-time chat, booking system, and payment processing.',
        metrics: '500+ providers, $50K GMV, 4.6 rating'
      }
    ],
    faqs: [
      {
        question: 'Will my app work on both iPhone and Android?',
        answer: 'Yes, we use React Native to build apps that work natively on both iOS and Android platforms with shared codebase for faster development.'
      },
      {
        question: 'How do you handle App Store approval?',
        answer: 'We handle the entire submission process, including App Store optimization, compliance checks, and any revisions needed for approval.'
      },
      {
        question: 'Can you integrate with device features like camera and GPS?',
        answer: 'Absolutely. We can integrate with camera, GPS, contacts, notifications, biometrics, and other native device capabilities as needed.'
      },
      {
        question: 'What happens after the app is launched?',
        answer: 'We provide ongoing support for updates, bug fixes, and new features. We also help with app store optimization and user acquisition strategy.'
      }
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Custom AI integrations and intelligent automation for your business.',
    outcome: 'Automate complex decisions and scale your expertise with AI.',
    features: ['Custom AI Models', 'API Integration', 'RAG Systems', 'AI Agents'],
    stack: ['OpenAI GPT-4', 'LangChain', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    pricing: { range: 'Contact us for pricing', timeline: '3-5 weeks' },
    icon: 'ai-solutions',
    category: 'ai',
    hero: {
      headline: 'Scale Your Expertise with Custom AI',
      subheadline: 'Intelligent automation that handles complex decisions and tasks. From document processing to predictive analytics, we build AI that drives ROI.',
      outcomes: ['Automate complex workflows', 'Process unstructured data', 'Predictive insights', 'Custom AI models']
    },
    outcomes: [
      { metric: '80%', description: 'Reduction in manual processing time' },
      { metric: '95%+', description: 'Accuracy on domain-specific tasks' },
      { metric: '24/7', description: 'Autonomous operation capability' },
      { metric: '10x', description: 'Faster analysis than manual methods' },
      { metric: '$50K+', description: 'Annual cost savings typically' }
    ],
    process: [
      'Analyze: Identify automation opportunities and map data sources',
      'Train: Develop and fine-tune AI models for your specific use case',
      'Integrate: Build APIs and workflows around AI capabilities',
      'Monitor: Deploy with performance tracking and continuous improvement'
    ],
    deliverables: [
      'Custom-trained AI models',
      'API endpoints for integration',
      'Data processing pipelines',
      'Performance monitoring dashboard',
      'Model retraining workflows',
      'Documentation and training materials',
      'Accuracy benchmarking reports',
      'Scalability architecture'
    ],
    cases: [
      {
        title: 'Document Intelligence System',
        description: 'Built AI system to extract and classify information from legal documents. Reduced processing time from 4 hours to 15 minutes per document with 95% accuracy.',
        metrics: '95% accuracy, 16x faster processing, $120K annual savings'
      },
      {
        title: 'Customer Support AI Assistant',
        description: 'Developed intelligent chatbot for SaaS company that handles 70% of support tickets automatically while maintaining high satisfaction scores.',
        metrics: '70% ticket automation, 4.8/5 satisfaction, 40% cost reduction'
      }
    ],
    faqs: [
      {
        question: 'How accurate are custom AI solutions?',
        answer: 'We typically achieve 90-95%+ accuracy on domain-specific tasks through careful training, validation, and continuous improvement processes.'
      },
      {
        question: 'Can AI solutions integrate with existing systems?',
        answer: 'Yes, we build API-first solutions that integrate seamlessly with your existing tools, databases, and workflows through standard protocols.'
      },
      {
        question: 'How do you ensure data privacy and security?',
        answer: 'We implement enterprise-grade security measures and can deploy on-premise or in private cloud environments. All data handling follows best practices.'
      },
      {
        question: 'What happens if the AI makes mistakes?',
        answer: 'We build monitoring systems and human-in-the-loop workflows to catch errors, plus continuous learning to improve accuracy over time.'
      }
    ]
  },
  {
    id: 'web-scraping',
    title: 'Web Scraping',
    description: 'Reliable data extraction from any website at scale.',
    outcome: 'Get clean, structured data delivered on schedule, every time.',
    features: ['Anti-detection', 'Proxy Rotation', 'Data Cleaning', 'API Delivery'],
    stack: ['Python', 'Playwright', 'Scrapy', 'Docker', 'PostgreSQL', 'Redis'],
    pricing: { range: 'Contact us for pricing', timeline: '1-3 weeks' },
    icon: 'web-scraping',
    category: 'scraping',
    hero: {
      headline: 'Get Clean Data Delivered on Schedule',
      subheadline: 'Reliable data extraction pipelines that scale. From competitor pricing to market research, we handle the complexity while you focus on insights.',
      outcomes: ['Structured data delivery', 'Anti-bot protection handling', 'Scalable architecture', 'Real-time monitoring']
    },
    outcomes: [
      { metric: '99.5%', description: 'Data extraction success rate' },
      { metric: '1M+', description: 'Records processed daily' },
      { metric: '10x', description: 'Faster than manual collection' },
      { metric: '24/7', description: 'Automated monitoring and alerts' },
      { metric: '<1%', description: 'Error rate with validation' }
    ],
    process: [
      'Analysis: Map data sources and define extraction requirements',
      'Build: Create robust scrapers with anti-detection measures',
      'Deploy: Set up automated schedules and monitoring systems',
      'Deliver: Provide clean, structured data in your preferred format'
    ],
    deliverables: [
      'Production scraping infrastructure',
      'Anti-bot detection bypassing',
      'Data cleaning and validation',
      'Automated scheduling system',
      'Real-time monitoring dashboard',
      'Data export in multiple formats',
      'Error handling and recovery',
      'Performance optimization'
    ],
    cases: [
      {
        title: 'E-commerce Price Monitoring',
        description: 'Built comprehensive system to track competitor pricing across 50+ websites. Enabled dynamic pricing strategy that increased profit margins by 18%.',
        metrics: '18% margin increase, 50+ sites monitored, 99.9% uptime'
      },
      {
        title: 'Market Research Automation',
        description: 'Automated collection of industry reports and news from 200+ sources. Reduced research time from 20 hours/week to 2 hours while improving coverage.',
        metrics: '90% time saved, 5x data coverage, 24/7 monitoring'
      }
    ],
    faqs: [
      {
        question: 'Is web scraping legal?',
        answer: 'We ensure all scraping activities comply with website terms of service and applicable laws. We provide guidance on legal considerations for your use case.'
      },
      {
        question: 'How do you handle websites with anti-bot protection?',
        answer: 'We use advanced techniques including rotating proxies, browser automation, CAPTCHA solving, and behavioral mimicking to maintain reliable access.'
      },
      {
        question: 'What data formats can you deliver?',
        answer: 'We can deliver data in CSV, JSON, Excel, XML, or directly to your database. We also provide APIs for real-time data access and webhooks.'
      },
      {
        question: 'How often can data be updated?',
        answer: 'We can set up real-time, hourly, daily, or custom schedules based on your needs and website rate limiting constraints.'
      }
    ]
  },
  {
    id: 'trading-bots',
    title: 'Trading Systems',
    description: 'Automated trading systems with risk management and monitoring.',
    outcome: 'Execute strategies 24/7 with proper risk controls and reporting.',
    features: ['Strategy Automation', 'Risk Management', 'Real-time Monitoring', 'Backtesting'],
    stack: ['Python', 'FastAPI', 'WebSockets', 'ccxt', 'TradingView', 'InfluxDB'],
    pricing: { range: 'Contact us for pricing', timeline: '3-6 weeks' },
    icon: 'trading-bots',
    category: 'automation',
    hero: {
      headline: 'Execute Strategies 24/7 with Confidence',
      subheadline: 'Automated trading systems with enterprise-grade risk management. Built for crypto, forex, and equity markets with proven backtesting.',
      outcomes: ['24/7 automated execution', 'Advanced risk controls', 'Multi-exchange support', 'Real-time monitoring']
    },
    outcomes: [
      { metric: '99.9%', description: 'System uptime guarantee' },
      { metric: '<50ms', description: 'Average execution latency' },
      { metric: '24/7', description: 'Market monitoring and execution' },
      { metric: '5+', description: 'Exchange integrations available' },
      { metric: '100%', description: 'Backtesting before deployment' }
    ],
    process: [
      'Strategy: Define trading logic, risk parameters, and success metrics',
      'Backtest: Validate performance on historical data with rigorous testing',
      'Build: Develop bot with exchange APIs and comprehensive risk controls',
      'Deploy: Monitor live performance with real-time alerts and dashboards'
    ],
    deliverables: [
      'Automated trading bot system',
      'Risk management and position sizing',
      'Multi-exchange connectivity',
      'Real-time monitoring dashboard',
      'Backtesting framework and reports',
      'Performance analytics and reporting',
      'Alert and notification system',
      'Strategy optimization tools'
    ],
    cases: [
      {
        title: 'Crypto Arbitrage System',
        description: 'Developed arbitrage bot for cryptocurrency markets that exploits price differences across exchanges. Achieved consistent profits with minimal risk exposure.',
        metrics: '12% monthly returns, <100ms execution, 99.9% uptime'
      },
      {
        title: 'DCA Strategy Automation',
        description: 'Built dollar-cost averaging bot with dynamic adjustment based on market conditions. Outperformed manual DCA strategy by 15% with lower volatility.',
        metrics: '15% strategy improvement, 25% lower volatility, automated rebalancing'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure trading bot security?',
        answer: 'We implement API-only access with limited permissions, secure key management, comprehensive logging, and never store exchange login credentials.'
      },
      {
        question: 'Can bots adapt to changing market conditions?',
        answer: 'Yes, we build adaptive algorithms that adjust parameters based on volatility, volume, market trends, and other indicators to optimize performance.'
      },
      {
        question: 'What exchanges do you support?',
        answer: 'We support major exchanges including Binance, Coinbase Pro, Kraken, KuCoin, and can integrate with most exchanges that offer stable APIs.'
      },
      {
        question: 'How do you handle risk management?',
        answer: 'We implement multiple risk layers including position sizing, stop losses, daily loss limits, drawdown controls, and emergency circuit breakers.'
      }
    ]
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description: 'Streamline operations with intelligent workflow automation.',
    outcome: 'Eliminate manual tasks and scale your operations effortlessly.',
    features: ['Workflow Design', 'API Integration', 'Data Processing', 'Monitoring'],
    stack: ['Python', 'Zapier', 'Make.com', 'FastAPI', 'PostgreSQL', 'Celery'],
    pricing: { range: 'Contact us for pricing', timeline: '2-4 weeks' },
    icon: 'business-automation',
    category: 'automation',
    hero: {
      headline: 'Eliminate Repetitive Tasks Forever',
      subheadline: 'Workflow automation that saves hours daily. From data entry to report generation, we automate the boring stuff so you can focus on growth.',
      outcomes: ['Save 10+ hours weekly', 'Reduce human error', 'Streamlined workflows', 'Custom integrations']
    },
    outcomes: [
      { metric: '75%', description: 'Reduction in manual work' },
      { metric: '10+ hours', description: 'Saved per week typically' },
      { metric: '90%', description: 'Fewer errors vs manual process' },
      { metric: '5x', description: 'Faster task completion' },
      { metric: '$25K+', description: 'Annual labor cost savings' }
    ],
    process: [
      'Audit: Map current workflows and identify automation opportunities',
      'Design: Create automated workflows with proper error handling',
      'Integrate: Connect all systems and data sources seamlessly',
      'Optimize: Monitor performance and continuously improve efficiency'
    ],
    deliverables: [
      'Custom automation workflows',
      'System integrations and APIs',
      'Data synchronization setup',
      'Error handling and recovery',
      'Monitoring and reporting dashboard',
      'User training and documentation',
      'Maintenance and support plan',
      'ROI tracking and analytics'
    ],
    cases: [
      {
        title: 'Invoice Processing Automation',
        description: 'Automated complete invoice processing workflow from email reception to payment. Reduced processing time from 2 hours to 5 minutes per invoice.',
        metrics: '95% time saved, 99% accuracy, $50K annual savings'
      },
      {
        title: 'Customer Onboarding Flow',
        description: 'Built automated onboarding sequence for SaaS company with personalized emails and task tracking. Increased trial-to-paid conversion by 25%.',
        metrics: '25% conversion increase, 80% less manual work, 4.8/5 satisfaction'
      }
    ],
    faqs: [
      {
        question: 'Which business processes can be automated?',
        answer: 'Almost any repetitive task including data entry, report generation, email responses, file processing, invoice handling, and system updates.'
      },
      {
        question: 'How do you handle exceptions and errors?',
        answer: 'We build comprehensive error handling with fallback procedures, logging, and human escalation for complex cases that need manual review.'
      },
      {
        question: 'Can automation work with my existing tools?',
        answer: 'Yes, we specialize in connecting disparate systems through APIs, webhooks, and integration platforms like Zapier and Make.com.'
      },
      {
        question: 'What happens if my process changes?',
        answer: 'We build flexible automation that can be easily modified and provide training for your team to make basic adjustments as needed.'
      }
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Autonomous AI agents that handle complex tasks and decision-making.',
    outcome: 'Deploy intelligent agents that work like your best employees.',
    features: ['Natural Language Processing', 'Decision Trees', 'Learning Algorithms', 'Integration'],
    stack: ['LangChain', 'OpenAI GPT-4', 'PostgreSQL', 'FastAPI', 'Celery', 'Docker'],
    pricing: { range: 'Contact us for pricing', timeline: '4-8 weeks' },
    icon: 'ai-agents',
    category: 'ai',
    hero: {
      headline: 'Deploy Agents That Work Like Employees',
      subheadline: 'Autonomous AI agents that use tools, make decisions, and complete complex multi-step tasks. From research to customer service, they never sleep.',
      outcomes: ['Autonomous task completion', 'Tool integration', 'Multi-step reasoning', 'Human-level quality']
    },
    outcomes: [
      { metric: '90%+', description: 'Task completion accuracy' },
      { metric: '24/7', description: 'Always available operation' },
      { metric: '10x', description: 'Faster than human workers' },
      { metric: '70%', description: 'Cost reduction vs hiring' },
      { metric: '5+', description: 'Tools per agent typically' }
    ],
    process: [
      'Define: Map agent responsibilities and required tool integrations',
      'Train: Develop reasoning capabilities and decision-making logic',
      'Deploy: Integrate with systems and implement monitoring',
      'Evolve: Continuously improve based on performance data and feedback'
    ],
    deliverables: [
      'Custom AI agent system',
      'Tool integration framework',
      'Decision-making algorithms',
      'Quality assurance monitoring',
      'Human handoff protocols',
      'Performance analytics dashboard',
      'Agent training and tuning',
      'Scalability architecture'
    ],
    cases: [
      {
        title: 'Research Agent',
        description: 'Built AI agent that conducts comprehensive market research and generates detailed reports. Completes 8-hour research tasks in 30 minutes with citations.',
        metrics: '16x faster research, 95% accuracy, 200+ sources per report'
      },
      {
        title: 'Customer Success Agent',
        description: 'Deployed agent to handle customer onboarding and support across multiple channels. Manages 80% of interactions with high satisfaction.',
        metrics: '80% interaction coverage, 4.7/5 satisfaction, 60% cost reduction'
      }
    ],
    faqs: [
      {
        question: 'How autonomous are AI agents?',
        answer: 'Our agents handle complex multi-step tasks independently while escalating edge cases to humans. They can make decisions within defined parameters.'
      },
      {
        question: 'What tools can AI agents use?',
        answer: 'Agents can use APIs, databases, web browsers, email, calendars, CRM systems, and most software tools through custom integrations.'
      },
      {
        question: 'How do you ensure agent reliability?',
        answer: 'We implement comprehensive testing, monitoring, quality assurance, and human oversight for critical decisions with clear escalation protocols.'
      },
      {
        question: 'Can agents learn and improve over time?',
        answer: 'Yes, we build learning systems that capture feedback, analyze performance patterns, and continuously improve agent effectiveness and accuracy.'
      }
    ]
  }
];