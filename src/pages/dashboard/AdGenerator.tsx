import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";



export default function AdGenerator() {

  const [product, setProduct] = useState("");

  const [audience, setAudience] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);



  async function generateAd() {

    setLoading(true);



    setTimeout(() => {

      setResult(`
🔥 ${product}

Perfect for ${audience}

✅ High Quality
✅ Affordable
✅ AI Powered

Buy Now & Transform Your Business Today.
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
        AI Ad Generator
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
          placeholder="Product Name"
          value={product}
          onChange={(e) =>
            setProduct(e.target.value)
          }
          style={inputStyle}
        />



        <input
          type="text"
          placeholder="Target Audience"
          value={audience}
          onChange={(e) =>
            setAudience(e.target.value)
          }
          style={inputStyle}
        />



        <button
          onClick={generateAd}
          style={buttonStyle}
        >
          {
            loading
              ? "Generating..."
              : "Generate Ad Copy"
          }
        </button>

      </div>



      {
        result && (
          <div
            style={{
              background: "#0f172a",
              padding: "30px",
              borderRadius: "20px",
              marginTop: "30px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
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