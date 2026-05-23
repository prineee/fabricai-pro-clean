import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

export default function Settings() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  function saveSettings() {

    alert(
      "Settings saved successfully"
    );
  }

  return (
    <DashboardLayout>

      <h1
        style={titleStyle}
      >
        Account Settings
      </h1>

      <div
        style={cardStyle}
      >

        <label
          style={labelStyle}
        >
          Full Name
        </label>

        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          placeholder="Full Name"
          style={inputStyle}
        />

        <label
          style={labelStyle}
        >
          Email Address
        </label>

        <input
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          placeholder="Email Address"
          style={inputStyle}
        />

        <label
          style={labelStyle}
        >
          New Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          placeholder="New Password"
          style={inputStyle}
        />

        <button
          onClick={saveSettings}
          style={buttonStyle}
        >
          Save Changes
        </button>

      </div>

    </DashboardLayout>
  );
}

const titleStyle = {
  fontSize: "48px",
  marginBottom: "30px",
};

const cardStyle = {
  background: "#0f172a",
  padding: "35px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
  maxWidth: "700px",
};

const labelStyle = {
  display: "block",
  marginBottom: "10px",
  color: "#cbd5e1",
  fontSize: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "25px",
  borderRadius: "12px",
  border: "1px solid #334155",
  backgroundColor: "#ffffff",
  color: "#000000",
  WebkitTextFillColor:
    "#000000",
  caretColor: "#000000",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "16px 30px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "18px",
};