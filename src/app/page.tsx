import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

type ThemeMeta = {
  slug: string;
  title: string;
  eyebrow?: string;
  hook?: string;
  builtAt?: string;
  score?: number;
};

async function loadThemes(): Promise<ThemeMeta[]> {
  const root = path.join(process.cwd(), "src", "app", "demand");
  let entries: { name: string; isDirectory: () => boolean }[] = [];
  try {
    entries = await fs.readdir(root, { withFileTypes: true });
  } catch {
    return [];
  }
  const themes: ThemeMeta[] = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name.startsWith("_")) continue;
    try {
      const raw = await fs.readFile(path.join(root, e.name, "meta.json"), "utf8");
      themes.push({ ...JSON.parse(raw), slug: e.name });
    } catch {
      // No meta.json — fall back to slug only
      themes.push({ slug: e.name, title: e.name });
    }
  }
  return themes.sort((a, b) => (b.builtAt || "").localeCompare(a.builtAt || ""));
}

export default async function Home() {
  const themes = await loadThemes();

  return (
    <div>
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">
          Demos & workflows
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          What we&apos;ve built.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          Every card below is a live demo shipped by the AI Automation Factory.
          Each one was approved from a demand signal, generated, and deployed
          autonomously.
        </p>
        <div className="mt-8 flex items-center gap-6 text-sm text-muted">
          <span>
            <strong className="text-foreground">{themes.length}</strong> demo
            {themes.length === 1 ? "" : "s"} shipped
          </span>
          <span className="text-border">·</span>
          <span>
            <strong className="text-foreground">{new Set(themes.map((t) => t.eyebrow)).size}</strong>{" "}
            categor{new Set(themes.map((t) => t.eyebrow)).size === 1 ? "y" : "ies"}
          </span>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        {themes.length === 0 ? (
          <div className="border border-dashed border-border rounded-lg py-16 text-center text-muted">
            No demos shipped yet. The next approval in Telegram will land here.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((t) => (
              <Link
                key={t.slug}
                href={`/demand/${t.slug}`}
                className="group block bg-card border border-border rounded-lg p-6 hover:border-foreground transition"
              >
                {t.eyebrow && (
                  <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">
                    {t.eyebrow}
                  </p>
                )}
                <h2 className="text-xl font-semibold tracking-tight mb-3 group-hover:underline underline-offset-4">
                  {t.title}
                </h2>
                {t.hook && (
                  <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-3">
                    {t.hook}
                  </p>
                )}
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>View demo →</span>
                  {t.builtAt && <time dateTime={t.builtAt}>{t.builtAt}</time>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
