# factory-showcase

The master showcase site for the AI Automation Factory. Every approved theme that ships through the factory pipeline lands here as a new `/demand/<slug>` page, and shows up as a card on the homepage.

## How it works

- **Homepage (`src/app/page.tsx`)** scans `src/app/demand/*/meta.json` at build time and renders a gallery card per theme.
- **Demand pages (`src/app/demand/<slug>/page.tsx`)** are full demo pages — written by the factory's `scripts/factory/scaffold-demo.mjs` from the `_template/` folder, with placeholders replaced from the theme's AI-generated copy.
- **No runtime database calls.** Each new theme = a commit to this repo = Vercel auto-redeploys.

## Adding a theme (automated)

When a theme is approved in Telegram:
1. `Approved Theme Builder` (n8n) fires the build kickoff webhook.
2. GH Actions clones this repo, runs `scaffold-demo.mjs`:
   - copies `_template/` → `src/app/demand/<slug>/`
   - substitutes `{{PLACEHOLDER}}` tokens from `theme_artifacts.demo_copy`
   - writes `meta.json` with title, eyebrow, hook, builtAt
3. Commits + pushes. Vercel rebuilds.
4. Live at `factory.alexis-ruizs-projects.vercel.app/demand/<slug>`.

## Adding a theme (manual)

```bash
cp -R _template src/app/demand/my-new-theme
# edit page.tsx and meta.json, replace placeholders
git add . && git commit -m "add my-new-theme" && git push
```

## Removing the sample

Once the first real theme ships, delete `src/app/demand/sample-demo/`.

## Convention: private folders

Any folder under `src/app/demand/` starting with `_` is ignored by Next.js routing AND by the homepage gallery loader. Use this for templates, drafts, or anything else you don't want to render.
