import { ApiErrorResponse } from "@/models/interfaces/ErrorResponse";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const { data } = await axios.post(`${BACKEND_URL}/api/books/set-book`, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		const errorResponse = (error as AxiosError<ApiErrorResponse>).response;
		
		return NextResponse.json(
			{ message: errorResponse?.data },
			{ status: errorResponse?.data.statusCode || 500 }
		);
	}
}