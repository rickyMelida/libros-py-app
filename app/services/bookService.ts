import BookFormData from "@/models/interfaces/BookFormData";
import { ApiResponse } from "@/models/response/ApiResponse";
import axios from "axios";

export const createBook = async (formData: BookFormData): Promise<string> => {
	try {

		const body = new FormData();

		body.append("bookRequest.User", String(formData.user));
		body.append("bookRequest.Title", formData.title);
		body.append("bookRequest.Author", formData.author);
		body.append("bookRequest.Price", String(formData.price));
		body.append("bookRequest.State", String(formData.state));
		body.append("bookRequest.TransactionType", String(formData.transactionType));
		body.append("bookRequest.Description", formData.description);
		body.append("bookRequest.OtherDetail", formData.otherDetail);
		body.append("bookRequest.Year", formData.year);

		formData.images.forEach((file) => {
			body.append("bookRequest.Images", file);
		});

		const { data } = await axios.post<ApiResponse<number>>(
			"/api/book/add",
			body
		);

		console.log({ data });

		return data.message;
	} catch (error) {
		console.error("Error creating book:", error);
		return error instanceof Error ? error.message : "Unknown error";
	}
}