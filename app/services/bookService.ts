import BookFormData from "@/models/interfaces/BookFormData";
import BookDTOResponse from "@/models/response/BookDTOResponse";
import axios from "axios";

export const createBook = async (formData: BookFormData): Promise<BookDTOResponse> => {
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

	// Las imágenes se agregan individualmente con el mismo key
	formData.images.forEach((file) => {
		body.append("bookRequest.Images", file);
	});

	const { data } = await axios.post<BookDTOResponse>(
		"/api/book/add",
		body
	);

	return data;
}