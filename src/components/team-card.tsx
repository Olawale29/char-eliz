import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/lib/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link href={`/team#${member.slug}`} id={member.slug} className="group block scroll-mt-28">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover object-top grayscale-[15%] transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-brand-navy">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-brand-blue">{member.role}</p>
        {member.qualifications ? (
          <p className="mt-0.5 text-xs text-text-secondary">{member.qualifications}</p>
        ) : null}
      </div>
    </Link>
  );
}
