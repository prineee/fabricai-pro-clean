import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, ArrowLeft, ArrowUp, Mail, Clock, MessageSquare,
  CreditCard, Wrench, Users, UserCircle, ChevronRight, Send, CheckCircle,
} from "lucide-react";

// ─── SCROLL TO TOP ─────────────────────────────────────────────────────────────
function ScrollTopFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const toggle = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="fab"
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
            bg-gradient-to-br from-emerald-500 to-teal-400 text-slate-900
            flex items-center justify-center shadow-xl shadow-emerald-500/30"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── CONTACT CARD ─────────────────────────────────────────────────────────────
function ContactCard({ icon: Icon, label, value, href, color }: {
  icon: any; label: string; value: string; href?: string; color: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6
      hover:border-slate-600/60 hover:bg-slate-800/60 transition-all duration-300">
      <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">{label}</p>
        <p className="text-white font-semibold text-base">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : <div>{inner}</div>;
}

// ─── CATEGORY CARD ────────────────────────────────────────────────────────────
function CategoryCard({ icon: Icon, title, desc, color }: { icon: any; title: string; desc: string; color: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }} transition={{ duration: 0.2 }}
      className="bg-slate-800/30 border border-slate-700/40 rounded-2xl p-6
        hover:border-slate-600/60 transition-all duration-300 cursor-default"
    >
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon size={18} className="text-white" />
      </div>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-1.5 text-emerald-400 text-sm font-semibold">
        Get help <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", category: "general", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputCls =
    "w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-white " +
    "text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/60 " +
    "focus:bg-slate-800/80 transition-all";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 bg-slate-800/30 border border-slate-700/40 rounded-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 text-sm">
          We'll respond to <span className="text-emerald-400">{form.email}</span> within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", category: "general", message: "" }); }}
          className="mt-6 text-slate-500 text-sm hover:text-white transition-colors"
        >
          Send another message →
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/30 border border-slate-700/40 rounded-2xl p-6 sm:p-8 space-y-4">
      <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Name</label>
          <input type="text" required placeholder="Your full name"
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            className={inputCls} />
        </div>
        <div>
          <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Email</label>
          <input type="email" required placeholder="your@email.com"
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
            className={inputCls} />
        </div>
      </div>
      <div>
        <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Category</label>
        <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
          className={inputCls + " cursor-pointer"}>
          <option value="general">General Inquiry</option>
          <option value="billing">Billing Support</option>
          <option value="technical">Technical Support</option>
          <option value="affiliate">Affiliate Support</option>
          <option value="account">Account Assistance</option>
          <option value="refund">Refund Request</option>
        </select>
      </div>
      <div>
        <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Message</label>
        <textarea required rows={5} placeholder="Describe your issue or question in detail..."
          value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          className={inputCls + " resize-none"} />
      </div>
      <button type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl
          bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 font-bold
          hover:from-emerald-400 hover:to-teal-300 transition-all hover:scale-[1.01]
          shadow-lg shadow-emerald-500/20">
        <Send size={16} /> Send Message
      </button>
      <p className="text-slate-600 text-xs text-center">We respond within 24 business hours.</p>
    </form>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const RESPONSE_ROWS = [
  { type: "Billing & Payment Issues",  time: "Within 4 hours",    priority: "High",   dot: "bg-amber-400"   },
  { type: "Technical Support",         time: "Within 24 hours",   priority: "Normal", dot: "bg-emerald-400" },
  { type: "Account & Access Issues",   time: "Within 12 hours",   priority: "High",   dot: "bg-amber-400"   },
  { type: "Affiliate Support",         time: "Within 24 hours",   priority: "Normal", dot: "bg-emerald-400" },
  { type: "General Inquiries",         time: "Within 48 hours",   priority: "Normal", dot: "bg-emerald-400" },
  { type: "Refund Requests",           time: "3–5 business days", priority: "Normal", dot: "bg-blue-400"    },
];

const CATEGORIES = [
  { icon: CreditCard, title: "Billing Support",    color: "bg-violet-600", desc: "Subscription management, charges, upgrades, downgrades, and payment issues." },
  { icon: Wrench,     title: "Technical Support",  color: "bg-blue-600",   desc: "Platform bugs, feature issues, calculation errors, and integration problems." },
  { icon: Users,      title: "Affiliate Support",  color: "bg-orange-600", desc: "Commission tracking, affiliate links, marketing assets, and payout queries."  },
  { icon: UserCircle, title: "Account Assistance", color: "bg-pink-600",   desc: "Account access, password resets, data export, and security concerns."         },
];

const LEGAL_NAV = [
  { label: "Terms",               href: "/terms"               },
  { label: "Privacy Policy",      href: "/privacy"             },
  { label: "Refund Policy",       href: "/refund-policy"       },
  { label: "Earnings Disclaimer", href: "/earnings-disclaimer" },
  { label: "Affiliate Terms",     href: "/affiliate-terms"     },
];

export default function Support() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased">
      <ScrollTopFab />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-[100] bg-slate-950/85 border-b border-slate-800/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
              <Zap size={13} className="text-slate-900" />
            </div>
            <span className="font-black text-[15px] text-white">FabricAI <span className="text-emerald-400">Pro</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {LEGAL_NAV.map(l => (
              <Link key={l.href} to={l.href}
                className="px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800/60 text-xs font-medium transition-all">
                {l.label}
              </Link>
            ))}
          </nav>
          <Link to="/"
            className="flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-lg
              border border-slate-700/60 text-slate-400 hover:text-white hover:border-slate-500 text-sm font-medium transition-all">
            <ArrowLeft size={13} /> Home
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.07),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}>
            <div className="w-16 h-16 rounded-2xl bg-teal-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <MessageSquare size={28} className="text-white" />
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full
              bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-5">
              Customer Support · We're Here to Help
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Support Center</h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
              Get help with billing, technical issues, your account, or the affiliate program.
              We respond within 24 hours.
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl
              bg-slate-800/60 border border-slate-700/50 text-slate-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              Support is online · Mon–Sat · 10 AM – 7 PM IST
            </div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-28 space-y-14">

        {/* ── QUICK CONTACT ── */}
        <div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-white font-bold text-xl mb-5">
            Quick Contact
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Mail,  label: "Email Support",  color: "bg-emerald-600", value: "support@fabricaipro.com",       href: "mailto:support@fabricaipro.com" },
              { icon: Clock, label: "Business Hours",  color: "bg-slate-600",   value: "Mon – Sat · 10 AM – 7 PM IST", href: undefined },
            ].map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}>
                <ContactCard {...c} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CATEGORIES ── */}
        <div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-white font-bold text-xl mb-5">
            Support Categories
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {CATEGORIES.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <CategoryCard {...c} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RESPONSE TIMES ── */}
        <div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-white font-bold text-xl mb-5">
            Expected Response Times
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-slate-800/30 border border-slate-700/40 rounded-2xl overflow-hidden">
            {RESPONSE_ROWS.map((row, i) => (
              <div key={row.type}
                className={`flex items-center justify-between px-6 py-4 gap-4 ${i > 0 ? "border-t border-slate-700/40" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${row.dot}`} />
                  <span className="text-slate-300 text-sm">{row.type}</span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    row.priority === "High"
                      ? "bg-amber-500/10 text-amber-400"
                      : "bg-slate-700/50 text-slate-400"
                  }`}>{row.priority}</span>
                  <span className="text-emerald-400 text-sm font-medium">{row.time}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── CONTACT FORM ── */}
        <div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-white font-bold text-xl mb-5">
            Send a Message
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <ContactForm />
          </motion.div>
        </div>

        {/* ── BOTTOM NAV ── */}
        <div className="pt-8 border-t border-slate-800/60">
          <p className="text-slate-500 text-sm font-medium mb-4">Legal Pages</p>
          <div className="flex flex-wrap gap-2">
            {LEGAL_NAV.map(l => (
              <Link key={l.href} to={l.href}
                className="px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/40
                  text-slate-400 hover:text-white hover:border-slate-600 text-sm font-medium transition-all">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-slate-600 text-sm">© 2025 FabricAI Pro. All rights reserved.</p>
            <Link to="/" className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors">
              <ArrowLeft size={13} /> Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
