// app/api/books/route.ts
import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:5077";

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const response = await fetch(`${BACKEND_URL}/api/books/set-book`, {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			const errorBody = await response.text();
			return NextResponse.json(
				{ message: "Error del backend", detail: errorBody },
				{ status: response.status }
			);
		}

		const data = await response.json();
		console.log("[set-book] response data:", data);
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error("[set-book] error:", error);
		return NextResponse.json(
			{ message: "Error interno del servidor" },
			{ status: 500 }
		);
	}
}