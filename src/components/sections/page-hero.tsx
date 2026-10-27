import Link from "next/link";

export function PageHero({ title, text, crumb }: { title: string; text: string; crumb: string }) {
  return (
    <section className="starfield relative overflow-hidden py-16 text-center sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 size-[420px] -translate-x-1/2 rounded-full border border-gold/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 size-[620px] -translate-x-1/2 rounded-full border border-gold/10" />
      <div className="wrap relative">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs tracking-[0.2em] text-ivory/60 uppercase">
          <Link href="/" className="hover:text-gold-light">Home</Link>
          <span className="mx-2 text-gold">✦</span>
          <span className="text-gold-light">{crumb}</span>
        </nav>
        <h1 className="font-heading text-3xl font-bold text-ivory sm:text-5xl">
          <span className="gold-text">{title}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-ivory/75">{text}</p>
      </div>
    </section>
  );
}
