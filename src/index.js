import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Your global styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
