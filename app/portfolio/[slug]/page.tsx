import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../../lib/projects";

export const dynamic = 'force-dynamic';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudy({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gradient">{project.title}</h1>
      <Image src={project.image} alt={project.title} width={1200} height={700} className="rounded-2xl mt-6 shadow-glowSoft" />
      <p className="text-white/80 mt-6 leading-relaxed">{project.content}</p>
      <ul className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((t) => (
          <li key={t} className="px-3 py-1 text-xs rounded-full border border-white/15">{t}</li>
        ))}
      </ul>
    </div>
  );
}