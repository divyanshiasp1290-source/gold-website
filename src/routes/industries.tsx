import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader, GoldButton } from "@/components/site/Primitives";
import { Landmark, Building2, Gem, Briefcase, Factory, Coins, ShieldCheck, Globe2 } from "lucide-react";

const INDUSTRIES = [
  { icon: Landmark, t: "Central Banks", d: "Strategic reserve allocations with allocated custody and DvP settlement against sovereign mandates." },
  { icon: Building2, t: "Financial Institutions", d: "Bullion banking partners across treasury, lending, structured products and collateral management." },
  { icon: Gem, t: "Jewellery Manufacturers", d: "Reliable 999.9 fine supply, grain and casting bar formats, with hedged price-fix programmes." },
  { icon: Coins, t: "Retail Gold Businesses", d: "Wholesale bar and coin supply to retail bullion houses and authorised distributors." },
  { icon: Briefcase, t: "Commodity Traders", d: "Inter-dealer flow, arbitrage liquidity and physical settlement on global benchmark venues." },
  { icon: Factory, t: "Refineries", d: "Doré sourcing, off-take agreements and refining partnerships with full chain-of-custody." },
  { icon: ShieldCheck, t: "Family Offices & Investors", d: "Allocated vault holdings, discretionary precious metals mandates and bespoke wealth structures." },
  { icon: Globe2, t: "Government Agencies", d: "Sovereign procurement, customs-bonded logistics and compliance-led cross-border settlement." },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Aurum Global Metals" },
      { name: "description", content: "Aurum serves central banks, financial institutions, jewellery makers, refineries, retail bullion houses, traders, family offices and government agencies." },
      { property: "og:title", content: "Industries Served" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Industries We Serve"
        title={<>Counterparty to the world's most <em className="text-gold-gradient not-italic">discerning</em> institutions.</>}
        description="From sovereign reserves to artisan jewellers — eight sectors trust Aurum as their precious metals partner." />
      <section className="container-luxury py-24">
        <div className="grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2">
          {INDUSTRIES.map((i, idx) => (
            <Reveal key={i.t} delay={(idx%2)*0.05}>
              <div className="group relative h-full bg-obsidian p-10 lg:p-14">
                <i.icon className="h-10 w-10 text-gold" strokeWidth={1.2} />
                <h3 className="font-display mt-6 text-3xl text-ivory">{i.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{i.d}</p>
                <div className="mt-8 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-charcoal/30 py-24">
        <div className="container-luxury text-center">
          <SectionHeader align="center" eyebrow="Sector Mandates" title={<>Built for the way your <em className="text-gold-gradient not-italic">sector</em> operates.</>} />
          <div className="mt-10"><GoldButton to="/contact">Discuss a Mandate</GoldButton></div>
        </div>
      </section>
    </>
  ),
});
