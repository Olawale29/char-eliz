import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="container-site grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Image
            src="/images/brand/chareliz-logo.png"
            alt="CharEliz Nominees Consolidated Services Limited"
            width={200}
            height={73}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {company.description}
          </p>
          <p className="mt-5 font-[family-name:var(--font-heading)] text-sm italic text-brand-pale-blue">
            {company.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline text-white/75 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="link-underline text-white/75 hover:text-white"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>{company.offices[0].detail}</li>
            <li>{company.offices[1].detail}</li>
            <li>
              <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="link-underline hover:text-white">
                {company.phones[0]}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="link-underline hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <p>
            RC: {company.rcNumber} &middot; TIN: {company.tinNumber} &middot; VAT: {company.vatNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
