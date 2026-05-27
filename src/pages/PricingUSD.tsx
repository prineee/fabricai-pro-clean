import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function getPricing(plan: string, period: string) {
  const prices: any = {
    pro: {
      monthly:  { monthly: 9,  total: 9,   save: 0,   savePct: 0  },
      "3months":{ monthly: 8,  total: 24,  save: 3,   savePct: 11 },
      "6months":{ monthly: 7,  total: 42,  save: 12,  savePct: 22 },
      annual:   { monthly: 5,  total: 60,  save: 48,  savePct: 44 },
    },
    agency: {
      monthly:  { monthly: 25, total: 25,  save: 0,   savePct: 0  },
      "3months":{ monthly: 22, total: 66,  save: 9,   savePct: 12 },
      "6months":{ monthly: 19, total: 114, save: 36,  savePct: 24 },
      annual:   { monthly: 14, total: 168, save: 132, savePct: 44 },
    },
  };
  return prices[plan][period];
}

const FEATURES = [
  ["AI Generations per day",       "5",        "Unlimited",  "Unlimited" ],
  ["Consumption Calculator",        "✅",       "✅",         "✅"        ],
  ["Garment Types Supported",       "All",      "All",        "All"       ],
  ["Style Master",                  "3 styles", "Unlimited",  "Unlimited" ],
  ["AI Workspace (image upload)",   "✅",       "✅",         "✅"        ],
  ["Export Reports",                "❌",       "✅",         "✅"        ],
  ["Download PDF Reports",          "❌",       "✅",         "✅"        ],
  ["Buyer Quotation Generator",     "❌",       "✅",         "✅"        ],
  ["Email Writer AI",               "❌",       "✅",         "✅"        ],
  ["Blog / Notes Generator",        "❌",       "✅",         "✅"        ],
  ["Fabric Inventory Tracking",     "Basic",    "Full",       "Full"      ],
  ["Cutting Room Reports",          "❌",       "✅",         "✅"        ],
  ["Multiple Factory Accounts",     "❌",       "❌",         "Up to 10"  ],
  ["Client Project Management",     "❌",       "❌",         "✅"        ],
  ["Commercial Resell License",     "❌",       "❌",         "✅"        ],
  ["White-label Ready",             "❌",       "❌",         "✅"        ],
  ["Priority Support",              "❌",       "Email",      "Phone+Email"],
  ["Dedicated Account Manager",     "❌",       "❌",         "✅"        ],
  ["Custom Onboarding",             "❌",       "❌",         "✅"        ],
  ["API Access",                    "❌",       "❌",         "✅"        ],
];

const FAQS = [
  { q: "Is there a free trial?",
    a: "Yes. The FREE plan is available forever with no time limit. You get 5 AI generations per day, full access to the consumption calculator, and 3 style slots. No credit card required to start." },
  { q: "Can I cancel any time?",
    a: "Yes. All plans can be cancelled at any time. Monthly plans simply do not renew. For 3-month, 6-month, or annual plans, you keep access until the end of your billing period." },
  { q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, PayPal, and local payment methods through our payment partners. All transactions are secured with 256-bit SSL encryption." },
  { q: "Is my data secure?",
    a: "Yes. All data is stored on Google Firebase with enterprise-grade security. Your style data, consumption calculations, and factory information are private and never shared with third parties." },
  { q: "Can I switch plans?",
    a: "Yes. You can upgrade from FREE to PRO or from PRO to AGENCY at any time. Upgrades take effect immediately. Downgrades take effect at the next billing cycle." },
  { q: "Do you offer refunds?",
    a: "We offer a 7-day money-back guarantee on all paid plans. If you are not satisfied within 7 days of your first payment, contact us for a full refund." },
  { q: "Is this available worldwide?",
    a: "Yes. FabricAI Pro works in any country. The software is fully cloud-based and accessible from any device with an internet connection. USD pricing is available for international buyers." },
  { q: "What garment types are supported?",
    a: "FabricAI Pro supports T-shirts, polo shirts, shirts, hoodies, sweatshirts, trousers, jeans, dresses, kurtis, uniforms, kidswear, sportswear, and more for both knit and woven fabrics." },
];

export default function PricingUSD() {
  const [period, setPeriod] = useState("monthly");
  const [openQ, setOpenQ] = useState<number | null>(null);
  const navigate = useNavigate();

  const proPrice = getPricing("pro", period);
  const agencyPrice = getPricing("agency", period);

  return (
    <div style={{ background: "#020617", minHeight: "100vh", color: "#ffffff", fontFamily: "Arial, sans-serif" }}>

      {/* ANNOUNCEMENT BAR */}
      <div style={{ background: "#fef08a", color: "#020617", textAlign: "center", padding: "10px", fontSize: "14px", fontWeight: 700 }}>
        🌍 International Pricing — Pay in USD | Available on WarriorPlus, JVZoo &amp; CJ Affiliate
      </div>

      {/* NAVBAR */}
      <nav style={{ background: "#0f172a", borderBottom: "1px solid #1e293b", padding: "20px 60px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "#34d399", fontWeight: 900, fontSize: "28px" }}>FabricAI Pro</div>
          <div style={{ color: "#fef08a", fontSize: "13px" }}>Global Pricing</div>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <Link to="/" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "15px" }}>← Main Site</Link>
          <Link to="/affiliates" style={{ color: "#fef08a", textDecoration: "none", fontSize: "15px", fontWeight: 700 }}>Affiliate Program</Link>
          <Link to="/login" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "15px" }}>Login</Link>
          <Link to="/register" style={{ background: "#34d399", color: "#020617", padding: "10px 22px", borderRadius: "10px", fontWeight: 900, textDecoration: "none", fontSize: "15px" }}>Start Free</Link>
        </div>
      </nav>

      {/* HERO + TOGGLE + CARDS */}
      <section style={{ background: "linear-gradient(180deg,#020617,#0f172a)", padding: "80px 60px", textAlign: "center" }}>

        <div style={{ display: "inline-block", background: "rgba(52,211,153,0.1)", border: "1px solid #34d399", color: "#34d399", fontSize: "13px", fontWeight: 700, padding: "8px 20px", borderRadius: "30px", marginBottom: "24px" }}>
          🌍 TRUSTED BY GARMENT FACTORIES WORLDWIDE
        </div>

        <h1 style={{ color: "#ffffff", fontSize: "clamp(40px,6vw,72px)", fontWeight: 900, marginBottom: "16px" }}>
          Simple, Transparent Pricing
        </h1>

        <p style={{ color: "#94a3b8", fontSize: "20px", marginBottom: "50px" }}>
          Start free. Upgrade when ready. Cancel any time. No hidden fees.
        </p>

        {/* BILLING PERIOD TOGGLE */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "14px", padding: "6px", display: "inline-flex", gap: "4px", marginBottom: "60px" }}>
          {[
            { val: "monthly",  label: "Monthly",  badge: null           },
            { val: "3months",  label: "3 Months", badge: "Save 11%"     },
            { val: "6months",  label: "6 Months", badge: "Save 22%"     },
            { val: "annual",   label: "Annual",   badge: "Save 44% 🔥"  },
          ].map((btn) => (
            <button key={btn.val} onClick={() => setPeriod(btn.val)} style={{
              background: period === btn.val ? "#34d399" : "transparent",
              color: period === btn.val ? "#020617" : "#94a3b8",
              fontWeight: period === btn.val ? 900 : 400,
              border: "none", padding: "12px 24px",
              fontSize: "15px", cursor: "pointer",
              borderRadius: "10px", lineHeight: "1.3",
            }}>
              {btn.label}
              {btn.badge && period !== btn.val && (
                <span style={{ display: "block", color: "#34d399", fontSize: "11px", fontWeight: 700, marginTop: "2px" }}>
                  {btn.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* PRICING CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>

          {/* FREE */}
          <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "24px", padding: "36px", textAlign: "left" }}>
            <span style={{ background: "#475569", color: "#ffffff", fontSize: "12px", fontWeight: 700, padding: "4px 14px", borderRadius: "20px" }}>FREE</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", margin: "24px 0 6px" }}>
              <span style={{ color: "#ffffff", fontSize: "48px", fontWeight: 900 }}>$0</span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "14px", margin: "0 0 4px" }}>Forever free</p>
            <p style={{ color: "#475569", fontSize: "13px", marginBottom: "24px" }}>No credit card required</p>
            <div style={{ height: "1px", background: "#1e293b", marginBottom: "20px" }} />
            {[
              { ok: true,  text: "5 AI generations per day" },
              { ok: true,  text: "Consumption calculator (unlimited)" },
              { ok: true,  text: "Style master (3 styles)" },
              { ok: true,  text: "AI Garment Workspace" },
              { ok: false, text: "Export & download reports" },
              { ok: false, text: "Unlimited AI generations" },
              { ok: false, text: "Priority support" },
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <span style={{ color: f.ok ? "#34d399" : "#334155", flexShrink: 0 }}>{f.ok ? "✅" : "❌"}</span>
                <span style={{ color: f.ok ? "#cbd5e1" : "#475569", fontSize: "15px" }}>{f.text}</span>
              </div>
            ))}
            <Link to="/register" style={{ display: "block", background: "#1e293b", color: "#94a3b8", textDecoration: "none", textAlign: "center", padding: "16px", borderRadius: "12px", fontWeight: 700, fontSize: "16px", marginTop: "24px" }}>
              Start Free →
            </Link>
          </div>

          {/* PRO */}
          <div style={{ background: "#0f172a", border: "2px solid #34d399", borderRadius: "24px", overflow: "hidden", textAlign: "left" }}>
            <div style={{ background: "#34d399", color: "#020617", fontSize: "12px", fontWeight: 900, padding: "10px", textAlign: "center" }}>
              MOST POPULAR
            </div>
            <div style={{ padding: "28px 36px 36px" }}>
              <span style={{ background: "#34d399", color: "#020617", fontSize: "12px", fontWeight: 700, padding: "4px 14px", borderRadius: "20px" }}>PRO</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", margin: "20px 0 6px" }}>
                <span style={{ color: "#94a3b8", fontSize: "24px" }}>$</span>
                <span style={{ color: "#ffffff", fontSize: "48px", fontWeight: 900 }}>{proPrice.monthly}</span>
                <span style={{ color: "#94a3b8", fontSize: "18px" }}>/mo</span>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "6px" }}>
                {period === "monthly" ? "Billed $9 monthly" : `Billed $${proPrice.total} total`}
              </p>
              {proPrice.save > 0 && (
                <div style={{ display: "inline-block", background: "rgba(52,211,153,0.15)", border: "1px solid #34d399", padding: "4px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: 700, color: "#34d399", marginBottom: "12px" }}>
                  You save ${proPrice.save}
                </div>
              )}
              <div style={{ height: "1px", background: "#1e293b", margin: "16px 0 20px" }} />
              {["Unlimited AI generations","Full consumption calculator","Full style master (unlimited styles)","AI Garment Workspace","Export & download all reports","Buyer quotation generator","Email & blog AI tools","Priority email support"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: "#34d399", flexShrink: 0 }}>✅</span>
                  <span style={{ color: "#cbd5e1", fontSize: "15px" }}>{f}</span>
                </div>
              ))}
              {["Multiple factory accounts","Commercial resell license"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: "#334155", flexShrink: 0 }}>❌</span>
                  <span style={{ color: "#475569", fontSize: "15px" }}>{f}</span>
                </div>
              ))}
              <button
                onClick={() => navigate("/billing-usd", { state: { plan: "PRO", period } })}
                style={{ width: "100%", background: "#34d399", color: "#020617", border: "none", padding: "18px", borderRadius: "12px", fontWeight: 900, fontSize: "18px", cursor: "pointer", marginTop: "24px" }}
              >
                Get PRO →
              </button>
            </div>
          </div>

          {/* AGENCY */}
          <div style={{ background: "#0f172a", border: "2px solid #7c3aed", borderRadius: "24px", padding: "36px", textAlign: "left" }}>
            <span style={{ background: "#7c3aed", color: "#ffffff", fontSize: "12px", fontWeight: 700, padding: "4px 14px", borderRadius: "20px" }}>AGENCY</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", margin: "24px 0 6px" }}>
              <span style={{ color: "#94a3b8", fontSize: "24px" }}>$</span>
              <span style={{ color: "#ffffff", fontSize: "48px", fontWeight: 900 }}>{agencyPrice.monthly}</span>
              <span style={{ color: "#94a3b8", fontSize: "18px" }}>/mo</span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "6px" }}>
              {period === "monthly" ? "Billed $25 monthly" : `Billed $${agencyPrice.total} total`}
            </p>
            {agencyPrice.save > 0 && (
              <div style={{ display: "inline-block", background: "rgba(124,58,237,0.15)", border: "1px solid #7c3aed", padding: "4px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: 700, color: "#a78bfa", marginBottom: "12px" }}>
                You save ${agencyPrice.save}
              </div>
            )}
            <div style={{ height: "1px", background: "#1e293b", margin: "16px 0 20px" }} />
            {["Everything in PRO","Multiple factory accounts (up to 10)","Client project management","Agency dashboard","Commercial resell license","White-label ready","Priority phone support","Dedicated account manager","Custom onboarding session"].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <span style={{ color: "#34d399", flexShrink: 0 }}>✅</span>
                <span style={{ color: "#cbd5e1", fontSize: "15px" }}>{f}</span>
              </div>
            ))}
            <button
              onClick={() => navigate("/billing-usd", { state: { plan: "AGENCY", period } })}
              style={{ width: "100%", background: "#7c3aed", color: "#ffffff", border: "none", padding: "18px", borderRadius: "12px", fontWeight: 900, fontSize: "18px", cursor: "pointer", marginTop: "24px" }}
            >
              Get Agency →
            </button>
          </div>
        </div>
      </section>

      {/* SAVINGS TABLE */}
      <section style={{ background: "#0f172a", padding: "60px" }}>
        <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 800, textAlign: "center", marginBottom: "32px" }}>
          See How Much You Save
        </h2>
        <div style={{ maxWidth: "900px", margin: "0 auto", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "580px" }}>
            <thead>
              <tr style={{ background: "#fef08a" }}>
                {["Plan","Monthly","3 Months","6 Months","Annual"].map((h, i) => (
                  <th key={i} style={{ color: "#020617", padding: "14px 20px", fontWeight: 900, fontSize: "15px", textAlign: i === 0 ? "left" : "center" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "PRO",              vals: ["$9/mo","$8/mo ($24)","$7/mo ($42)","$5/mo ($60)"],      save: false },
                { label: "AGENCY",           vals: ["$25/mo","$22/mo ($66)","$19/mo ($114)","$14/mo ($168)"],save: false },
                { label: "You save (PRO)",   vals: ["—","$3 (11%)","$12 (22%)","$48 (44%)"],                 save: true  },
                { label: "You save (Agency)",vals: ["—","$9 (12%)","$36 (24%)","$132 (44%)"],                save: true  },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#020617" : "#0f172a" }}>
                  <td style={{ color: "#94a3b8", padding: "12px 20px", borderBottom: "1px solid #1e293b", fontSize: "15px", fontWeight: 600 }}>{row.label}</td>
                  {row.vals.map((cell, j) => (
                    <td key={j} style={{ color: row.save ? "#34d399" : j === 3 ? "#fef08a" : "#e2e8f0", padding: "12px 20px", borderBottom: "1px solid #1e293b", fontSize: "15px", textAlign: "center", fontWeight: row.save || j === 3 ? 700 : 400 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section style={{ background: "#020617", padding: "60px" }}>
        <h2 style={{ color: "#ffffff", fontSize: "40px", fontWeight: 800, textAlign: "center", marginBottom: "50px" }}>
          Everything You Get
        </h2>
        <div style={{ overflowX: "auto", maxWidth: "1000px", margin: "0 auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
            <thead>
              <tr style={{ background: "#0f172a" }}>
                <th style={{ color: "#94a3b8", padding: "16px 20px", textAlign: "left", fontSize: "15px", fontWeight: 600 }}>Feature</th>
                <th style={{ color: "#475569", padding: "16px 20px", textAlign: "center", fontSize: "15px", fontWeight: 700 }}>FREE</th>
                <th style={{ color: "#34d399", padding: "16px 20px", textAlign: "center", fontSize: "15px", fontWeight: 700 }}>PRO</th>
                <th style={{ color: "#a78bfa", padding: "16px 20px", textAlign: "center", fontSize: "15px", fontWeight: 700 }}>AGENCY</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#020617" : "#0f172a" }}>
                  <td style={{ color: "#94a3b8", padding: "13px 20px", borderBottom: "1px solid #1e293b", fontSize: "15px" }}>{row[0]}</td>
                  {[row[1], row[2], row[3]].map((cell, j) => (
                    <td key={j} style={{ color: cell === "✅" ? "#34d399" : cell === "❌" ? "#334155" : "#e2e8f0", padding: "13px 20px", borderBottom: "1px solid #1e293b", fontSize: "15px", textAlign: "center" }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0f172a", padding: "60px" }}>
        <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800, textAlign: "center", marginBottom: "40px" }}>
          Pricing FAQs
        </h2>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {FAQS.map((faq, i) => (
            <div key={i}
              style={{ background: "#020617", border: "1px solid #1e293b", borderRadius: "14px", padding: "22px 28px", marginBottom: "12px", cursor: "pointer" }}
              onClick={() => setOpenQ(openQ === i ? null : i)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#ffffff", fontSize: "17px", fontWeight: 700 }}>{faq.q}</span>
                <span style={{ color: "#fef08a", fontSize: "18px" }}>{openQ === i ? "▲" : "▼"}</span>
              </div>
              {openQ === i && (
                <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, marginTop: "14px", marginBottom: 0 }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: "linear-gradient(180deg,#0f172a,#020617)", padding: "80px 60px", textAlign: "center" }}>
        <p style={{ color: "#fef08a", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
          🌍 AVAILABLE WORLDWIDE
        </p>
        <h2 style={{ color: "#ffffff", fontSize: "clamp(36px,5vw,60px)", fontWeight: 900, margin: "20px 0" }}>
          Start Free Today
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "18px", marginBottom: "40px" }}>
          No credit card required. Upgrade when you are ready.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
          <Link to="/register" style={{ background: "#34d399", color: "#020617", padding: "20px 40px", fontSize: "18px", fontWeight: 900, borderRadius: "14px", textDecoration: "none", display: "inline-block" }}>
            Start Free Account →
          </Link>
          <Link to="/affiliates" style={{ background: "transparent", color: "#fef08a", border: "2px solid #fef08a", padding: "20px 40px", fontSize: "18px", fontWeight: 700, borderRadius: "14px", textDecoration: "none", display: "inline-block" }}>
            View Affiliate Program
          </Link>
        </div>
        <p style={{ color: "#475569", fontSize: "14px", marginBottom: "14px" }}>Available on:</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          {[{ name: "WarriorPlus", bg: "#7c3aed" },{ name: "JVZoo", bg: "#ff6b35" },{ name: "CJ Affiliate", bg: "#2563eb" }].map((p, i) => (
            <span key={i} style={{ background: p.bg, color: "white", padding: "8px 18px", borderRadius: "20px", fontSize: "13px", fontWeight: 700 }}>{p.name}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", borderTop: "1px solid #1e293b", padding: "32px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <span style={{ color: "#475569", fontSize: "14px" }}>© 2025 FabricAI Pro</span>
        <span style={{ color: "#34d399", fontWeight: 700, fontSize: "18px" }}>FabricAI Pro</span>
        <span style={{ color: "#475569", fontSize: "14px" }}>All prices in USD | Privacy Policy | Terms | Refund Policy</span>
      </footer>
    </div>
  );
}
