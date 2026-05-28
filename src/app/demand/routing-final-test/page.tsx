// TEMPLATE — copied + placeholder-replaced by scripts/factory/scaffold-demo.mjs
// when a new theme ships. The leading underscore makes Next.js skip this folder
// for routing, so /demand/_template is NOT a real URL.
//
// Repeat-block markers (FAQ_ITEM_START..FAQ_ITEM_END) are expanded once per
// faq entry by scaffold-demo.mjs. If no faqs exist, the whole FAQ_SECTION
// block is removed.

import Link from "next/link";

export const metadata = {
  title: "Routing Final Test — AI Automation Factory",
  description: "Demo for Routing Final Test — built by the AI Automation Factory.",
};

export default function DemandPage() {
  return (
    <article>
      <div className="border-b border-border bg-accent-soft">
        <div className="max-w-5xl mx-auto px-6 py-3 text-sm">
          <Link href="/" className="text-muted hover:text-foreground transition">
            ← All demos
          </Link>
          <span className="text-border mx-3">/</span>
          <span className="text-muted">AI Automation Factory · Demo</span>
        </div>
      </div>

      <section className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">
          AI Automation Factory · Demo
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          Routing Final Test
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
          Scaffolded demo from the AI Automation Factory.
        </p>
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-base font-medium hover:opacity-90 transition"
        >
          Get in touch
        </a>
      </section>

      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-10">
            What's included
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <Feature title="Fast" body="Built on Next.js 16 with React 19." />
            <Feature title="Tailored" body="Designed for your specific audience." />
            <Feature title="Live" body="Deployed to Vercel automatically." />
            <Feature title="" body="" />
          </div>
        </div>
      </section>

      

      <section id="cta" className="px-6 py-20 border-t border-border bg-accent-soft">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Want one of these for your business?
          </h2>
          <p className="text-muted mb-8">Reach out and we'll build it.</p>
          <a
            href="mailto:hello@alexisruiz1040.com"
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-base font-medium hover:opacity-90 transition"
          >
            Get in touch
          </a>
        </div>
      </section>

      <div className="px-6 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto text-xs text-muted font-mono">
          Theme slug: routing-final-test · Built 2026-05-28
        </div>
      </div>
    </article>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  if (!title || title.includes("{{")) return null;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted leading-relaxed">{body}</p>
    </div>
  );
}
