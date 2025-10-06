export type Project = { slug: string; title: string; excerpt: string; image: string; content: string; tags: string[]; };

export const projects: Project[] = [
  {
    slug: "ai-trading-bot",
    title: "AI Trading Bot Dashboard",
    excerpt: "Live PnL, strategy toggles, risk guardrails with exchange webhooks.",
    image: "/portfolio1.svg",
    tags: ["Realtime", "Next.js", "Charts"],
    content:
      "A dashboard for multi-exchange execution with latency-aware routing, risk controls, and alerting."
  },
  {
    slug: "ecom-scraper",
    title: "E-commerce Scraper API",
    excerpt: "Rotating proxies, structured output, de-dup, and price-drop alerts.",
    image: "/portfolio2.svg",
    tags: ["Scraping", "API", "Workers"],
    content:
      "A headless scraping pipeline with proxy rotation, anti-bot mitigation, and normalized JSON responses."
  },
  {
    slug: "ai-resume",
    title: "AI Resume Generator",
    excerpt: "Prompted templates, semantic highlights, export to PDF.",
    image: "/portfolio3.svg",
    tags: ["AI", "Docs", "Export"],
    content:
      "Generates tailored resumes with role-matching highlights and one-click PDF export."
  }
];