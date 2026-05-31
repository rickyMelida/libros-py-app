import axios from "axios";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ uid: string }> }
) {
  const { uid } = await params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/get-user-by-uid?uid=${uid}`
  );

  if (response.status === 200) {
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Error al obtener el usuario" }), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  }
}