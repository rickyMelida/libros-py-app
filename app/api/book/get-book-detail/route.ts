import { ApiErrorResponse } from "@/models/interfaces/ErrorResponse";
import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import { ApiResponse } from "@/models/response/ApiResponse";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const bookId = searchParams.get("id");
	
	try {
		const { data } = await axios.get<ApiResponse<IBookDTOResponse>>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/get-book-details?id=${bookId}`
		);

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		const errorResponse = (error as AxiosError<ApiErrorResponse>).response;

		return NextResponse.json(
			{ message: errorResponse?.data },
			{ status: errorResponse?.data.statusCode || 500 }
		);
	}
}