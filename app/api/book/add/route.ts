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
		if (error instanceof AxiosError) {
			console.error("[set-book] axios error:", error);
			return NextResponse.json(
				{ message: "Error del backend", detail: error.response?.data },
				{ status: error.response?.status ?? 502 }
			);
		}

		console.error("[set-book] error:", error);
		return NextResponse.json(
			{ message: "Error interno del servidor" },
			{ status: 500 }
		);
	}
}