"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
      <div className="wrap flex h-[72px] items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Image src="/logo.png" alt={site.name} width={600} height={190} priority className="h-12 w-auto lg:h-14" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(pathname, l.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[15px] font-medium text-navy transition hover:text-gold-dark",
                    "after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gold after:transition-transform",
                    isActive(pathname, l.href) && "text-gold-dark after:scale-x-100",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="btn btn-navy hidden sm:inline-flex">
            <Icon name="phone" className="size-4" />
            Book a Consultation
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-border text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-5">
              <span className={cn("absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition", open && "top-1.5 rotate-45")} />
              <span className={cn("absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition", open && "opacity-0")} />
              <span className={cn("absolute left-0 top-3 h-0.5 w-5 rounded bg-current transition", open && "top-1.5 -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-ivory transition lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="wrap flex flex-col py-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-border py-4 font-heading text-lg font-semibold text-navy",
                  isActive(pathname, l.href) && "text-gold-dark",
                )}
              >
                {l.label}
                <span aria-hidden="true" className="text-gold">✦</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="wrap grid gap-3 pb-8">
          <a href={site.phoneHref} className="btn btn-navy">
            <Icon name="phone" className="size-4" />
            Call {site.phoneDisplay}
          </a>
          <a href={site.whatsappHref} target="_blank" rel="noopener" className="btn btn-wa">
            <Icon name="wa" className="size-4" />
            WhatsApp Chat
          </a>
        </div>
      </nav>
    </header>
  );
}
