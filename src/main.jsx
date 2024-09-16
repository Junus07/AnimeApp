import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import FavProvider from "./context/favProvider.jsx";
import SearchProvider from "./context/searchProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <FavProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </FavProvider>
  </Router>,
);
