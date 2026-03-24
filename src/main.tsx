import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// --- START: Import Font Self-Hosted ---
// Font ini sekarang menjadi bagian dari aplikasi Anda, bukan request external
import "@fontsource/inter/300.css"; // Light
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/600.css"; // Semi-bold

import "@fontsource/plus-jakarta-sans/500.css"; // Medium
import "@fontsource/plus-jakarta-sans/600.css"; // Semi-bold
import "@fontsource/plus-jakarta-sans/700.css"; // Bold
import "@fontsource/plus-jakarta-sans/800.css"; // Extra-bold
// --- END: Import Font Self-Hosted ---

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);