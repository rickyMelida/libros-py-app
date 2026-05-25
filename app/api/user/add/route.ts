import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
	const body = await request.json();
	const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/set-user`;

	const { name, email, uid } = body;
	try {
		const requestBody = { user: { name, email, uid, id: 0, phone: '' } };
		
		console.log({ API_URL, body, requestBody });

		const response = await axios.post(API_URL, requestBody, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		return NextResponse.json(response.data);
	} catch (error: any) {
		console.error('Error creating user:', {
			message: error.message,
			status: error.response?.status,
			data: error.response?.data,
			body: body,
		});

		return NextResponse.json(
			{
				error: error.response?.data?.message || error.response?.data?.error || error.message,
				details: error.response?.data,
			},
			{ status: error.response?.status || 500 }
		);
	}
}