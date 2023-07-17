import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./Components/Slices/userSlice.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
