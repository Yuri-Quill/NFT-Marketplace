import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: "error",
		children: [
			{
				index: true,
				path: "/",
				element: <HomePage/>,
			},
		],
	},
]);

export default router;
