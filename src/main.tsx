import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/reset.scss";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
