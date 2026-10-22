import { processSteps } from "@/lib/data/company";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { staggerDelay } from "@/lib/stagger";

export function ProcessSteps() {
  return (
    <section className="bg-white py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="A Considered Approach to Every Project"
            description="A proposed delivery rhythm, not a rigid formula — shaped around the scope and conditions of each engagement."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={staggerDelay(index, 0.1)}
              className={`relative pr-6 ${
                index < processSteps.length - 1 ? "lg:border-r lg:border-border-subtle" : ""
              }`}
            >
              <span className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-brand-pale-blue">
                {step.number}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-brand-navy">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
