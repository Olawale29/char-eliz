import { BlueprintGrid, DiamondCluster } from "@/components/ui/diamond-motif";
import { Reveal } from "@/components/motion/reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-navy pt-40 pb-20 text-white sm:pt-44 sm:pb-24">
      <BlueprintGrid className="absolute inset-0 h-full w-full text-white" />
      <DiamondCluster className="absolute -right-6 -top-6 h-56 w-56 text-brand-sky-blue sm:h-72 sm:w-72" />
      <div className="container-site relative">
        <Reveal immediate delay={0}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pale-blue">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal immediate delay={0.1}>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal immediate delay={0.2}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
