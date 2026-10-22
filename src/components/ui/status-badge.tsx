import type { ProjectStatus } from "@/lib/data/projects";

const styles: Record<ProjectStatus, string> = {
  Completed: "bg-brand-blue/10 text-brand-blue",
  Ongoing: "bg-brand-orange/15 text-brand-rust",
  Stalled: "bg-text-secondary/10 text-text-secondary",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${styles[status]}`}
    >
      {status}
    </span>
  );
}
