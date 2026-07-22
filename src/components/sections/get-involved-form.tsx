"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const interestOptions = [
  "Become a student",
  "Become a mentor",
  "Become a partner",
  "Become a founding supporter",
  "General enquiry",
];

const inputClasses =
  "h-11 w-full rounded-input border border-border-strong bg-surface-raised px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary";

export function GetInvolvedForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("submitted"), 500);
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col gap-2 rounded-card border border-border bg-surface p-8">
        <h3 className="font-display text-xl tracking-tight">Thank you</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We&rsquo;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="interest" className="text-sm font-medium text-foreground">
          I&rsquo;m interested in
        </label>
        <select id="interest" name="interest" className={inputClasses} defaultValue={interestOptions[0]}>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full resize-none rounded-input border border-border-strong bg-surface-raised px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary"
        />
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
