import { ApiErrorResponse } from "@/models/interfaces/ErrorResponse";
import { IImage } from "@/models/interfaces/IImage";
import { ApiResponse } from "@/models/response/ApiResponse";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET() {

	try {

		const { data } = await axios.get<ApiResponse<IImage[]>>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/get-featured-books?amount=4`
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