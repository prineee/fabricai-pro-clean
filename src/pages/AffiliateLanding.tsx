import { useState } from "react";
import { Link } from "react-router-dom";

export default function AffiliateLanding() {
  const [visitors, setVisitors] = useState(100);
  const [conversion, setConversion] = useState(3);
  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function calculate() {
    const monthlySales = Math.round(visitors * (conversion / 100) * 30);
    const monthlyEarnings = Math.round(monthlySales * 150 * 0.8);
    const annualSales = monthlySales * 12;
    const annualEarnings = monthlyEarnings * 12;
    setResults({ monthlySales, monthlyEarnings, annualSales, annualEarnings });
    setCalculated(true);
  }

  const faqs = [
    {
      q: "How much commission do I earn?",
      a: "You earn 80% on every sale. On a PRO annual plan of ₹1,299 you earn ₹1,039. On AGENCY annual ₹2,999 you earn ₹2,399 per sale.",
    },
    {
      q: "When do I get paid?",
      a: "Commissions are processed within 7 business days after the refund period. Payments via PayPal, bank transfer, UPI, or Wise.",
    },
    {
      q: "Is approval instant?",
      a: "Yes. JVZoo, WarriorPlus, and CJ Affiliate all offer instant approval for FabricAI Pro affiliates.",
    },
    {
      q: "What is the cookie duration?",
      a: "30 days. If someone clicks your link and buys within 30 days, you get the commission.",
    },
    {
      q: "Can I promote on Facebook, Google, or YouTube?",
      a: "Yes. You can promote on any platform including paid ads, organic content, email marketing, and WhatsApp groups.",
    },
    {
      q: "Are there any restrictions?",
      a: "No spam, no fake reviews, no misleading claims. Other than standard ethical marketing rules you are free to promote however you want.",
    },
    {
      q: "What platforms are available?",
      a: "FabricAI Pro is available on JVZoo, WarriorPlus, and CJ Affiliate.",
    },
    {
      q: "Do you provide marketing support?",
      a: "Yes. Email swipes, banners, social media posts, video scripts and WhatsApp messages are provided. Email affiliate@fabricaipro.com",
    },
  ];

  return (
    <div style={{ background: "#020617", minHeight: "100vh",
                  color: "#ffffff", fontFamily: "Arial, sans-serif" }}>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{ background: "#fef08a", color: "#020617",
                    textAlign: "center", padding: "10px",
                    fontSize: "14px", fontWeight: 700 }}>
        🔥 LIVE NOW — FabricAI Pro Affiliate Program |
        80% Commission | Instant Approval
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{ background: "#0f172a",
                    borderBottom: "1px solid #1e293b",
                    padding: "20px 60px", display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center" }}>
        <div>
          <div style={{ color: "#34d399", fontWeight: 900,
                        fontSize: "28px" }}>FabricAI Pro</div>
          <div style={{ color: "#fef08a", fontSize: "13px" }}>
            Affiliate Program
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button style={navBtn("#ff6b35")}>🚀 JVZoo</button>
          <button style={navBtn("#7c3aed")}>⚡ WarriorPlus</button>
          <button style={navBtn("#2563eb")}>🌐 CJ Affiliate</button>
          <Link to="/" style={{ ...navBtn("#334155") as any,
                                textDecoration: "none" }}>
            ← Main Site
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background:
                        "linear-gradient(180deg,#020617,#0f172a)",
                        padding: "100px 60px", textAlign: "center" }}>

        <div style={badge}>
          💰 HIGHEST PAYING AFFILIATE PROGRAM IN GARMENT TECH
        </div>

        <h1 style={{ fontSize: "clamp(48px, 8vw, 80px)",
                     fontWeight: 900, lineHeight: 1.1,
                     margin: "30px 0" }}>
          <span style={{ color: "#fef08a", display: "block" }}>
            Earn 80% Commission
          </span>
          <span style={{ color: "#ffffff", display: "block" }}>
            On Every Sale of
          </span>
          <span style={{ color: "#34d399", display: "block" }}>
            FabricAI Pro
          </span>
        </h1>

        <p style={{ color: "#cbd5e1", fontSize: "22px",
                    maxWidth: "700px", margin: "0 auto 50px",
                    lineHeight: 1.6 }}>
          The #1 AI-Powered Garment Manufacturing ERP —
          A Unique Untapped Niche With ZERO Competition
        </p>

        {/* Stats */}
        <div style={{ display: "grid",
                      gridTemplateColumns:
                      "repeat(auto-fit,minmax(180px,1fr))",
                      gap: "20px", maxWidth: "900px",
                      margin: "0 auto 50px" }}>
          {[
            { val: "80%", label: "Commission Rate" },
            { val: "₹1,039+", label: "Per Sale Earned" },
            { val: "30 Days", label: "Cookie Duration" },
            { val: "Instant", label: "Approval" },
          ].map((s, i) => (
            <div key={i} style={statBox}>
              <div style={{ color: "#fef08a", fontSize: "36px",
                            fontWeight: 900 }}>{s.val}</div>
              <div style={{ color: "#94a3b8", fontSize: "14px",
                            marginTop: "6px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px",
                      flexWrap: "wrap",
                      justifyContent: "center" }}>
          <button style={heroBtn("#ff6b35")}>
            🚀 Join on JVZoo — Get Affiliate Link
          </button>
          <button style={heroBtn("#7c3aed")}>
            ⚡ Join on WarriorPlus
          </button>
          <button style={heroBtn("#2563eb")}>
            🌐 Join on CJ Affiliate
          </button>
        </div>

        <p style={{ color: "#94a3b8", marginTop: "24px",
                    fontSize: "15px" }}>
          ✅ Instant Approval &nbsp;✅ No Restrictions &nbsp;
          ✅ Promote Worldwide &nbsp;✅ Real-Time Tracking
        </p>
      </section>

      {/* ── WHY PROMOTE ── */}
      <section style={{ background: "#0f172a",
                        padding: "80px 60px" }}>
        <h2 style={sectionTitle}>
          Why Smart Affiliates Choose FabricAI Pro
        </h2>
        <p style={{ color: "#fef08a", fontSize: "18px",
                    textAlign: "center", marginBottom: "60px" }}>
          Unique niche + high ticket + massive demand =
          your most profitable campaign ever
        </p>
        <div style={grid3}>
          {[
            { icon: "🎯", title: "Untapped Niche — ZERO Competition",
              text: "No other affiliate program targets garment factories. You are the FIRST to reach this audience with no bidding wars." },
            { icon: "💰", title: "80% Commission — Industry Highest",
              text: "Most SaaS affiliates earn 20-30%. We give 80% because we believe in our affiliates. Earn ₹120 to ₹2,399 per sale." },
            { icon: "🏭", title: "500,000+ Target Factories in India",
              text: "India alone has 500,000+ garment factories. Bangladesh, Vietnam, Sri Lanka add millions more globally." },
            { icon: "📈", title: "High Ticket + Recurring Revenue",
              text: "Monthly to annual plans mean one referral keeps paying you every renewal. Build passive income that compounds." },
            { icon: "🤖", title: "AI Product — Easy to Sell",
              text: "Every factory owner wants to reduce fabric wastage. FabricAI Pro solves a real painful problem they already want solved." },
            { icon: "🔒", title: "30-Day Cookie + Lifetime Commission",
              text: "Our 30-day cookie ensures credit even weeks later. Plus recurring commissions on every plan renewal." },
          ].map((c, i) => (
            <div key={i} style={featureCard}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                {c.icon}
              </div>
              <h3 style={{ color: "#fef08a", fontSize: "20px",
                           fontWeight: 700, marginBottom: "12px" }}>
                {c.title}
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "15px",
                          lineHeight: 1.7 }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMMISSION CALCULATOR ── */}
      <section style={{ background: "#020617", padding: "80px 60px" }}>
        <h2 style={sectionTitle}>Calculate Your Monthly Earnings</h2>
        <p style={{ color: "#94a3b8", fontSize: "18px",
                    textAlign: "center", marginBottom: "50px" }}>
          See exactly how much you can earn promoting FabricAI Pro
        </p>
        <div style={{ background: "#0f172a",
                      border: "2px solid #fef08a",
                      borderRadius: "24px", padding: "48px",
                      maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ marginBottom: "24px" }}>
            <label style={calcLabel}>Daily Visitors You Send</label>
            <input type="number" value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              style={calcInput} />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label style={calcLabel}>Conversion Rate %</label>
            <input type="number" value={conversion}
              onChange={(e) => setConversion(Number(e.target.value))}
              style={calcInput} />
          </div>
          <button onClick={calculate} style={calcBtn}>
            Calculate My Earnings →
          </button>

          {calculated && results && (
            <div style={{ display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "16px", marginTop: "32px" }}>
              {[
                { label: "Monthly Sales",
                  val: results.monthlySales + " sales" },
                { label: "Monthly Earnings",
                  val: "₹" + results.monthlyEarnings.toLocaleString() },
                { label: "Annual Sales",
                  val: results.annualSales + " sales" },
                { label: "Annual Earnings",
                  val: "₹" + results.annualEarnings.toLocaleString() },
              ].map((r, i) => (
                <div key={i} style={resultBox}>
                  <div style={{ color: "#fef08a", fontSize: "32px",
                                fontWeight: 900 }}>{r.val}</div>
                  <div style={{ color: "#94a3b8", fontSize: "13px",
                                marginTop: "6px" }}>{r.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── COMMISSION TABLE ── */}
      <section style={{ background: "#0f172a", padding: "80px 60px" }}>
        <h2 style={sectionTitle}>Commission Structure</h2>
        <div style={{ maxWidth: "900px", margin: "40px auto 0",
                      overflowX: "auto" }}>
          <table style={{ width: "100%",
                          borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#fef08a" }}>
                {["Plan","Price","Your Commission","You Earn"].map(
                  (h, i) => (
                  <th key={i} style={{ color: "#020617", padding: "18px 24px",
                                       fontWeight: 900, fontSize: "16px",
                                       textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["FREE Trial","₹0","Lead Bonus","₹25 per signup"],
                ["PRO Monthly","₹150","80%","₹120"],
                ["PRO 3 Months","₹399","80%","₹319"],
                ["PRO 6 Months","₹749","80%","₹599"],
                ["PRO Annual 🔥","₹1,299","80%","₹1,039"],
                ["AGENCY Monthly","₹399","80%","₹319"],
                ["AGENCY Annual 🔥🔥","₹2,999","80%","₹2,399"],
              ].map((row, i) => (
                <tr key={i} style={{
                  background: i % 2 === 0 ? "#020617" : "#0f172a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{
                      color: j === 3 ? "#34d399" : "#e2e8f0",
                      padding: "16px 24px", fontSize: "16px",
                      borderBottom: "1px solid #1e293b",
                      fontWeight: j === 3 ? 700 : 400 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "#020617", padding: "80px 60px" }}>
        <h2 style={sectionTitle}>Start Earning in 3 Simple Steps</h2>
        <div style={{ ...grid3, marginTop: "50px" }}>
          {[
            { num: "01", title: "Get Your Affiliate Link",
              text: "Sign up on JVZoo, WarriorPlus or CJ Affiliate. Get instant approval and your unique tracking link in minutes." },
            { num: "02", title: "Promote to Your Audience",
              text: "Share with garment factory owners, textile businesses, and fashion brands. We provide all marketing materials free." },
            { num: "03", title: "Earn 80% Commission",
              text: "Every sale through your link earns 80% instantly. Paid within 7 days via PayPal, bank transfer, or UPI." },
          ].map((s, i) => (
            <div key={i} style={stepCard}>
              <div style={{ color: "#fef08a", fontSize: "64px",
                            fontWeight: 900, marginBottom: "16px" }}>
                {s.num}
              </div>
              <h3 style={{ color: "#ffffff", fontSize: "24px",
                           fontWeight: 700, marginBottom: "12px" }}>
                {s.title}
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "16px",
                          lineHeight: 1.7 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARKETING MATERIALS ── */}
      <section style={{ background: "#0f172a", padding: "80px 60px" }}>
        <h2 style={{ ...sectionTitle, color: "#fef08a" }}>
          Everything You Need to Promote
        </h2>
        <div style={{ ...grid3, marginTop: "50px" }}>
          {[
            { icon: "📧", title: "Email Swipes",
              text: "Ready-to-send email sequences for cold and warm audiences. 5 proven subject lines included." },
            { icon: "🎨", title: "Banner Ads",
              text: "Professional banner ads in all sizes: 728x90, 300x250, 160x600, 468x60 for all platforms." },
            { icon: "📱", title: "Social Media Posts",
              text: "Facebook, Instagram, LinkedIn posts with captions ready to copy-paste." },
            { icon: "🎥", title: "Video Scripts",
              text: "YouTube review scripts, short-form video scripts for Reels and TikTok." },
            { icon: "📄", title: "Blog Post Templates",
              text: "SEO-optimised review articles and comparison posts ready to publish." },
            { icon: "💬", title: "WhatsApp Messages",
              text: "Proven WhatsApp broadcast messages targeting factory owners directly." },
          ].map((c, i) => (
            <div key={i} style={{ ...featureCard, background: "#020617" }}>
              <div style={{ fontSize: "40px", marginBottom: "14px" }}>
                {c.icon}
              </div>
              <h3 style={{ color: "#ffffff", fontSize: "20px",
                           fontWeight: 700, marginBottom: "10px" }}>
                {c.title}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "15px",
                          lineHeight: 1.6 }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link to="/affiliate-assets" style={{
            display: "inline-block", background: "#fef08a",
            color: "#020617", textDecoration: "none",
            padding: "20px 48px", borderRadius: "14px",
            fontSize: "20px", fontWeight: 900,
          }}>
            📦 Access All Marketing Assets →
          </Link>
          <p style={{ color: "#94a3b8", marginTop: "14px", fontSize: "15px" }}>
            Email swipes, banners, social posts, video scripts,
            WhatsApp messages and AI video guide — all free
          </p>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section style={{ background: "#020617", padding: "80px 60px" }}>
        <h2 style={sectionTitle}>Who Is Your Target Audience?</h2>
        <p style={{ color: "#fef08a", fontSize: "18px",
                    textAlign: "center", marginBottom: "50px" }}>
          These buyers are desperately looking for this solution
        </p>
        <div style={{ display: "grid",
                      gridTemplateColumns:
                      "repeat(auto-fit,minmax(240px,1fr))",
                      gap: "20px", maxWidth: "1100px",
                      margin: "0 auto" }}>
          {[
            ["🏭","Garment Factory Owners","1000+ pcs/month production"],
            ["👗","Fashion Designers","Need accurate fabric costing"],
            ["🧵","Textile Exporters","Export to EU/US markets"],
            ["📦","Buying Houses","Multi-factory management"],
            ["🎓","Fashion Students","Learning ERP systems"],
            ["💼","Merchandisers","Costing and order management"],
            ["🌏","Asian Factories","India, Bangladesh, Vietnam"],
            ["🏪","Boutique Owners","Small batch production"],
          ].map((a, i) => (
            <div key={i} style={audienceCard}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                {a[0]}
              </div>
              <div style={{ color: "#fef08a", fontSize: "16px",
                            fontWeight: 700 }}>{a[1]}</div>
              <div style={{ color: "#94a3b8", fontSize: "13px",
                            marginTop: "4px" }}>{a[2]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#0f172a", padding: "80px 60px" }}>
        <h2 style={sectionTitle}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: "860px", margin: "50px auto 0" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "#020617",
                                  border: "1px solid #1e293b",
                                  borderRadius: "14px",
                                  padding: "22px 28px",
                                  marginBottom: "12px",
                                  cursor: "pointer" }}
              onClick={() =>
                setOpenFaq(openFaq === i ? null : i)}>
              <div style={{ display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center" }}>
                <span style={{ color: "#ffffff", fontSize: "18px",
                               fontWeight: 700 }}>{faq.q}</span>
                <span style={{ color: "#fef08a", fontSize: "20px" }}>
                  {openFaq === i ? "▲" : "▼"}
                </span>
              </div>
              {openFaq === i && (
                <p style={{ color: "#94a3b8", fontSize: "16px",
                            lineHeight: 1.7, marginTop: "16px",
                            marginBottom: 0 }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        background: "linear-gradient(180deg,#0f172a,#020617)",
        padding: "100px 60px", textAlign: "center" }}>
        <p style={{ color: "#fef08a", fontSize: "14px",
                    fontWeight: 700, letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "20px" }}>
          LIMITED SPOTS AVAILABLE
        </p>
        <h2 style={{ color: "#ffffff", fontSize: "clamp(36px,6vw,64px)",
                     fontWeight: 900, marginBottom: "20px" }}>
          Start Earning 80% Commission Today
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "20px",
                    maxWidth: "600px", margin: "0 auto 50px",
                    lineHeight: 1.6 }}>
          Join 500+ affiliates already earning with FabricAI Pro.
          Get approved in minutes, start earning today.
        </p>
        <div style={{ display: "flex", gap: "16px",
                      flexWrap: "wrap",
                      justifyContent: "center" }}>
          <button style={heroBtn("#ff6b35")}>
            🚀 Join on JVZoo
          </button>
          <button style={heroBtn("#7c3aed")}>
            ⚡ Join on WarriorPlus
          </button>
          <button style={heroBtn("#2563eb")}>
            🌐 Join on CJ Affiliate
          </button>
        </div>
        <div style={{ background: "#0f172a",
                      border: "1px solid #1e293b",
                      borderRadius: "16px",
                      padding: "28px 40px",
                      display: "inline-block",
                      marginTop: "40px" }}>
          <p style={{ color: "#94a3b8", margin: "0 0 8px" }}>
            Questions? Email us:
          </p>
          <p style={{ color: "#fef08a", fontSize: "20px",
                      fontWeight: 700, margin: 0 }}>
            affiliate@fabricaipro.com
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0f172a",
                       borderTop: "1px solid #1e293b",
                       padding: "40px 60px", display: "flex",
                       justifyContent: "space-between",
                       alignItems: "center", flexWrap: "wrap",
                       gap: "16px" }}>
        <span style={{ color: "#475569", fontSize: "14px" }}>
          © 2025 FabricAI Pro. All rights reserved.
        </span>
        <span style={{ color: "#34d399", fontWeight: 700,
                       fontSize: "18px" }}>
          FabricAI Pro
        </span>
        <span style={{ color: "#475569", fontSize: "14px" }}>
          Privacy Policy | Terms | Refund Policy
        </span>
      </footer>

    </div>
  );
}

// ── Style helpers ───────────────────────────────────────────────

const navBtn = (bg: string) => ({
  background: bg, color: "white", border: "none",
  padding: "10px 20px", borderRadius: "10px",
  fontWeight: 700, fontSize: "14px", cursor: "pointer",
});

const heroBtn = (bg: string) => ({
  background: bg, color: "white", border: "none",
  padding: "20px 36px", fontSize: "18px",
  fontWeight: 900, borderRadius: "14px", cursor: "pointer",
});

const badge: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(254,240,138,0.15)",
  border: "1px solid #fef08a",
  color: "#fef08a", fontSize: "13px",
  fontWeight: 700, letterSpacing: "1px",
  textTransform: "uppercase",
  padding: "8px 20px", borderRadius: "30px",
};

const statBox: React.CSSProperties = {
  background: "#0f172a", border: "1px solid #1e293b",
  borderRadius: "16px", padding: "24px 20px",
  textAlign: "center",
};

const sectionTitle: React.CSSProperties = {
  color: "#ffffff", fontSize: "clamp(32px,5vw,48px)",
  fontWeight: 800, textAlign: "center",
  marginBottom: "16px",
};

const grid3: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "24px", maxWidth: "1100px", margin: "0 auto",
};

const featureCard: React.CSSProperties = {
  background: "#020617", border: "1px solid #1e293b",
  borderRadius: "20px", padding: "32px",
};

const stepCard: React.CSSProperties = {
  background: "#0f172a", border: "1px solid #1e293b",
  borderRadius: "20px", padding: "40px",
};

const audienceCard: React.CSSProperties = {
  background: "#0f172a", border: "1px solid #1e293b",
  borderRadius: "14px", padding: "22px",
};

const calcLabel: React.CSSProperties = {
  display: "block", color: "#fef08a",
  fontSize: "16px", fontWeight: 700, marginBottom: "10px",
};

const calcInput: React.CSSProperties = {
  width: "100%", padding: "16px 20px",
  background: "#1e293b", color: "#ffffff",
  border: "1px solid #334155", borderRadius: "12px",
  fontSize: "20px", outline: "none",
  boxSizing: "border-box",
};

const calcBtn: React.CSSProperties = {
  background: "#fef08a", color: "#020617",
  border: "none", padding: "18px 40px",
  fontSize: "18px", fontWeight: 900,
  borderRadius: "12px", cursor: "pointer",
  width: "100%", marginTop: "8px",
};

const resultBox: React.CSSProperties = {
  background: "rgba(254,240,138,0.08)",
  border: "1px solid #fef08a",
  borderRadius: "16px", padding: "24px",
  textAlign: "center",
};
