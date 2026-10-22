import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CharEliz Nominees Consolidated Services Limited to discuss a construction, real estate, procurement or consultancy project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's Discuss Your Project"
        description="Tell us about your requirements and a member of the CharEliz team will respond with the right next step."
      />

      <section className="bg-white py-20">
        <div className="container-site grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <Reveal>
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-brand-navy">
              Our Offices
            </h2>
            <ul className="mt-6 space-y-6">
              {company.offices.map((office) => (
                <li key={office.region} className="border-l-2 border-brand-pale-blue pl-4">
                  <p className="text-sm font-semibold text-brand-navy">{office.region}</p>
                  <p className="mt-1 text-sm text-text-secondary">{office.detail}</p>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-[family-name:var(--font-heading)] text-xl font-semibold text-brand-navy">
              Direct Contact
            </h2>
            <ul className="mt-6 space-y-2 text-sm text-text-secondary">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="link-underline hover:text-brand-blue">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="link-underline hover:text-brand-blue">
                  {company.email}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="border border-border-subtle bg-surface-light p-8 sm:p-10">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-brand-navy">
              Project Enquiry
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Fields marked with an asterisk are required.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
