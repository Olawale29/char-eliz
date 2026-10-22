"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data/projects";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

export function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
              active === filter
                ? "border-brand-navy bg-brand-navy text-white"
                : "border-border-subtle text-text-secondary hover:border-brand-blue hover:text-brand-blue"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-10 border border-dashed border-border-subtle p-12 text-center"
          >
            <p className="text-sm text-text-secondary">
              No documented projects in this category yet.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
