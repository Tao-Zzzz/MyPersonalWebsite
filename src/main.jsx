import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const { StrictMode } = React;
const { createRoot } = ReactDOMClient;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
