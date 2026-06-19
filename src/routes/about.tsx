import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader, Counter, GoldButton } from "@/components/site/Primitives";
import { Target, Eye, Heart, Globe2, Award, Leaf } from "lucide-react";
import globalImg from "@/assets/global.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aurum Global Metals" },
      { name: "description", content: "Discover Aurum Global Metals — a 28-year international bullion house specializing in gold trading, refining and custody." },
      { property: "og:title", content: "About Aurum Global Metals" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>A bullion house defined by <em className="text-gold-gradient not-italic">discretion</em> and discipline.</>}
        description="Since 1992, Aurum Global Metals has served the world's most discerning institutions with uncompromising integrity in physical gold and precious metals."
        image={globalImg}
      />

      {/* Overview */}
      <section className="container-luxury py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow="Company Overview"
              title={<>Twenty-eight years of <em className="text-gold-gradient not-italic">precious metals</em> stewardship.</>} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-ivory/80 lg:pt-10">
              <p>Headquartered in Geneva with desks across Dubai, Singapore, London and New York, Aurum Global Metals
                operates as a vertically integrated bullion house — sourcing, refining, transporting and safeguarding
                precious metals for sovereign institutions, banks and private wealth.</p>
              <p>We are counterparty to over 480 institutional clients across 32 jurisdictions, executing more than
                $14B in annual trade volume while maintaining a perfect record of settlement and chain-of-custody.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-charcoal/30 py-32">
        <div className="container-luxury grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2">
          {[
            { icon: Target, t: "Our Mission", d: "To be the world's most trusted physical gold counterparty by delivering execution, custody and compliance to the standard demanded by central banks." },
            { icon: Eye, t: "Our Vision", d: "A precious metals industry defined by transparency, responsible sourcing and institutional-grade integrity at every gram." },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="bg-obsidian p-12 md:p-16">
                <x.icon className="h-10 w-10 text-gold" strokeWidth={1.2} />
                <h3 className="font-display mt-8 text-3xl text-ivory">{x.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="container-luxury py-32">
        <SectionHeader eyebrow="Leadership Team" title={<>Stewards of <em className="text-gold-gradient not-italic">institutional</em> capital.</>} />
        <div className="mt-16 grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Alessandro Vinci", "Chief Executive Officer", "Geneva"],
            ["Hala Al-Mansoori", "Managing Director, EMEA", "Dubai"],
            ["Wei Chen", "Head of Asia Trading", "Singapore"],
            ["Margaret Holloway", "Chief Compliance Officer", "London"],
          ].map(([n, r, c], i) => (
            <Reveal key={n} delay={i * 0.05}>
              <div className="bg-obsidian p-8">
                <div className="aspect-[3/4] bg-gradient-to-br from-charcoal via-obsidian to-charcoal ring-1 ring-inset ring-gold/20 grid place-items-center">
                  <span className="font-display text-7xl text-gold/30">{n.split(" ").map(s=>s[0]).join("")}</span>
                </div>
                <h3 className="font-display mt-6 text-xl text-ivory">{n}</h3>
                <div className="mt-1 text-sm text-gold">{r}</div>
                <div className="mt-1 eyebrow">{c}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* History timeline */}
      <section className="bg-charcoal/30 py-32">
        <div className="container-luxury">
          <SectionHeader eyebrow="Company History" title={<>Three decades, <em className="text-gold-gradient not-italic">one standard.</em></>} />
          <div className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
            {[
              ["1992", "Founded in Geneva", "Aurum opens its first vault and trading desk on the Quai du Mont-Blanc."],
              ["2001", "London & Dubai expansion", "Trading desks open at the heart of the LBMA and DMCC markets."],
              ["2009", "Refining partnerships", "Strategic alliance with Tier-1 Swiss LBMA Good Delivery refiners."],
              ["2015", "Asia hub", "Singapore custody and Hong Kong trading desks inaugurated."],
              ["2021", "Responsible sourcing", "Full OECD due-diligence framework certified across all supply chains."],
              ["2025", "Digital settlement", "Tokenised settlement rails for institutional bullion transactions."],
            ].map(([y, t, d], i) => (
              <Reveal key={y} delay={i * 0.05}>
                <div className={`relative mb-12 grid items-start gap-6 md:grid-cols-2 ${i%2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="md:[direction:ltr] pl-12 md:pl-0 md:pr-12">
                    <div className="absolute left-4 md:left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold ring-4 ring-obsidian" />
                    <div className="font-display text-5xl text-gold-gradient">{y}</div>
                    <h3 className="font-display mt-2 text-2xl text-ivory">{t}</h3>
                    <p className="mt-3 text-muted-foreground">{d}</p>
                  </div>
                  <div />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-luxury py-32">
        <SectionHeader eyebrow="Core Values" title={<>What we <em className="text-gold-gradient not-italic">stand for.</em></>} />
        <div className="mt-16 grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-3">
          {[
            { icon: Heart, t: "Integrity", d: "Every transaction conducted with absolute honesty and discretion." },
            { icon: Award, t: "Excellence", d: "An uncompromising standard in execution, refining and custody." },
            { icon: Leaf, t: "Responsibility", d: "Ethically sourced metals, audited supply chains, transparent reporting." },
          ].map((v) => (
            <Reveal key={v.t}>
              <div className="bg-obsidian p-10">
                <v.icon className="h-9 w-9 text-gold" strokeWidth={1.2} />
                <h3 className="font-display mt-6 text-2xl text-ivory">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Presence & CSR */}
      <section className="bg-charcoal/30 py-32">
        <div className="container-luxury grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-px border border-gold/15 bg-gold/15">
              {[
                ["32","Countries"], ["8","Global Offices"], ["480+","Clients"], ["$14B","Volume"],
              ].map(([a,b]) => (
                <div key={a} className="bg-obsidian p-8 text-center">
                  <div className="font-display text-5xl text-gold-gradient"><Counter to={parseFloat(a)} suffix={a.replace(/[\d.]/g,"")} /></div>
                  <div className="mt-2 eyebrow">{b}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <div>
            <SectionHeader eyebrow="Corporate Responsibility"
              title={<>Responsibility <em className="text-gold-gradient not-italic">at every gram.</em></>}
              description="Our responsibility extends from the mine to the market — through OECD-aligned due diligence, fair-trade sourcing programmes and community partnerships across artisanal gold regions." />
            <div className="mt-8">
              <GoldButton to="/compliance" variant="outline">Read Compliance Charter</GoldButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
