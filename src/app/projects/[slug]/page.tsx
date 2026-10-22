import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { StatusBadge } from "@/components/ui/status-badge";
import { ProjectCard } from "@/components/project-card";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { staggerDelay } from "@/lib/stagger";
import { projects } from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.scope,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const related = projects
    .filter((item) => item.category === project.category && item.slug !== project.slug)
    .slice(0, 3);

  const metaRows: Array<{ label: string; value: string }> = [
    { label: "Client", value: project.client },
    ...(project.location ? [{ label: "Location", value: project.location }] : []),
    ...(project.value ? [{ label: "Contract Value", value: project.value }] : []),
    ...(project.awardDate ? [{ label: "Award Date", value: project.awardDate }] : []),
    ...(project.completionDate ? [{ label: "Completion", value: project.completionDate }] : []),
    ...(project.partneredWith ? [{ label: "Partnered With", value: project.partneredWith }] : []),
  ];

  return (
    <>
      <PageHero eyebrow={project.category} title={project.title} />

      <div className="relative aspect-[16/7] w-full overflow-hidden bg-brand-navy sm:aspect-[16/6]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <span className="absolute bottom-3 right-4 rounded-sm bg-brand-navy/70 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white/80">
          Illustrative imagery
        </span>
      </div>

      <section className="bg-white py-20">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <Reveal>
            <div className="flex items-center gap-3">
              <StatusBadge status={project.status} />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                {project.category}
              </span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">{project.scope}</p>

            <div className="mt-10">
              <Button href="/contact" variant="secondary">
                Discuss a Similar Project
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="border border-border-subtle bg-surface-light p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
              Project Details
            </h2>
            <dl className="mt-6 space-y-5">
              {metaRows.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs uppercase tracking-wide text-text-secondary">{row.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-navy">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-surface-light py-20">
          <div className="container-site">
            <div className="flex items-end justify-between">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-brand-navy">
                Related Projects
              </h2>
              <Link href="/projects" className="link-underline text-sm font-semibold text-brand-blue">
                View all projects
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={staggerDelay(i)}>
                  <ProjectCard project={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title="Let's Scope Your Project."
        description="Share your requirements and we'll help you plan the right way forward."
      />
    </>
  );
}
