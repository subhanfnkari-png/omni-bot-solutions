import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Unregister any existing service workers to prevent caching issues
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister().then((success) => {
        if (success) {
          console.log("Service worker unregistered successfully");
        }
      });
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
