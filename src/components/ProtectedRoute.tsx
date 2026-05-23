import {
  Navigate,
} from "react-router-dom";

import type {
  ReactNode,
} from "react";

import {
  useAuth,
} from "../context/AuthContext";



type ProtectedRouteProps = {
  children: ReactNode;
};



export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {

  const {
    user,
    loading,
  } = useAuth();



  if (loading) {
    return (
      <div
        style={{
          background: "#020617",
          color: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Loading...
      </div>
    );
  }



  if (!user) {
    return <Navigate to="/login" />;
  }



  return <>{children}</>;
}