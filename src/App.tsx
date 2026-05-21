import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Dashboard from "./pages/Dashboard";
import BOM from "./pages/BOM";
import Consumption from "./pages/Consumption";
import Costing from "./pages/Costing";
import Production from "./pages/Production";
import Subscription from "./pages/Subscription";
import Workspace from "./pages/Workspace";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Library from "./pages/Library";

function ProtectedRoute({
  children,
}: any) {

  const token =
    localStorage.getItem(
      "token"
    );

  if (!token) {

    return (
      <Navigate
        to="/login"
      />
    );

  }

  return children;
}



function App() {

  return (

    <BrowserRouter>

      <Routes>



        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />



        {/* SIGNUP */}

        <Route
          path="/signup"
          element={<Signup />}
        />



        {/* FORGOT PASSWORD */}

        <Route
          path="/forgot-password"
          element={
            <ForgotPassword />
          }
        />



        {/* RESET PASSWORD */}

        <Route
          path="/reset-password"
          element={
            <ResetPassword />
          }
        />



        {/* DASHBOARD */}

        <Route
          path="/"
          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }
        />



        {/* BOM */}

        <Route
          path="/bom"
          element={

            <ProtectedRoute>

              <BOM />

            </ProtectedRoute>

          }
        />



        {/* CONSUMPTION */}

        <Route
          path="/consumption"
          element={

            <ProtectedRoute>

              <Consumption />

            </ProtectedRoute>

          }
        />



        {/* COSTING */}

        <Route
          path="/costing"
          element={

            <ProtectedRoute>

              <Costing />

            </ProtectedRoute>

          }
        />



        {/* PRODUCTION */}

        <Route
          path="/production"
          element={

            <ProtectedRoute>

              <Production />

            </ProtectedRoute>

          }
        />



        {/* SUBSCRIPTION */}

        <Route
          path="/subscription"
          element={

            <ProtectedRoute>

              <Subscription />

            </ProtectedRoute>

          }
        />



        {/* WORKSPACE */}

        <Route
          path="/workspace"
          element={

            <ProtectedRoute>

              <Workspace />

            </ProtectedRoute>

          }
        />



        {/* PROFILE */}

        <Route
          path="/profile"
          element={

            <ProtectedRoute>

              <Profile />

            </ProtectedRoute>

          }
        />



        {/* SETTINGS */}

        <Route
          path="/settings"
          element={

            <ProtectedRoute>

              <Settings />

            </ProtectedRoute>

          }
        />



        {/* LIBRARY */}

        <Route
          path="/library"
          element={

            <ProtectedRoute>

              <Library />

            </ProtectedRoute>

          }
        />



        {/* FALLBACK */}

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
            />
          }
        />
        <Route path="/signup" element={<Signup />} />



      </Routes>

    </BrowserRouter>

  );
}

export default App;