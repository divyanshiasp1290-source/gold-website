import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader, GoldButton } from "@/components/site/Primitives";
import { Coins, Gem, Factory, Truck, Lock, LineChart, BarChart3, Building2 } from "lucide-react";
import refiningImg from "@/assets/refining.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aurum Global Metals" },
      { name: "description", content: "Trading, refining, sourcing, logistics, vault custody and risk management for institutional precious metals clients." },
      { property: "og:title", content: "Precious Metals Services — Aurum Global Metals" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Coins, t: "International Gold Trading",
    d: "Physical spot, forward and structured bullion transactions across LBMA, COMEX and Shanghai benchmarks with deep liquidity in 1 kg, 100 oz and 400 oz bars.",
    p: ["Spot & forward execution","DvP settlement","Multi-currency invoicing","Locked-spread quoting"] },
  { icon: Gem, t: "Precious Metal Sourcing",
    d: "Direct sourcing from accredited mines and Good Delivery refiners, with full OECD chain-of-custody documentation.",
    p: ["LBMA-accredited sources","OECD due diligence","Conflict-free certification","Sustainable mining partners"] },
  { icon: Factory, t: "Refining Solutions",
    d: "End-to-end refining and assay through Tier-1 Swiss partners — producing 999.9 fine investment-grade bars and minted products.",
    p: ["999.9‰ fineness","Custom branding","Assay certification","Recycling programmes"] },
  { icon: Truck, t: "Logistics & Distribution",
    d: "Brink's-grade insured worldwide transport, bonded warehousing and customs clearance across 32 countries.",
    p: ["Lloyd's full-value cover","Bonded warehousing","Chain-of-custody audit","White-glove delivery"] },
  { icon: Lock, t: "Secure Storage",
    d: "Allocated, segregated and pooled vault custody at Tier-1 facilities across Zürich, Singapore, Dubai and Delaware.",
    p: ["Allocated & segregated","Independent audit","24/7 monitored","Full insurance"] },
  { icon: LineChart, t: "Risk Management",
    d: "Treasury hedging, forward fixings, options strategies and price-risk advisory for industrial and institutional clients.",
    p: ["Forward hedging","Options structures","Price-fix programmes","Treasury advisory"] },
  { icon: BarChart3, t: "Market Intelligence",
    d: "Institutional research, macro overlays and bespoke market briefings for treasurers and CIOs.",
    p: ["Weekly briefings","Macro overlays","Bespoke research","Central bank tracking"] },
  { icon: Building2, t: "Institutional Trading Desk",
    d: "Dedicated relationship managers for central banks, sovereign funds and family offices — discreet, bespoke, immediate.",
    p: ["Senior coverage","24/5 access","Bespoke structures","Confidential mandates"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>An integrated <em className="text-gold-gradient not-italic">precious metals</em> capability stack.</>}
        description="Eight institutional service lines — every link of the bullion value chain, under one accountable counterparty."
        image={refiningImg}
      />

      <section className="container-luxury py-24">
        <div className="grid gap-px border border-gold/15 bg-gold/15 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={(i % 2) * 0.05}>
              <article className="group relative h-full bg-obsidian p-10 lg:p-14">
                <div className="flex items-start justify-between">
                  <s.icon className="h-10 w-10 text-gold" strokeWidth={1.2} />
                  <span className="font-display text-6xl text-gold/10">0{i+1}</span>
                </div>
                <h3 className="font-display mt-8 text-3xl text-ivory">{s.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.d}</p>
                <ul className="mt-8 grid grid-cols-2 gap-3">
                  {s.p.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-ivory/80">
                      <span className="h-1 w-3 bg-gold" /> {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal/30 py-24">
        <div className="container-luxury text-center">
          <SectionHeader align="center" eyebrow="Begin a Mandate" title={<>Tell us what you need to <em className="text-gold-gradient not-italic">move.</em></>} />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <GoldButton to="/contact">Request Consultation</GoldButton>
            <GoldButton to="/contact" variant="outline">Speak to a Strategist</GoldButton>
          </div>
        </div>
      </section>
    </>
  );
}
