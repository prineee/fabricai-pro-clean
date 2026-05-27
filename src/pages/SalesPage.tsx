import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import {
  Zap, BarChart3, Scissors, FileText, Mail, Factory,
  CheckCircle, XCircle, ChevronDown, ChevronUp, Star,
  Shield, Clock, Users, TrendingUp, Calculator, Layers,
  ArrowRight, Play, Menu, X, AlertTriangle, DollarSign,
  Cpu, Database, Globe, Award, Package, Target
} from "lucide-react";

// ─── AFFILIATE CONFIG ────────────────────────────────────────────────────────
const AFFILIATE_BASE = "https://www.fabricaipro.com/";
function affLink(path = "") {
  return `${AFFILIATE_BASE}${path}?affiliate={{affiliate_id}}`;
}

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardHover = { scale: 1.025, y: -4, transition: { duration: 0.25 } };

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
function Section({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── BADGE ────────────────────────────────────────────────────────────────────
function Badge({ children, color = "emerald" }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    violet:  "bg-violet-500/10  text-violet-400  border-violet-500/20",
    amber:   "bg-amber-500/10   text-amber-400   border-amber-500/20",
    blue:    "bg-blue-500/10    text-blue-400    border-blue-500/20",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${colors[color]}`}>
      {children}
    </span>
  );
}

// ─── GRADIENT BUTTON ──────────────────────────────────────────────────────────
function GradientBtn({ href, children, size = "md", onClick }: {
  href?: string; children: React.ReactNode; size?: "sm" | "md" | "lg"; onClick?: () => void;
}) {
  const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3.5 text-base", lg: "px-9 py-4.5 text-lg" };
  const cls = `inline-flex items-center gap-2 font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400
    text-slate-900 hover:from-emerald-400 hover:to-teal-300 transition-all duration-200
    shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.03] active:scale-[0.98] ${sizes[size]}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

function OutlineBtn({ href, children, size = "md" }: { href?: string; children: React.ReactNode; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3.5 text-base", lg: "px-9 py-4 text-lg" };
  const cls = `inline-flex items-center gap-2 font-semibold rounded-xl border border-slate-600 text-slate-300
    hover:border-emerald-500 hover:text-emerald-400 transition-all duration-200 ${sizes[size]}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

// ─── FEATURE CARD ─────────────────────────────────────────────────────────────
function FeatureCard({ icon: Icon, title, desc, color }: { icon: any; title: string; desc: string; color: string }) {
  return (
    <motion.div variants={fadeUp} whileHover={cardHover}
      className="group relative bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300" />
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 h-28 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center">
        <span className="text-slate-600 text-xs font-mono">[ {title} UI ]</span>
      </div>
    </motion.div>
  );
}

// ─── PAIN CARD ────────────────────────────────────────────────────────────────
function PainCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ scale: 1.02, y: -2 }}
      className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex gap-4 items-start">
      <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={18} className="text-red-400" />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── TESTIMONIAL CARD ─────────────────────────────────────────────────────────
function TestiCard({ name, role, company, text, rating = 5 }: {
  name: string; role: string; company: string; text: string; rating?: number;
}) {
  return (
    <motion.div variants={fadeUp} whileHover={cardHover}
      className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-sm">
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed italic">"{text}"</p>
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-slate-700/50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-slate-900 font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-slate-400 text-xs">{role} · {company}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border border-slate-700/60 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-4 px-6 py-4 text-left bg-slate-800/40 hover:bg-slate-800/70 transition-colors">
        <span className="text-white font-semibold text-sm">{q}</span>
        <span className="flex-shrink-0 text-emerald-400">{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="px-6 py-4 text-slate-400 text-sm leading-relaxed bg-slate-900/40">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── PRICING CARD ─────────────────────────────────────────────────────────────
function PricingCard({ plan, price, period, desc, features, cta, highlight, color }: {
  plan: string; price: string; period: string; desc: string;
  features: string[]; cta: string; highlight?: boolean; color: string;
}) {
  return (
    <motion.div variants={fadeUp} whileHover={cardHover}
      className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
        highlight
          ? "border-2 border-emerald-500 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl shadow-emerald-500/20"
          : "border border-slate-700/60 bg-slate-800/50"
      }`}>
      {highlight && (
        <div className="bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 text-xs font-black text-center py-2 tracking-wider">
          MOST POPULAR — BEST VALUE
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        <Badge color={color === "emerald" ? "emerald" : color === "violet" ? "violet" : "blue"}>{plan}</Badge>
        <div className="mt-5 mb-1">
          <span className="text-4xl font-black text-white">{price}</span>
          <span className="text-slate-400 text-sm ml-1">/{period}</span>
        </div>
        <p className="text-slate-400 text-sm mb-6">{desc}</p>
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
        <a href={affLink("register")}
          className={`w-full py-3.5 rounded-xl font-bold text-center transition-all duration-200 hover:scale-[1.02] ${
            highlight
              ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 shadow-lg shadow-emerald-500/25"
              : "border border-slate-600 text-white hover:border-emerald-500 hover:text-emerald-400"
          }`}>
          {cta}
        </a>
      </div>
    </motion.div>
  );
}

// ─── DEMO CALCULATOR ──────────────────────────────────────────────────────────
function DemoCalculator() {
  const [gsm, setGsm] = useState(180);
  const [width, setWidth] = useState(150);
  const [length, setLength] = useState(72);
  const [qty, setQty] = useState(1000);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<null | { consumption: number; marker: number; cost: number }>(null);

  function calculate() {
    setRunning(true);
    setResult(null);
    setTimeout(() => {
      const consumption = ((length * width) / 10000) * 1.08;
      const marker = 92 - Math.random() * 4;
      const cost = consumption * qty * (gsm / 1000) * 0.45;
      setResult({ consumption: +consumption.toFixed(3), marker: +marker.toFixed(1), cost: +cost.toFixed(0) });
      setRunning(false);
    }, 1200);
  }

  return (
    <motion.div variants={fadeUp}
      className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden backdrop-blur-sm">
      <div className="bg-slate-900/80 border-b border-slate-700/60 px-6 py-4 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>
        <span className="text-slate-400 text-xs font-mono">FabricAI Pro — Consumption Calculator</span>
      </div>
      <div className="p-6 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Inputs</p>
          {[
            { label: "Fabric GSM", value: gsm, set: setGsm, min: 80, max: 400, unit: "g/m²" },
            { label: "Fabric Width", value: width, set: setWidth, min: 100, max: 240, unit: "cm" },
            { label: "Garment Length", value: length, set: setLength, min: 30, max: 140, unit: "cm" },
            { label: "Order Quantity", value: qty, set: setQty, min: 100, max: 50000, unit: "pcs" },
          ].map(({ label, value, set, min, max, unit }) => (
            <div key={label}>
              <div className="flex justify-between mb-1.5">
                <label className="text-slate-400 text-xs">{label}</label>
                <span className="text-emerald-400 text-xs font-mono font-bold">{value} {unit}</span>
              </div>
              <input type="range" min={min} max={max} value={value}
                onChange={e => set(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer" />
            </div>
          ))}
          <button onClick={calculate} disabled={running}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 font-bold text-sm hover:from-emerald-400 hover:to-teal-300 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
            {running ? (
              <><span className="inline-block w-4 h-4 border-2 border-slate-900/40 border-t-slate-900 rounded-full animate-spin" /> Calculating...</>
            ) : (
              <><Calculator size={16} /> Calculate Now</>
            )}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Results</p>
          {[
            { label: "Fabric Consumption", value: result ? `${result.consumption} m/pc` : "—", color: "emerald" },
            { label: "Marker Efficiency", value: result ? `${result.marker}%` : "—", color: "teal" },
            { label: "Total Fabric Cost", value: result ? `₹${result.cost.toLocaleString()}` : "—", color: "amber" },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4">
              <p className="text-slate-500 text-xs mb-1">{label}</p>
              <AnimatePresence mode="wait">
                <motion.p key={value} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className={`text-2xl font-black font-mono ${color === "amber" ? "text-amber-400" : color === "teal" ? "text-teal-400" : "text-emerald-400"}`}>
                  {value}
                </motion.p>
              </AnimatePresence>
            </div>
          ))}
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-2">Savings vs Manual</p>
            <div className="flex gap-2">
              <div className="flex-1 bg-red-500/20 rounded-lg p-2 text-center">
                <p className="text-red-400 text-xs">Manual</p>
                <p className="text-red-300 text-sm font-bold">~3 hrs</p>
              </div>
              <div className="flex-1 bg-emerald-500/20 rounded-lg p-2 text-center">
                <p className="text-emerald-400 text-xs">AI</p>
                <p className="text-emerald-300 text-sm font-bold">2 sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── EXIT INTENT POPUP ────────────────────────────────────────────────────────
function ExitPopup({ onClose }: { onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
          <X size={20} />
        </button>
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mx-auto mb-4">
            <Zap size={28} className="text-slate-900" />
          </div>
          <Badge color="amber">Wait — Don't Leave Yet!</Badge>
          <h3 className="text-2xl font-black text-white mt-4 mb-2">Get 14 Days Free</h3>
          <p className="text-slate-400 text-sm mb-6">
            Start your free trial with full PRO access. No credit card required. Cancel anytime.
          </p>
          <a href={affLink("register")} onClick={onClose}
            className="block w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 font-black text-base hover:from-emerald-400 hover:to-teal-300 transition-all hover:scale-[1.02]">
            Claim My Free Trial →
          </a>
          <button onClick={onClose} className="mt-3 text-slate-500 text-xs hover:text-slate-300 transition-colors">
            No thanks, I'll calculate fabric manually.
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function SalesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !popupShown) {
        setShowPopup(true);
        setPopupShown(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [popupShown]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Demo", href: "#demo" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const painPoints = [
    { icon: AlertTriangle, title: "Excel Calculation Errors", desc: "Manual spreadsheets cause wrong fabric orders costing thousands in excess inventory or production stops." },
    { icon: Scissors, title: "High Fabric Wastage", desc: "Without AI marker efficiency, factories waste 8–15% more fabric than optimal, eating directly into margins." },
    { icon: DollarSign, title: "Inaccurate Costing", desc: "Wrong consumption numbers lead to underquoting buyers, turning profitable orders into losses." },
    { icon: Clock, title: "Slow Production Planning", desc: "Hours spent on BOM and style documentation delay production start and miss buyer deadlines." },
    { icon: AlertTriangle, title: "Communication Gaps", desc: "Miscommunication between production, sourcing, and buyers causes rework, penalties, and chargebacks." },
  ];

  const features = [
    { icon: Calculator, title: "AI Consumption Calculator", desc: "Instantly calculate exact fabric requirements using GSM, width, measurements, and wastage — powered by AI.", color: "bg-emerald-600" },
    { icon: Layers, title: "Style Master", desc: "Centralize all style data — buyer, techpack, fabric specs, images, and marker details in one searchable system.", color: "bg-violet-600" },
    { icon: Cpu, title: "AI Workspace", desc: "Upload garment files, images, or data and generate comprehensive costing, BOM, and production notes instantly.", color: "bg-blue-600" },
    { icon: Package, title: "BOM Generator", desc: "Auto-generate detailed bill of materials including fabric, trim, accessories, and packing requirements.", color: "bg-orange-600" },
    { icon: Mail, title: "Buyer Email Generator", desc: "Generate professional buyer quotation emails with costing breakdowns in seconds. Close deals faster.", color: "bg-pink-600" },
    { icon: BarChart3, title: "Production Dashboard", desc: "Real-time visibility into style status, consumption targets, and factory KPIs across all orders.", color: "bg-teal-600" },
  ];

  const testimonials = [
    { name: "Rajesh Mehta", role: "Managing Director", company: "Mehta Exports Ltd", text: "We used to spend 3 hours per style on consumption calculations. FabricAI Pro does it in seconds. We've saved over ₹8 lakhs in fabric waste in the first 3 months alone.", rating: 5 },
    { name: "Priya Sundaram", role: "Production Manager", company: "Chennai Apparel House", text: "The Style Master has completely replaced our Excel chaos. Now every buyer, every style, every techpack is organized and searchable. Our costing accuracy improved by 40%.", rating: 5 },
    { name: "Mohammed Farooq", role: "Factory Owner", company: "Farooq Garments, Tirupur", text: "As an exporter dealing with 50+ buyers, the buyer email generator alone saves me 2 hours daily. Professional quotations in seconds — buyers love the clarity.", rating: 5 },
    { name: "Deepa Krishnaswamy", role: "Costing Head", company: "SKD Manufacturing", text: "Finally an ERP built for garment factories not generic businesses. The AI understands GSM, shrinkage, marker efficiency. It speaks our language.", rating: 5 },
    { name: "Arjun Nair", role: "Sourcing Manager", company: "Nair Textiles Pvt Ltd", text: "The multi-factory Agency plan is incredible value. Managing 6 factories from one dashboard was our biggest pain point. FabricAI Pro solved it completely.", rating: 5 },
    { name: "Sunita Agarwal", role: "Director", company: "Fashion Forward Exports", text: "Switched from SAP which cost us ₹15 lakhs per year. FabricAI Pro at ₹150/month gives us 80% of the functionality we actually use. ROI was immediate.", rating: 5 },
  ];

  const faqs = [
    { q: "Is the free plan really free? No hidden charges?", a: "Absolutely free. The free plan gives you 5 AI-powered fabric calculations daily with no credit card required. Upgrade only when you need unlimited access or advanced features." },
    { q: "Do I need technical knowledge to use FabricAI Pro?", a: "No technical knowledge needed. If you understand fabric GSM, width, and basic garment measurements, you can use FabricAI Pro immediately. It's designed for factory professionals, not IT teams." },
    { q: "Can multiple factories use the same account?", a: "The Agency plan (₹399/month) supports up to 10 factory accounts under one subscription, with separate dashboards, users, and data for each factory." },
    { q: "Is my factory data secure and confidential?", a: "Yes. All data is encrypted in transit and at rest using industry-standard AES-256 encryption. Your buyer names, pricing, and techpacks are never shared or used for training." },
    { q: "Is customer support included in all plans?", a: "Email support is available to all users. PRO plan users get priority email support with 24-hour response. Agency plan includes a dedicated account manager." },
    { q: "Can I import my existing Excel data?", a: "Yes. FabricAI Pro supports CSV import for style data, consumption history, and fabric master records. Our support team assists with migration at no charge." },
    { q: "How accurate is the AI consumption calculation?", a: "Our AI model has been trained on millions of garment production records. Typical accuracy is within ±2% of actual consumption when correct GSM, width, and measurements are provided." },
    { q: "Is there a refund policy?", a: "Yes. We offer a full 7-day money-back guarantee, no questions asked. If FabricAI Pro doesn't deliver value in your first week, we refund 100% immediately." },
  ];

  const stats = [
    { value: 2400, suffix: "+", label: "Factories Using FabricAI" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
    { value: 8, suffix: " Lakhs", prefix: "₹", label: "Avg Monthly Savings" },
    { value: 40, suffix: "%", label: "Faster Style Costing" },
  ];

  const pricingPlans = [
    {
      plan: "FREE", price: "₹0", period: "forever", color: "blue",
      desc: "Perfect for solo operators testing the platform.",
      features: ["5 AI generations per day", "Fabric consumption calculator", "1 style record", "Basic BOM generator", "Email support"],
      cta: "Start Free →", highlight: false,
    },
    {
      plan: "PRO", price: "₹150", period: "month", color: "emerald",
      desc: "Unlimited AI power for growing garment factories.",
      features: ["Unlimited AI generations", "Full Style Master (unlimited)", "AI Workspace", "BOM + Email generator", "Buyer quotation generator", "Export & download reports", "Priority email support", "7-day money-back guarantee"],
      cta: "Start PRO Free Trial →", highlight: true,
    },
    {
      plan: "AGENCY", price: "₹399", period: "month", color: "violet",
      desc: "Everything in PRO plus multi-factory management.",
      features: ["Everything in PRO", "Up to 10 factory accounts", "Centralized multi-factory dashboard", "Commercial resell license", "Dedicated account manager", "Custom onboarding session", "API access (coming soon)", "Priority phone support"],
      cta: "Get Agency Plan →", highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased overflow-x-hidden">

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showPopup && <ExitPopup onClose={() => setShowPopup(false)} />}
      </AnimatePresence>

      {/* Floating CTA */}
      <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-50 hidden md:block">
        <a href={affLink("register")}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 font-bold text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all">
          <Zap size={15} /> Start Free Today
        </a>
      </motion.div>

      {/* ── STICKY NAVBAR ── */}
      <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${scrolled ? "bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href={affLink()} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
              <Zap size={16} className="text-slate-900" />
            </div>
            <span className="font-black text-lg text-white">FabricAI <span className="text-emerald-400">Pro</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href={affLink("login")} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Log in</a>
            <a href={affLink("register")}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 font-bold text-sm hover:from-emerald-400 hover:to-teal-300 transition-all hover:scale-[1.03] shadow-md shadow-emerald-500/20">
              Start Free Today
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-400 hover:text-white">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-900/95 border-t border-slate-800 backdrop-blur-xl overflow-hidden">
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map(l => (
                  <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                    className="text-slate-300 hover:text-white py-2 text-sm font-medium border-b border-slate-800/60">{l.label}</a>
                ))}
                <a href={affLink("register")} onClick={() => setMobileOpen(false)}
                  className="mt-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 font-bold text-sm text-center">
                  Start Free Today →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.12),transparent)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.div variants={fadeUp}>
              <Badge color="emerald"><Zap size={12} /> AI-Powered Garment ERP — Now Live</Badge>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight max-w-4xl">
              Stop Losing Money on{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Fabric Wastage
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
              AI-powered ERP software built specifically for garment factories and textile manufacturers.
              Calculate fabric, manage styles, and close more buyers — in seconds, not hours.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <GradientBtn href={affLink("register")} size="lg">
                <Zap size={18} /> Start Free Today
              </GradientBtn>
              <OutlineBtn href="#demo" size="lg">
                <Play size={18} /> Try Live Demo
              </OutlineBtn>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                { icon: Shield, text: "No Credit Card Required" },
                { icon: Cpu, text: "AI Powered" },
                { icon: Factory, text: "Trusted by 2,400+ Manufacturers" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={15} className="text-emerald-400" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Dashboard mockup */}
            <motion.div variants={fadeUp}
              className="mt-16 w-full max-w-4xl mx-auto bg-slate-900/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-sm">
              <div className="bg-slate-800/80 border-b border-slate-700/60 px-5 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 bg-slate-700/50 rounded-md h-5 mx-8 flex items-center px-3">
                  <span className="text-slate-500 text-[10px] font-mono">app.fabricaipro.com/dashboard</span>
                </div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Monthly Fabric Saved", value: "₹2.4L", change: "+18%", color: "emerald" },
                  { label: "Active Styles", value: "347", change: "+24", color: "teal" },
                  { label: "AI Calculations Today", value: "1,284", change: "Auto", color: "violet" },
                ].map(({ label, value, change, color }) => (
                  <div key={label} className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
                    <p className="text-slate-500 text-xs mb-2">{label}</p>
                    <p className={`text-2xl font-black ${color === "violet" ? "text-violet-400" : color === "teal" ? "text-teal-400" : "text-emerald-400"}`}>{value}</p>
                    <p className="text-slate-500 text-xs mt-1">{change} this month</p>
                  </div>
                ))}
                <div className="col-span-3 bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 h-28 flex items-center justify-center">
                  <div className="flex gap-2 items-end w-full px-8">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-600/60 to-emerald-400/60" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <div className="bg-slate-900/60 border-y border-slate-800/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-slate-500 text-sm">
          {["Mehta Exports", "Chennai Apparel House", "SKD Manufacturing", "Nair Textiles", "Fashion Forward Exports", "Tirupur Mills"].map(c => (
            <span key={c} className="font-semibold">{c}</span>
          ))}
        </div>
      </div>

      {/* ── PROBLEM SECTION ── */}
      <Section id="problem" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <Badge color="amber"><AlertTriangle size={12} /> The Real Cost of Manual Processes</Badge>
          <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white leading-tight">
            Your Factory is Leaving{" "}
            <span className="text-amber-400">Lakhs on the Table</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Every month factories like yours lose money to problems that AI can eliminate in seconds.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map(p => <PainCard key={p.title} {...p} />)}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.02, y: -2 }}
            className="sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <TrendingUp size={18} className="text-emerald-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">There's a Better Way</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                FabricAI Pro eliminates all five pain points with a single AI platform designed specifically for garment manufacturing.
              </p>
            </div>
            <a href={affLink("register")} className="mt-6 inline-flex items-center gap-2 text-emerald-400 text-sm font-bold hover:text-emerald-300 transition-colors">
              See How It Works <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ── SOLUTION SECTION ── */}
      <section className="py-24 bg-gradient-to-b from-slate-900/40 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Section className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <Badge color="emerald"><Cpu size={12} /> The Solution</Badge>
              <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white leading-tight">
                One Platform for the Entire{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Garment Lifecycle
                </span>
              </h2>
              <p className="mt-5 text-slate-400 leading-relaxed">
                FabricAI Pro connects your consumption planning, style management, costing, buyer communication,
                and production tracking in one AI-powered system — built by people who understand garment manufacturing.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "AI calculates fabric needs from GSM, width and measurements",
                  "Style Master centralizes all techpacks and buyer data",
                  "Generate professional buyer quotations in one click",
                  "BOM auto-populated from your style and consumption data",
                  "Production dashboard tracks orders across all factories",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle size={17} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <GradientBtn href={affLink("register")}>
                  Start Free Today <ArrowRight size={16} />
                </GradientBtn>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}
              className="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-900/80 border-b border-slate-700/50 px-5 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-500 text-xs font-mono ml-2">AI Workspace</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-slate-500 text-xs mb-1 font-mono">// AI Processing Style: Cotton Polo — Order: 5,000 pcs</p>
                  <div className="space-y-2 mt-3">
                    {["Fabric consumption: 1.82 m/pc", "Marker efficiency: 91.4%", "Total fabric required: 9,100 m", "Est. fabric cost: ₹3,64,000", "Wastage savings vs baseline: ₹42,000"].map((line, i) => (
                      <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }} className="text-emerald-400 text-sm font-mono">
                        ✓ {line}
                      </motion.p>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Style Records", value: "347", color: "emerald" },
                    { label: "This Month Savings", value: "₹2.1L", color: "teal" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/40">
                      <p className="text-slate-500 text-xs">{label}</p>
                      <p className={`text-xl font-black mt-1 ${color === "teal" ? "text-teal-400" : "text-emerald-400"}`}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <Section id="features" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <Badge color="blue"><Layers size={12} /> All Features</Badge>
          <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white">
            Everything Your Factory Needs
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Purpose-built for garment manufacturing — not a generic ERP bolted on to sort-of-fit.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => <FeatureCard key={f.title} {...f} />)}
        </div>
      </Section>

      {/* ── LIVE DEMO ── */}
      <section id="demo" className="py-24 bg-gradient-to-b from-slate-900/30 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <Badge color="emerald"><Calculator size={12} /> Live Demo</Badge>
              <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white">
                Try the AI Calculator <span className="text-emerald-400">Right Now</span>
              </h2>
              <p className="mt-4 text-slate-400">
                No signup needed. Adjust the sliders and see real AI-powered calculations instantly.
              </p>
            </motion.div>
            <DemoCalculator />
            <motion.div variants={fadeUp} className="mt-8 text-center">
              <p className="text-slate-400 text-sm mb-4">Want unlimited calculations with full style management?</p>
              <GradientBtn href={affLink("register")}>Get Full Access Free <ArrowRight size={16} /></GradientBtn>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Section id="testimonials" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <Badge color="amber"><Star size={12} /> Testimonials</Badge>
          <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white">
            Factory Owners Love It
          </h2>
          <p className="mt-4 text-slate-400">Real results from real manufacturers across India.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => <TestiCard key={t.name} {...t} />)}
        </div>
      </Section>

      {/* ── STATS / SAVINGS ── */}
      <section className="py-24 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <Badge color="emerald"><TrendingUp size={12} /> Results That Matter</Badge>
              <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white">
                Factories Save Thousands Monthly
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map(({ value, suffix, prefix, label }) => (
                <motion.div key={label} variants={fadeUp}
                  className="text-center bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-4xl font-black text-emerald-400">
                    <Counter to={value} suffix={suffix} prefix={prefix} />
                  </p>
                  <p className="text-slate-400 text-sm mt-2 font-medium">{label}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                { before: "3 hrs", after: "2 sec", metric: "Consumption Calculation" },
                { before: "12% waste", after: "4% waste", metric: "Average Fabric Wastage" },
                { before: "₹0", after: "₹2.4L/mo", metric: "Monthly Savings (Avg Factory)" },
              ].map(({ before, after, metric }) => (
                <div key={metric} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 flex gap-5 items-center">
                  <div className="text-center">
                    <p className="text-red-400 font-black text-lg">{before}</p>
                    <p className="text-slate-500 text-xs">Before</p>
                  </div>
                  <ArrowRight size={18} className="text-slate-600 flex-shrink-0" />
                  <div className="text-center">
                    <p className="text-emerald-400 font-black text-lg">{after}</p>
                    <p className="text-slate-500 text-xs">With FabricAI</p>
                  </div>
                  <p className="text-slate-300 text-sm font-semibold flex-1 text-right">{metric}</p>
                </div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── SCARCITY SECTION ── */}
      <div className="bg-amber-500/10 border-y border-amber-500/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <p className="text-amber-300 text-sm font-bold">
              🔥 Launch Pricing: ₹150/month — Regular price ₹499. Lock in before the price increase.
            </p>
          </div>
          <a href={affLink("register")}
            className="flex-shrink-0 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-900 font-bold text-sm hover:bg-amber-400 transition-colors">
            Claim Launch Price →
          </a>
        </div>
      </div>

      {/* ── PRICING ── */}
      <Section id="pricing" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <Badge color="violet"><DollarSign size={12} /> Pricing</Badge>
          <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white">
            Simple, Factory-Friendly Pricing
          </h2>
          <p className="mt-4 text-slate-400">Start free. Upgrade when you're ready. Cancel anytime.</p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-7 max-w-5xl mx-auto items-start">
          {pricingPlans.map(p => <PricingCard key={p.plan} {...p} />)}
        </div>
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            {[<><Shield size={14} className="text-emerald-400" /> 7-Day Money Back</>, <><CheckCircle size={14} className="text-emerald-400" /> No Long-term Contract</>, <><Globe size={14} className="text-emerald-400" /> Cancel Anytime</>].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">{item}</span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <Badge color="blue"><Database size={12} /> FAQ</Badge>
              <h2 className="mt-5 text-4xl font-black text-white">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map(f => <FaqItem key={f.q} {...f} />)}
            </div>
          </Section>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(16,185,129,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Section>
            <motion.div variants={fadeUp}>
              <Badge color="emerald"><Award size={12} /> For Factory Owners</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              Your Factory{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Deserves AI
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Join 2,400+ garment factories already saving lakhs monthly with AI-powered consumption planning,
              costing, and buyer communication.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientBtn href={affLink("register")} size="lg">
                <Zap size={20} /> Start Free Today — No Card Needed
              </GradientBtn>
              <OutlineBtn href="#demo" size="lg">
                <Play size={18} /> Watch Demo
              </OutlineBtn>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 text-slate-500 text-sm">
              Free plan available forever · PRO from ₹150/month · 7-day money back
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: Factory, title: "2,400+ Factories", sub: "Across India and South Asia" },
                { icon: TrendingUp, title: "₹2.4L Avg Savings", sub: "Per factory per month" },
                { icon: Star, title: "4.9 / 5 Rating", sub: "From 800+ verified reviews" },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                    <Icon size={18} className="text-emerald-400" />
                  </div>
                  <p className="text-white font-bold">{title}</p>
                  <p className="text-slate-500 text-xs">{sub}</p>
                </div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900/80 border-t border-slate-800/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between gap-8 mb-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
                  <Zap size={16} className="text-slate-900" />
                </div>
                <span className="font-black text-lg text-white">FabricAI <span className="text-emerald-400">Pro</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                AI-powered ERP for garment factories. Calculate smarter, cost faster, waste less.
              </p>
              <p className="text-slate-600 text-xs mt-3">contact@fabricaipro.com</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="text-white font-bold mb-3">Product</p>
                <ul className="space-y-2 text-slate-500">
                  {["Features", "Pricing", "Demo", "Affiliates"].map(l => (
                    <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-bold mb-3">Legal</p>
                <ul className="space-y-2 text-slate-500">
                  {["Terms of Service", "Privacy Policy", "Refund Policy", "Affiliate Disclosure"].map(l => (
                    <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-bold mb-3">Affiliates</p>
                <ul className="space-y-2 text-slate-500">
                  {["JVZoo", "WarriorPlus", "CJ Affiliate", "Affiliate Assets"].map(l => (
                    <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">© 2025 FabricAI Pro. All rights reserved.</p>
            <p className="text-slate-600 text-xs text-center">
              Affiliate Disclosure: Some links on this page are affiliate links. Affiliates earn a commission on referred sales.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
