import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // You can use this for global styles or add a `styles.css` file
import App from "./App";
import { DataProvider } from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <App />
  </DataProvider>
);
