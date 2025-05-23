import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from "./routes";
import { store } from "./store/store";

import "@helpers/reset.scss";
import "@assets/fonts/work-sans/font.scss";
import "react-toastify/ReactToastify.css";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
