import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";



export default function EmailGenerator() {

  const [subject, setSubject] = useState("");

  const [purpose, setPurpose] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);



  async function generateEmail() {

    setLoading(true);



    setTimeout(() => {

      setResult(`
Subject: ${subject}

Hello,

We are excited to introduce our latest AI-powered solution designed to help businesses automate operations and improve productivity.

${purpose}

Thank you for your time.

Best Regards,
FabricAI Team
      `);

      setLoading(false);

    }, 1500);

  }



  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        AI Email Generator
      </h1>



      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
        }}
      >

        <input
          type="text"
          placeholder="Email Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          style={inputStyle}
        />



        <textarea
          placeholder="Email Purpose"
          value={purpose}
          onChange={(e) =>
            setPurpose(e.target.value)
          }
          style={{
            ...inputStyle,
            minHeight: "180px",
          }}
        />



        <button
          onClick={generateEmail}
          style={buttonStyle}
        >
          {
            loading
              ? "Generating..."
              : "Generate Email"
          }
        </button>

      </div>



      {
        result && (
          <div
            style={{
              background: "#0f172a",
              padding: "40px",
              borderRadius: "20px",
              marginTop: "30px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.9",
              border: "1px solid #1e293b",
            }}
          >
            {result}
          </div>
        )
      }

    </DashboardLayout>
  );
}



const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#020617",
  color: "white",
  fontSize: "16px",
};



const buttonStyle = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "18px 30px",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
};