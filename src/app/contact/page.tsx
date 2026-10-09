import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Seravia Lifesciences about Indian skin, formulations, or the house.",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro eyebrow="Contact" title="Tell us what the skin is asking.">
        <p>
          A question about pigmentation, a humid commute, or how a formula is judged is welcome.
          The note confirms here. When an inbox is connected, this is the form that will send it.
        </p>
      </PageIntro>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Seravia Lifesciences</p>
          <p className="mt-4 font-serif text-3xl leading-snug tracking-tight">
            A calm place to ask a precise question.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted">
            Share the concern, the city, and what you have already tried. For a personal diagnosis,
            please see a dermatologist. This page explains an approach. It does not examine skin.
          </p>
        </div>
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
