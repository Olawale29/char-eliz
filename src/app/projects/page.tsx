import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectsGrid } from "@/components/projects-grid";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A documented portfolio of CharEliz construction, real estate, consultancy and manufacturing engagements, with client, scope and status.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR TRACK RECORD"
        title="Projects"
        description="Every engagement listed here reflects our documented project records, including current status — completed, ongoing or stalled."
      />

      <section className="bg-white py-20">
        <div className="container-site">
          <ProjectsGrid />
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        description="Share the scope and timeline, and we'll help you plan the right path to delivery."
      />
    </>
  );
}
