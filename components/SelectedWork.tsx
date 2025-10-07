import Link from 'next/link';
import Image from 'next/image';
import { Card } from './ui/Card';

const getProjectIcon = (tags: string[]) => {
  if (tags.includes('Agent')) return '🤖';
  if (tags.includes('Realtime')) return '📊';
  if (tags.includes('Scraping')) return '🕷️';
  if (tags.includes('RAG') || tags.includes('Search')) return '📄';
  return '💼';
};

interface WorkProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  thumb: string;
  description?: string;
  outcomes?: string[];
}

interface SelectedWorkProps {
  projects?: WorkProject[];
}

export default function SelectedWork({ projects = [] }: SelectedWorkProps) {
  const selectedWork = projects.slice(0, 3); // Take first 3 items for homepage preview

  if (selectedWork.length === 0) {
    return null; // Don't render if no projects
  }

  return (
    <section className="section-padding bg-white/5">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
            Real projects that delivered measurable results. From AI agents to trading systems, 
            we build software that drives business outcomes.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedWork.map((project, index) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`}>
              <Card 
                className="h-full hover:scale-105 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-nf-primary/20 to-nf-accent/20 rounded-lg mb-4 overflow-hidden">
                  {project.thumb ? (
                    project.thumb.endsWith('.svg') ? (
                      <Image
                        src={project.thumb}
                        alt={`${project.title} project thumbnail`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    ) : (
                      <picture>
                        <source
                          srcSet={`${project.thumb.replace('.png', '.avif')} 1x, ${project.thumb.replace('.png', '@2x.avif')} 2x`}
                          type="image/avif"
                        />
                        <source
                          srcSet={`${project.thumb.replace('.png', '.webp')} 1x, ${project.thumb.replace('.png', '@2x.webp')} 2x`}
                          type="image/webp"
                        />
                        <Image
                          src={project.thumb}
                          alt={`${project.title} project thumbnail`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                        />
                      </picture>
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-nf-primary/50 text-6xl">
                      {getProjectIcon(project.tags)}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-white mb-3 group-hover:text-nf-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-nf-primary/10 text-nf-primary text-sm rounded-full border border-nf-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 text-nf-accent hover:text-nf-accent/80 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nf-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-nf-bg rounded-lg px-3 py-2"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}