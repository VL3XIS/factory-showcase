// TEMPLATE — copied + placeholder-replaced by scripts/factory/scaffold-demo.mjs
// when a new theme ships. The leading underscore makes Next.js skip this folder
// for routing, so /demand/_template is NOT a real URL.

import Link from "next/link";

export const metadata = {
  title: "5 Automations That Run Your SMB — AI Automation Factory",
  description: "Built for local service owners who want leads followed up, reviews requested, and invoices collected — without lifting a finger.",
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
          5 Automations That Run Your SMB
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
          Built for local service owners who want leads followed up, reviews requested, and invoices collected — without lifting a finger.
        </p>
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-base font-medium hover:opacity-90 transition"
        >
          Get My 5 Automations Built →
        </a>
      </section>

      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-10">
            What's included
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature title="Missed-Call Text-Back" body="Every missed call triggers an instant SMS reply within 60 seconds, so you recover jobs even when you're under a car or on a roof." />
            <Feature title="Lead-to-CRM on Autopilot" body="New form submissions and inbound inquiries are AI-scored and pushed straight into your CRM — no copy-pasting, no dropped leads." />
            <Feature title="Review & Invoice Follow-Up" body="Automated SMS nudges go out after every completed job and every unpaid invoice, recovering an average of $2,800 in month one alone." />
          </div>
        </div>
      </section>

      <section id="cta" className="px-6 py-20 border-t border-border bg-accent-soft">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Want one of these for your business?
          </h2>
          <p className="text-muted mb-8">Already running for 40+ local shops — averaging $2,800 recovered in month one and a 0.7-star Google rating lift in 6 weeks.</p>
          <a
            href="mailto:hello@alexisruiz1040.com"
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-base font-medium hover:opacity-90 transition"
          >
            Get My 5 Automations Built →
          </a>
        </div>
      </section>

      <div className="px-6 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto text-xs text-muted font-mono">
          Theme slug: smb-n8n-workflow-automation-starter · Built 2026-05-27
        </div>
      </div>
    </article>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted leading-relaxed">{body}</p>
    </div>
  );
}
