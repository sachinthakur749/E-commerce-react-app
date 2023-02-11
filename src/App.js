import React from "react";
import { Route, Routes } from "react-router";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Login from "./components/Login";
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
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/carts" element={<Cart />} />
        {/* <Route path="/account" element={<Account />} /> */}

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
              {/* <Account /> */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              {/* <Home /> */}
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
