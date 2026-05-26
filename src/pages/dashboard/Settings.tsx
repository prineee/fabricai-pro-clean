import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "firebase/auth";
import DashboardLayout from "../../layouts/DashboardLayout";
import { auth } from "../../firebase";

export default function Settings() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setMessage("");

    if (password) {
      const user = auth.currentUser;
      if (!user) {
        setIsError(true);
        setMessage("No authenticated user found. Please log in again.");
        return;
      }
      try {
        setLoading(true);
        await updatePassword(user, password);
        setIsError(false);
        setMessage("Password updated successfully.");
        setPassword("");
      } catch (error: any) {
        setIsError(true);
        if (error.code === "auth/requires-recent-login") {
          setMessage("For security, please log out and log in again before changing your password.");
        } else {
          setMessage(error.message || "Failed to update password.");
        }
      } finally {
        setLoading(false);
      }
    } else {
      setIsError(false);
      setMessage("Settings saved successfully.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "18px",
    marginBottom: "24px",
    borderRadius: "12px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "#ffffff",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "8px",
    color: "#94a3b8",
    fontSize: "14px",
    fontWeight: 600,
  };

  return (
    <DashboardLayout>
      {/* Back button */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          background: "transparent",
          border: "1px solid #334155",
          color: "#94a3b8",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "15px",
          marginBottom: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Back to Dashboard
      </button>

      <h1 style={{ fontSize: "44px", fontWeight: 800, color: "#ffffff", marginBottom: "32px" }}>
        ⚙️ Account Settings
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
          maxWidth: "700px",
        }}
      >
        {message && (
          <div
            style={{
              marginBottom: "24px",
              padding: "14px 18px",
              borderRadius: "12px",
              color: isError ? "#f87171" : "#34d399",
              background: isError ? "rgba(248,113,113,0.1)" : "rgba(52,211,153,0.1)",
              border: `1px solid ${isError ? "#f87171" : "#34d399"}`,
              fontSize: "15px",
            }}
          >
            {message}
          </div>
        )}

        <label style={labelStyle}>Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          style={inputStyle}
        />

        <label style={labelStyle}>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          style={inputStyle}
        />

        <label style={labelStyle}>New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Leave blank to keep current password"
          style={inputStyle}
        />

        <p style={{ color: "#475569", fontSize: "13px", marginBottom: "24px", marginTop: "-16px" }}>
          Changing your password requires a recent login. If you get an error, log out and log back in first.
        </p>

        <button
          onClick={handleSave}
          disabled={loading}
          style={{
            padding: "16px 32px",
            background: loading ? "#1e40af" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "17px",
            fontWeight: 700,
          }}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </DashboardLayout>
  );
}
