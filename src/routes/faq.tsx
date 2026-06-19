import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader, GoldButton } from "@/components/site/Primitives";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "What is the minimum order size for institutional clients?", a: "Aurum's minimum trade size is 5 kg of gold or equivalent for new institutional clients, with no upper limit. Custom mandates and smaller pilots can be discussed for qualified counterparties." },
  { q: "Where are your vaults located?", a: "We operate allocated and segregated vault custody at Tier-1 facilities in Zürich, Singapore, Dubai and Delaware, with independent annual audit and full Lloyd's of London insurance." },
  { q: "How do you ensure responsible sourcing?", a: "Every supplier is screened under the OECD Due Diligence Guidance and the LBMA Responsible Gold Guidance, with full chain-of-custody documentation from refinery to vault." },
  { q: "Do you provide allocated or unallocated custody?", a: "Both. We strongly recommend allocated and segregated holdings for institutional balance-sheet positions, with serialised bar-level documentation." },
  { q: "Which benchmarks do you trade against?", a: "We execute against the LBMA AM/PM fix, COMEX active month, Shanghai Gold Benchmark and bilateral spot quoting — whichever best fits the mandate." },
  { q: "What is your settlement standard?", a: "Standard settlement is T+2 on physical, with DvP options across leading securities depositories. Cash settlement is available in USD, EUR, CHF, GBP, AED and SGD." },
  { q: "Can you accommodate refining of mined doré?", a: "Yes. Through our Swiss refining partners we offer end-to-end doré refining, assay and minting up to 999.9 fineness with custom branding." },
  { q: "How do you handle KYC and onboarding?", a: "We operate a Tier-1 institutional KYC programme with full UBO disclosure, sanctions screening and ongoing monitoring. Onboarding typically completes within 5–10 business days." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Aurum Global Metals" },
      { name: "description", content: "Frequently asked questions about Aurum Global Metals — gold trading, vaulting, refining, sourcing and institutional onboarding." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(f => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="Frequently Asked"
        title={<>Answers for the <em className="text-gold-gradient not-italic">institutional</em> counterparty.</>}
        description="The questions our prospective clients ask most often, answered candidly." />
      <section className="container-luxury py-24">
        <div className="mx-auto max-w-3xl divide-y divide-gold/15 border-y border-gold/15">
          {FAQS.map((f, i) => (
            <Reveal key={f.q}>
              <div>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left transition hover:text-gold">
                  <h3 className="font-display text-2xl text-ivory">{f.q}</h3>
                  <span className="mt-1 shrink-0 text-gold">{open === i ? <Minus className="h-5 w-5"/> : <Plus className="h-5 w-5"/>}</span>
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ${open === i ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`}>
                  <div className="min-h-0"><p className="pr-12 leading-relaxed text-muted-foreground">{f.a}</p></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-charcoal/30 py-20">
        <div className="container-luxury text-center">
          <SectionHeader align="center" eyebrow="Still have questions?" title={<>Speak directly with a <em className="text-gold-gradient not-italic">strategist.</em></>} />
          <div className="mt-10"><GoldButton to="/contact">Contact Our Team</GoldButton></div>
        </div>
      </section>
    </>
  );
}
