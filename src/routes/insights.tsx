import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader, GoldButton } from "@/components/site/Primitives";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  { c: "Market Analysis", t: "Gold's Role in the Post-Dollar Reserve Era", d: "Why central banks are accelerating de-dollarisation through bullion accumulation — and what it means for institutional allocators.", date: "12 min · June 2026" },
  { c: "Macro", t: "How Central Banks Are Reshaping Demand in 2025", d: "Record buying from BRICS+ central banks is altering the structural floor for gold pricing.", date: "8 min · May 2026" },
  { c: "Compliance", t: "The Quiet Revolution in Responsible Sourcing", d: "Inside the next generation of OECD-aligned due-diligence frameworks reshaping the upstream supply chain.", date: "10 min · April 2026" },
  { c: "Investment", t: "Allocated vs Unallocated: Why It Matters Now", d: "A primer for treasurers on segregated custody, counterparty risk and the cost of convenience.", date: "7 min · March 2026" },
  { c: "Geopolitics", t: "Gold Corridors of the New Silk Road", d: "Trade-route shifts from Dubai to Shanghai are redrawing the global bullion map.", date: "11 min · February 2026" },
  { c: "Refining", t: "999.9 and Beyond: The Science of Modern Refining", d: "Inside Tier-1 Swiss refining operations and the metallurgy of perfect purity.", date: "9 min · January 2026" },
];

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Market Insights — Aurum Global Metals" },
      { name: "description", content: "Institutional precious metals research, macro analysis and gold market intelligence from Aurum Global Metals." },
      { property: "og:title", content: "Market Insights" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Market Insights"
        title={<>Intelligence for the <em className="text-gold-gradient not-italic">institutional</em> investor.</>}
        description="Research, market analysis and macro commentary from Aurum's global strategy desk." />

      <section className="container-luxury py-24">
        <Reveal>
          <article className="group grid gap-10 border border-gold/20 bg-charcoal/40 p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="eyebrow">Featured · {POSTS[0].c}</div>
              <h2 className="font-display mt-4 text-4xl leading-tight text-ivory md:text-5xl">{POSTS[0].t}</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{POSTS[0].d}</p>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs text-gold">{POSTS[0].date}</span>
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold">Read Analysis <ArrowUpRight className="h-3 w-3"/></span>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-gold/25 via-charcoal to-obsidian ring-1 ring-inset ring-gold/30" />
          </article>
        </Reveal>

        <div className="mt-16 grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.slice(1).map((p, i) => (
            <Reveal key={p.t} delay={i*0.05}>
              <article className="group flex h-full flex-col bg-obsidian p-10">
                <div className="eyebrow">{p.c}</div>
                <h3 className="font-display mt-4 text-2xl leading-tight text-ivory transition-colors group-hover:text-gold">{p.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-auto flex items-center justify-between border-t border-gold/15 pt-6 text-xs">
                  <span className="text-muted-foreground">{p.date}</span>
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal/30 py-24">
        <div className="container-luxury text-center">
          <SectionHeader align="center" eyebrow="Newsletter" title={<>Quarterly briefing for <em className="text-gold-gradient not-italic">institutional</em> readers.</>}
            description="Long-form macro analysis, central bank tracker and physical market commentary." />
          <div className="mt-10"><GoldButton to="/contact">Subscribe</GoldButton></div>
        </div>
      </section>
    </>
  );
}
