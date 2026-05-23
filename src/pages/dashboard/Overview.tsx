import DashboardLayout from "../../layouts/DashboardLayout";



export default function Overview() {

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "40px",
        }}
      >
        Dashboard
      </h1>



      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >

        <div
          style={cardStyle}
        >
          <h2>Total Usage</h2>

          <p
            style={numberStyle}
          >
            24
          </p>
        </div>



        <div
          style={cardStyle}
        >
          <h2>Current Plan</h2>

          <p
            style={numberStyle}
          >
            FREE
          </p>
        </div>



        <div
          style={cardStyle}
        >
          <h2>AI Credits</h2>

          <p
            style={numberStyle}
          >
            10
          </p>
        </div>

      </div>

    </DashboardLayout>
  );
}



const cardStyle = {
  background: "#0f172a",
  borderRadius: "20px",
  padding: "30px",
  border: "1px solid #1e293b",
};



const numberStyle = {
  fontSize: "40px",
  marginTop: "20px",
  fontWeight: "bold",
};