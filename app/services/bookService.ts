import { BookSection } from "@/models/enums/BookSection";
import BookFormData from "@/models/interfaces/BookFormData";
import { ApiErrorResponse } from "@/models/interfaces/ErrorResponse";
import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import { IImage } from "@/models/interfaces/IImage";
import { ApiResponse } from "@/models/response/ApiResponse";
import { ErrorUploadingBook } from "@/utils/constants/ErrorMessages";
import axios, { AxiosError } from "axios";

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
		body.append("bookRequest.PrincipalImage", formData.principalImage);

		formData.images.forEach((file) => {
			body.append("bookRequest.Images", file);
		});

		const { data } = await axios.post<ApiResponse<number>>(
			"/api/book/add",
			body
		);

		return data.message;
	} catch (error) {
		const errorResponse = (error as AxiosError<ApiErrorResponse>).response;
		console.log("Error creando libro:", errorResponse?.data?.message);
		throw new Error(ErrorUploadingBook);
	}
}

export const getMainBooksService = async () => {
	try {
		const { data } = await axios.get<ApiResponse<IImage[]>>(
			"/api/book/get-main-books"
		);

		return data;
	} catch (error) {
		const errorResponse = (error as AxiosError<ApiErrorResponse>).response;
		console.log("Error obteniendo libros principales:", errorResponse?.data?.message);
		throw new Error("Error obteniendo libros principales");
	}
}

export const getBooksServiceBySection = async (section: BookSection): Promise<ApiResponse<Array<IBookDTOResponse>>> => {
	try {
		const response = await axios.get<ApiResponse<Array<IBookDTOResponse>>>(
			`/api/book/get-${section}-books`
		);

		return response.data;
	} catch (error) {
		const errorResponse = (error as AxiosError<ApiErrorResponse>).response;
		console.log("Error obteniendo libros por categoría:", errorResponse?.data?.message);
		throw new Error("Error obteniendo libros por categoría");
	}
}

export const getBookDetailService = async (bookId: number): Promise<ApiResponse<IBookDTOResponse>> => {
	try {
		const response = await axios.get<ApiResponse<IBookDTOResponse>>(
			`/api/book/get-book-detail?id=${bookId}`
		);

		return response.data;
	} catch (error) {
		const errorResponse = (error as AxiosError<ApiErrorResponse>).response;
		console.log("Error obteniendo detalle del libro:", errorResponse?.data?.message);
		throw new Error("Error obteniendo detalle del libro");
	}
}