import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="relative mt-32 border-t border-gold/15 bg-charcoal/40">
      <div className="container-luxury py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rotate-45 border border-gold/60" />
                <div className="absolute inset-1.5 rotate-45 bg-gold-gradient" />
                <span className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-obsidian">A</span>
              </div>
              <div>
                <div className="font-display text-xl text-ivory">AQVEST TRADING LIMITED</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A trusted international partner in physical gold trading, bullion supply, refining and precious metals
              solutions for banks, institutions and global enterprises.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center border border-gold/25 text-gold/80 transition hover:bg-gold hover:text-obsidian">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow">Company</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              {[['/','Home'],['/about','About'],['/network','Global Network'],['/products','Products'],['/compliance','Compliance'],['/contact','Contact']].map(([to,l]) => (

                <li key={to}><Link to={to} className="hover:text-gold">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow">Services</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              {["Gold Trading","Refining","Storage","Logistics","Risk Mgmt"].map((l) => (
                <li key={l}><Link to="/services" className="hover:text-gold">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="eyebrow">Stay Informed</div>
            <p className="mt-5 text-sm text-muted-foreground">Quarterly market intelligence delivered to institutional inboxes.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); if(email) { setDone(true); setEmail(""); } }}
              className="mt-4 flex border border-gold/25 bg-obsidian/40"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Corporate email"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-muted-foreground/60 outline-none"
              />
              <button className="bg-gold-gradient px-5 text-[11px] tracking-[0.24em] uppercase text-obsidian">
                Subscribe
              </button>
            </form>
            {done && <p className="mt-2 text-xs text-gold">Thank you — confirmation sent.</p>}

            <ul className="mt-6 space-y-2 text-sm text-ivory/70">
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /> aquesttradinglimited@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> +232-72-436-895</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" /> Freetown, Sierra Leone</li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mt-16" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} AQVEST TRADING LIMITED. All rights reserved.</span>
          <span className="tracking-[0.24em] uppercase">Bullion · Trading · Refining · Custody</span>
        </div>
      </div>
    </footer>
  );
}
