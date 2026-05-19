import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 20px",
          background:
            "linear-gradient(to bottom right,#020617,#0f172a,#1e3a8a)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "70px",
                lineHeight: "80px",
                marginBottom: "30px",
                fontWeight: "bold",
              }}
            >
              Create AI Business Content In Seconds
            </h1>

            <p
              style={{
                fontSize: "22px",
                color: "#cbd5e1",
                marginBottom: "40px",
              }}
            >
              FabricAI Pro helps marketers, agencies and creators generate
              AI-powered business content instantly.
            </p>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Link to="/billing">
                <button
                  style={{
                    padding: "18px 40px",
                    borderRadius: "12px",
                    border: "none",
                    background: "#2563eb",
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Get Instant Access
                </button>
              </Link>

              <Link to="/register">
                <button
                  style={{
                    padding: "18px 40px",
                    borderRadius: "12px",
                    border: "2px solid white",
                    background: "transparent",
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Create Free Account
                </button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop"
              alt="AI"
              style={{
                width: "100%",
                borderRadius: "25px",
                boxShadow: "0 0 40px rgba(37,99,235,0.4)",
              }}
            />
          </div>
        </div>
      </section>

      {/* VIDEO DEMO */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#0f172a",
        }}
      >
        <h2
          style={{
            fontSize: "55px",
            marginBottom: "20px",
          }}
        >
          Watch FabricAI Pro In Action
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "50px",
            fontSize: "20px",
          }}
        >
          See how businesses generate AI content within minutes.
        </p>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <iframe
            width="100%"
            height="560"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo"
            style={{
              border: "none",
              borderRadius: "25px",
            }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "100px 20px",
          background: "#020617",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "70px",
          }}
        >
          Powerful AI Features
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "AI Content Generator",
            "Business Templates",
            "AI Chat Assistant",
            "Marketing Content",
            "Social Media Generator",
            "Commercial License",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {item}
              </h3>

              <p style={{ color: "#cbd5e1" }}>
                Professional AI-powered tools built for creators and agencies.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          padding: "100px 20px",
          background: "#0f172a",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "70px",
          }}
        >
          Why Users Love FabricAI Pro
        </h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gap: "30px",
          }}
        >
          {[
            "Save 10+ hours every week",
            "Generate AI business content instantly",
            "Perfect for agencies and freelancers",
            "Commercial license included",
            "Cloud based platform",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#020617",
                padding: "30px",
                borderRadius: "20px",
                fontSize: "24px",
              }}
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        style={{
          padding: "100px 20px",
          background: "#020617",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "70px",
          }}
        >
          Choose Your Plan
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "40px",
          }}
        >
          {[
            {
              name: "Starter",
              price: "₹499",
            },
            {
              name: "Pro",
              price: "₹1499",
            },
            {
              name: "Agency",
              price: "₹4999",
            },
          ].map((plan, index) => (
            <div
              key={index}
              style={{
                background: index === 1 ? "#2563eb" : "#0f172a",
                padding: "50px 30px",
                borderRadius: "25px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "40px" }}>{plan.name}</h3>

              <h1
                style={{
                  fontSize: "80px",
                  margin: "30px 0",
                }}
              >
                {plan.price}
              </h1>

              <Link to="/billing">
                <button
                  style={{
                    padding: "18px 40px",
                    borderRadius: "12px",
                    border: "none",
                    background: "white",
                    color: "#2563eb",
                    fontSize: "20px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Get Access
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          padding: "100px 20px",
          background: "#0f172a",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "70px",
          }}
        >
          Customer Success Stories
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "This tool changed my agency workflow completely.",
            "Best AI business platform I used this year.",
            "I created client content in minutes.",
          ].map((review, index) => (
            <div
              key={index}
              style={{
                background: "#020617",
                padding: "40px",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "35px",
                }}
              >
                "{review}"
              </p>

              <h4 style={{ marginTop: "30px" }}>★★★★★ Verified User</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "100px 20px",
          background: "#020617",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "70px",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gap: "25px",
          }}
        >
          {[
            "Do I get commercial rights?",
            "Is this beginner friendly?",
            "Can agencies use this?",
            "Is payment secure?",
          ].map((faq, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h3>{faq}</h3>

              <p style={{ color: "#cbd5e1", marginTop: "15px" }}>
                Yes. FabricAI Pro is built for professionals and beginners.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AFFILIATE */}
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          background:
            "linear-gradient(to right,#1e3a8a,#2563eb,#1d4ed8)",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Promote FabricAI Pro & Earn Big Commissions
        </h2>

        <p
          style={{
            fontSize: "24px",
            marginBottom: "40px",
          }}
        >
          Join our WarriorPlus & JVZoo affiliate program today.
        </p>

        <button
          style={{
            padding: "20px 50px",
            borderRadius: "12px",
            border: "none",
            background: "white",
            color: "#2563eb",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Become An Affiliate
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#020617",
          padding: "50px 20px",
          textAlign: "center",
          borderTop: "1px solid #1e293b",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Link
            to="/privacy-policy"
            style={{ color: "white", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>

          <Link
            to="/refund-policy"
            style={{ color: "white", textDecoration: "none" }}
          >
            Refund Policy
          </Link>

          <Link
            to="/terms"
            style={{ color: "white", textDecoration: "none" }}
          >
            Terms
          </Link>
        </div>

        <p style={{ color: "#94a3b8" }}>
          © 2026 FabricAI Pro. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}