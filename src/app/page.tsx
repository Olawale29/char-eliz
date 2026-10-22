import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { StrengthsStrip } from "@/components/strengths-strip";
import { ServiceCard } from "@/components/service-card";
import { ProjectCard } from "@/components/project-card";
import { ProcessSteps } from "@/components/process-steps";
import { TeamCard } from "@/components/team-card";
import { CTASection } from "@/components/cta-section";
import { HeroCarousel } from "@/components/motion/hero-carousel";
import { Reveal } from "@/components/motion/reveal";
import { staggerDelay } from "@/lib/stagger";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { team } from "@/lib/data/team";

const featuredProjects = projects.filter((project) =>
  [
    "firs-kano-zaria-road",
    "rccg-prayer-pavilion",
    "rccg-canal-drainage-reclamation",
    "oluku-modern-market",
    "okomu-latex-cups",
    "ekpoma-hotel-feasibility",
  ].includes(project.slug),
);

const heroHeadlines: Record<string, string> = {
  construction: "Built From the Ground Up.",
  "real-estate": "Properties, Managed With Care.",
  procurement: "The Right Materials, Delivered.",
  "supply-chain": "Your Supply Chain, Coordinated.",
  consultancy: "Expertise You Can Build On.",
};

const heroSlides = services.map((service) => ({
  src: service.image,
  alt: service.imageAlt,
  eyebrow: service.name,
  title: heroHeadlines[service.slug] ?? service.name,
  description: service.shortDescription,
}));

export default function HomePage() {
  return (
    <>
      <HeroCarousel
        slides={heroSlides}
        primaryCta={{ label: "Explore Our Services", href: "/services" }}
        secondaryCta={{ label: "Discuss a Project", href: "/contact" }}
      />

      <StrengthsStrip />

      {/* Company introduction */}
      <section className="bg-white py-24">
        <div className="container-site grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
            <Image
              src="/images/illustrative/construction-team-skyline.jpg"
              alt="Site team reviewing progress on a multi-storey construction project"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="A Dependable Partner for Complex Projects"
              description={`${company.registration} Our management team brings vast operational and management experience across procurement, construction, real estate and consultancy engagements.`}
            />
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Discover CharEliz
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-light py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="WHAT WE DO"
                title="Services Built Around Delivery"
                description="From first site visit to facility management, our service lines work together across the life of a project."
              />
            </Reveal>
            <Button href="/services" variant="secondary" className="self-start sm:self-auto">
              View All Services
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal className="sm:col-span-2 lg:col-span-2" delay={0}>
              <ServiceCard service={services[0]} size="large" />
            </Reveal>
            {services.slice(1, 3).map((service, i) => (
              <Reveal key={service.slug} delay={staggerDelay(i + 1)}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
            {services.slice(3).map((service, i) => (
              <Reveal key={service.slug} delay={staggerDelay(i + 3)}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-white py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="TRACK RECORD"
                title="Featured Projects"
                description="A selection of engagements across construction, real estate and consultancy — shown with their documented status."
              />
            </Reveal>
            <Button href="/projects" variant="secondary" className="self-start sm:self-auto">
              Explore Our Projects
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={staggerDelay(i)}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why CharEliz */}
      <section className="bg-brand-off-white py-24">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal>
            <SectionHeading
              eyebrow="WHY CHARELIZ"
              title="Principles That Shape Every Engagement"
              description="Our core values guide how we scope, staff and deliver every project — regardless of size."
            />
          </Reveal>
          <ol className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {company.coreValues.map((value, index) => (
              <Reveal
                as="li"
                key={value}
                delay={staggerDelay(index, 0.06)}
                className="flex items-start gap-4 border-t border-brand-navy/15 pt-5"
              >
                <span className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-blue">
                  0{index + 1}
                </span>
                <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-brand-navy">
                  {value}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSteps />

      {/* Team preview */}
      <section className="bg-surface-light py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="OUR PEOPLE"
                title="Led by Experienced Professionals"
                description="A management team drawn from procurement, estate surveying, engineering and business development backgrounds."
              />
            </Reveal>
            <Button href="/team" variant="secondary" className="self-start sm:self-auto">
              Meet Our Team
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={staggerDelay(i, 0.06)}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something That Lasts."
        description="Have a project in mind? Speak with our team about your requirements and the right way forward."
      />
    </>
  );
}
