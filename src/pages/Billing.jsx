import React from "react";
import axios from "axios";

function Billing() {

  const createOrder = async () => {
    try {

      const response = await axios.post(
        "https://fabricai-backend.onrender.com/api/payment/create-order"
      );

      if (response.data.success) {
        alert("Order Created Successfully");
      }

    } catch (error) {

      alert("Backend Payment Error");

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
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#111827",
          padding: "50px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1>Billing Page</h1>

        <button
          onClick={createOrder}
          style={{
            marginTop: "30px",
            background: "#2563eb",
            border: "none",
            padding: "16px 30px",
            borderRadius: "12px",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}

export default Billing;