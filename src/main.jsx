import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "flowbite";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "./utils/store/store.js";

createRoot(document.getElementById("root")).render(
  <SnackbarProvider  autoHideDuration={1000} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
    <Provider store={store}>
      <App />
    </Provider>
  </SnackbarProvider>
);
