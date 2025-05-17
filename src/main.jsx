import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "flowbite";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
    <App />
  </SnackbarProvider>
);
