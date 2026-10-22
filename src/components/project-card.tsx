import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { StatusBadge } from "@/components/ui/status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-border-subtle bg-surface-light transition-colors duration-300 hover:border-brand-blue/40 hover:bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/0 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-sm bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-navy backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute right-4 top-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-7">
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-brand-navy">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary">{project.client}</p>
        </div>

        <div className="mt-8 flex items-end justify-between border-t border-border-subtle pt-4 text-xs text-text-secondary">
          <span>{project.location ?? project.completionDate ?? project.awardDate ?? " "}</span>
          <span className="font-semibold text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
            View project &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
