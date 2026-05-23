import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] =
    useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");

  const handleSignup = async () => {
    try {
      setLoading(true);
      setMessage("");

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

      if (password.length < 6) {
        setMessage("Password must be at least 6 characters");
        setLoading(false);
        return;
      }

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await sendEmailVerification(userCredential.user);

      setMessage(
        "Verification email sent successfully. Please check your inbox."
      );

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error: any) {
      setMessage(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const containerStyle: React.CSSProperties = {
    background: "#020617",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial",
  };

  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "500px",
    background: "#0f172a",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid #1e293b",
  };

  const titleStyle: React.CSSProperties = {
    color: "white",
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "30px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "18px",
    marginBottom: "20px",
    borderRadius: "12px",
    border: "none",
    fontSize: "18px",
    outline: "none",
    background: "#e2e8f0",
    boxSizing: "border-box",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const messageStyle: React.CSSProperties = {
    color: "#38bdf8",
    marginBottom: "20px",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Create Account</h1>

        {message && (
          <p style={messageStyle}>
            {message}
          </p>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={handleSignup}
          style={buttonStyle}
        >
          {loading
            ? "Creating Account..."
            : "Register"}
        </button>

        <p
          style={{
            color: "white",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          Already have account?{" "}
          <Link
            to="/login"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}