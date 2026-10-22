type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            onDark ? "text-brand-pale-blue" : "text-brand-blue"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-tight ${
          onDark ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${onDark ? "text-white/75" : "text-text-secondary"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
