import axios from "axios";

export default function Billing() {

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const startPayment = async (plan, amount) => {

    const loaded = await loadRazorpay();

    if (!loaded) {
      alert("Razorpay SDK Failed");
      return;
    }

    try {

      const response = await axios.post(
        "https://fabricai-backend.onrender.com/api/payment/create-order",
        {
          amount,
          plan,
        }
      );

      const order = response.data.order;

      const options = {
        key: "rzp_live_SngV5d3BGmZJ1p",

        amount: order.amount,

        currency: order.currency,

        name: "FabricAI Pro",

        description: `${plan} Subscription`,

        order_id: order.id,

        handler: async function (response) {

          alert("Payment Successful");

          console.log(response);

        },

        prefill: {
          name: "Customer",
          email: "customer@email.com",
        },

        theme: {
          color: "#2563eb",
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.open();

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
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Choose Your Plan
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "60px",
            fontSize: "20px",
          }}
        >
          Unlock premium AI tools for your business
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >

          <div
            style={{
              background: "#0f172a",
              padding: "40px",
              borderRadius: "24px",
              textAlign: "center",
            }}
          >
            <h2>Starter</h2>

            <h1 style={{ fontSize: "56px" }}>
              ₹499
            </h1>

            <button
              onClick={() => startPayment("Starter", 499)}
              style={{
                marginTop: "30px",
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Get Starter
            </button>
          </div>

          <div
            style={{
              background: "#2563eb",
              padding: "40px",
              borderRadius: "24px",
              textAlign: "center",
            }}
          >
            <h2>Pro</h2>

            <h1 style={{ fontSize: "56px" }}>
              ₹1499
            </h1>

            <button
              onClick={() => startPayment("Pro", 1499)}
              style={{
                marginTop: "30px",
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "white",
                color: "#2563eb",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Upgrade To Pro
            </button>
          </div>

          <div
            style={{
              background: "#0f172a",
              padding: "40px",
              borderRadius: "24px",
              textAlign: "center",
            }}
          >
            <h2>Agency</h2>

            <h1 style={{ fontSize: "56px" }}>
              ₹4999
            </h1>

            <button
              onClick={() => startPayment("Agency", 4999)}
              style={{
                marginTop: "30px",
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Get Agency
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}