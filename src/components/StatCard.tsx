export default function StatCard({
  title,
  value,
}: any) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid #1e293b",
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          marginBottom: "15px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: "36px",
        }}
      >
        {value}
      </h2>
    </div>
  );
}