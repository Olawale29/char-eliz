import { Button } from "@/components/ui/button";
import { BlueprintGrid, FacetMark } from "@/components/ui/diamond-motif";
import { Reveal } from "@/components/motion/reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  eyebrow = "GET IN TOUCH",
  title,
  description,
  ctaLabel = "Start a Conversation",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24">
      <BlueprintGrid className="absolute inset-0 h-full w-full text-white" />
      <FacetMark className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-white sm:-right-10" />
      <Reveal className="container-site relative max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pale-blue">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/75">{description}</p>
        <div className="mt-8">
          <Button href={ctaHref} variant="ghost-on-dark">
            {ctaLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
