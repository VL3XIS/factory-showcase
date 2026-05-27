import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation Factory — Demos & Workflows",
  description:
    "Live demos and AI-built workflows shipped by the AI Automation Factory. Browse the gallery to see what we've built.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <header className="border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-7 h-7 rounded bg-foreground text-background flex items-center justify-center text-sm font-bold">
                F
              </span>
              <span className="font-semibold tracking-tight">
                AI Automation Factory
              </span>
            </Link>
            <nav className="text-sm text-muted flex items-center gap-6">
              <Link href="/" className="hover:text-foreground transition">
                Demos
              </Link>
              <a
                href="mailto:hello@alexisruiz1040.com"
                className="hover:text-foreground transition"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-muted flex justify-between">
            <span>© AI Automation Factory</span>
            <span className="font-mono text-xs">
              factory.alexis-ruizs-projects.vercel.app
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
