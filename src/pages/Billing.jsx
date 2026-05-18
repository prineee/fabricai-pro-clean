import axios from "axios";

export default function Billing() {

  const startPayment = async (amount) => {

    try {

      const response = await axios.post(
        "https://fabricai-backend.onrender.com/api/payment/create-order"
      );

      console.log(response.data);

      const options = {
        key: "rzp_live_SngV5d3BGmZJ1p",
        amount: response.data.amount,
        currency: response.data.currency,
        name: "FabricAI Pro",
        description: "AI Subscription",
        order_id: response.data.id,

        handler: function (response) {
          alert("Payment Successful");
          console.log(response);
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(options);

      razor.open();

    } catch (error) {

      console.log(error);

      alert("Backend Payment Error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        Choose Your Plan
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "24px",
        }}
      >
        Unlock premium AI tools for your business
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        {/* STARTER */}
        <div
          style={{
            width: "320px",
            background: "#0f172a",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>Starter</h2>

          <h1 style={{ fontSize: "70px" }}>₹499</h1>

          <button
            onClick={() => startPayment(499)}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "12px",
              background: "#2563eb",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            Get Starter
          </button>
        </div>

        {/* PRO */}
        <div
          style={{
            width: "320px",
            background: "#2563eb",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>Pro</h2>

          <h1 style={{ fontSize: "70px" }}>₹1499</h1>

          <button
            onClick={() => startPayment(1499)}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "12px",
              background: "white",
              color: "#2563eb",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            Upgrade To Pro
          </button>
        </div>

        {/* AGENCY */}
        <div
          style={{
            width: "320px",
            background: "#0f172a",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h2>Agency</h2>

          <h1 style={{ fontSize: "70px" }}>₹4999</h1>

          <button
            onClick={() => startPayment(4999)}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "12px",
              background: "#2563eb",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            Get Agency
          </button>
        </div>

      </div>
    </div>
  );
}