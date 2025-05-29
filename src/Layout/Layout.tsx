import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
	return (
		<>
			<ScrollRestoration />
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>

			<header>Header</header>

			<main className="main" role="main">
				<Suspense fallback="Loading">
					<Outlet />
				</Suspense>
			</main>

			<footer>Footer</footer>
		</>
	);
};

export default Layout;
