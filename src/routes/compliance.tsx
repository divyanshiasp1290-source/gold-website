import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader, GoldButton } from "@/components/site/Primitives";
import { ShieldCheck, FileCheck, Scale, Leaf, Globe2, BookCheck } from "lucide-react";
import vaultImg from "@/assets/vault.jpg";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance & Certifications — Aurum Global Metals" },
      { name: "description", content: "Aurum operates under LBMA, OECD, AML5, KYC and Responsible Gold standards with full chain-of-custody compliance." },
      { property: "og:title", content: "Compliance & Certifications" },
      { property: "og:url", content: "/compliance" },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
  }),
  component: CompliancePage,
});

function CompliancePage() {
  const pillars = [
    { icon: Leaf, t: "Responsible Sourcing", d: "OECD due-diligence framework across the full upstream supply chain; ASGM partnerships with audited cooperatives." },
    { icon: ShieldCheck, t: "AML Compliance", d: "AML5-aligned programme with transaction surveillance, SAR protocols and ongoing counterparty monitoring." },
    { icon: FileCheck, t: "KYC Standards", d: "Tier-1 institutional KYC, UBO disclosure, sanctions screening and politically exposed person reviews." },
    { icon: Scale, t: "International Regulation", d: "Compliance with EU AML5, FATF, OFAC, UK Sanctions, DMCC, MAS and national bullion authorities." },
    { icon: BookCheck, t: "Industry Certifications", d: "Aligned with LBMA Responsible Gold Guidance, RJC CoC, Dubai Good Delivery and ISO 9001:2015." },
    { icon: Globe2, t: "Chain of Custody", d: "Every bar traceable from refinery to vault with serialised assay and immutable audit log." },
  ];
  return (
    <>
      <PageHero eyebrow="Compliance & Certifications"
        title={<>Held to the standard of the world's <em className="text-gold-gradient not-italic">central banks.</em></>}
        description="Six pillars of governance underpin every Aurum transaction."
        image={vaultImg} />

      <section className="container-luxury py-24">
        <div className="grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Reveal key={p.t}>
              <div className="bg-obsidian p-10">
                <p.icon className="h-10 w-10 text-gold" strokeWidth={1.2} />
                <h3 className="font-display mt-6 text-2xl text-ivory">{p.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal/30 py-24">
        <div className="container-luxury">
          <SectionHeader eyebrow="Certifications" title={<>The badges that <em className="text-gold-gradient not-italic">protect your mandate.</em></>} />
          <div className="mt-12 grid grid-cols-2 gap-px border border-gold/15 bg-gold/15 md:grid-cols-3 lg:grid-cols-6">
            {["LBMA","OECD","ISO 9001","RJC","DMCC","AML5"].map((c) => (
              <div key={c} className="grid h-36 place-items-center bg-obsidian">
                <div className="text-center">
                  <div className="font-display text-2xl text-gold-gradient">{c}</div>
                  <div className="mt-2 eyebrow text-[9px]">Aligned</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxury py-24 text-center">
        <SectionHeader align="center" eyebrow="Documentation" title={<>Compliance documentation on <em className="text-gold-gradient not-italic">request.</em></>}
          description="Full policy library available to KYC-verified institutional clients under NDA." />
        <div className="mt-10"><GoldButton to="/contact">Request Compliance Pack</GoldButton></div>
      </section>
    </>
  );
}
