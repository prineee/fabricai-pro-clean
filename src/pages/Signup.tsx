import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate();

  const auth = getAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      setLoading(true);

      setError("");

      if (
        !email ||
        !password ||
        !confirmPassword
      ) {
        setError("Please fill all fields");
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await sendEmailVerification(
        userCredential.user
      );

      alert(
        "Verification email sent successfully"
      );

      navigate("/login");
    } catch (err: any) {
      setError(err.message);
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
          maxWidth: "600px",
          background: "#0f172a",
          padding: "50px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "50px",
            marginBottom: "30px",
          }}
        >
          Create Account
        </h1>

        {error && (
          <p
            style={{
              color: "red",
              marginBottom: "20px",
            }}
          >
            {error}
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
            setConfirmPassword(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          style={{
            width: "100%",
            padding: "18px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "20px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {loading
            ? "Creating..."
            : "Register"}
        </button>

        <p
          style={{
            color: "white",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
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