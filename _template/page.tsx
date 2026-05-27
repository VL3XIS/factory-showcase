// TEMPLATE — copied + placeholder-replaced by scripts/factory/scaffold-demo.mjs
// when a new theme ships. The leading underscore makes Next.js skip this folder
// for routing, so /demand/_template is NOT a real URL.
//
// Repeat-block markers (FAQ_ITEM_START..FAQ_ITEM_END) are expanded once per
// faq entry by scaffold-demo.mjs. If no faqs exist, the whole FAQ_SECTION
// block is removed.

import Link from "next/link";

export const metadata = {
  title: "{{TITLE}} — AI Automation Factory",
  description: "{{DESCRIPTION}}",
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
          <span className="text-muted">{{EYEBROW}}</span>
        </div>
      </div>

      <section className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">
          {{EYEBROW}}
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          {{HERO_HEADLINE}}
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
          {{HERO_SUB}}
        </p>
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-base font-medium hover:opacity-90 transition"
        >
          {{CTA_TEXT}}
        </a>
      </section>

      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-10">
            {{FEATURES_HEADLINE}}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <Feature title="{{FEATURE_1_TITLE}}" body="{{FEATURE_1_BODY}}" />
            <Feature title="{{FEATURE_2_TITLE}}" body="{{FEATURE_2_BODY}}" />
            <Feature title="{{FEATURE_3_TITLE}}" body="{{FEATURE_3_BODY}}" />
            <Feature title="{{FEATURE_4_TITLE}}" body="{{FEATURE_4_BODY}}" />
          </div>
        </div>
      </section>

      {/* FAQ_SECTION_START */}
      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-10">
            Frequently asked
          </h2>
          <dl className="space-y-8">
            {/* FAQ_ITEM_START */}
            <div>
              <dt className="text-lg font-medium mb-2 text-foreground">{{FAQ_Q}}</dt>
              <dd className="text-muted leading-relaxed">{{FAQ_A}}</dd>
            </div>
            {/* FAQ_ITEM_END */}
          </dl>
        </div>
      </section>
      {/* FAQ_SECTION_END */}

      <section id="cta" className="px-6 py-20 border-t border-border bg-accent-soft">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            {{CTA_HEADLINE}}
          </h2>
          <p className="text-muted mb-8">{{CTA_SUB}}</p>
          <a
            href="mailto:{{CONTACT_EMAIL}}"
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-base font-medium hover:opacity-90 transition"
          >
            {{CTA_TEXT}}
          </a>
        </div>
      </section>

      <div className="px-6 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto text-xs text-muted font-mono">
          Theme slug: {{SLUG}} · Built {{BUILT_AT}}
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
