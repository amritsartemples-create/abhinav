import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <span className={cn("inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase", dark ? "text-gold-light" : "text-gold-dark")}>
        <span aria-hidden="true">✦</span>
        {eyebrow}
        <span aria-hidden="true">✦</span>
      </span>
      <Tag className={cn("mt-3 font-heading text-[26px] leading-tight font-bold sm:text-4xl", dark ? "text-ivory" : "text-navy")}>
        {title}
      </Tag>
      <div className={cn("mt-4 flex items-center gap-2", align === "center" && "justify-center")} aria-hidden="true">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
        <span className="text-gold">✧</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
      </div>
      {text && <p className={cn("mt-4 leading-relaxed", dark ? "text-ivory/75" : "text-muted-foreground")}>{text}</p>}
    </div>
  );
}
