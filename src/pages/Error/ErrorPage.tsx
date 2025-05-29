import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

import type { IApiErrorResponse } from "@/shared/types/apiErrorResponse.type";

import "./ErrorPage.scss";

const ErrorPage = () => {
	const rawError = useRouteError();

	const error: IApiErrorResponse = isRouteErrorResponse(rawError)
		? {
				message: rawError.data?.message || "Unknown error!",
				status: rawError.status,
				statusText: rawError.statusText || "Something went wrong!",
		  }
		: rawError instanceof Error
		? {
				message: rawError.message,
				status: 500,
				statusText: "Something went wrong!",
		  }
		: {
				message: "Unknown error!",
				status: 500,
				statusText: "Something went wrong!",
		  };

	return (
		<section className="error-page" role="alert" aria-label={`Error ${error.status}: ${error.statusText}`}>
			<article className="error-page__article">
				<h1 className="error-page__title">Oops, something went wrong!</h1>
				<h2 className="error-page__subtitle">{error.status}</h2>
				<p className="error-page__text">{error.message || error.statusText}</p>

				<Link className="error-page__link" to="/" role="link" aria-label="Go back to the homepage">
					Go back
				</Link>
			</article>
		</section>
	);
};

export default ErrorPage;
