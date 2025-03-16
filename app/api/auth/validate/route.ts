import firebaseAdminService from "@/services/firebaseAdminService";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    const result = await firebaseAdminService().verifyIdToken(token);

    return new Response(JSON.stringify({ isAuth: true, data: result }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ isAuth: false, data: null }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
