import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/data/services";
import { projects, type ProjectCategory } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Construction, real estate, procurement, supply chain management and consultancy services from CharEliz Nominees Consolidated Services Limited.",
};

const categoryByService: Partial<Record<string, ProjectCategory>> = {
  construction: "Construction",
  "real-estate": "Real Estate",
  consultancy: "Consultancy",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Services Built Around Delivery"
        description="Five service lines spanning construction, real estate, procurement, supply chain and consultancy — working together across the life of a project."
      />

      {services.map((service, index) => {
        const relatedCategory = categoryByService[service.slug];
        const related = relatedCategory
          ? projects.filter((project) => project.category === relatedCategory).slice(0, 3)
          : [];

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-24 ${index % 2 === 1 ? "bg-surface-light" : "bg-white"}`}
          >
            <div className="container-site grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
              <Reveal
                y={index % 2 === 1 ? -28 : 28}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1} className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Service {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold text-brand-navy">
                  {service.name}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-text-secondary">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3 text-sm text-text-primary">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>

                {related.length > 0 ? (
                  <div className="mt-8 border-t border-border-subtle pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                      Related projects
                    </p>
                    <ul className="mt-3 space-y-2">
                      {related.map((project) => (
                        <li key={project.slug}>
                          <Link
                            href={`/projects/${project.slug}`}
                            className="link-underline text-sm font-medium text-brand-navy"
                          >
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-8">
                  <Button href="/contact" variant="secondary">
                    Enquire About This Service
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Not Sure Where to Start?"
        description="Tell us about the project and we'll point you to the right service line — or combine several."
      />
    </>
  );
}
