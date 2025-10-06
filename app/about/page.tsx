import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const dynamic = 'force-dynamic';

const techStack = [
  'Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL',
  'OpenAI', 'LangChain', 'Playwright', 'Docker', 'Vercel', 'Supabase'
];

const clientNotices = [
  {
    title: 'Speed',
    description: 'We ship working prototypes in days, not weeks. Production-ready in 2-4 weeks typical.'
  },
  {
    title: 'Outcomes',
    description: 'Every feature maps to a business metric. We think in revenue, efficiency, and user satisfaction.'
  },
  {
    title: 'Quality',
    description: 'Clean code, proper testing, and documentation. Built to scale with your business.'
  }
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-nf-bg to-nf-bg/80">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              About <span className="text-nf-primary">NeuraForge</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              We build AI-native software that makes money.
            </p>
          </div>
        </div>
      </section>

      {/* POV Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-display text-white mb-8 text-center">
              Our Point of View
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  Most software projects fail because they focus on features instead of outcomes. 
                  We start with the business goal and work backwards to the technical solution.
                </p>
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  In the AI era, competitive advantage comes from automation and intelligence baked 
                  into every workflow. We build systems that get smarter over time and eliminate 
                  manual work.
                </p>
                <p className="text-xl text-white/90 leading-relaxed">
                  Speed matters. While others spend months planning, we ship working solutions 
                  in weeks and iterate based on real usage data.
                </p>
              </div>
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Ethos</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-nf-primary mr-3">•</span>
                    <span>Revenue-first thinking in every technical decision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nf-primary mr-3">•</span>
                    <span>AI-native solutions that scale human capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nf-primary mr-3">•</span>
                    <span>Ship fast, measure everything, iterate relentlessly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nf-primary mr-3">•</span>
                    <span>Clean code and proper architecture from day one</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nf-primary mr-3">•</span>
                    <span>Transparent communication and realistic timelines</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-gradient-to-r from-nf-primary/5 via-nf-accent/5 to-nf-primary/5">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Our Stack
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Modern tools and frameworks chosen for speed, reliability, and maintainability.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div 
                key={tech}
                className="px-6 py-3 glass rounded-full text-white font-medium hover:bg-nf-primary/20 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="p-8">
              <div className="w-16 h-16 bg-nf-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">A Note from the Founder</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                "I started NeuraForge after seeing too many projects fail because teams built 
                the wrong thing beautifully. We focus on building the right thing quickly."
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                "Every client engagement starts with understanding the business problem, 
                not the technical requirements. That's how we consistently deliver software 
                that actually moves the needle."
              </p>
              <div className="mt-6 text-nf-accent font-medium">
                — NeuraForge Founder
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What Clients Notice */}
      <section className="section-padding bg-gradient-to-r from-nf-primary/5 via-nf-accent/5 to-nf-primary/5">
        <div className="container-width">
          <h2 className="text-4xl font-bold font-display text-white text-center mb-12">
            What Clients Notice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clientNotices.map((notice, index) => (
              <Card key={notice.title} className="text-center p-8 group hover:scale-105 transition-all">
                <div className="w-12 h-12 bg-nf-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-nf-primary transition-colors">
                  {notice.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {notice.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="px-8 py-4">
                  Start a Conversation
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="px-8 py-4">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}