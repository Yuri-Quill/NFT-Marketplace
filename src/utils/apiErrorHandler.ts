import axios, { AxiosError } from "axios";
import type { IApiErrorResponse } from "@/shared/types/apiErrorResponse.type";

const apiErrorhandler = (error: unknown): { message: string } => {
	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError<IApiErrorResponse>;
		const rawMessage = axiosError.response?.data?.message;
		const statusText = axiosError.response?.statusText;

		const message = Array.isArray(rawMessage) ? rawMessage.join(", ") : rawMessage || statusText || "Unknown Axios error";

		console.error(`apiErrorHandler: ${message}`);
		return { message };
	}

	if (error instanceof Error) {
		console.error(`apiErrorHandler: ${error.message}`);
		return { message: error.message };
	}

	console.error("apiErrorHandler: Unknown Error");
	return { message: "Unknown Error" };
};

export default apiErrorhandler;
