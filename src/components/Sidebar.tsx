import { Link } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    "overview",
    "blog-generator",
    "ad-generator",
    "email-generator",
    "landing-generator",
    "history",
    "billing",
    "settings",
  ];

  return (
    <div
      style={{
        width: "260px",
        background: "#081028",
        padding: "30px 20px",
        borderRight: "1px solid #1e293b",
      }}
    >
      <h1
        style={{
          fontSize: "34px",
          marginBottom: "40px",
        }}
      >
        FabricAI
      </h1>

      {menu.map((item) => (
        <Link
          key={item}
          to={`/dashboard/${item}`}
          style={{
            display: "block",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "12px",
            textDecoration: "none",
            color: "white",
            background: "#0f172a",
          }}
        >
          {item.replace("-", " ")}
        </Link>
      ))}
    </div>
  );
}