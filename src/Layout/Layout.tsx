import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<ScrollRestoration />

			<header>Header</header>

			<main>
				<Suspense fallback="Loading">
					<Outlet />
				</Suspense>
			</main>

			<footer>Footer</footer>
		</>
	);
};

export default Layout;
