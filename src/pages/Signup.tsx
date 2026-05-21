import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      setLoading(true);

      if (!email || !password || !confirmPassword) {
        setMessage("Please fill all fields");
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        setLoading(false);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCredential.user);

      setMessage("Verification email sent successfully");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setMessage(String(error));
     } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "20px",
          }}
        >
          Create Account
        </h1>

        {message && (
          <p
            style={{
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            {message}
          </p>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleSignup}
          style={buttonStyle}
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p style={{ marginTop: "20px" }}>
          Already have account?{" "}
          <Link
            to="/login"
            style={{
              color: "#3b82f6",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "none",
  fontSize: "18px",
};

const buttonStyle = {
  width: "100%",
  padding: "18px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "20px",
  cursor: "pointer",
};