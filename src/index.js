import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // You can use this for global styles or add a `styles.css` file
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
