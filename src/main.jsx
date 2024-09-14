import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import FavProvider from "./context/favProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <FavProvider>
      <App />
    </FavProvider>
  </Router>,
);
