import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { BlueprintGrid, FacetMark } from "@/components/ui/diamond-motif";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-navy text-white">
      <BlueprintGrid className="absolute inset-0 h-full w-full text-white" />
      <FacetMark className="pointer-events-none absolute -right-16 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-brand-sky-blue/60 lg:block" />
      <div className="container-site relative py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pale-blue">
          404 ERROR
        </p>
        <h1 className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get
          you back on track.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/" variant="ghost-on-dark">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline-on-dark">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
