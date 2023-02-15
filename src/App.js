import React from "react";
import { Route, Routes } from "react-router";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import Home from "./pages/Home";

function App() {
  const localSignup = localStorage.getItem("signup");

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/carts" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
