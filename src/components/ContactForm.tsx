"use client";

import { FormEvent, useState } from "react";
import { concerns } from "@/lib/content";

type Status = "idle" | "error" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextName = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (nextName.length < 2) {
      setStatus("error");
      setError("Please add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please add an email address we could reply to.");
      return;
    }
    if (message.length < 12) {
      setStatus("error");
      setError("A few more words will help us understand the question.");
      return;
    }

    setName(nextName);
    setStatus("sent");
    setError("");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.6rem] border border-leaf/20 bg-sage/50 p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-moss">Note received here</p>
        <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink">Thank you, {name}.</h2>
        <p className="mt-4 max-w-md text-base leading-7 text-muted">
          Your message is confirmed on this page so you can see the flow. Seravia’s inbox is not
          connected yet — when it is, this same form is ready to send.
        </p>
        <button type="button" className="btn btn-ghost mt-8" onClick={() => setStatus("idle")}>
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.6rem] border border-ink/10 bg-cream p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-ink">Name</span>
          <input name="name" autoComplete="name" className="field mt-2" placeholder="Your name" />
        </label>
        <label className="block text-sm">
          <span className="text-ink">Email</span>
          <input name="email" type="email" autoComplete="email" className="field mt-2" placeholder="you@email.com" />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-ink">City</span>
          <input name="city" autoComplete="address-level2" className="field mt-2" placeholder="Where you live in India" />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-ink">What is on your mind</span>
          <select name="concern" className="field mt-2" defaultValue="general">
            <option value="general">A general question</option>
            {concerns.map((concern) => (
              <option key={concern.id} value={concern.id}>
                {concern.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-ink">Message</span>
          <textarea name="message" rows={5} className="field mt-2 resize-y" placeholder="Tell us a little about your skin, or what you would like to know." />
        </label>
      </div>
      {status === "error" ? (
        <p className="mt-4 text-sm text-clay" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary mt-6">
        Send the note
        <svg viewBox="0 0 16 16" className="btn-arrow h-3.5 w-3.5" aria-hidden="true" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
