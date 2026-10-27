"use client";

import type { FormEvent } from "react";

import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

const field = "w-full rounded-xl border border-border bg-ivory px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-3 focus:ring-gold/20";

export function WhatsAppForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim() || "-";
    const msg = [
      "New Consultation Request",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Subject: ${get("subject")}`,
      `Problem: ${get("message")}`,
    ].join("\n");
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="f-name" className="mb-1.5 block text-sm font-medium text-navy">Your Name</label>
        <input id="f-name" name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div>
        <label htmlFor="f-phone" className="mb-1.5 block text-sm font-medium text-navy">Phone Number</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" required className={field} />
      </div>
      <div>
        <label htmlFor="f-email" className="mb-1.5 block text-sm font-medium text-navy">Email Address</label>
        <input id="f-email" name="email" type="email" autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="f-subject" className="mb-1.5 block text-sm font-medium text-navy">Subject</label>
        <input id="f-subject" name="subject" type="text" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-msg" className="mb-1.5 block text-sm font-medium text-navy">Describe Your Problem</label>
        <textarea id="f-msg" name="message" rows={4} required className={field} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-wa w-full sm:w-auto">
          <Icon name="wa" className="size-4" />
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
