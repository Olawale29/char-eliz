import { strengths } from "@/lib/data/company";
import { Reveal } from "@/components/motion/reveal";
import { staggerDelay } from "@/lib/stagger";

export function StrengthsStrip() {
  return (
    <section className="border-y border-border-subtle bg-surface-light">
      <div className="container-site grid grid-cols-1 divide-y divide-border-subtle sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {strengths.map((strength, index) => (
          <Reveal key={strength.title} delay={staggerDelay(index, 0.08)} className="px-0 py-8 sm:px-8">
            <span className="text-xs font-semibold text-brand-blue">
              0{index + 1}
            </span>
            <h3 className="mt-3 font-[family-name:var(--font-heading)] text-base font-semibold text-brand-navy">
              {strength.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {strength.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
