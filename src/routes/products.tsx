import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader, GoldButton } from "@/components/site/Primitives";
import goldBar from "@/assets/gold-bar.jpg";
import goldCoins from "@/assets/gold-coins.jpg";
import heroGold from "@/assets/hero-gold.jpg";
import refining from "@/assets/refining.jpg";

const PRODUCTS = [
  {
    name: "Gold Bars",
    img: heroGold,
    desc: "LBMA Good Delivery gold bars in 400 oz, 1 kg, 100 g and 1 oz formats for institutional treasuries and wholesale distribution.",
    purity: "999.9 ‰",
    specs: ["400 oz / 12.4 kg London Good Delivery","1 kg cast & minted","100 g, 1 oz minted bars","Refiner-branded & custom hallmark"],
    apps: ["Central bank reserves","Institutional treasury","Wholesale distribution","ETF backing"],
    supply: "Continuous supply via Tier-1 Swiss refining partners. Minimum order 5 kg.",
  },
  {
    name: "Gold Bullion",
    img: goldBar,
    desc: "Investment-grade bullion in cast and minted formats, certified, serialised and assay-sealed.",
    purity: "999.9 ‰",
    specs: ["Cast & minted","Tamper-evident assay","Serialised certification","Refiner-traceable"],
    apps: ["Wealth preservation","Allocated vault holdings","Collateralised lending","Family office reserves"],
    supply: "Available ex-vault from Zürich, Singapore, Dubai and Delaware.",
  },
  {
    name: "Gold Coins",
    img: goldCoins,
    desc: "Sovereign-issued legal-tender bullion coins from the world's leading mints.",
    purity: "999.9 ‰ / 916.7 ‰",
    specs: ["1 oz, ½ oz, ¼ oz, 1/10 oz","Government mint origin","Sealed mint tubes","Monster boxes available"],
    apps: ["Retail distribution","Numismatic resale","Wealth gifting","Liquid bullion reserves"],
    supply: "Krugerrand, Maple, Britannia, Eagle, Philharmonic, Kangaroo and others.",
  },
  {
    name: "Refined Gold",
    img: refining,
    desc: "Bespoke refining of mined doré, scrap and recycled gold to investment-grade fineness with full assay certification.",
    purity: "Up to 999.9 ‰",
    specs: ["Doré refining","Scrap & recycled","Assay & analysis","Custom bar branding"],
    apps: ["Mine output refining","Jewellery scrap recovery","Industrial recycling","Bullion conversion"],
    supply: "Throughput capacity of 800 t/year via accredited refining partners.",
  },
  {
    name: "Precious Metals",
    img: heroGold,
    desc: "Beyond gold — silver, platinum and palladium in industrial and investment formats.",
    purity: "999 ‰ Ag · 999.5 ‰ Pt/Pd",
    specs: ["Silver 1000 oz bars","Platinum 1 kg bars","Palladium ingots","ETF-grade lots"],
    apps: ["Industrial users","Catalytic converters","Investment products","Hedging programmes"],
    supply: "Continuous supply across all four investment metals.",
  },
  {
    name: "Investment-Grade Gold",
    img: goldBar,
    desc: "VAT-free investment gold meeting all qualifying standards for institutional and high-net-worth allocations.",
    purity: "≥ 995 ‰",
    specs: ["VAT-exempt EU","HMRC qualifying","Allocated custody","Cross-border DvP"],
    apps: ["Pension allocation","SIPP / SMSF","Private wealth","Strategic reserves"],
    supply: "Settled into allocated custody within T+2.",
  },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Aurum Global Metals" },
      { name: "description", content: "Investment-grade gold bars, bullion, coins, refined gold and precious metals supplied to institutional clients." },
      { property: "og:title", content: "Precious Metals Products" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Bullion, bars and coins — <em className="text-gold-gradient not-italic">curated</em> for institutional supply.</>}
        description="Informational catalogue of Aurum's precious metal product capabilities. All transactions are conducted via private mandate."
        image={heroGold}
      />
      <section className="container-luxury py-24">
        <div className="space-y-24">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name}>
              <article className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i%2 ? "lg:[direction:rtl]" : ""}`}>
                <div className="relative lg:[direction:ltr]">
                  <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
                  <div className="glass-panel absolute bottom-6 left-6 p-4">
                    <div className="eyebrow">Purity</div>
                    <div className="font-display mt-1 text-3xl text-gold-gradient">{p.purity}</div>
                  </div>
                </div>
                <div className="lg:[direction:ltr]">
                  <div className="eyebrow">Category 0{i+1}</div>
                  <h2 className="font-display mt-3 text-5xl text-ivory">{p.name}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-ivory/80">{p.desc}</p>
                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    <Block label="Specifications" items={p.specs} />
                    <Block label="Applications" items={p.apps} />
                  </div>
                  <div className="mt-8 border-t border-gold/15 pt-6">
                    <div className="eyebrow">Supply Capability</div>
                    <p className="mt-2 text-muted-foreground">{p.supply}</p>
                  </div>
                  <div className="mt-8">
                    <GoldButton to="/contact" variant="outline">Enquire about {p.name}</GoldButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal/30 py-24">
        <div className="container-luxury text-center">
          <SectionHeader align="center" eyebrow="Private Mandate" title={<>All transactions handled <em className="text-gold-gradient not-italic">privately.</em></>}
            description="This page is informational. Aurum does not transact through e-commerce — every order is structured as a confidential institutional mandate." />
          <div className="mt-10"><GoldButton to="/contact">Open an Enquiry</GoldButton></div>
        </div>
      </section>
    </>
  );
}

function Block({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <ul className="mt-3 space-y-2 text-sm text-ivory/80">
        {items.map((i) => <li key={i} className="flex gap-2"><span className="mt-2 h-px w-3 bg-gold shrink-0"/>{i}</li>)}
      </ul>
    </div>
  );
}
