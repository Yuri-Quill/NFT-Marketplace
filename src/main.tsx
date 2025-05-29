import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import "@/styles/reset.scss";

import "@assets/fonts/Work_Sans/fonts.scss";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
