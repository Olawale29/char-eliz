import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Resources",
  description: "Public company information and approved documentation for CharEliz.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title="Company Documents & Information"
        description="A central place to review CharEliz's public company information and request approved documentation."
      />

      <section className="bg-white py-20">
        <div className="container-site grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <Reveal className="border border-border-subtle p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Company Information</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold text-brand-navy">
              CharEliz Nominees Consolidated Services Limited
            </h2>
            <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-border-subtle pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Registration number</dt>
                <dd className="mt-2 text-base font-medium text-brand-navy">RC {company.rcNumber}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Tax identification number</dt>
                <dd className="mt-2 text-base font-medium text-brand-navy">{company.tinNumber}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Registered office</dt>
                <dd className="mt-2 text-base leading-relaxed text-brand-navy">{company.offices[0].detail}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="bg-surface-light p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Approved Documents</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-brand-navy">
              Need supporting documentation?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">
              Contact our team to request the current, approved company documents relevant to your enquiry.
            </p>
            <a
              href={`mailto:${company.email}?subject=Request%20for%20approved%20company%20documents`}
              className="mt-8 inline-flex text-sm font-semibold text-brand-blue underline underline-offset-4 hover:text-brand-navy"
            >
              Request company documents
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Looking for Something Specific?"
        description="Tell us what you need and our team will share the appropriate approved documentation."
      />
    </>
  );
}
