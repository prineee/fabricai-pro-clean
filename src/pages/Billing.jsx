import axios from "axios";

export default function Billing() {

  const startPayment = async () => {

    try {

      const { data } = await axios.post(
        "https://fabricai-backend.onrender.com/api/payment/create-order"
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: data.amount,
        currency: data.currency,
        name: "FabricAI Pro",
        description: "Premium AI Subscription",
        order_id: data.id,

        handler: function (response) {

          alert("Payment Successful");

          console.log(response);
        },

        prefill: {
          name: "Customer",
          email: "customer@example.com",
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(options);

      razor.open();

    } catch (error) {

      console.log(error);

      alert("Payment Failed");

    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "20px",
          background: "#111",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "30px",
          }}
        >
          Upgrade Plan
        </h1>

        <button
          onClick={startPayment}
          style={{
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Pay ₹499
        </button>
      </div>
    </div>
  );
}