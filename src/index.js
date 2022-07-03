import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>{" "}
      , Coded by{" "}
      <a href="https://github.com/BhudiaMukund" target="_blank">
        {" "}
        Mukund Bhudia
      </a>
    </div>
  </React.StrictMode>
);
