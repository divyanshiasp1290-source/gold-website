import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader, Counter, GoldButton } from "@/components/site/Primitives";
import worldMap from "@/assets/world-map.jpg";

const HUBS = [
  { city: "Geneva", role: "Global Headquarters", x: 50, y: 38 },
  { city: "London", role: "European Trading Desk", x: 47, y: 34 },
  { city: "Zürich", role: "Refining & Vault Custody", x: 51, y: 37 },
  { city: "Dubai", role: "Middle East Bullion Hub", x: 62, y: 48 },
  { city: "Mumbai", role: "South Asia Distribution", x: 68, y: 52 },
  { city: "Singapore", role: "Asia Custody", x: 76, y: 60 },
  { city: "Hong Kong", role: "Asia Trading", x: 79, y: 50 },
  { city: "New York", role: "Americas Desk", x: 28, y: 42 },
];

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Global Network — Aurum Global Metals" },
      { name: "description", content: "Aurum's global precious metals network spans Geneva, London, Dubai, Singapore, Hong Kong, New York, Zürich and Mumbai." },
      { property: "og:title", content: "Global Network" },
      { property: "og:url", content: "/network" },
    ],
    links: [{ rel: "canonical", href: "/network" }],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <>
      <PageHero eyebrow="Global Network"
        title={<>Four continents. <em className="text-gold-gradient not-italic">One desk.</em></>}
        description="Continuous coverage across the world's leading bullion centres, with strategic partnerships in every key trade corridor."
        image={worldMap} />

      <section className="container-luxury py-24">
        <Reveal>
          <div className="relative overflow-hidden border border-gold/20 bg-charcoal/40">
            <img src={worldMap} alt="Global trade network" className="h-auto w-full opacity-90" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian/40 via-transparent to-obsidian/40" />
            {HUBS.map((h, i) => (
              <div key={h.city} className="absolute" style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <span className="block h-3 w-3 rounded-full bg-gold animate-pulse-gold" style={{ animationDelay: `${i*0.3}s` }} />
                  <div className="glass-panel absolute left-5 top-1/2 hidden -translate-y-1/2 whitespace-nowrap px-3 py-1.5 text-xs text-ivory md:block">
                    {h.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-4">
          {HUBS.map((h, i) => (
            <Reveal key={h.city} delay={i*0.04}>
              <div className="bg-obsidian p-8">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gold animate-pulse-gold"/><span className="eyebrow">Live Desk</span></div>
                <div className="font-display mt-4 text-3xl text-ivory">{h.city}</div>
                <div className="mt-1 text-sm text-gold">{h.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal/30 py-24">
        <div className="container-luxury">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <SectionHeader eyebrow="Trade Routes"
              title={<>Securing the corridors of the <em className="text-gold-gradient not-italic">global bullion</em> trade.</>}
              description="From the African Great Lakes refining belt to the LBMA in London, the DMCC in Dubai and the Shanghai Gold Exchange — our supply chain is engineered for resilience." />
            <Reveal>
              <div className="grid grid-cols-3 gap-px border border-gold/15 bg-gold/15">
                {[
                  ["32","Countries"], ["180+","Counterparties"], ["8","Owned Vaults"],
                  ["24/5","Desk Coverage"], ["$14B","Volume"], ["99.99%","Settlement"],
                ].map(([a,b]) => (
                  <div key={a+b} className="bg-obsidian p-6 text-center">
                    <div className="font-display text-3xl text-gold-gradient">
                      <Counter to={parseFloat(a)} suffix={a.replace(/[\d.]/g,"")} />
                    </div>
                    <div className="mt-2 eyebrow text-[9px]">{b}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-luxury py-24">
        <SectionHeader eyebrow="Strategic Partnerships" title={<>Built upon <em className="text-gold-gradient not-italic">long-standing</em> alliances.</>} />
        <div className="mt-12 grid grid-cols-2 gap-px border border-gold/15 bg-gold/15 md:grid-cols-6">
          {["LBMA","DMCC","SGE","COMEX","Brink's","Loomis"].map(p => (
            <div key={p} className="grid h-32 place-items-center bg-obsidian"><span className="font-display text-2xl text-ivory">{p}</span></div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal/30 py-20">
        <div className="container-luxury text-center">
          <GoldButton to="/contact">Connect with a Regional Desk</GoldButton>
        </div>
      </section>
    </>
  );
}
