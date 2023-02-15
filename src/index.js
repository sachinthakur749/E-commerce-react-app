import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../src/features/cartSlice'
import productsReducer from "./features/productsSlice";

 const store = configureStore({
  reducer:{
    cart : cartReducer,
    productsData : productsReducer,

  }
 })


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

