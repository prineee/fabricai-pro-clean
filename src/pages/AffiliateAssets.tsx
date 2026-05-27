import React, { useState } from "react";
import { Link } from "react-router-dom";

// ─── EMAIL DATA ───────────────────────────────────────────────────

const EMAILS = [
  {
    subject: "This garment factory tool calculates fabric consumption in seconds [FREE]",
    body: `Hi [First Name],

If you run a garment factory or work in textile manufacturing, I found something that will save you hours every week.

It's called FabricAI Pro — an AI-powered ERP system built specifically for garment factories.

Here's what it does:

✅ Calculates exact fabric consumption per style
✅ Estimates marker efficiency automatically
✅ Generates buyer quotations instantly
✅ Tracks fabric inventory and cutting room
✅ AI predicts wastage before bulk cutting

The best part? You can try it FREE with a demo account right now.
No credit card. No commitment.

👉 Click here to start your free demo:
[YOUR AFFILIATE LINK]

This is not another generic SaaS tool. It was built by someone who actually runs a garment factory and understands shrinkage, marker loss, and cutting wastage from real experience.

Try the free demo and see for yourself.

[YOUR NAME]

P.S. The PRO plan is only ₹150/month and includes unlimited AI generations. Start free and upgrade when ready.`,
  },
  {
    subject: "Are you still calculating fabric consumption in Excel? [There's a better way]",
    body: `Hi [First Name],

Quick question — how do you currently calculate fabric consumption for your garment styles?

If the answer involves Excel spreadsheets, manual formulas, or experience-based guessing — you are probably losing money every week.

The problem with manual calculation is human error. A small mistake in a consumption formula means you either over-order fabric and waste money, or under-order and stop production mid-cutting.

FabricAI Pro solves all three problems.

It automatically calculates:
→ Fabric consumption per style
→ GSM-based fabric weight
→ Shrinkage-adjusted quantities
→ Marker efficiency percentages
→ Total order fabric requirement

And it does this in seconds, not hours.

👉 Get your free demo account here:
[YOUR AFFILIATE LINK]

Over 500 factories are already using it.
Don't let your competitors get ahead.

[YOUR NAME]`,
  },
  {
    subject: "URGENT: Fabric prices are rising — protect your margins now",
    body: `Hi [First Name],

Fabric prices have increased 15-30% in the last 12 months.

Every meter of fabric wasted is now MORE expensive than before.

Smart factory owners are using AI to:
✅ Calculate exact fabric needs before ordering
✅ Reduce cutting wastage by 8-12%
✅ Improve marker efficiency by 5-15%
✅ Protect profit margins on every order

FabricAI Pro is the tool making this possible.

It's an AI-powered fabric consumption calculator and garment ERP — built for factories like yours.

With rising input costs, you cannot afford to waste fabric any more.

👉 Start your free trial today:
[YOUR AFFILIATE LINK]

The free account includes full access to the consumption calculator with no time limit.

Use it today, save money tomorrow.

[YOUR NAME]`,
  },
  {
    subject: "How much fabric are you wasting every month? [Eye-opening numbers]",
    body: `Hi [First Name],

Industry research shows that the average garment factory wastes 8-15% of fabric every month.

On 1,000 kg of fabric at ₹200/kg, that's:
₹16,000 to ₹30,000 WASTED every month.
₹1,92,000 to ₹3,60,000 wasted every year.

This happens because of:
→ Inaccurate consumption calculations
→ Poor marker planning
→ No shrinkage tracking
→ Manual errors in cutting orders

FabricAI Pro reduces this wastage by:
✅ AI-accurate consumption calculation
✅ Marker efficiency optimization
✅ Shrinkage and wastage tracking
✅ Smart cutting room reports

The tool pays for itself in the FIRST MONTH.

👉 Try it free — no credit card needed:
[YOUR AFFILIATE LINK]

[YOUR NAME]`,
  },
  {
    subject: "Final email — special offer for garment factories [ends soon]",
    body: `Hi [First Name],

This is my final email about FabricAI Pro.

I've been sharing this tool because I genuinely believe it helps garment factories work smarter.

Here's a quick summary of what you get:

FREE PLAN (₹0):
✅ 5 AI generations daily
✅ Full consumption calculator
✅ Style master for 3 styles

PRO PLAN (₹150/month):
✅ Unlimited AI generations
✅ Full style master
✅ Export all reports
✅ Priority support

AGENCY PLAN (₹399/month):
✅ Multiple factory accounts
✅ Commercial license
✅ Dedicated support

If fabric consumption, costing, and production planning is part of your daily work — this tool will save you time and money every single day.

👉 Your free demo is waiting:
[YOUR AFFILIATE LINK]

Wishing your factory the best production season,
[YOUR NAME]

P.S. Replace [YOUR AFFILIATE LINK] with your actual affiliate link from JVZoo/WarriorPlus/CJ.`,
  },
];

// ─── BANNER HTML STRINGS (for clipboard copy) ─────────────────────

const BANNER_728_HTML = `<div style="max-width:728px;height:90px;background:linear-gradient(135deg,#020617,#0f172a);border:2px solid #fef08a;border-radius:8px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;font-family:Arial,sans-serif">
  <div>
    <div style="color:#34d399;font-weight:700;font-size:18px">FabricAI Pro</div>
    <div style="color:#fef08a;font-size:11px">AI Garment ERP</div>
  </div>
  <div style="color:#fff;font-size:16px;font-weight:700">Calculate Fabric Consumption Instantly</div>
  <a href="[YOUR AFFILIATE LINK]" style="background:#fef08a;color:#020617;padding:10px 20px;font-weight:900;border-radius:6px;text-decoration:none;font-size:15px">Try FREE →</a>
</div>`;

const BANNER_300_HTML = `<div style="width:300px;height:250px;background:linear-gradient(180deg,#0f172a,#020617);border:2px solid #34d399;border-radius:16px;padding:24px;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:Arial,sans-serif">
  <div style="color:#34d399;font-weight:700;font-size:22px">🏭 FabricAI Pro</div>
  <div style="color:#fff;font-size:16px;font-weight:700;margin:16px 0">Calculate Fabric Consumption with AI</div>
  <div style="color:#fef08a;font-size:20px;font-weight:700">80% Less Wastage</div>
  <a href="[YOUR AFFILIATE LINK]" style="background:#34d399;color:#020617;padding:12px 24px;font-weight:900;border-radius:8px;text-decoration:none;margin-top:16px;font-size:15px">Try FREE Today →</a>
</div>`;

const BANNER_160_HTML = `<div style="width:160px;height:600px;background:linear-gradient(180deg,#020617,#0f172a);border:2px solid #7c3aed;border-radius:12px;padding:20px 16px;text-align:center;display:flex;flex-direction:column;justify-content:space-between;align-items:center;font-family:Arial,sans-serif">
  <div style="color:#34d399;font-weight:700;font-size:16px">FabricAI Pro</div>
  <div>
    <div style="font-size:40px;margin-bottom:12px">🏭</div>
    <div style="color:#fff;font-size:13px;margin-bottom:8px">AI Fabric Consumption ERP</div>
    <div style="color:#fef08a;font-size:12px">Reduce wastage by 12%</div>
  </div>
  <div style="width:100%">
    <div style="background:rgba(254,240,138,0.1);border:1px solid #fef08a;padding:8px;border-radius:8px;margin-bottom:8px">
      <div style="color:#fef08a;font-weight:700;font-size:16px">80%</div>
      <div style="color:#94a3b8;font-size:11px">Less Waste</div>
    </div>
    <div style="background:rgba(254,240,138,0.1);border:1px solid #fef08a;padding:8px;border-radius:8px;margin-bottom:8px">
      <div style="color:#fef08a;font-weight:700;font-size:16px">2sec</div>
      <div style="color:#94a3b8;font-size:11px">Calculation</div>
    </div>
    <div style="background:rgba(254,240,138,0.1);border:1px solid #fef08a;padding:8px;border-radius:8px;margin-bottom:8px">
      <div style="color:#fef08a;font-weight:700;font-size:16px">₹150</div>
      <div style="color:#94a3b8;font-size:11px">Per Month</div>
    </div>
  </div>
  <a href="[YOUR AFFILIATE LINK]" style="background:#fef08a;color:#020617;font-weight:900;width:100%;padding:10px;border-radius:8px;text-decoration:none;font-size:13px;display:block">START FREE</a>
</div>`;

const BANNER_SQ_HTML = `<div style="width:300px;height:300px;background:#0f172a;border:2px solid #fef08a;border-radius:20px;padding:28px;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:Arial,sans-serif">
  <div style="color:#fef08a;font-size:18px;font-weight:900">💰 EARN 80% COMMISSION</div>
  <div style="color:#fff;font-size:15px;margin:12px 0">Promoting FabricAI Pro</div>
  <div style="height:1px;background:#1e293b;width:100%;margin:4px 0 12px"></div>
  <div style="color:#34d399;font-size:28px;font-weight:700">₹2,399 per sale</div>
  <div style="color:#94a3b8;font-size:12px;margin-bottom:16px">AGENCY Annual Plan</div>
  <a href="[YOUR AFFILIATE LINK]" style="background:#fef08a;color:#020617;font-weight:900;padding:12px 20px;border-radius:8px;text-decoration:none;font-size:15px">Join Affiliate Program →</a>
</div>`;

// ─── COMPONENT ────────────────────────────────────────────────────

export default function AffiliateAssets() {
  const [activeTab, setActiveTab] = useState("email");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedBlog, setExpandedBlog] = useState<number | null>(null);

  function copy(id: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  const tabs = [
    { id: "email",    label: "📧 Email Swipes" },
    { id: "banners",  label: "🎨 Banner Ads" },
    { id: "social",   label: "📱 Social Media" },
    { id: "video",    label: "🎥 Video Scripts" },
    { id: "blog",     label: "📄 Blog Templates" },
    { id: "whatsapp", label: "💬 WhatsApp" },
    { id: "aivideo",  label: "🤖 AI Video Guide" },
  ];

  return (
    <div style={{ background: "#020617", minHeight: "100vh",
                  color: "#ffffff", fontFamily: "Arial, sans-serif" }}>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{ background: "#fef08a", color: "#020617", textAlign: "center",
                    padding: "10px", fontSize: "14px", fontWeight: 700 }}>
        📦 FabricAI Pro — Complete Affiliate Marketing Kit | Download &amp; Use Immediately
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{ background: "#0f172a", borderBottom: "1px solid #1e293b",
                    padding: "20px 60px", display: "flex",
                    justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "#34d399", fontWeight: 900, fontSize: "28px" }}>FabricAI Pro</div>
          <div style={{ color: "#fef08a", fontSize: "13px" }}>Marketing Assets</div>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Link to="/affiliates"
            style={{ ...navBtn("#334155") as React.CSSProperties, textDecoration: "none" }}>
            ← Affiliate Page
          </Link>
          <Link to="/"
            style={{ ...navBtn("#1e293b") as React.CSSProperties, textDecoration: "none" }}>
            Main Site
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(180deg,#020617,#0f172a)",
                        padding: "70px 60px", textAlign: "center" }}>
        <div style={badgeStyle}>📦 FREE FOR ALL AFFILIATES</div>
        <h1 style={{ color: "#ffffff", fontSize: "64px", fontWeight: 900,
                     margin: "24px 0 20px" }}>
          Your Complete Marketing Kit
        </h1>
        <p style={{ color: "#cbd5e1", fontSize: "20px", maxWidth: "700px",
                    margin: "0 auto", lineHeight: 1.6 }}>
          Everything you need to start promoting FabricAI Pro today.
          Copy, paste, and start earning 80% commission.
        </p>
      </section>

      {/* ── TAB NAVIGATION ── */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap",
                    justifyContent: "center", padding: "40px 40px 0" }}>
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            style={activeTab === t.id ? activeTabBtn : inactiveTabBtn}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── TAB CONTENT ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 60px" }}>

        {/* EMAIL SWIPES */}
        {activeTab === "email" && (
          <div>
            <h2 style={tabHeading}>📧 Email Swipes — Copy &amp; Paste Ready</h2>
            <p style={tabSub}>
              5 proven email templates. Use in your autoresponder or send manually to your list.
            </p>
            {EMAILS.map((em, i) => (
              <div key={i} style={{ ...contentCard, marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between",
                              alignItems: "flex-start", marginBottom: "16px",
                              flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <span style={{ color: "#fef08a", fontSize: "13px", fontWeight: 700 }}>
                      EMAIL {i + 1}
                    </span>
                    <div style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700,
                                  marginTop: "4px", maxWidth: "700px" }}>
                      Subject: {em.subject}
                    </div>
                  </div>
                  <button
                    onClick={() => copy(`email-${i}`, `Subject: ${em.subject}\n\n${em.body}`)}
                    style={copiedId === `email-${i}` ? copiedBtn : copyBtn}>
                    {copiedId === `email-${i}` ? "✅ Copied!" : "📋 Copy Email"}
                  </button>
                </div>
                <pre style={preStyle}>{em.body}</pre>
              </div>
            ))}
          </div>
        )}

        {/* BANNER ADS */}
        {activeTab === "banners" && (
          <div>
            <h2 style={tabHeading}>🎨 Banner Ads — Ready to Use</h2>
            <p style={tabSub}>
              Professional banner ads for all platforms. Click "Copy HTML Code" to get the embed code.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "flex-start" }}>

              {/* 728×90 Leaderboard */}
              <div>
                <p style={bannerLabel}>728×90 Leaderboard</p>
                <div style={{ maxWidth: "728px", height: "90px",
                              background: "linear-gradient(135deg,#020617,#0f172a)",
                              border: "2px solid #fef08a", borderRadius: "8px",
                              display: "flex", alignItems: "center",
                              justifyContent: "space-between", padding: "0 24px" }}>
                  <div>
                    <div style={{ color: "#34d399", fontWeight: 700, fontSize: "18px" }}>FabricAI Pro</div>
                    <div style={{ color: "#fef08a", fontSize: "11px" }}>AI Garment ERP</div>
                  </div>
                  <div style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700 }}>
                    Calculate Fabric Consumption Instantly
                  </div>
                  <button style={{ background: "#fef08a", color: "#020617", padding: "10px 20px",
                                   fontWeight: 900, borderRadius: "6px", border: "none",
                                   cursor: "pointer" }}>
                    Try FREE →
                  </button>
                </div>
                <button onClick={() => copy("banner-728", BANNER_728_HTML)}
                  style={{ ...copyBtn, marginTop: "10px" }}>
                  {copiedId === "banner-728" ? "✅ Copied!" : "📋 Copy HTML Code"}
                </button>
              </div>

              {/* 300×250 Medium Rectangle */}
              <div>
                <p style={bannerLabel}>300×250 Medium Rectangle</p>
                <div style={{ width: "300px", height: "250px",
                              background: "linear-gradient(180deg,#0f172a,#020617)",
                              border: "2px solid #34d399", borderRadius: "16px",
                              padding: "24px", textAlign: "center",
                              display: "flex", flexDirection: "column",
                              justifyContent: "center", alignItems: "center" }}>
                  <div style={{ color: "#34d399", fontWeight: 700, fontSize: "22px" }}>
                    🏭 FabricAI Pro
                  </div>
                  <div style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, margin: "16px 0" }}>
                    Calculate Fabric Consumption with AI
                  </div>
                  <div style={{ color: "#fef08a", fontSize: "20px", fontWeight: 700 }}>
                    80% Less Wastage
                  </div>
                  <button style={{ background: "#34d399", color: "#020617", padding: "12px 24px",
                                   fontWeight: 900, borderRadius: "8px", border: "none",
                                   cursor: "pointer", marginTop: "16px" }}>
                    Try FREE Today →
                  </button>
                </div>
                <button onClick={() => copy("banner-300", BANNER_300_HTML)}
                  style={{ ...copyBtn, marginTop: "10px" }}>
                  {copiedId === "banner-300" ? "✅ Copied!" : "📋 Copy HTML Code"}
                </button>
              </div>

              {/* 160×600 Wide Skyscraper */}
              <div>
                <p style={bannerLabel}>160×600 Wide Skyscraper</p>
                <div style={{ width: "160px", height: "600px",
                              background: "linear-gradient(180deg,#020617,#0f172a)",
                              border: "2px solid #7c3aed", borderRadius: "12px",
                              padding: "20px 16px", textAlign: "center",
                              display: "flex", flexDirection: "column",
                              justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: "#34d399", fontWeight: 700, fontSize: "16px" }}>FabricAI Pro</div>
                  <div>
                    <div style={{ fontSize: "40px", marginBottom: "12px" }}>🏭</div>
                    <div style={{ color: "#ffffff", fontSize: "13px", marginBottom: "8px" }}>
                      AI Fabric Consumption ERP
                    </div>
                    <div style={{ color: "#fef08a", fontSize: "12px" }}>Reduce wastage by 12%</div>
                  </div>
                  <div style={{ width: "100%" }}>
                    {[{ val: "80%", lbl: "Less Waste" }, { val: "2sec", lbl: "Calculation" }, { val: "₹150", lbl: "Per Month" }].map((s, i) => (
                      <div key={i} style={{ background: "rgba(254,240,138,0.1)",
                                            border: "1px solid #fef08a", padding: "8px",
                                            borderRadius: "8px", marginBottom: "8px" }}>
                        <div style={{ color: "#fef08a", fontWeight: 700, fontSize: "16px" }}>{s.val}</div>
                        <div style={{ color: "#94a3b8", fontSize: "11px" }}>{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <button style={{ background: "#fef08a", color: "#020617", fontWeight: 900,
                                   width: "100%", padding: "10px", borderRadius: "8px",
                                   border: "none", cursor: "pointer", fontSize: "13px" }}>
                    START FREE
                  </button>
                </div>
                <button onClick={() => copy("banner-160", BANNER_160_HTML)}
                  style={{ ...copyBtn, marginTop: "10px" }}>
                  {copiedId === "banner-160" ? "✅ Copied!" : "📋 Copy HTML Code"}
                </button>
              </div>

              {/* 300×300 Square */}
              <div>
                <p style={bannerLabel}>300×300 Square — Affiliate Edition</p>
                <div style={{ width: "300px", height: "300px", background: "#0f172a",
                              border: "2px solid #fef08a", borderRadius: "20px",
                              padding: "28px", textAlign: "center",
                              display: "flex", flexDirection: "column",
                              justifyContent: "center", alignItems: "center" }}>
                  <div style={{ color: "#fef08a", fontSize: "18px", fontWeight: 900 }}>
                    💰 EARN 80% COMMISSION
                  </div>
                  <div style={{ color: "#ffffff", fontSize: "15px", margin: "12px 0" }}>
                    Promoting FabricAI Pro
                  </div>
                  <div style={{ height: "1px", background: "#1e293b", width: "100%", margin: "4px 0 12px" }} />
                  <div style={{ color: "#34d399", fontSize: "28px", fontWeight: 700 }}>
                    ₹2,399 per sale
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "16px" }}>
                    AGENCY Annual Plan
                  </div>
                  <button style={{ background: "#fef08a", color: "#020617", fontWeight: 900,
                                   padding: "12px 20px", borderRadius: "8px",
                                   border: "none", cursor: "pointer" }}>
                    Join Affiliate Program →
                  </button>
                </div>
                <button onClick={() => copy("banner-sq", BANNER_SQ_HTML)}
                  style={{ ...copyBtn, marginTop: "10px" }}>
                  {copiedId === "banner-sq" ? "✅ Copied!" : "📋 Copy HTML Code"}
                </button>
              </div>

            </div>
          </div>
        )}

        {/* SOCIAL MEDIA */}
        {activeTab === "social" && (
          <div>
            <h2 style={tabHeading}>📱 Social Media Posts</h2>
            <p style={tabSub}>
              Copy-paste ready posts for Facebook, Instagram, LinkedIn and Twitter/X.
              Replace [YOUR AFFILIATE LINK] before posting.
            </p>
            {[
              {
                platform: "Facebook", color: "#1877f2", icon: "📘",
                posts: [
                  { id: "fb1", text: `🏭 GARMENT FACTORY OWNERS — This will save you hours every week!

FabricAI Pro is an AI-powered ERP that calculates exact fabric consumption for any garment style in seconds.

✅ No more Excel guesswork
✅ Accurate marker efficiency
✅ Smart cutting room planning
✅ Instant buyer quotations

Free demo account available — no credit card needed.

👉 [YOUR AFFILIATE LINK]

#GarmentFactory #FabricConsumption #TextileERP #GarmentIndustry #FashionTech #AI` },
                  { id: "fb2", text: `Did you know the average garment factory wastes 8-15% of fabric every month? 😱

On 1000kg of fabric at ₹200/kg, that's ₹16,000 to ₹30,000 WASTED.

FabricAI Pro uses AI to calculate exact consumption, reduce wastage, and protect your profit margins.

Try it FREE today 👇
[YOUR AFFILIATE LINK]

#TextileIndustry #GarmentManufacturing #FabricWastage #CostReduction` },
                  { id: "fb3", text: `From Excel to AI in 60 seconds ⚡

FabricAI Pro replaces your fabric consumption spreadsheets with:

🤖 AI-powered calculation
📊 Marker efficiency analysis
💰 Instant cost estimation
📱 Mobile-friendly interface

500+ garment factories already switched.

Free trial → [YOUR AFFILIATE LINK]` },
                ],
              },
              {
                platform: "Instagram", color: "#e1306c", icon: "📸",
                posts: [
                  { id: "ig1", text: `⚡ Calculate fabric consumption in SECONDS not HOURS

FabricAI Pro transforms your cutting room planning 👆

✅ T-shirts ✅ Shirts ✅ Hoodies ✅ Trousers
✅ Kurtis ✅ Uniforms ✅ Kidswear

Link in bio 👆
[YOUR AFFILIATE LINK]

#FabricAIPro #GarmentERP #FashionTech #GarmentFactory #TextileIndia #FabricConsumption #GarmentManufacturing #AIFashion` },
                  { id: "ig2", text: `The tool every garment factory needs in 2025 🏭

FabricAI Pro calculates:
📐 Fabric consumption per style
📊 Marker efficiency %
💰 Full garment costing
📋 Cutting room planning

FREE demo account available

Drop a 🏭 in comments if you work in garments!
Link: [YOUR AFFILIATE LINK]` },
                  { id: "ig3", text: `POV: You just reduced fabric wastage by 12% using AI 🤖✨

That's exactly what FabricAI Pro does for garment factories.

Try free → link in bio
[YOUR AFFILIATE LINK]

#GarmentIndustry #FabricWastage #TextileTech` },
                ],
              },
              {
                platform: "LinkedIn", color: "#0077b5", icon: "💼",
                posts: [
                  { id: "li1", text: `I want to share a tool that is transforming how garment factories calculate fabric consumption.

FabricAI Pro is an AI-powered ERP platform specifically built for garment manufacturing — something that simply did not exist until now.

As someone who works in the textile industry, I know the pain of:
→ Manual fabric consumption calculations
→ Inaccurate marker planning
→ Wrong buyer quotations
→ Excess fabric purchases

FabricAI Pro solves all of these with AI.

Key features:
- Automatic fabric consumption calculation
- Marker efficiency optimization
- GSM and width-based calculations
- Shrinkage and wastage tracking
- Instant buyer quotation generation

Free demo available at: [YOUR AFFILIATE LINK]

If you know anyone in garment manufacturing, please tag them below.` },
                  { id: "li2", text: `The garment industry wastes billions of rupees in fabric every year. Most of it is preventable.

Here is the math:
Average factory: 5,000 kg/month fabric consumption
Average wastage: 10% = 500 kg wasted
At ₹200/kg: ₹1,00,000 wasted monthly
Per year: ₹12,00,000 in preventable waste

FabricAI Pro addresses this with AI-powered consumption calculation.

Early results show 8-12% reduction in fabric wastage after implementation.

The tool pays for itself many times over.

Free trial: [YOUR AFFILIATE LINK]` },
                ],
              },
              {
                platform: "Twitter / X", color: "#1da1f2", icon: "🐦",
                posts: [
                  { id: "tw1", text: `Garment factory owners — FabricAI Pro calculates exact fabric consumption using AI in seconds.

No more Excel. No more guesswork. No more expensive over-buying.

Free demo: [YOUR AFFILIATE LINK]

#GarmentFactory #TextileTech #AI` },
                  { id: "tw2", text: `How much fabric did your factory waste last month?

The industry average is 10-15%.

FabricAI Pro reduces that with AI-powered consumption calculation.

Try free → [YOUR AFFILIATE LINK]` },
                  { id: "tw3", text: `From startup fashion brands to large export factories — FabricAI Pro helps every garment business calculate fabric consumption accurately.

Free account available. No credit card.

[YOUR AFFILIATE LINK]` },
                ],
              },
            ].map((section) => (
              <div key={section.platform} style={{ marginBottom: "50px" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  marginBottom: "24px", paddingBottom: "16px",
                  borderBottom: `2px solid ${section.color}`,
                }}>
                  <span style={{ fontSize: "28px" }}>{section.icon}</span>
                  <h3 style={{ color: section.color, fontSize: "26px",
                               fontWeight: 800, margin: 0 }}>
                    {section.platform}
                  </h3>
                  <span style={{ color: "#475569", fontSize: "14px" }}>
                    {section.posts.length} posts ready
                  </span>
                </div>
                <div style={{ display: "grid",
                              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                              gap: "20px" }}>
                  {section.posts.map((post) => (
                    <PostCard key={post.id} text={post.text} color={section.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIDEO SCRIPTS */}
        {activeTab === "video" && (
          <div>
            <h2 style={tabHeading}>🎥 Video Scripts</h2>
            <p style={tabSub}>
              Professional scripts for YouTube, Instagram Reels, TikTok and tutorial videos.
              Stage directions shown in green brackets.
            </p>
            {[
              {
                id: "v1",
                title: "YouTube Review Script",
                duration: "8-10 minutes",
                badge: "YouTube",
                badgeColor: "#ff0000",
                script: `TITLE: "FabricAI Pro Review — The Best AI Tool for Garment Factories in 2025"

[HOOK — 0:00 to 0:30]
If you own a garment factory or work in textile manufacturing, I found a tool that is going to save you thousands of rupees every single month. Stay with me for the next 8 minutes because this review could completely change how your factory operates.

[PROBLEM — 0:30 to 2:00]
Let me ask you something. How do you currently calculate fabric consumption for your garment styles?

If the answer involves Excel spreadsheets, manual formulas, or experience-based guessing — you are probably losing money every week.

The problem with manual calculation is human error. A small mistake in a consumption formula means you either over-order fabric and waste money, or under-order and stop production mid-cutting.

Both scenarios cost you more than you realize.

[SOLUTION — 2:00 to 4:00]
This is where FabricAI Pro comes in. It is an AI-powered ERP platform built specifically for garment manufacturing.

[SCREEN SHARE: Open fabricaipro.com and login]

When you log in you see the command center. Clean, professional, all your factory data in one place.

[CLICK: Consumption Calculator]

I will enter a basic T-shirt:
Garment type: T-Shirt | Fabric: Knit | Width: 58 inches | GSM: 180
Measurements: Chest 40, Length 28, Sleeve 8

[CLICK CALCULATE]

Instant results. Per piece consumption, total fabric needed, marker efficiency, fabric cost — everything in about 2 seconds.

[FEATURES — 4:00 to 6:00]
Style Master — save every garment style with all technical specifications.
[DEMO STYLE MASTER]

AI Workspace — upload a garment image and the AI gives a complete BOM, costing, cutting plan.
[UPLOAD IMAGE AND DEMO]

Email Generator — write professional buyer emails in seconds.
[DEMO EMAIL GENERATOR]

[PRICING — 6:00 to 7:00]
Free plan: 5 AI generations per day — no credit card needed.
PRO plan: ₹150 per month — unlimited AI access.
AGENCY plan: ₹399 per month for multiple factories.

For what this tool saves in fabric wastage alone, it pays for itself in the first week.

[CTA — 7:00 to 8:00]
The link is in the description below. Click it, create your free account, try the consumption calculator on your own styles. No credit card, no commitment.

[END CARD: Show affiliate link on screen for 10 seconds]`,
              },
              {
                id: "v2",
                title: "Short Reel / TikTok Script",
                duration: "60 seconds",
                badge: "Reels / TikTok",
                badgeColor: "#ff6b35",
                script: `[0-5 seconds — HOOK]
Are you still calculating fabric consumption manually? Let me show you a better way.

[5-20 seconds — PROBLEM]
Most garment factories waste 10-15% of fabric every month because of wrong calculations.
At ₹200 per kg that is lakhs wasted every year.

[20-40 seconds — SOLUTION]
This is FabricAI Pro. Watch this.
[SCREEN RECORD: Enter measurements, click calculate]
T-shirt, 58 inch width, 180 GSM — done.
Consumption, efficiency, cost — all instant in 2 seconds.

[40-55 seconds — FEATURES]
AI garment analysis, style master, buyer quotations, email generator.
Free account available — no credit card.

[55-60 seconds — CTA]
Link in bio. Try it free today.`,
              },
              {
                id: "v3",
                title: "Testimonial Style Script",
                duration: "3 minutes",
                badge: "Review",
                badgeColor: "#7c3aed",
                script: `[INTRO]
I want to share my experience using FabricAI Pro for the past month in my garment business.

[BEFORE]
Before this tool, I spent 2-3 hours every day on fabric consumption calculations. Excel sheets, manual formulas, checking and rechecking numbers. And still making mistakes that cost money.

[AFTER]
Now with FabricAI Pro, the same calculation takes about 30 seconds.

I enter the measurements, choose my fabric width and GSM, click calculate — and everything is done. Consumption per piece, total for the order, fabric cost, marker efficiency.

[SPECIFIC RESULTS]
In the first month I noticed:
- Fewer fabric over-orders
- More accurate buyer quotations
- Less time spent on calculations
- Better communication with my cutting master

The AI Workspace feature is particularly impressive. I can upload a garment photo and get a complete technical analysis.

[CTA]
If you are in garment manufacturing I genuinely recommend trying the free account. The link is below. Start with the consumption calculator and see how much time you save.`,
              },
              {
                id: "v4",
                title: "Tutorial / Walkthrough Script",
                duration: "5 minutes",
                badge: "Tutorial",
                badgeColor: "#34d399",
                script: `Welcome. Today I will show you exactly how to use FabricAI Pro to calculate fabric consumption for a shirt order.

[STEP 1 — 0:00 to 0:45]
Go to fabricaipro.com and create your free account. No credit card needed.
[SHOW REGISTRATION PROCESS]

[STEP 2 — 0:45 to 1:30]
Once logged in, click Consumption Calculator in the left sidebar.
[CLICK CONSUMPTION CALCULATOR]

[STEP 3 — 1:30 to 3:00]
Enter the details for a men's formal shirt:
- Garment Type: Shirt | Fabric: Woven | Width: 58 inches
- Fabric Rate: ₹180 per meter
- Measurements: Chest 42, Length 30, Sleeve 24, Shoulder 17
[ENTER ALL VALUES SLOWLY ON SCREEN]

[STEP 4 — 3:00 to 4:00]
Click Calculate Now at the bottom.
[CLICK CALCULATE]

Instantly you see:
- Per piece: 1.84 meters | Single piece cost: ₹331
- For 1000 pieces: 1,840 meters | Total cost: ₹3,31,200
- Fabric balance from your stock

[STEP 5 — 4:00 to 5:00]
The AI Workspace gives even more detail. Upload your techpack image and get cutting instructions, BOM, and production planning in seconds.
[DEMO WORKSPACE BRIEFLY]

The link to create your free account is in the description. Subscribe for more garment industry tutorials.`,
              },
            ].map((sc) => (
              <ScriptCard key={sc.id} {...sc} />
            ))}
          </div>
        )}

        {/* BLOG TEMPLATES */}
        {activeTab === "blog" && (
          <div>
            <h2 style={tabHeading}>📄 Blog Templates</h2>
            <p style={tabSub}>
              3 full-length SEO blog articles ready to publish. Click to expand, then copy the full article.
            </p>
            {[
              {
                title: "FabricAI Pro Review — Is This the Best AI Tool for Garment Factories?",
                wordCount: "~1,200 words",
                keywords: "FabricAI Pro review, garment ERP software, fabric consumption calculator",
                content: `FabricAI Pro Review — Is This the Best AI Tool for Garment Factories?

If you own a garment factory or work in textile manufacturing, finding software that actually understands your business is nearly impossible. Most generic ERP systems are built for retail, e-commerce, or large enterprises — not for the specific challenges of fabric consumption, marker efficiency, and cutting room planning.

FabricAI Pro claims to solve this problem with AI. In this review I will walk through every feature, test it against real garment scenarios, and give you my honest opinion.

WHAT IS FABRICAI PRO?

FabricAI Pro is an AI-powered ERP platform built specifically for garment factories. It focuses on the core pain points of garment manufacturing:

→ Fabric consumption calculation
→ Style master and techpack management
→ Marker efficiency analysis
→ Buyer quotation generation
→ AI garment analysis from images or text

The platform is web-based, meaning no installation required. You login from any device and access your factory data instantly.

WHO BUILT IT?

The software was built by someone who actually runs a garment factory — not a generic software company. This matters because the calculations and terminology are correct. You will see familiar terms like GSM, shrinkage percentage, marker width, lay planning, and waste allowance — all used correctly.

FABRIC CONSUMPTION CALCULATOR — THE CORE FEATURE

The fabric consumption calculator is where FabricAI Pro shines. You enter:

→ Garment type (T-shirt, shirt, trouser, etc.)
→ Fabric type (knit, woven, denim)
→ Fabric width in inches
→ GSM
→ Garment measurements (chest, length, sleeve, etc.)
→ Shrinkage percentage
→ Wastage allowance

Click calculate and you instantly get:
→ Per piece fabric consumption in meters
→ Total fabric for any order quantity
→ GSM-based fabric weight
→ Estimated fabric cost
→ Marker efficiency percentage

This takes about 2 seconds. The same calculation in Excel takes 10-15 minutes and is prone to errors.

STYLE MASTER

The Style Master lets you store complete style records including:
→ Style number, buyer name, season
→ Fabric type, GSM, width
→ Shrinkage data
→ Techpack images
→ Marker details
→ Consumption history

This creates a permanent record for every style your factory produces. When you get a repeat order, you pull up the style and all calculations are already done.

AI WORKSPACE

The AI Workspace is where the "AI" in FabricAI Pro becomes apparent. You can:
→ Upload a garment image and get a complete technical analysis
→ Describe a style in text and get BOM, costing, cutting plan
→ Generate professional buyer emails instantly
→ Write production notes automatically

The AI does not replace your expertise. It amplifies it. You still review every output, but the starting point is 90% done instead of 0%.

PRICING

Free plan: ₹0 per month — 5 AI generations daily, basic consumption calculator, 3 styles
PRO plan: ₹150 per month — unlimited AI, full style master, all exports
AGENCY plan: ₹399 per month — multiple factory accounts, commercial license

At ₹150 per month for PRO, this is one of the most affordable specialized tools available for garment factories.

VERDICT

FabricAI Pro is the best AI tool I have found for garment factories. The consumption calculator alone justifies the subscription — it is accurate, fast, and built around real garment industry knowledge.

If you manage fabric orders, create buyer quotations, or plan cutting room operations, this tool will save you time and money every single day.

👉 Try the free account at: [YOUR AFFILIATE LINK]

You can test the consumption calculator on your own styles before deciding to upgrade.`,
              },
              {
                title: "How to Reduce Fabric Wastage in Your Garment Factory by 12% Using AI",
                wordCount: "~1,500 words",
                keywords: "reduce fabric wastage, garment factory efficiency, fabric consumption AI",
                content: `How to Reduce Fabric Wastage in Your Garment Factory by 12% Using AI

Fabric wastage is one of the biggest hidden costs in garment manufacturing. Most factory owners focus on labor costs, machinery, and overheads — but fabric wastage silently drains 8-15% of your total fabric budget every month.

This article will show you exactly how to identify wastage sources in your factory and how AI tools like FabricAI Pro can reduce wastage by up to 12%.

THE REAL COST OF FABRIC WASTAGE

Before we discuss solutions, let us understand the actual numbers.

Average garment factory: 5,000 kg fabric per month
Average wastage: 10% = 500 kg wasted
Fabric cost: ₹200 per kg
Monthly waste cost: ₹1,00,000
Annual waste cost: ₹12,00,000

That is ₹12 lakhs per year on fabric that never becomes a garment. For export factories with higher volumes, this number is even larger.

WHY DOES FABRIC WASTAGE HAPPEN?

1. Inaccurate Consumption Calculations
The most common cause. When your consumption estimate is wrong, you either over-order (waste through excess) or under-order (waste through production stops and emergency purchases).

2. Poor Marker Planning
A bad marker wastes 5-15% of fabric in the cutting room. Most factories use rough estimates instead of precise marker efficiency calculations.

3. No Shrinkage Tracking
If you wash fabric before cutting, shrinkage adds to wastage. Most factories use approximate shrinkage values instead of measured ones.

4. Manual Errors
Calculation mistakes in Excel, communication errors between merchandiser and cutting master, wrong conversions between inches and centimeters.

5. No Historical Data
Without records of actual vs predicted consumption, you cannot improve your formulas over time.

HOW AI REDUCES FABRIC WASTAGE

FabricAI Pro addresses each of these causes:

ACCURATE CONSUMPTION CALCULATION
The AI uses industry-standard formulas adjusted for your specific garment type, fabric width, and measurements. It accounts for:
→ Seam allowances by garment type
→ Standard wastage percentages by fabric type
→ Shrinkage adjustments
→ GSM variations

The result is a consumption estimate that is consistently more accurate than manual Excel calculations.

MARKER EFFICIENCY ANALYSIS
Enter your marker width and garment dimensions, and FabricAI Pro calculates the theoretical maximum marker efficiency for your style. This gives your cutting master a target to hit — and a way to identify when actual cutting falls below optimal efficiency.

STYLE MASTER WITH HISTORICAL RECORDS
Every style you calculate is saved with its consumption data. When you get a repeat order, you can compare predicted vs actual consumption from the last production run. Over time this data lets you identify systematic errors in your formulas and correct them.

AI ANALYSIS OF GARMENT IMAGES
Upload a techpack or garment photo and FabricAI Pro's AI will identify potential wastage points in the design — complex panel shapes, excessive seam allowances, inefficient fabric usage patterns.

HOW TO IMPLEMENT THIS IN YOUR FACTORY

Week 1: Set up FabricAI Pro (free account) and run consumption calculations for your top 10 styles
Week 2: Compare AI predictions against your last actual production data
Week 3: Identify styles with highest prediction vs actual gap
Week 4: Adjust your cutting room SOPs based on findings

Month 2 onwards: Track every new production run, gradually improving accuracy

REALISTIC RESULTS

Factories using systematic consumption tracking typically see:
→ 3-5% reduction from better calculations in month 1
→ Additional 3-4% from marker efficiency improvements by month 3
→ Additional 2-3% from data-driven formula adjustments by month 6

Total: 8-12% reduction in fabric wastage within 6 months.

START TODAY

The free account at FabricAI Pro includes the full consumption calculator — no credit card, no time limit.

Start by calculating your top 5 styles and compare the results against your current estimates. The gap you find is money you are currently losing.

👉 Create your free account: [YOUR AFFILIATE LINK]`,
              },
              {
                title: "FabricAI Pro vs Excel — Why Garment Factories Are Switching to AI",
                wordCount: "~1,000 words",
                keywords: "FabricAI Pro vs Excel, garment factory software, AI fabric calculator",
                content: `FabricAI Pro vs Excel — Why Garment Factories Are Switching to AI

For decades, garment factories have relied on Excel spreadsheets for fabric consumption calculations. Excel is familiar, flexible, and free. So why are thousands of factories switching to AI tools like FabricAI Pro?

This article gives you a direct comparison across 8 key areas.

1. CALCULATION SPEED

Excel: 10-30 minutes per style calculation
FabricAI Pro: 30 seconds per style

With Excel, you manually enter formulas for each measurement, check conversions, verify results. With FabricAI Pro, you enter measurements and click calculate. Done.

For a factory handling 20 styles per season, this difference is 3-8 hours of work vs 10 minutes.

2. CALCULATION ACCURACY

Excel: Depends entirely on formula quality and user skill
FabricAI Pro: Industry-standard formulas built in, AI-verified

Excel errors are common and expensive. A wrong formula reference, a missed cell, a bad formula copy — any of these create wrong consumption numbers that lead to wrong fabric orders.

FabricAI Pro uses the same formula every time. No user error in the calculation itself.

3. GARMENT-SPECIFIC KNOWLEDGE

Excel: Generic — you must build in all garment-specific logic yourself
FabricAI Pro: Built for garments — T-shirts, shirts, trousers, kurtis, hoodies, uniforms

The fabric consumption formula is different for knit vs woven, for different garment types, for different construction methods. Building all this into Excel requires deep expertise and time. FabricAI Pro has all of this built in.

4. STYLE MANAGEMENT

Excel: Files scattered across folders, versions get confused
FabricAI Pro: Centralized style master, all data in one place, searchable

Most factories have multiple Excel files for different seasons, buyers, or styles. Finding old data is slow. With FabricAI Pro, all styles are in a searchable database.

5. COLLABORATION

Excel: Share files by email or WhatsApp, version control is manual
FabricAI Pro: Web-based, any device, any location, always current

Your merchandiser, production manager, and cutting master can all access the same data simultaneously. No more "which version of the Excel are we using?"

6. AI CAPABILITIES

Excel: None
FabricAI Pro: AI garment analysis, AI writing tools, AI costing

Excel can calculate. It cannot analyze a garment photo, generate buyer emails, or predict production issues. These capabilities exist only in purpose-built AI tools.

7. COST

Excel: Free (if you already have Microsoft Office)
FabricAI Pro: Free plan available, PRO plan ₹150/month

For factories buying fabric worth lakhs per month, ₹150 per month for a tool that reduces wastage by even 1% is an obvious investment.

8. LEARNING CURVE

Excel: High for new users, skills depend on individual employee
FabricAI Pro: Simple interface, no formula knowledge required, onboarding in minutes

When your experienced Excel user leaves, their spreadsheet knowledge leaves with them. FabricAI Pro's knowledge is built into the platform.

THE VERDICT

Excel is not wrong. It is a powerful tool. But for fabric consumption calculation, style management, and garment analysis — purpose-built AI tools are now clearly superior.

FabricAI Pro is not trying to replace all of Excel. It does one thing — garment manufacturing intelligence — and does it better than any spreadsheet can.

👉 Start your free FabricAI Pro account: [YOUR AFFILIATE LINK]

The free account includes the full consumption calculator. Try it on one style and compare the results with your current Excel method.`,
              },
            ].map((blog, i) => (
              <BlogCard key={i} {...blog} />
            ))}
          </div>
        )}

        {/* WHATSAPP MESSAGES */}
        {activeTab === "whatsapp" && (
          <div>
            <h2 style={tabHeading}>💬 WhatsApp Messages</h2>
            <p style={tabSub}>
              8 ready-to-send WhatsApp templates. Replace [YOUR AFFILIATE LINK] before sending.
            </p>
            {[
              {
                label: "Group Broadcast",
                color: "#25d366",
                text: `🏭 GARMENT FACTORY OWNERS — Important update!

I just started using FabricAI Pro and it has completely changed how I calculate fabric consumption.

✅ Calculates in 2 seconds (was 30 minutes in Excel)
✅ More accurate than manual formulas
✅ AI analysis of garment images
✅ Free demo account available

If you work in garments, try the free demo here:
👉 [YOUR AFFILIATE LINK]

No credit card. No risk. Just try it.`,
              },
              {
                label: "Personal Outreach",
                color: "#34d399",
                text: `Hi [Name]! 👋

Hope your production is going well.

I wanted to share something that has been saving me a lot of time — FabricAI Pro.

It calculates fabric consumption for any style in about 30 seconds. Way faster and more accurate than Excel.

Since you handle [buying/production/sampling], I thought you might find it useful.

Free trial here: [YOUR AFFILIATE LINK]

Let me know what you think!`,
              },
              {
                label: "Follow Up Message",
                color: "#fef08a",
                text: `Hi [Name]! Following up on the FabricAI Pro link I sent earlier.

Did you get a chance to try the free demo?

The consumption calculator alone is worth 5 minutes of your time. You can test it on any real style from your current orders.

Here's the link again: [YOUR AFFILIATE LINK]

Happy to answer any questions if you have them.`,
              },
              {
                label: "Industry Group Post",
                color: "#7c3aed",
                text: `Good morning everyone 🙏

Has anyone tried FabricAI Pro for fabric consumption calculation?

I've been using it for 3 weeks now and the results are quite good. Saves me 2-3 hours daily on calculation work.

Key features:
📐 Fabric consumption per style
📊 Marker efficiency analysis
💰 Instant buyer quotations
🤖 AI garment analysis

Free demo available: [YOUR AFFILIATE LINK]

Would love to hear experiences from others in the group.`,
              },
              {
                label: "Buyer / Merchandiser",
                color: "#2563eb",
                text: `Hi [Buyer Name],

For our next order I wanted to share how I'm now calculating fabric consumption.

I've switched to FabricAI Pro — an AI-powered system that gives me accurate consumption figures in seconds, along with marker efficiency and full costing breakdown.

This means my quotations to you will be:
✅ More accurate
✅ Faster to prepare
✅ With full fabric analysis attached

If this is useful for your other factory partners, here is the tool: [YOUR AFFILIATE LINK]

Looking forward to the next order!`,
              },
              {
                label: "Export Factory Owner",
                color: "#ff6b35",
                text: `Fellow export factory owners 🙋

Quick question — how do you currently handle fabric consumption for buyer orders?

I moved from Excel to FabricAI Pro last month and the difference is significant:

Before: 20-30 min per style, multiple Excel files, human errors
Now: 30 seconds per style, centralized database, AI verification

For export factories handling multiple buyers and styles, this is a game changer.

Try the free demo: [YOUR AFFILIATE LINK]

It's built specifically for garment factories — not generic business software.`,
              },
              {
                label: "Small Factory / Job Worker",
                color: "#1da1f2",
                text: `Hi [Name]!

For small factories and job workers, I found something really useful.

FabricAI Pro has a FREE plan that includes:
→ Full fabric consumption calculator
→ 5 AI-powered analyses daily
→ Style master for 3 styles
→ No credit card required

This is the kind of tool that used to be only available to big factories. Now anyone can use it.

Try the free version here: [YOUR AFFILIATE LINK]

Even the free plan will save you hours every week.`,
              },
              {
                label: "Re-engagement Message",
                color: "#f87171",
                text: `Hi [Name]! 👋

It's been a while. Hope business is going well.

I wanted to share something I've been using — FabricAI Pro.

It's an AI system for garment factories that calculates fabric consumption, manages styles, and generates buyer quotations.

Given how fabric prices have increased this year, having accurate consumption data is more important than ever.

Free demo here (no credit card): [YOUR AFFILIATE LINK]

Stay well and good luck with production!`,
              },
            ].map((msg, i) => (
              <WhatsAppCard key={i} {...msg} />
            ))}
          </div>
        )}

        {/* AI VIDEO GUIDE */}
        {activeTab === "aivideo" && (
          <div>
            <h2 style={tabHeading}>🤖 Create AI Promotional Videos</h2>
            <p style={tabSub}>
              Create professional promotional videos for FREE using these AI tools.
              No camera, no studio, no video editing skills needed.
            </p>

            {/* Intro card */}
            <div style={{
              background: "linear-gradient(135deg,#0f172a,#1e293b)",
              border: "2px solid #fef08a",
              borderRadius: "20px", padding: "32px", marginBottom: "40px",
            }}>
              <p style={{ color: "#fef08a", fontSize: "20px", fontWeight: 700, margin: "0 0 12px" }}>
                💡 You do not need ANY of these:
              </p>
              <div style={{ display: "grid",
                            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                            gap: "12px", marginBottom: "20px" }}>
                {["❌ Camera","❌ Studio","❌ Microphone",
                  "❌ Video editing","❌ Acting skills","❌ Paid software"].map((item, i) => (
                  <span key={i} style={{
                    background: "#020617", border: "1px solid #334155",
                    borderRadius: "10px", padding: "10px 16px",
                    color: "#94a3b8", fontSize: "14px", textAlign: "center",
                  }}>
                    {item}
                  </span>
                ))}
              </div>
              <p style={{ color: "#34d399", fontSize: "18px", fontWeight: 700, margin: 0 }}>
                ✅ All 5 tools below are FREE to start. AI creates the entire video from your text.
              </p>
            </div>

            {/* Tool cards */}
            {[
              {
                name: "Pictory AI", url: "pictory.ai",
                badge: "Best for YouTube", color: "#7c3aed",
                free: "3 videos/month free",
                bestFor: "Long-form YouTube review videos",
                steps: [
                  "Go to pictory.ai and create free account",
                  "Click Script to Video",
                  "Paste the YouTube Review Script from the Video Scripts tab",
                  "Click Proceed",
                  "Select visual style — choose Corporate or Modern Business",
                  "AI automatically finds relevant video clips for each paragraph",
                  "Click Voiceover and select an AI voice — choose Indian English accent",
                  "Add your affiliate link as text overlay in the final scene",
                  "Click Generate and download your video",
                ],
                tip: "Add keywords: garment factory, textile, fabric in Pictory search to get relevant industry footage automatically.",
              },
              {
                name: "InVideo AI", url: "invideo.io/ai",
                badge: "Best for Reels", color: "#2563eb",
                free: "Free with watermark",
                bestFor: "Instagram Reels, YouTube Shorts, TikTok",
                steps: [
                  "Go to invideo.io/ai",
                  "In the text box paste this prompt: Create a 60-second promotional video for FabricAI Pro, an AI-powered fabric consumption calculator for garment factories. Show garment factory scenes, fabric rolls, cutting room. Highlight: calculates consumption in 2 seconds, reduces wastage, free demo available. End with call to action.",
                  "Select format: Vertical 9:16 for Reels OR Horizontal 16:9 for YouTube",
                  "Choose voiceover language: English India",
                  "Click Generate — video created in about 2 minutes",
                  "Edit text overlays to add your affiliate link",
                  "Export and post on your platform",
                ],
                tip: "Generate 5-6 variations with slightly different prompts. Use the best one for paid ads and others for organic posts.",
              },
              {
                name: "HeyGen", url: "heygen.com",
                badge: "Best for Presenter Videos", color: "#ff6b35",
                free: "1 free video/month",
                bestFor: "Professional talking head videos for LinkedIn",
                steps: [
                  "Go to heygen.com and create free account",
                  "Click Create Video",
                  "Select an AI Avatar — choose a professional presenter",
                  "Select language: English",
                  "Paste the Testimonial Script from the Video Scripts tab",
                  "Choose background — use Office or Modern Studio",
                  "Click Generate",
                  "Add your affiliate link as a banner at the bottom",
                  "Download and share on LinkedIn and email campaigns",
                ],
                tip: "HeyGen videos look extremely professional and are perfect for LinkedIn posts and email marketing. The presenter style builds trust with factory owners.",
              },
              {
                name: "Canva Video", url: "canva.com",
                badge: "Best for Story Ads", color: "#34d399",
                free: "100% free forever",
                bestFor: "Instagram Stories, Facebook Ads, animated banners",
                steps: [
                  "Go to canva.com",
                  "Click Create a design",
                  "Search for Instagram Story or Facebook Ad",
                  "Search templates for technology or business software",
                  "Replace all text with FabricAI Pro content: Headline — Calculate Fabric Consumption with AI. Sub — Free for Garment Factories. CTA — Try Free at fabricaipro.com",
                  "Change colors: Primary #34d399 green, Background #020617 dark, Accent #fef08a yellow",
                  "Click Animate and choose Rise or Slide animation",
                  "Download as MP4 for animated or PNG for static",
                ],
                tip: "Create 5-10 Canva animated stories and schedule them across the week using Buffer or Later for consistent daily promotion.",
              },
              {
                name: "Loom", url: "loom.com",
                badge: "Best for Tutorials", color: "#ef4444",
                free: "25 free videos",
                bestFor: "Software walkthrough and tutorial videos",
                steps: [
                  "Install Loom Chrome extension from loom.com",
                  "Create free FabricAI Pro demo account at fabricaipro.com/register",
                  "Open Loom and click Record",
                  "Select Screen and Camera recording",
                  "Follow the Tutorial Script from the Video Scripts tab",
                  "Record yourself navigating through: Dashboard overview, Consumption Calculator demo, AI Workspace demo, Billing page",
                  "Stop recording — Loom auto-generates a shareable link instantly",
                  "Share this link in emails, social posts, and WhatsApp messages",
                ],
                tip: "Loom tutorial videos convert extremely well because prospects see the actual product before buying. This is the highest-converting video type for software affiliates.",
              },
            ].map((tool, i) => (
              <div key={i} style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderLeft: `4px solid ${tool.color}`,
                borderRadius: "0 20px 20px 0",
                padding: "32px", marginBottom: "24px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between",
                              alignItems: "flex-start", flexWrap: "wrap",
                              gap: "12px", marginBottom: "20px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center",
                                  gap: "12px", marginBottom: "8px" }}>
                      <h3 style={{ color: "#ffffff", fontSize: "24px",
                                   fontWeight: 800, margin: 0 }}>
                        {tool.name}
                      </h3>
                      <span style={{
                        background: tool.color, color: "#ffffff",
                        fontSize: "12px", fontWeight: 700,
                        padding: "4px 12px", borderRadius: "20px",
                      }}>
                        {tool.badge}
                      </span>
                    </div>
                    <a href={`https://${tool.url}`} target="_blank" rel="noreferrer"
                       style={{ color: tool.color, fontSize: "15px", textDecoration: "none" }}>
                      🔗 {tool.url}
                    </a>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#34d399", fontSize: "14px", fontWeight: 700 }}>
                      ✅ {tool.free}
                    </div>
                    <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>
                      {tool.bestFor}
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <p style={{ color: "#fef08a", fontSize: "14px", fontWeight: 700,
                              marginBottom: "12px", textTransform: "uppercase",
                              letterSpacing: "0.5px" }}>
                    STEP BY STEP:
                  </p>
                  {tool.steps.map((step, j) => (
                    <div key={j} style={{ display: "flex", gap: "14px", marginBottom: "10px" }}>
                      <span style={{
                        background: tool.color, color: "#ffffff",
                        fontSize: "12px", fontWeight: 900,
                        width: "24px", height: "24px", borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: "2px",
                      }}>
                        {j + 1}
                      </span>
                      <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <div style={{
                  background: `${tool.color}15`,
                  border: `1px solid ${tool.color}44`,
                  borderRadius: "12px", padding: "16px 20px",
                }}>
                  <span style={{ color: tool.color, fontWeight: 700, fontSize: "14px" }}>
                    💡 Pro Tip:{" "}
                  </span>
                  <span style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6 }}>
                    {tool.tip}
                  </span>
                </div>
              </div>
            ))}

            {/* AI Prompt Templates */}
            <div style={{ marginTop: "60px" }}>
              <h3 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 800, marginBottom: "10px" }}>
                Ready-to-Use AI Video Prompts
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "17px", marginBottom: "36px" }}>
                Copy these prompts directly into any AI video tool for best results.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  {
                    label: "InVideo / Pictory — 90 sec Explainer",
                    prompt: "Create a professional 90-second explainer video for FabricAI Pro. FabricAI Pro is an AI-powered fabric consumption ERP for garment factories. Show scenes of: garment factory production lines, fabric rolls being measured, cutting room operations, computer screens showing software. Key messages: 1) Traditional fabric calculation wastes money 2) FabricAI Pro calculates consumption in 2 seconds 3) Reduces fabric wastage by 10-15% 4) Free demo available. End with website URL. Professional corporate tone. Background music: upbeat corporate.",
                  },
                  {
                    label: "YouTube Thumbnail — Canva / Midjourney",
                    prompt: "Professional YouTube thumbnail for FabricAI Pro software review. Show: dark background, bright green and yellow text saying HONEST REVIEW, garment factory image on right side, software dashboard on left. Text: FabricAI Pro - Worth It? High contrast, attention-grabbing style. Bold fonts, professional design.",
                  },
                  {
                    label: "Instagram Reel — InVideo 30 sec",
                    prompt: "Create a 30-second Instagram Reel showing before and after of fabric consumption calculation. Before: person struggling with Excel spreadsheets and calculator looking stressed. After: same person using FabricAI Pro getting instant results on laptop, smiling. Upbeat music, text overlays showing time saved. End with Try Free - Link in Bio text. Vertical 9:16 format.",
                  },
                  {
                    label: "LinkedIn Video — HeyGen 2 min",
                    prompt: "Professional 2-minute LinkedIn video about how AI is transforming garment manufacturing. Speaker: professional business presenter in formal attire. Topic: fabric wastage costs Indian garment industry billions annually. Solution: AI-powered consumption calculation. Demo: FabricAI Pro platform walkthrough. Call to action: free trial available. Professional tone, clean office background, business casual presenter.",
                  },
                  {
                    label: "WhatsApp Status — Canva 30 sec",
                    prompt: "30-second animated video for WhatsApp Status. Text animation showing: 8-15% fabric wasted every month → Lakhs lost every year → FabricAI Pro fixes this → Try FREE Today. Dark background, yellow and green colors, clean modern animation. No voiceover needed, just text animations and soft background music. Square 1:1 format.",
                  },
                ].map((p, i) => (
                  <PromptCard key={i} {...p} />
                ))}
              </div>
            </div>

            {/* Weekly Posting Schedule */}
            <div style={{ marginTop: "60px" }}>
              <h3 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 800, marginBottom: "10px" }}>
                📅 Recommended Weekly Posting Schedule
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "17px", marginBottom: "36px" }}>
                Consistency beats intensity. Follow this schedule for maximum affiliate earnings.
              </p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
                  <thead>
                    <tr style={{ background: "#fef08a" }}>
                      {["Day","Platform","Content Type","Goal"].map((h, i) => (
                        <th key={i} style={{
                          color: "#020617", padding: "16px 20px",
                          fontWeight: 900, fontSize: "15px", textAlign: "left",
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Monday","YouTube","Full Review Video","Subscribers + affiliate clicks"],
                      ["Tuesday","LinkedIn","Professional Post","B2B factory owner leads"],
                      ["Wednesday","Instagram","Reel or Story","Brand awareness + reach"],
                      ["Thursday","Facebook","Group Post","Factory owner community"],
                      ["Friday","WhatsApp","Group Broadcast","Direct sales conversions"],
                      ["Saturday","Twitter / X","Thread or Poll","Engagement + traffic"],
                      ["Sunday","Email","Newsletter","Warm audience conversions"],
                    ].map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#020617" : "#0f172a" }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{
                            color: j === 0 ? "#fef08a" : "#e2e8f0",
                            padding: "14px 20px",
                            borderBottom: "1px solid #1e293b",
                            fontSize: "15px",
                            fontWeight: j === 0 ? 700 : 400,
                          }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        background: "linear-gradient(180deg,#0f172a,#020617)",
        padding: "80px 60px", textAlign: "center", marginTop: "60px",
      }}>
        <p style={{ color: "#fef08a", fontSize: "14px", fontWeight: 700,
                    letterSpacing: "2px", textTransform: "uppercase",
                    marginBottom: "20px" }}>
          READY TO START EARNING?
        </p>
        <h2 style={{ color: "#ffffff", fontSize: "clamp(32px,5vw,56px)",
                     fontWeight: 900, marginBottom: "16px" }}>
          Get Your Affiliate Link Today
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "18px", maxWidth: "600px",
                    margin: "0 auto 48px", lineHeight: 1.6 }}>
          Join our affiliate program and start earning 80% commission on every sale.
          Instant approval on all three platforms.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap",
                      justifyContent: "center", marginBottom: "40px" }}>
          {[
            { label: "🚀 Join on JVZoo", bg: "#ff6b35" },
            { label: "⚡ Join on WarriorPlus", bg: "#7c3aed" },
            { label: "🌐 Join on CJ Affiliate", bg: "#2563eb" },
          ].map((btn, i) => (
            <button key={i} style={{
              background: btn.bg, color: "white", border: "none",
              padding: "18px 36px", fontSize: "18px",
              fontWeight: 900, borderRadius: "14px", cursor: "pointer",
            }}>
              {btn.label}
            </button>
          ))}
        </div>
        <div style={{
          background: "#0f172a", border: "1px solid #1e293b",
          borderRadius: "16px", padding: "24px 40px", display: "inline-block",
        }}>
          <p style={{ color: "#94a3b8", margin: "0 0 8px", fontSize: "15px" }}>
            Questions about the affiliate program?
          </p>
          <p style={{ color: "#fef08a", fontSize: "20px", fontWeight: 700, margin: 0 }}>
            affiliate@fabricaipro.com
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0f172a", borderTop: "1px solid #1e293b",
                       padding: "32px 60px", display: "flex",
                       justifyContent: "space-between", alignItems: "center",
                       flexWrap: "wrap", gap: "16px" }}>
        <span style={{ color: "#475569", fontSize: "14px" }}>
          © 2025 FabricAI Pro. All rights reserved.
        </span>
        <span style={{ color: "#34d399", fontWeight: 700, fontSize: "18px" }}>FabricAI Pro</span>
        <span style={{ color: "#475569", fontSize: "14px" }}>
          Privacy Policy | Terms | Refund Policy
        </span>
      </footer>

    </div>
  );
}

// ─── HELPER COMPONENTS ───────────────────────────────────────────

function PostCard({ text, color }: { text: string; color: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{
      background: "#0f172a",
      border: `1px solid ${color}44`,
      borderRadius: "16px", padding: "24px",
      position: "relative",
    }}>
      <button onClick={handleCopy} style={{
        position: "absolute", top: "16px", right: "16px",
        background: copied ? "#34d399" : "#1e293b",
        color: copied ? "#020617" : "#94a3b8",
        border: "none", padding: "6px 14px",
        borderRadius: "8px", cursor: "pointer",
        fontSize: "13px", fontWeight: 700,
      }}>
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
      <pre style={{
        color: "#e2e8f0", fontSize: "14px", lineHeight: 1.8,
        whiteSpace: "pre-wrap", margin: 0,
        fontFamily: "Arial, sans-serif",
        paddingRight: "80px",
      }}>
        {text}
      </pre>
    </div>
  );
}

function ScriptCard({ title, duration, badge, badgeColor, script }: {
  title: string; duration: string; badge: string;
  badgeColor: string; script: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{
      background: "#0f172a", border: "1px solid #1e293b",
      borderRadius: "20px", marginBottom: "20px", overflow: "hidden",
    }}>
      <div style={{
        padding: "24px 28px", display: "flex",
        justifyContent: "space-between", alignItems: "center",
        cursor: "pointer",
      }} onClick={() => setOpen(!open)}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <span style={{
            background: badgeColor, color: "#ffffff",
            fontSize: "12px", fontWeight: 700,
            padding: "4px 12px", borderRadius: "20px",
          }}>
            {badge}
          </span>
          <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: 0 }}>
            {title}
          </h3>
          <span style={{ color: "#475569", fontSize: "14px" }}>{duration}</span>
        </div>
        <span style={{ color: "#fef08a", fontSize: "20px", flexShrink: 0 }}>
          {open ? "▲" : "▼"}
        </span>
      </div>

      {open && (
        <div style={{ padding: "0 28px 28px" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
            <button onClick={handleCopy} style={{
              background: copied ? "#34d399" : "#fef08a",
              color: "#020617", border: "none",
              padding: "10px 20px", borderRadius: "8px",
              cursor: "pointer", fontWeight: 700, fontSize: "14px",
            }}>
              {copied ? "✅ Copied!" : "📋 Copy Full Script"}
            </button>
          </div>
          <pre style={{
            background: "#020617", borderRadius: "12px",
            padding: "24px", fontSize: "14px", lineHeight: 1.9,
            whiteSpace: "pre-wrap", margin: 0,
            fontFamily: "Arial, sans-serif",
          }}>
            {script.split("\n").map((line, i) =>
              line.startsWith("[") && line.endsWith("]") ? (
                <span key={i} style={{ color: "#34d399", fontWeight: 700 }}>
                  {line}{"\n"}
                </span>
              ) : (
                <span key={i} style={{ color: "#e2e8f0" }}>{line}{"\n"}</span>
              )
            )}
          </pre>
        </div>
      )}
    </div>
  );
}

function BlogCard({ title, wordCount, keywords, content }: any) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{
      background: "#0f172a", border: "1px solid #1e293b",
      borderRadius: "20px", marginBottom: "20px", overflow: "hidden",
    }}>
      <div style={{
        padding: "24px 28px", display: "flex",
        justifyContent: "space-between", alignItems: "center",
        cursor: "pointer",
      }} onClick={() => setOpen(!open)}>
        <div>
          <div style={{ display: "flex", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
            <span style={{
              background: "rgba(254,240,138,0.15)", border: "1px solid #fef08a",
              color: "#fef08a", fontSize: "12px", fontWeight: 700,
              padding: "3px 12px", borderRadius: "20px",
            }}>
              {wordCount}
            </span>
          </div>
          <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, margin: "0 0 6px" }}>
            {title}
          </h3>
          <p style={{ color: "#475569", fontSize: "13px", margin: 0 }}>
            Keywords: {keywords}
          </p>
        </div>
        <span style={{ color: "#fef08a", fontSize: "20px", flexShrink: 0, marginLeft: "16px" }}>
          {open ? "▲" : "▼"}
        </span>
      </div>
      {open && (
        <div style={{ padding: "0 28px 28px" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
            <button onClick={handleCopy} style={{
              background: copied ? "#34d399" : "#fef08a",
              color: "#020617", border: "none",
              padding: "10px 20px", borderRadius: "8px",
              cursor: "pointer", fontWeight: 700, fontSize: "14px",
            }}>
              {copied ? "✅ Copied!" : "📋 Copy Full Article"}
            </button>
          </div>
          <pre style={{
            background: "#020617", borderRadius: "12px",
            padding: "24px", fontSize: "14px", lineHeight: 1.9,
            whiteSpace: "pre-wrap", margin: 0,
            fontFamily: "Arial, sans-serif", color: "#e2e8f0",
            maxHeight: "500px", overflowY: "auto",
          }}>
            {content}
          </pre>
        </div>
      )}
    </div>
  );
}

function WhatsAppCard({ label, color, text }: any) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: "10px",
      }}>
        <span style={{
          background: `${color}22`, border: `1px solid ${color}66`,
          color: color, fontSize: "13px", fontWeight: 700,
          padding: "4px 14px", borderRadius: "20px",
        }}>
          {label}
        </span>
        <button onClick={handleCopy} style={{
          background: copied ? "#34d399" : "#fef08a",
          color: "#020617", border: "none",
          padding: "7px 16px", borderRadius: "8px",
          cursor: "pointer", fontWeight: 700, fontSize: "13px",
        }}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>
      <div style={{
        background: "#1a2f1e", border: "1px solid #25d36633",
        borderRadius: "12px 12px 12px 0", padding: "20px 24px",
      }}>
        <pre style={{
          color: "#e2e8f0", fontSize: "15px", lineHeight: 1.8,
          whiteSpace: "pre-wrap", margin: 0,
          fontFamily: "Arial, sans-serif",
        }}>
          {text}
        </pre>
      </div>
    </div>
  );
}

function PromptCard({ label, prompt }: { label: string; prompt: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{
      background: "#0f172a", border: "1px solid #1e293b",
      borderRadius: "16px", padding: "24px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between",
                    alignItems: "center", marginBottom: "16px" }}>
        <span style={{ color: "#fef08a", fontSize: "16px", fontWeight: 700 }}>
          {label}
        </span>
        <button onClick={handleCopy} style={{
          background: copied ? "#34d399" : "#fef08a",
          color: "#020617", border: "none",
          padding: "8px 18px", borderRadius: "8px",
          cursor: "pointer", fontWeight: 700, fontSize: "13px", flexShrink: 0,
        }}>
          {copied ? "✅ Copied!" : "📋 Copy Prompt"}
        </button>
      </div>
      <p style={{
        color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8, margin: 0,
        background: "#020617", borderRadius: "10px", padding: "16px 20px",
      }}>
        {prompt}
      </p>
    </div>
  );
}

// ─── STYLE HELPERS ────────────────────────────────────────────────

const navBtn = (bg: string): React.CSSProperties => ({
  background: bg, color: "white", border: "none",
  padding: "10px 18px", borderRadius: "10px",
  fontWeight: 700, fontSize: "14px", cursor: "pointer",
});

const heroBtn = (bg: string): React.CSSProperties => ({
  background: bg, color: "white", border: "none",
  padding: "18px 36px", fontSize: "18px",
  fontWeight: 900, borderRadius: "14px", cursor: "pointer",
});

// ─── STYLE CONSTANTS ──────────────────────────────────────────────

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(254,240,138,0.15)",
  border: "1px solid #fef08a",
  color: "#fef08a", fontSize: "13px", fontWeight: 700,
  letterSpacing: "1px", textTransform: "uppercase",
  padding: "8px 20px", borderRadius: "30px",
};

const activeTabBtn: React.CSSProperties = {
  background: "#fef08a", color: "#020617",
  border: "1px solid #fef08a", padding: "12px 24px",
  borderRadius: "10px", cursor: "pointer",
  fontSize: "15px", fontWeight: 700,
};

const inactiveTabBtn: React.CSSProperties = {
  background: "#0f172a", color: "#94a3b8",
  border: "1px solid #1e293b", padding: "12px 24px",
  borderRadius: "10px", cursor: "pointer", fontSize: "15px",
};

const tabHeading: React.CSSProperties = {
  color: "#fef08a", fontSize: "36px", fontWeight: 800,
  marginBottom: "10px",
};

const tabSub: React.CSSProperties = {
  color: "#94a3b8", fontSize: "17px", marginBottom: "40px",
};

const contentCard: React.CSSProperties = {
  background: "#0f172a", border: "1px solid #1e293b",
  borderRadius: "16px", padding: "28px",
};

const preStyle: React.CSSProperties = {
  background: "#1e293b", color: "#e2e8f0",
  fontSize: "15px", lineHeight: 1.8,
  padding: "20px", borderRadius: "12px",
  whiteSpace: "pre-wrap", fontFamily: "Arial, sans-serif",
  margin: 0, border: "none",
};

const copyBtn: React.CSSProperties = {
  background: "#fef08a", color: "#020617",
  border: "none", padding: "8px 16px",
  borderRadius: "8px", cursor: "pointer",
  fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap",
};

const copiedBtn: React.CSSProperties = {
  background: "#34d399", color: "#020617",
  border: "none", padding: "8px 16px",
  borderRadius: "8px", cursor: "pointer",
  fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap",
};

const bannerLabel: React.CSSProperties = {
  color: "#fef08a", fontSize: "14px",
  fontWeight: 700, marginBottom: "10px",
};
