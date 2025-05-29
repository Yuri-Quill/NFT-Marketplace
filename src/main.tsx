import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/reset.scss";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

createRoot(document.getElementById("root")!).render(<StrictMode></StrictMode>);
