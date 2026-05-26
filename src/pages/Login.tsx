import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);

      setMessage("");

      if (!email || !password) {
        setMessage("Please fill all fields");
        setLoading(false);
        return;
      }

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      if (!userCredential.user.emailVerified) {
        setMessage(
          "Please verify your email before login."
        );

        setLoading(false);

        return;
      }

      navigate("/dashboard");

    } catch (error: any) {

      setMessage(error.message);

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
          boxShadow:
            "0 0 40px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "white",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Login
        </h1>

        {message && (
          <div
            style={{
              marginBottom: "25px",
              color: "#38bdf8",
              fontSize: "18px",
            }}
          >
            {message}
          </div>
        )}

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
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

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
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
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

        <div
          style={{
            marginTop: "25px",
            color: "white",
            fontSize: "18px",
          }}
        >
          Don't have account?{" "}
          <Link
            to="/register"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </div>

        <div
          style={{
            marginTop: "14px",
            fontSize: "17px",
          }}
        >
          <Link
            to="/forgot-password"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
            }}
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}