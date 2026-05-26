import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: any) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#020617",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#34d399", fontSize: "22px", fontWeight: 600 }}>
          Loading FabricAI Pro...
        </p>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  if (!user.emailVerified) return <Navigate to="/verify-email" replace />;

  return children;
}
