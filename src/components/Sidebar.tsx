import {
  NavLink,
} from "react-router-dom";



const linkStyle = {
  display: "block",
  padding: "14px 18px",
  borderRadius: "10px",
  color: "#cbd5e1",
  textDecoration: "none",
  marginBottom: "10px",
  fontSize: "16px",
  fontWeight: 500,
};



export default function Sidebar() {

  return (
    <div
      style={{
        width: "260px",
        background: "#0f172a",
        minHeight: "100vh",
        padding: "30px 20px",
        borderRight: "1px solid #1e293b",
      }}
    >

      <h1
        style={{
          color: "white",
          marginBottom: "40px",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        FabricAI
      </h1>



      <NavLink
        to="/dashboard"
        style={linkStyle}
      >
        Dashboard
      </NavLink>



      <NavLink
        to="/dashboard/blog"
        style={linkStyle}
      >
        Blog Generator
      </NavLink>



      <NavLink
        to="/dashboard/email"
        style={linkStyle}
      >
        Email Generator
      </NavLink>



      <NavLink
        to="/dashboard/ads"
        style={linkStyle}
      >
        Ad Generator
      </NavLink>



      <NavLink
        to="/dashboard/history"
        style={linkStyle}
      >
        History
      </NavLink>



      <NavLink
        to="/dashboard/billing"
        style={linkStyle}
      >
        Billing
      </NavLink>



      <NavLink
        to="/dashboard/settings"
        style={linkStyle}
      >
        Settings
      </NavLink>

    </div>
  );
}