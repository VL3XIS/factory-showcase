// TEMPLATE — copied + placeholder-replaced by scripts/factory/scaffold-demo.mjs
// when a new theme ships. The leading underscore makes Next.js skip this folder
// for routing, so /demand/_template is NOT a real URL.
//
// Repeat-block markers (FAQ_ITEM_START..FAQ_ITEM_END) are expanded once per
// faq entry by scaffold-demo.mjs. If no faqs exist, the whole FAQ_SECTION
// block is removed.

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
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <Feature title="Missed-Call Text-Back" body="Every missed call triggers an instant SMS reply within 60 seconds, so you recover jobs even when you're under a car or on a roof." />
            <Feature title="Lead-to-CRM on Autopilot" body="New form submissions and inbound inquiries are AI-scored and pushed straight into your CRM — no copy-pasting, no dropped leads." />
            <Feature title="Review & Invoice Follow-Up" body="Automated SMS nudges go out after every completed job and every unpaid invoice, recovering an average of $2,800 in month one alone." />
            <Feature title="Live in Under a Week" body="We deploy your full 5-workflow starter pack in 4–5 business days, with a $150/mo maintenance retainer so everything keeps running." />
          </div>
        </div>
      </section>

      
      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-10">
            Frequently asked
          </h2>
          <dl className="space-y-8">
            
            <div>
              <dt className="text-lg font-medium mb-2 text-foreground">What tools do you actually use?</dt>
              <dd className="text-muted leading-relaxed">We build on n8n (self-hosted or Cloud), with Twilio for SMS, OpenAI for lead scoring, and your existing CRM — GoHighLevel, HubSpot, or even a simple Airtable base.</dd>
            </div>
            

            <div>
              <dt className="text-lg font-medium mb-2 text-foreground">Do I need any technical skills to use this?</dt>
              <dd className="text-muted leading-relaxed">Zero. Once we hand off, everything runs automatically. You&apos;ll get a simple Telegram or email alert for anything that needs your attention.</dd>
            </div>
            

            <div>
              <dt className="text-lg font-medium mb-2 text-foreground">What&apos;s included in the $500 setup fee?</dt>
              <dd className="text-muted leading-relaxed">All 5 pre-built workflows configured for your business, full testing, a 30-minute handoff call, and a plain-English doc explaining what each automation does.</dd>
            </div>
            

            <div>
              <dt className="text-lg font-medium mb-2 text-foreground">What does the 
            <div>
              <dt className="text-lg font-medium mb-2 text-foreground">{{FAQ_Q}}</dt>
              <dd className="text-muted leading-relaxed">{{FAQ_A}}</dd>
            </div>
            50/month retainer cover?</dt>
              <dd className="text-muted leading-relaxed">Monitoring, bug fixes, API key renewals, and one workflow tweak per month — so the system never quietly breaks on you.</dd>
            </div>
            

            <div>
              <dt className="text-lg font-medium mb-2 text-foreground">What industries does this work for?</dt>
              <dd className="text-muted leading-relaxed">Any local service business — HVAC, plumbing, auto repair, restaurants, med spas, cleaning companies. If you get phone calls and send invoices, this works for you.</dd>
            </div>
            
          </dl>
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
  if (!title || title.includes("{{")) return null;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted leading-relaxed">{body}</p>
    </div>
  );
}
