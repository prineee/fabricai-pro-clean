import { useState, useEffect, type ReactNode, type ElementType } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowLeft, ArrowUp, ChevronRight } from "lucide-react";

const LEGAL_NAV = [
  { label: "Terms",               href: "/terms"               },
  { label: "Privacy Policy",      href: "/privacy"             },
  { label: "Refund Policy",       href: "/refund-policy"       },
  { label: "Earnings Disclaimer", href: "/earnings-disclaimer" },
  { label: "Affiliate Terms",     href: "/affiliate-terms"     },
  { label: "Support",             href: "/support"             },
];

// ─── READING PROGRESS BAR ─────────────────────────────────────────────────────
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 z-[210] h-[3px] bg-slate-800/80">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
        style={{ width: `${pct}%`, transition: "width 60ms linear" }}
      />
    </div>
  );
}

// ─── SCROLL-TO-TOP FAB ────────────────────────────────────────────────────────
function ScrollTopFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const toggle = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="fab"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
            bg-gradient-to-br from-emerald-500 to-teal-400 text-slate-900
            flex items-center justify-center shadow-xl shadow-emerald-500/30
            hover:shadow-emerald-500/50 transition-shadow"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── EXPORTED REUSABLE COMPONENTS ─────────────────────────────────────────────

/** Numbered section card */
export function PolicySection({
  number, title, children,
}: { number: number | string; title: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className="group bg-slate-800/30 border border-slate-700/40 rounded-2xl p-6 sm:p-8
        hover:border-slate-600/60 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20
          flex items-center justify-center mt-0.5">
          <span className="text-emerald-400 text-sm font-black">{number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-white font-bold text-lg mb-3 leading-snug">{title}</h2>
          <div className="text-slate-400 text-[15px] leading-relaxed space-y-3">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/** Bullet list inside a PolicySection */
export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <ChevronRight size={13} className="text-emerald-400 flex-shrink-0 mt-[3px]" />
          <span className="text-slate-400 text-[15px]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Highlighted info box */
export function PolicyNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 px-4 py-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
      <p className="text-slate-300 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

// ─── MAIN LAYOUT ──────────────────────────────────────────────────────────────
interface LegalLayoutProps {
  title:       string;
  badge:       string;
  Icon:        ElementType;
  iconBg:      string;
  lastUpdated: string;
  description: string;
  children:    ReactNode;
}

export default function LegalLayout({
  title, badge, Icon, iconBg, lastUpdated, description, children,
}: LegalLayoutProps) {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased">
      <ReadingProgress />
      <ScrollTopFab />

      {/* ── STICKY HEADER ── */}
      <header className="sticky top-[3px] z-[100] bg-slate-950/85 border-b border-slate-800/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
              <Zap size={13} className="text-slate-900" />
            </div>
            <span className="font-black text-[15px] text-white">
              FabricAI <span className="text-emerald-400">Pro</span>
            </span>
          </Link>

          {/* Nav links — hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
            {LEGAL_NAV.map(l => (
              <Link key={l.href} to={l.href}
                className="px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800/60
                  text-xs font-medium transition-all whitespace-nowrap">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Back button */}
          <Link to="/"
            className="flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-lg
              border border-slate-700/60 text-slate-400 hover:text-white hover:border-slate-500
              text-sm font-medium transition-all">
            <ArrowLeft size={13} /> Home
          </Link>
        </div>
      </header>

      {/* ── PAGE HERO ── */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(16,185,129,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mx-auto mb-6 shadow-xl`}>
              <Icon size={28} className="text-white" />
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full
              bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-5">
              {badge}
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              {title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
              {description}
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl
              bg-slate-800/60 border border-slate-700/50 text-slate-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-28">
        <div className="space-y-4">{children}</div>

        {/* ── BOTTOM LEGAL NAV ── */}
        <div className="mt-20 pt-8 border-t border-slate-800/60">
          <p className="text-slate-500 text-sm font-medium mb-4">Other Legal Pages</p>
          <div className="flex flex-wrap gap-2">
            {LEGAL_NAV.map(l => (
              <Link key={l.href} to={l.href}
                className="px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/40
                  text-slate-400 hover:text-white hover:border-slate-600 text-sm font-medium transition-all">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">© 2025 FabricAI Pro. All rights reserved.</p>
            <Link to="/"
              className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors">
              <ArrowLeft size={13} /> Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
