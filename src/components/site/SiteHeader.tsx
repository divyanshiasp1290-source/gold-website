import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    to: "/services",
    label: "Services",
    mega: [
      { to: "/services", label: "International Gold Trading", desc: "Spot & forward bullion execution" },
      { to: "/services", label: "Refining Solutions", desc: "LBMA-grade refining partners" },
      { to: "/services", label: "Secure Storage", desc: "Vaulting across global hubs" },
      { to: "/services", label: "Logistics & Distribution", desc: "Insured worldwide delivery" },
      { to: "/services", label: "Risk Management", desc: "Hedging & price risk advisory" },
      { to: "/services", label: "Market Intelligence", desc: "Institutional research" },
    ],
  },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/network", label: "Network" },
  { to: "/compliance", label: "Compliance" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/15 bg-obsidian/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rotate-45 border border-gold/60" />
              <div className="absolute inset-1.5 rotate-45 bg-gold-gradient" />
              <span className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-obsidian">A</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wide text-ivory">AURUM</div>
              <div className="eyebrow text-[9px]">Global Metals</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              "mega" in item ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setMega(true)}
                  onMouseLeave={() => setMega(false)}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 px-3 py-2 text-[12px] tracking-[0.2em] uppercase text-ivory/80 transition hover:text-gold"
                    activeProps={{ className: "text-gold" }}
                  >
                    {item.label} <ChevronDown className="h-3 w-3" />
                  </Link>
                  <AnimatePresence>
                    {mega && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                      >
                        <div className="glass-panel grid grid-cols-2 gap-1 p-4">
                          {item.mega.map((s) => (
                            <Link
                              key={s.label}
                              to={s.to}
                              className="group block rounded-sm p-3 transition hover:bg-gold/5"
                            >
                              <div className="text-sm text-ivory group-hover:text-gold">{s.label}</div>
                              <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-3 py-2 text-[12px] tracking-[0.2em] uppercase text-ivory/80 transition hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 border border-gold/20 px-3 py-2 text-[11px] tracking-[0.2em] uppercase text-ivory/70 hover:text-gold"
              >
                <Globe className="h-3 w-3" /> {lang}
              </button>
              {langOpen && (
                <div className="glass-panel absolute right-0 top-full mt-2 w-28 py-1">
                  {["EN", "FR", "DE", "AR", "ZH"].map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className="block w-full px-3 py-1.5 text-left text-xs text-ivory/80 hover:bg-gold/10 hover:text-gold"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="bg-gold-gradient px-5 py-3 text-[11px] font-medium tracking-[0.24em] uppercase text-obsidian transition hover:opacity-90"
            >
              Request Consultation
            </Link>
          </div>

          <button onClick={() => setOpen(true)} className="lg:hidden text-ivory">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-luxury flex h-20 items-center justify-between">
              <span className="font-display text-xl text-ivory">AURUM</span>
              <button onClick={() => setOpen(false)} className="text-ivory">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container-luxury mt-8 flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.to + n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-gold/10 py-4 font-display text-2xl text-ivory hover:text-gold"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 bg-gold-gradient px-5 py-4 text-center text-[11px] tracking-[0.28em] uppercase text-obsidian"
              >
                Request Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
