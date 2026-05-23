import type {
  ReactNode,
} from "react";

import Sidebar from "../components/Sidebar";



type DashboardLayoutProps = {
  children: ReactNode;
};



export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  return (
    <div
      style={{
        display: "flex",
        background: "#020617",
        color: "white",
        minHeight: "100vh",
      }}
    >

      <Sidebar />



      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {children}
      </div>

    </div>
  );
}