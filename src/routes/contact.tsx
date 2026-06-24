import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeader } from "@/components/site/Primitives";
import { useMemo, useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

import { WEB3FORMS_ACCESS_KEY } from "./web3forms";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aurum Global Metals" },
      { name: "description", content: "Speak with Aurum Global Metals. Offices in Geneva, Dubai, Singapore and London. Confidential institutional consultations." },
      { property: "og:title", content: "Contact Aurum Global Metals" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fields = useMemo(
    () => [
      { key: "name", label: "Full name" },
      { key: "org", label: "Organisation" },
      { key: "email", label: "Corporate Email" },
      { key: "phone", label: "Phone" },
      { key: "country", label: "Country" },
      { key: "type", label: "Inquiry Type" },
      { key: "message", label: "Message" },
    ],
    []
  );

  return (
    <>
      <PageHero eyebrow="Contact"
        title={<>Begin a confidential <em className="text-gold-gradient not-italic">consultation.</em></>}
        description="A senior member of our trading desk will respond within one business day." />


      <section className="container-luxury py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitError(null);

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const getRequired = (key: string) => {
                    const v = formData.get(key);
                    if (typeof v !== "string") return "";
                    return v.trim();
                  };

                  const requiredKeys = [
                    "name",
                    "org",
                    "email",
                    "phone",
                    "country",
                    "type",
                    "message",
                  ];

                  for (const k of requiredKeys) {
                    if (!getRequired(k)) {
                      setSubmitError(`Please enter ${k}.`);
                      return;
                    }
                  }

                  // Basic email validation (keep UI unchanged; rely on native required + this extra check)
                  const email = getRequired("email");
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setSubmitError("Please enter a valid corporate email.");
                    return;
                  }

                  try {
                    const payload = {
                      access_key: WEB3FORMS_ACCESS_KEY,
                      name: getRequired("name"),
                      org: getRequired("org"),
                      email: email,
                      phone: getRequired("phone"),
                      country: getRequired("country"),
                      type: getRequired("type"),
                      message: getRequired("message"),
                    };

                    const res = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(payload),
                    });

                    if (!res.ok) {
                      setSubmitError("Submission failed. Please try again.");
                      return;
                    }

                    // Success
                    setSent(true);
                    form.reset();
                  } catch {
                    setSubmitError("Submission failed. Please try again.");
                  }
                }}
                className="border border-gold/20 bg-charcoal/40 p-10"
              >

                <h3 className="font-display text-3xl text-ivory">Institutional Enquiry</h3>
                <p className="mt-2 text-muted-foreground">All fields confidential. Used solely to route your enquiry.</p>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Organisation" name="org" />
                  <Field label="Corporate email" name="email" type="email" />
                  <Field label="Phone" name="phone" />
                  <Field label="Country" name="country" />
                  <Select label="Inquiry type" name="type" options={["General","Gold Trading","Refining","Custody","Compliance","Partnership"]} />
                </div>
                <div className="mt-5">
                  <label className="eyebrow block">Message</label>
                  <textarea required rows={5} name="message" className="mt-2 w-full border border-gold/25 bg-obsidian/60 px-4 py-3 text-ivory outline-none focus:border-gold" />
                </div>
                <button type="submit" disabled={sent}
                  className="mt-8 inline-flex items-center gap-3 bg-gold-gradient px-7 py-4 text-[11px] tracking-[0.28em] uppercase text-obsidian transition hover:opacity-90 disabled:opacity-60">
                  {sent ? "Enquiry Received" : <>Submit Enquiry <Send className="h-3.5 w-3.5"/></>}
                </button>

                {submitError && <p className="mt-3 text-sm text-destructive">{submitError}</p>}
                {sent && <p className="mt-3 text-sm text-gold">Thank you — we received your request. Our team will contact you shortly.</p>}

              </form>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-gold/20 bg-obsidian p-10">
                <h3 className="font-display text-3xl text-ivory">Trading Desk</h3>
                <ul className="mt-6 space-y-4 text-sm text-ivory/85">
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold"/> aquesttradinglimited@gmail.com</li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold"/> +232-72-436-895</li>
                  <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-gold"/> 24/6 — Mon 10:00 → Sat 10:00</li>
                  <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-4 w-4 text-gold"/> WhatsApp: +232-72-436-895</li>
                </ul>
                <a href="https://wa.me/23272436895" target="_blank" rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 border border-gold/40 px-6 py-4 text-[11px] tracking-[0.28em] uppercase text-gold transition hover:bg-gold hover:text-obsidian">
                  <MessageCircle className="h-4 w-4"/> Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 grid grid-cols-2 gap-px border border-gold/15 bg-gold/15">
                {[
                  ["Geneva", "Quai du Mont-Blanc 17"],
                  ["Dubai", "DMCC, Almas Tower L48"],
                  ["Singapore", "Marina Bay Financial Centre"],
                  ["London", "1 King William Street, EC4N"],
                ].map(([c,a]) => (
                  <div key={c} className="bg-obsidian p-5">
                    <div className="eyebrow flex items-center gap-2"><MapPin className="h-3 w-3"/>{c}</div>
                    <div className="mt-2 text-sm text-ivory/85">{a}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-luxury pb-24">
        <SectionHeader eyebrow="Map" title={<>Our <em className="text-gold-gradient not-italic">Freetown</em>, <span className="not-italic">Sierra Leone</span> headquarters.</>} />
        <Reveal>
          <div className="mt-10 overflow-hidden border border-gold/20">
            <iframe
              title="Aurum Geneva HQ"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-13.3777%2C8.3774%2C-13.2926%2C8.4854&layer=mapnik&marker=8.4610%2C-13.2960"
              className="h-[460px] w-full grayscale invert-[0.9] hue-rotate-180"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      {/* Floating WhatsApp handled globally by WhatsAppChatIcon */}
    </>
  );
}


function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow block">{label}</label>
      <input required type={type} name={name}
        className="mt-2 w-full border border-gold/25 bg-obsidian/60 px-4 py-3 text-ivory outline-none focus:border-gold" />
    </div>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="eyebrow block">{label}</label>
      <select name={name} className="mt-2 w-full border border-gold/25 bg-obsidian/60 px-4 py-3 text-ivory outline-none focus:border-gold">
        {options.map(o => <option key={o} className="bg-obsidian">{o}</option>)}
      </select>
    </div>
  );
}
