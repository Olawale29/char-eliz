import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { StrengthsStrip } from "@/components/strengths-strip";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { staggerDelay } from "@/lib/stagger";
import { company } from "@/lib/data/company";
import { team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "CharEliz Nominees Consolidated Services Limited — company background, mission, vision, values and leadership.",
};

const elizabeth = team.find((member) => member.slug === "elizabeth-enahonna");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT CHARELIZ"
        title="A Full-Service Partner Across Procurement, Construction, Real Estate and Consultancy"
        description={company.description}
      />

      <section className="bg-white py-24">
        <div className="container-site grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="BACKGROUND" title="Registered Across Two Jurisdictions" />
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              {company.registration}
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              CharEliz has operational offices in Lagos and Abuja, Nigeria, as well as Atlanta,
              USA; Castellon, Spain; Vabio Filzi, Italy; and Luton, UK.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[5/4] overflow-hidden">
            <Image
              src="/images/illustrative/construction-rebar-cranes.jpg"
              alt="Reinforcement steel and tower cranes on an active construction site"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-off-white py-24">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal className="bg-white p-10">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Vision
            </h3>
            <p className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-snug text-brand-navy">
              {company.vision}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-brand-navy p-10">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-[0.2em] text-brand-pale-blue">
              Mission
            </h3>
            <p className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-snug text-white">
              {company.mission}
            </p>
          </Reveal>
        </div>
      </section>

      <StrengthsStrip />

      <section className="bg-white py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="GOVERNANCE"
            title="Board of Directors"
            description="Oversight for CharEliz is provided by a five-member board."
          />
          <div className="mt-12 grid grid-cols-1 divide-y divide-border-subtle border-t border-border-subtle sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            {company.boardOfDirectors.map((member, i) => (
              <Reveal key={member.name} delay={staggerDelay(i, 0.06)} className="py-6 sm:px-8 sm:py-8">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-brand-navy">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-brand-blue">{member.role}</p>
              </Reveal>
            ))}
          </div>

          {elizabeth ? (
            <Reveal className="mt-16 grid grid-cols-1 overflow-hidden bg-surface-light lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
              <div className="relative aspect-[4/5] lg:aspect-auto">
                <Image
                  src={elizabeth.image}
                  alt={elizabeth.name}
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Director Profile</p>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-brand-navy">
                  Elizabeth Chenayon Enahonna (Mrs)
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  {elizabeth.role}
                </p>
                <div className="mt-6 space-y-4">
                  {elizabeth.bio.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ) : null}

          <div className="mt-10">
            <Button href="/team" variant="secondary">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-light py-24">
        <div className="container-site">
          <SectionHeading eyebrow="ADVISERS" title="Professional Advisers" />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {company.advisers.map((adviser) => (
              <div key={adviser.name} className="border border-border-subtle bg-white p-6">
                <p className="font-[family-name:var(--font-heading)] text-base font-semibold text-brand-navy">
                  {adviser.name}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{adviser.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Talk About Your Next Project."
        description="Tell us what you're trying to build, source or manage, and we'll help you find the right way forward."
      />
    </>
  );
}
