import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import HomePage from "./pages/Home/HomePage";
import Layout from "./Layout/Layout";

const ErrorPage = lazy(() => import("@pages/Error/ErrorPage"));
const AuthPage = lazy(() => import("@pages/Auth/AuthPage"));
const ContactsPage = lazy(() => import("@pages/Contacts/ContactsPage"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/auth/:mode",
				element: <AuthPage />,
			},
			{
				path: "/contacts",
				element: <ContactsPage />,
			},
		],
	},
]);
export default router;
