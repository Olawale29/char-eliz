import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { staggerDelay } from "@/lib/stagger";
import { team } from "@/lib/data/team";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the CharEliz management team — procurement, real estate, engineering and business development professionals.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR PEOPLE"
        title="Meet the Team"
        description="The professionals leading CharEliz's procurement, construction, real estate and consultancy engagements."
      />

      <section className="bg-white py-20">
        <div className="container-site space-y-20">
          {team.map((member) => (
            <article
              key={member.slug}
              id={member.slug}
              className="scroll-mt-28 grid grid-cols-1 gap-10 border-b border-border-subtle pb-20 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]"
            >
              <Reveal y={28}>
                <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden bg-surface-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 280px, 60vw"
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-brand-navy">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  {member.role}
                  {member.qualifications ? ` — ${member.qualifications}` : ""}
                </p>
                <div className="mt-5 space-y-4">
                  {member.bio.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-light py-20">
        <div className="container-site">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-brand-navy">
            Board of Directors
          </h2>
          <p className="mt-3 max-w-xl text-sm text-text-secondary">
            Governance oversight for CharEliz is provided by a five-member board.
          </p>
          <div className="mt-10 grid grid-cols-1 divide-y divide-border-subtle border-t border-border-subtle sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            {company.boardOfDirectors.map((director, i) => (
              <Reveal key={director.name} delay={staggerDelay(i, 0.06)} className="py-6 sm:px-8 sm:py-8">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-brand-navy">
                  {director.name}
                </p>
                <p className="mt-1 text-sm text-brand-blue">{director.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Work With Our Team?"
        description="Reach out and we'll connect you with the right specialists for your project."
      />
    </>
  );
}
