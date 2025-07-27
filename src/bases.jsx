import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Clone from "./clone.jsx";
import "./globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Clone />
  </StrictMode>
);
