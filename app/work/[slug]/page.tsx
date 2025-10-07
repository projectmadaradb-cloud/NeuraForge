import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { loadCaseStudy, getCaseStudySlugs } from '@/lib/data-loaders';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = loadCaseStudy(params.slug);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-nf-bg to-nf-bg/80">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 text-sm text-nf-accent">
                <span>Case Study</span>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">
                  DEMO DATA
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-700 dark:text-white/80 leading-relaxed mb-8 max-w-3xl">
                {caseStudy.summary || caseStudy.problem}
              </p>
            </div>
          </div>
        </section>

        {/* Snapshot Section */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center p-6">
                <h3 className="text-sm font-semibold text-nf-accent mb-2 uppercase tracking-wider">
                  Industry
                </h3>
                <p className="text-gray-900 dark:text-white font-medium">{caseStudy.industry}</p>
              </Card>
              
              <Card className="text-center p-6">
                <h3 className="text-sm font-semibold text-nf-accent mb-2 uppercase tracking-wider">
                  Timeline
                </h3>
                <p className="text-gray-900 dark:text-white font-medium">{caseStudy.timeline}</p>
              </Card>
              
              <Card className="text-center p-6">
                <h3 className="text-sm font-semibold text-nf-accent mb-2 uppercase tracking-wider">
                  Stack
                </h3>
                <p className="text-gray-900 dark:text-white font-medium text-sm">{caseStudy.stack}</p>
              </Card>
              
              <Card className="text-center p-6">
                <h3 className="text-sm font-semibold text-nf-accent mb-2 uppercase tracking-wider">
                  Role
                </h3>
                <p className="text-gray-900 dark:text-white font-medium text-sm">{caseStudy.role}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Problem & Approach */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8">
                <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-6">
                  Problem
                </h2>
                <p className="text-gray-700 dark:text-white/90 leading-relaxed text-lg">
                  {caseStudy.problem}
                </p>
              </Card>
              
              <Card className="p-8">
                <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-6">
                  Approach
                </h2>
                <p className="text-gray-700 dark:text-white/90 leading-relaxed text-lg">
                  {caseStudy.approach}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-gradient-to-r from-nf-primary/10 via-nf-accent/10 to-nf-primary/10">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display text-gray-900 dark:text-white mb-6">
                Results
              </h2>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                ⚠️ Demo data for portfolio purposes
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.results.map((result: string, index: number) => (
                <Card key={index} className="text-center p-8">
                  <div className="text-3xl font-bold text-nf-primary mb-2">
                    {result.split(' ')[0]}
                  </div>
                  <div className="text-gray-700 dark:text-white/80">
                    {result.split(' ').slice(1).join(' ')}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Screens Section */}
        {caseStudy.screens && caseStudy.screens.length > 0 && (
          <section className="section-padding">
            <div className="container-width">
              <h2 className="text-4xl font-bold font-display text-gray-900 dark:text-white text-center mb-12">
                Key Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudy.screens.map((screen: string, index: number) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-nf-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                        {screen}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-width">
            <div className="glass rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold font-display text-gray-900 dark:text-white mb-6">
                Want Similar Results?
              </h2>
              <p className="text-xl text-gray-700 dark:text-white/80 mb-8 max-w-2xl mx-auto">
                Get a detailed proposal in 48 hours. No commitments, just a clear plan 
                and timeline for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="px-8 py-4">
                    Get Your Proposal
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" size="lg" className="px-8 py-4">
                    View More Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const caseStudy = loadCaseStudy(params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} - Case Study | NeuraForge`,
    description: `Case study: ${caseStudy.title}. ${caseStudy.summary || caseStudy.problem.slice(0, 150)}...`,
  };
}