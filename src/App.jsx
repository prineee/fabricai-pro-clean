import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Billing from "./pages/Billing";

function Home() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1>FabricAI Pro</h1>

      <Link
        to="/billing"
        style={{
          color: "#2563eb",
          fontSize: "24px",
        }}
      >
        Go To Billing
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/billing"
          element={<Billing />}
        />
      </Routes>
    </BrowserRouter>
  );
}