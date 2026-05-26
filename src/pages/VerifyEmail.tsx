import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendEmailVerification, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await auth.currentUser?.reload();
        if (auth.currentUser?.emailVerified) {
          clearInterval(interval);
          navigate("/dashboard");
        }
      } catch {
        // silently retry
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleResend = async () => {
    if (!user) return;
    try {
      await sendEmailVerification(user);
      setIsError(false);
      setMessage("Verification email sent. Check your inbox and spam folder.");
    } catch (error: any) {
      setIsError(true);
      setMessage(error.message || "Failed to send verification email.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
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
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: "24px",
          padding: "56px 48px",
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>📧</div>

        <h1 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 800, marginBottom: "12px" }}>
          Verify Your Email
        </h1>

        <p style={{ color: "#94a3b8", fontSize: "17px", marginBottom: "8px" }}>
          Please verify your email to continue
        </p>

        {user?.email && (
          <p style={{ color: "#34d399", fontSize: "15px", fontWeight: 600, marginBottom: "32px" }}>
            {user.email}
          </p>
        )}

        {message && (
          <div
            style={{
              background: isError ? "rgba(248,113,113,0.1)" : "rgba(52,211,153,0.1)",
              border: `1px solid ${isError ? "#f87171" : "#34d399"}`,
              borderRadius: "12px",
              padding: "14px 18px",
              color: isError ? "#f87171" : "#34d399",
              fontSize: "15px",
              marginBottom: "24px",
              textAlign: "left",
            }}
          >
            {message}
          </div>
        )}

        <button
          onClick={handleResend}
          style={{
            width: "100%",
            padding: "16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: "14px",
          }}
        >
          Resend Verification Email
        </button>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "16px",
            background: "transparent",
            color: "#f87171",
            border: "1px solid #f87171",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Logout
        </button>

        <p style={{ color: "#475569", fontSize: "13px", marginTop: "28px" }}>
          Checking automatically every 5 seconds. Once verified, you'll be redirected to the dashboard.
        </p>
      </div>
    </div>
  );
}
