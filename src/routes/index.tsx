import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck, Globe2, Scale, Coins, Truck, LineChart, Lock,
  Factory, Building2, Briefcase, Landmark, Gem, Award, ArrowUpRight,
  CheckCircle2, FileDown, Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-gold.jpg";
import worldMap from "@/assets/world-map.jpg";
import refiningImg from "@/assets/refining.jpg";
import vaultImg from "@/assets/vault.jpg";
import { Reveal, Counter, SectionHeader, GoldButton } from "@/components/site/Primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurum Global Metals — Trusted Partner in Gold Trading" },
      { name: "description", content: "International gold trading, bullion supply, refining and precious metals solutions for institutions and global enterprises." },
      { property: "og:title", content: "Aurum Global Metals" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Services />
      <Stats />
      <Solutions />
      <WhyUs />
      <Process />
      <Industries />
      <Network />
      <Compliance />
      <Testimonials />
      <Insights />
      <CTA />
    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Gold bullion bars" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.135_82/0.18),transparent_60%)]" />
      </div>

      <div className="container-luxury relative flex min-h-[100vh] flex-col justify-center pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="eyebrow flex items-center gap-3"
        >
          <span className="h-px w-10 bg-gold" /> Est. International Bullion House
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
          className="font-display mt-6 max-w-5xl text-5xl leading-[1.02] text-ivory md:text-7xl lg:text-8xl"
        >
          Trusted Global Partner in <span className="shimmer-text italic">Gold Trading</span> & Precious Metals
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75 md:text-xl"
        >
          Delivering secure, compliant and reliable precious metal solutions for institutions, wholesalers
          and global enterprises across five continents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <GoldButton to="/contact">Request Consultation</GoldButton>
          <GoldButton to="/contact" variant="outline">Contact Our Team</GoldButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-px border border-gold/15 bg-gold/15 md:grid-cols-4"
        >
          {[
            ["LBMA", "Aligned"],
            ["ISO", "9001 : 2015"],
            ["AML", "Tier-1 KYC"],
            ["24/7", "Trading Desk"],
          ].map(([a, b]) => (
            <div key={a} className="bg-obsidian/80 p-5">
              <div className="font-display text-2xl text-gold">{a}</div>
              <div className="mt-1 text-[10px] tracking-[0.24em] uppercase text-ivory/60">{b}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </section>
  );
}

/* ---------- LIVE MARKET MARQUEE ---------- */
function Marquee() {
  const items = [
    ["XAU/USD", "2,387.40", "+0.62%"],
    ["XAG/USD", "29.18", "+1.04%"],
    ["XPT/USD", "975.20", "−0.18%"],
    ["XPD/USD", "1,032.50", "+0.41%"],
    ["LBMA AM", "2,386.10", "−0.05%"],
    ["LBMA PM", "2,388.95", "+0.12%"],
  ];
  return (
    <section className="border-y border-gold/15 bg-charcoal/40 py-4 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="eyebrow">{it[0]}</span>
            <span className="font-mono text-ivory">${it[1]}</span>
            <span className={it[2].startsWith("−") ? "text-destructive" : "text-gold"}>{it[2]}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------- INTRO ---------- */
function Intro() {
  return (
    <section className="container-luxury py-32">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-gold" /> About Aurum</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] text-ivory md:text-6xl">
              A House Built on <em className="text-gold-gradient not-italic">Discretion</em>, Trust, and Pure Gold.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ivory/80">
              Aurum Global Metals is an international bullion house and commodities trading firm specializing in the
              sourcing, refining, custody and distribution of investment-grade precious metals. We serve central banks,
              sovereign institutions, refineries, jewellery manufacturers and family offices through a network of
              vaults and trading desks spanning four continents.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-1 gap-px border border-gold/15 bg-gold/15 sm:grid-cols-3">
              {[
                ["1992", "Founded in Geneva"],
                ["28+", "Years of execution"],
                ["$14B", "Annual trade volume"],
              ].map(([a, b]) => (
                <div key={a} className="bg-obsidian p-6">
                  <div className="font-display text-3xl text-gold-gradient">{a}</div>
                  <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  { icon: Coins, t: "International Gold Trading", d: "Physical spot, forward and structured bullion transactions across global markets with full settlement transparency." },
  { icon: Gem,   t: "Precious Metal Sourcing",    d: "Responsibly sourced gold, silver, platinum and palladium from accredited mines and refiners worldwide." },
  { icon: Factory, t: "Refining Solutions",       d: "End-to-end refining via LBMA Good Delivery partners producing 999.9 fine investment-grade bullion." },
  { icon: Truck, t: "Logistics & Distribution",   d: "Fully insured Brink's-grade worldwide secure transport with bonded customs handling." },
  { icon: Lock,  t: "Secure Vault Storage",       d: "Allocated and segregated custody at Tier-1 vaults in Zürich, Singapore, Dubai and Delaware." },
  { icon: LineChart, t: "Risk Management",        d: "Forward hedging, price-fix strategies and treasury solutions for industrial and institutional clients." },
];
function Services() {
  return (
    <section id="services" className="relative bg-charcoal/30 py-32">
      <div className="container-luxury">
        <SectionHeader eyebrow="Our Services" title={<>Precious Metals <em className="text-gold-gradient not-italic">Solutions</em>, Engineered for Institutions.</>}
          description="A comprehensive, vertically-integrated suite of services across the entire precious metals value chain." />
        <div className="mt-16 grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden bg-obsidian p-10 transition-colors hover:bg-charcoal">
                <s.icon className="h-9 w-9 text-gold transition-transform group-hover:-translate-y-1" strokeWidth={1.2} />
                <h3 className="font-display mt-8 text-2xl text-ivory">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold opacity-0 transition group-hover:opacity-100">
                  Discover <ArrowUpRight className="h-3 w-3" />
                </Link>
                <div className="pointer-events-none absolute right-6 top-6 font-display text-5xl text-gold/10">0{i + 1}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  const stats = [
    { v: 14, s: "B+", l: "Annual Trade Volume (USD)" },
    { v: 32, s: "", l: "Countries of Operation" },
    { v: 480, s: "+", l: "Institutional Clients" },
    { v: 99.99, s: "%", l: "Bullion Purity Standard" },
  ];
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 opacity-30">
        <img src={vaultImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-obsidian" />
      </div>
      <div className="container-luxury">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="border-t border-gold/30 pt-8">
                <div className="font-display text-6xl text-gold-gradient md:text-7xl">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-4 text-xs tracking-[0.24em] uppercase text-ivory/70">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUTIONS ---------- */
function Solutions() {
  return (
    <section className="container-luxury py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <img src={refiningImg} alt="Gold refining" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            <div className="glass-panel absolute -bottom-8 -right-8 hidden p-6 lg:block">
              <div className="eyebrow">Refinery Output</div>
              <div className="font-display mt-2 text-4xl text-gold-gradient">999.9 ‰</div>
              <div className="mt-1 text-xs text-muted-foreground">Investment-grade fineness</div>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeader eyebrow="Capabilities" title={<>From the mine, to the vault, to the <em className="text-gold-gradient not-italic">balance sheet</em>.</>}
            description="Our integrated capability stack means a single accountable partner across every link of the precious metals chain." />
          <div className="mt-10 space-y-5">
            {[
              "Sourcing from LBMA-accredited mines & refiners",
              "Assay, refining and minting to 999.9 fineness",
              "Allocated, segregated and pooled vault custody",
              "Insured global logistics with chain-of-custody audit",
              "Treasury hedging and structured price products",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="group flex items-start gap-4 border-b border-gold/10 pb-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                  <p className="text-ivory/85">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: ShieldCheck, t: "Trust & Discretion", d: "Banking-grade confidentiality and ironclad chain-of-custody." },
    { icon: Globe2, t: "Global Reach", d: "Trading desks across Geneva, Dubai, Singapore, London and New York." },
    { icon: Scale, t: "Regulatory Excellence", d: "Aligned with LBMA, OECD, AML5 and full institutional KYC." },
    { icon: Award, t: "Pricing Integrity", d: "Transparent execution on LBMA, COMEX and Shanghai benchmarks." },
  ];
  return (
    <section className="relative bg-charcoal/30 py-32">
      <div className="container-luxury">
        <SectionHeader align="center" eyebrow="Why Aurum" title={<>An Uncompromising Standard.</>}
          description="What sets a 28-year-old international bullion house apart from the rest." />
        <div className="mt-20 grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="bg-obsidian p-10 text-center">
                <it.icon className="mx-auto h-10 w-10 text-gold" strokeWidth={1.2} />
                <h3 className="font-display mt-6 text-xl text-ivory">{it.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    ["01", "Mandate & KYC", "Institutional onboarding, compliance review and counterparty verification."],
    ["02", "Sourcing & Pricing", "Live LBMA / COMEX referencing with locked-in spread quotations."],
    ["03", "Refining & Assay", "999.9 fine bar production with full assay certification."],
    ["04", "Custody & Settlement", "Allocated vault delivery, DvP settlement and audit trail."],
  ];
  return (
    <section className="container-luxury py-32">
      <SectionHeader eyebrow="Trading Process" title={<>Four steps. <em className="text-gold-gradient not-italic">Zero ambiguity.</em></>} />
      <div className="mt-16 grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([n, t, d], i) => (
          <Reveal key={n} delay={i * 0.06}>
            <div className="relative h-full bg-obsidian p-10">
              <div className="font-display text-7xl text-gold/15">{n}</div>
              <h3 className="font-display mt-6 text-2xl text-ivory">{t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
function Industries() {
  const inds = [
    { icon: Landmark, t: "Central Banks" },
    { icon: Building2, t: "Financial Institutions" },
    { icon: Gem, t: "Jewellery Manufacturers" },
    { icon: Briefcase, t: "Commodity Traders" },
    { icon: Factory, t: "Refineries" },
    { icon: Coins, t: "Retail Gold Houses" },
    { icon: ShieldCheck, t: "Family Offices" },
    { icon: Globe2, t: "Government Agencies" },
  ];
  return (
    <section className="bg-charcoal/30 py-32">
      <div className="container-luxury">
        <SectionHeader eyebrow="Industries We Serve" title={<>Counterparty to the world's <em className="text-gold-gradient not-italic">most discerning</em> institutions.</>} />
        <div className="mt-16 grid gap-px border border-gold/15 bg-gold/15 sm:grid-cols-2 md:grid-cols-4">
          {inds.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 0.04}>
              <div className="group bg-obsidian p-8 transition-colors hover:bg-charcoal">
                <i.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
                <h3 className="mt-6 text-lg text-ivory">{i.t}</h3>
                <div className="mt-4 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- NETWORK ---------- */
function Network() {
  const hubs = [
    ["Geneva", "Global HQ"],
    ["London", "Trading Desk"],
    ["Dubai", "Bullion Hub"],
    ["Singapore", "Asia Custody"],
    ["Hong Kong", "Asia Trading"],
    ["New York", "Americas"],
    ["Zürich", "Refining"],
    ["Mumbai", "Distribution"],
  ];
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 opacity-50">
        <img src={worldMap} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian" />
      </div>
      <div className="container-luxury">
        <SectionHeader align="center" eyebrow="Global Network" title={<>Four continents. <em className="text-gold-gradient not-italic">One desk.</em></>}
          description="Continuous coverage across the world's leading bullion centres." />
        <div className="mt-20 grid grid-cols-2 gap-px border border-gold/15 bg-gold/15 md:grid-cols-4">
          {hubs.map((h, i) => (
            <Reveal key={h[0]} delay={i * 0.04}>
              <div className="bg-obsidian/90 p-6 backdrop-blur">
                <div className="flex items-center gap-2 text-gold"><span className="inline-block h-2 w-2 animate-pulse-gold rounded-full bg-gold" /><span className="eyebrow">Live</span></div>
                <div className="font-display mt-3 text-2xl text-ivory">{h[0]}</div>
                <div className="mt-1 text-xs text-muted-foreground">{h[1]}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPLIANCE ---------- */
function Compliance() {
  const certs = ["LBMA Aligned", "OECD Due Diligence", "ISO 9001:2015", "Responsible Gold", "AML5 / KYC", "Dubai DMCC"];
  return (
    <section className="container-luxury py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <SectionHeader eyebrow="Certifications & Compliance"
          title={<>Held to the standard of the world's <em className="text-gold-gradient not-italic">central banks</em>.</>}
          description="We operate under the strictest international compliance frameworks for responsible sourcing, AML and counterparty integrity." />
        <Reveal>
          <div className="grid grid-cols-2 gap-px border border-gold/15 bg-gold/15">
            {certs.map((c) => (
              <div key={c} className="flex h-32 items-center justify-center bg-obsidian p-6 text-center">
                <span className="eyebrow text-gold/90">{c}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { q: "Aurum's execution discipline and vault transparency set a benchmark for our treasury operations.", a: "Head of Treasury", o: "European Private Bank" },
    { q: "Five years of flawless settlement. Their refining partners are the gold standard, literally.", a: "Managing Director", o: "GCC Investment House" },
    { q: "We trust Aurum with allocated custody for nine-figure positions. No other counterparty compares.", a: "CIO", o: "Asian Family Office" },
  ];
  return (
    <section className="bg-charcoal/30 py-32">
      <div className="container-luxury">
        <SectionHeader eyebrow="Client Testimonials" title={<>The word of those we <em className="text-gold-gradient not-italic">serve.</em></>} />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col border border-gold/15 bg-obsidian p-10">
                <div className="font-display text-6xl leading-none text-gold/40">“</div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ivory/90">{t.q}</blockquote>
                <figcaption className="mt-8 border-t border-gold/15 pt-5">
                  <div className="text-sm text-ivory">{t.a}</div>
                  <div className="eyebrow mt-1">{t.o}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSIGHTS ---------- */
function Insights() {
  const posts = [
    { t: "Gold's Role in the Post-Dollar Reserve Era", c: "Market Analysis", d: "12 min read" },
    { t: "How Central Banks Are Reshaping Demand in 2025", c: "Macro", d: "8 min read" },
    { t: "The Quiet Revolution in Responsible Sourcing", c: "Compliance", d: "10 min read" },
  ];
  return (
    <section className="container-luxury py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeader eyebrow="Latest Market Insights" title={<>Intelligence for the <em className="text-gold-gradient not-italic">institutional</em> investor.</>} />
        <GoldButton to="/insights" variant="outline">View All</GoldButton>
      </div>
      <div className="mt-16 grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.06}>
            <article className="group flex h-full flex-col bg-obsidian p-10">
              <div className="eyebrow">{p.c}</div>
              <h3 className="font-display mt-4 text-2xl leading-tight text-ivory transition-colors group-hover:text-gold">{p.t}</h3>
              <div className="mt-auto flex items-center justify-between border-t border-gold/15 pt-6 text-xs text-muted-foreground">
                <span>{p.d}</span>
                <ArrowUpRight className="h-4 w-4 text-gold" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-luxury-radial" />
      <div className="container-luxury">
        <div className="relative overflow-hidden border border-gold/25 bg-charcoal/40 p-12 md:p-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-gold" /> Begin a Mandate</p>
              <h2 className="font-display mt-6 text-4xl leading-[1.05] text-ivory md:text-6xl">
                Speak with a senior <em className="text-gold-gradient not-italic">precious metals</em> strategist.
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground">
                Confidential consultations available across all global trading desks. Response within one business day.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
              <GoldButton to="/contact">Request Consultation</GoldButton>
              <a href="#" className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-gold/90 hover:text-gold">
                <FileDown className="h-4 w-4" /> Download Company Profile
              </a>
              <a href="tel:+41225558800" className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-ivory/70 hover:text-gold">
                <Phone className="h-4 w-4" /> +41 22 555 8800
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
