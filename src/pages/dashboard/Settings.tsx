import DashboardLayout from "../../layouts/DashboardLayout";



export default function Settings() {

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Account Settings
      </h1>



      <div
        style={{
          background: "#0f172a",
          padding: "35px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
          maxWidth: "700px",
        }}
      >

        <div
          style={{
            marginBottom: "25px",
          }}
        >

          <label style={labelStyle}>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
          />

        </div>



        <div
          style={{
            marginBottom: "25px",
          }}
        >

          <label style={labelStyle}>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />

        </div>



        <div
          style={{
            marginBottom: "25px",
          }}
        >

          <label style={labelStyle}>
            New Password
          </label>

          <input
            type="password"
            placeholder="New Password"
            style={inputStyle}
          />

        </div>



        <button
          style={buttonStyle}
        >
          Save Changes
        </button>

      </div>

    </DashboardLayout>
  );
}



const labelStyle = {
  display: "block",
  marginBottom: "10px",
  color: "#cbd5e1",
};



const inputStyle = {
  width: "100%",
  padding: "16px",
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
  padding: "16px 30px",
  borderRadius: "12px",
  fontSize: "16px",
  cursor: "pointer",
};