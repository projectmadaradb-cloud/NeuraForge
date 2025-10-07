import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const projectData = {
    // Basic Project Information
    name: "NeuraForge - AI-Native Development Studio",
    description: "Premium AI-native boutique development studio specializing in revenue-driving digital products. We turn data into power and code into profits for forward-thinking businesses.",
    url: "https://neuraforge.tech",
    live_preview: "https://neuraforge.tech",
    github: null, // Private repository
    type: "Full-Stack Web Development & AI Solutions",
    status: "Live & Active",
    
    // Project Details
    category: ["Web Development", "AI/ML", "Business Automation", "Custom Software"],
    technologies: [
      "Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
      "Node.js", "API Routes", "Email Integration", "Vercel", "SEO Optimization",
      "OpenAI API", "Vector Databases", "Machine Learning", "Automation"
    ],
    
    // Timeline & Scope
    project_duration: "Ongoing (Individual projects: 2-6 weeks)",
    budget_range: "$2,997 - $29,997+",
    delivery_timeline: "2-12 weeks depending on complexity",
    
    // Key Features
    features: [
      "33 Optimized Pages with Modern Design",
      "AI-Native Development Approach", 
      "Dark/Light Mode Theme System",
      "Mobile-First Responsive Design",
      "Professional Contact System",
      "SEO Optimized for Search Engines",
      "Performance Optimized (87.2kB Bundle)",
      "Luxury Brand Aesthetic Design"
    ],
    
    // Services Offered
    services: [
      {
        name: "Web Development",
        description: "Modern, responsive web applications",
        price: "$2,997 - $12,997",
        delivery: "2-6 weeks"
      },
      {
        name: "AI Solutions",
        description: "Custom AI agents and ML systems", 
        price: "$5,997 - $25,997",
        delivery: "3-8 weeks"
      },
      {
        name: "Mobile Development",
        description: "Cross-platform mobile apps",
        price: "$7,997 - $19,997",
        delivery: "4-10 weeks"
      },
      {
        name: "Business Automation", 
        description: "Workflow optimization solutions",
        price: "$3,997 - $15,997",
        delivery: "2-6 weeks"
      },
      {
        name: "Trading Systems",
        description: "Automated trading bots",
        price: "$8,997 - $29,997", 
        delivery: "4-12 weeks"
      },
      {
        name: "Data Solutions",
        description: "Web scraping and data processing",
        price: "$2,997 - $12,997",
        delivery: "2-8 weeks"
      }
    ],
    
    // Portfolio Highlights
    portfolio: [
      {
        name: "AI Trading Bot Dashboard",
        description: "Real-time trading analytics with automated strategies",
        result: "40% increased trading efficiency",
        technologies: ["React", "Python", "Financial APIs"],
        image: "https://neuraforge.tech/img/work/trading-thumb.svg"
      },
      {
        name: "E-commerce Scraper API",
        description: "Multi-platform data collection system", 
        result: "10x faster data collection",
        technologies: ["Node.js", "Puppeteer", "REST API"],
        image: "https://neuraforge.tech/img/work/scraper-thumb.svg"
      },
      {
        name: "AI Resume Generator",
        description: "ATS-optimized resume creation tool",
        result: "85% improved application success",
        technologies: ["Next.js", "OpenAI API", "PDF Generation"],
        image: "https://neuraforge.tech/img/work/resume-thumb.svg"
      },
      {
        name: "Lead Finder Agent", 
        description: "Automated prospecting with AI qualification",
        result: "300% increase in qualified leads",
        technologies: ["Python", "AI/ML", "CRM Integration"],
        image: "https://neuraforge.tech/img/work/lead-thumb.svg"
      },
      {
        name: "Ops Copilot System",
        description: "Workflow automation for operations",
        result: "60% reduction in manual tasks", 
        technologies: ["Vue.js", "Automation APIs"],
        image: "https://neuraforge.tech/img/work/ops-thumb.svg"
      },
      {
        name: "Vector Search Documentation",
        description: "Semantic search for knowledge base",
        result: "90% faster information retrieval",
        technologies: ["Python", "Vector DB", "NLP"],
        image: "https://neuraforge.tech/img/work/vector-thumb.svg"
      }
    ],
    
    // Package Options
    packages: [
      {
        name: "Essential Package",
        price: 2997,
        currency: "USD",
        delivery: "2 weeks",
        description: "Perfect for startups and small businesses",
        features: [
          "Landing page + 3-5 core pages",
          "Mobile responsive design",
          "Basic SEO optimization", 
          "Contact form integration"
        ]
      },
      {
        name: "Professional Package",
        price: 5997,
        currency: "USD", 
        delivery: "3 weeks",
        description: "Comprehensive solution for growing businesses",
        features: [
          "Full website (10-15 pages)",
          "Advanced animations",
          "CMS integration",
          "Analytics setup",
          "Email automation"
        ]
      },
      {
        name: "Enterprise Package",
        price: 12997,
        currency: "USD",
        delivery: "4-6 weeks", 
        description: "Complex applications for established companies",
        features: [
          "Complex web application",
          "Custom admin dashboard", 
          "API integrations",
          "Performance optimization",
          "Ongoing support"
        ]
      }
    ],
    
    // Performance Metrics
    metrics: {
      bundle_size: "87.2kB",
      pages: 33,
      mobile_optimized: true,
      seo_score: "95%", 
      load_time: "< 2 seconds",
      projects_completed: 6,
      client_satisfaction: "100%",
      average_roi: "150%"
    },
    
    // Contact Information
    contact: {
      email: "hello@neuraforge.tech",
      whatsapp: ["+855763860322", "+917305427957"],
      website: "https://neuraforge.tech",
      response_time: "Within 24 hours",
      timezone: "Available globally"
    },
    
    // Business Information
    business: {
      founded: "2024",
      specialization: "AI-Native Development", 
      target_clients: [
        "Startups needing MVP development",
        "SMB founders requiring automation",
        "E-commerce businesses", 
        "Finance companies",
        "Tech companies needing AI/ML"
      ],
      unique_value: [
        "AI-Native approach to every solution",
        "Revenue-focused development",
        "Rapid delivery (weeks not months)",
        "Premium quality with enterprise functionality"
      ]
    },
    
    // Social Proof
    testimonials: [
      {
        client: "Startup Founder",
        feedback: "NeuraForge delivered exactly what we needed in record time. The AI integration was seamless.",
        rating: 5,
        project_type: "AI Dashboard"
      },
      {
        client: "E-commerce Director",
        feedback: "The automation tools saved us hundreds of hours. ROI was immediate.",
        rating: 5,
        project_type: "Business Automation"
      },
      {
        client: "Tech CEO", 
        feedback: "Professional, efficient, and quality exceeded expectations. Highly recommended.",
        rating: 5,
        project_type: "Web Application"
      }
    ],
    
    // Availability
    availability: {
      accepting_projects: true,
      start_date: "1-2 weeks",
      capacity: "2-3 concurrent projects",
      preferred_project_size: "$3,000 - $30,000"
    },
    
    // Meta Information
    meta: {
      created: "2024-01-01",
      updated: "2025-10-08",
      version: "1.0",
      api_version: "v1"
    }
  };

  // Add CORS headers for external access
  const response = NextResponse.json(projectData);
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}