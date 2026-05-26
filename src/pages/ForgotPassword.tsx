import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleReset = async () => {
    if (!email) {
      setIsError(true);
      setMessage("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      await sendPasswordResetEmail(auth, email);
      setIsError(false);
      setMessage(
        "Password reset email sent! Check your inbox (and spam folder)."
      );
    } catch (error: any) {
      setIsError(true);
      setMessage(error.message || "Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          background: "#0f172a",
          padding: "50px",
          borderRadius: "24px",
          border: "1px solid #1e293b",
          boxShadow: "0 0 40px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "white",
            marginBottom: "12px",
            fontWeight: "bold",
          }}
        >
          Forgot Password
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "17px",
            marginBottom: "32px",
          }}
        >
          Enter your email and we'll send you a reset link.
        </p>

        {message && (
          <div
            style={{
              marginBottom: "25px",
              color: isError ? "#f87171" : "#34d399",
              fontSize: "17px",
              padding: "14px 18px",
              background: isError
                ? "rgba(248,113,113,0.1)"
                : "rgba(52,211,153,0.1)",
              borderRadius: "12px",
              border: `1px solid ${isError ? "#f87171" : "#34d399"}`,
            }}
          >
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          style={{
            width: "100%",
            padding: "20px",
            marginBottom: "22px",
            borderRadius: "14px",
            border: "1px solid #475569",
            fontSize: "18px",
            background: "#ffffff",
            color: "#000000",
            outline: "none",
            boxSizing: "border-box",
            fontWeight: "500",
            WebkitTextFillColor: "#000000",
          }}
        />

        <button
          onClick={handleReset}
          disabled={loading}
          style={{
            width: "100%",
            padding: "20px",
            background: loading ? "#1e40af" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending..." : "Send Reset Email"}
        </button>

        <div
          style={{
            marginTop: "28px",
            fontSize: "17px",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
