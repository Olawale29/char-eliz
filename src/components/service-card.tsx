import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data/services";

type Props = {
  service: Service;
  size?: "default" | "large";
};

export function ServiceCard({ service, size = "default" }: Props) {
  return (
    <Link
      href={`/services#${service.slug}`}
      id={service.slug}
      className="group block scroll-mt-28"
    >
      <div
        className={`relative overflow-hidden ${
          size === "large" ? "aspect-[4/3]" : "aspect-[5/4]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes={size === "large" ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/5 to-transparent" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-brand-navy">
            {service.name}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">
            {service.shortDescription}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="mt-1 shrink-0 text-brand-blue transition-transform duration-300 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
