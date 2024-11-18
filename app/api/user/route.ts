// app/api/users/route.ts

interface User {
  id: number;
  name: string;
}

// Datos simulados de usuarios
const users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

// Respuesta para obtener la lista de usuarios
export async function GET() {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// Respuesta para crear un nuevo usuario
export async function POST(req: Request) {
  const { name }: { name: string } = await req.json();  // Destructuring con tipo

  // Crear el nuevo usuario (en este caso solo lo agregamos al array)
  const newUser: User = { id: users.length + 1, name };
  users.push(newUser);

  return new Response(
    JSON.stringify({ message: `User ${name} created successfully` }),
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

// Respuesta para actualizar un usuario
export async function PUT(req: Request) {
  const { id, name }: { id: number; name: string } = await req.json();
  const user = users.find(u => u.id === id);

  if (!user) {
    return new Response(
      JSON.stringify({ message: `User with id ${id} not found` }),
      { status: 404 }
    );
  }

  user.name = name;  // Actualizar el nombre del usuario
  return new Response(
    JSON.stringify({ message: `User ${id} updated to ${name}` }),
    { status: 200 }
  );
}

// Respuesta para eliminar un usuario
export async function DELETE(req: Request) {
  const { id }: { id: number } = await req.json();
  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return new Response(
      JSON.stringify({ message: `User with id ${id} not found` }),
      { status: 404 }
    );
  }

  users.splice(userIndex, 1);  // Eliminar el usuario del array
  return new Response(
    JSON.stringify({ message: `User ${id} deleted` }),
    { status: 200 }
  );
}
