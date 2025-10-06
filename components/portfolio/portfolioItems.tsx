import TradingBotAnim from './animations/TradingBotAnim';
import AgentAnim from './animations/AgentAnim';
import ScraperAnim from './animations/ScraperAnim';
import AppAnim from './animations/AppAnim';
import WebAnim from './animations/WebAnim';
import TrainAnim from './animations/TrainAnim';

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  impact: string[];
  color: string;
  Animation: React.FC;
  blurb: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "ai-trading-bot",
    title: "AI Trading Bot",
    tagline: "High-speed dashboards with live P&L and risk controls",
    tags: ["Realtime", "Risk Controls", "WebSockets"],
    impact: ["45% fewer manual errors", "Sub-250ms UI updates", "99.9% live stream uptime"],
    color: "from-violet-600 to-cyan-500",
    Animation: TradingBotAnim,
    blurb: "High-speed dashboards with live P&L, strategy toggles, guardrails and exchange webhooks. Built for portfolio managers who need real-time monitoring without the manual error risk."
  },
  {
    id: "2",
    slug: "autonomous-agent",
    title: "Autonomous Agent",
    tagline: "Agents that research, summarize, and execute workflows",
    tags: ["RAG", "Tools", "Workflows"],
    impact: ["60% shorter response loops", "24/7 task execution", "Multi-tool orchestration"],
    color: "from-indigo-600 to-emerald-500",
    Animation: AgentAnim,
    blurb: "Agents that research, summarize, fill forms, trigger webhooks, and report back autonomously. Perfect for teams who need intelligent task execution without constant supervision."
  },
  {
    id: "3",
    slug: "smart-scraper-plus",
    title: "Smart Scraper Plus",
    tagline: "Anti-bot scraping with structured data output",
    tags: ["Anti-bot", "Proxy Rotator", "Structured Output"],
    impact: ["94% scrape success", "Zero IP blocks (30 days)", "85% less analysis time"],
    color: "from-fuchsia-600 to-sky-500",
    Animation: ScraperAnim,
    blurb: "Headless scraping with anti-bot tactics, de-dup, schema validation and alerting. Turns messy web data into clean, structured outputs your team can actually use."
  },
  {
    id: "4",
    slug: "app-development",
    title: "App Development",
    tagline: "Mobile-first apps with polished UX and robust architecture",
    tags: ["iOS/Android", "Offline-first", "Delightful UX"],
    impact: ["3–6 week MVPs", "A/B tested flows", "Scales to 100k sessions/day"],
    color: "from-rose-600 to-amber-500",
    Animation: AppAnim,
    blurb: "Mobile-first apps with polished UX, robust state, and battle-tested patterns. We build apps that users love and that scale seamlessly as your business grows."
  },
  {
    id: "5",
    slug: "web-development",
    title: "Web Development",
    tagline: "Modern sites that load fast and convert visitors",
    tags: ["Next.js", "SEO", "Performance"],
    impact: ["90+ Lighthouse", "TTFB < 150ms", "SEO-ready schemas"],
    color: "from-purple-600 to-blue-500",
    Animation: WebAnim,
    blurb: "Modern sites that load fast, rank well, and convert visitors into customers. Built with the latest tech stack and optimized for both performance and search rankings."
  },
  {
    id: "6",
    slug: "ai-model-training",
    title: "AI Model Training",
    tagline: "Custom models with clean data and solid guardrails",
    tags: ["LLM Finetune", "Evaluation", "Guardrails"],
    impact: [">30% quality uplift", "Cost ↓ with distillation", "Continuous eval dashboards"],
    color: "from-emerald-600 to-teal-500",
    Animation: TrainAnim,
    blurb: "We fine-tune and evaluate models with clean data, fast iterations, and solid guardrails. Get custom AI that performs better than generic solutions for your specific use case."
  }
];