import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { initAffiliateTracking } from "./lib/affiliate-tracking";

// Inicializa o rastreamento de afiliados
initAffiliateTracking();

createRoot(document.getElementById("root")!).render(<App />);
