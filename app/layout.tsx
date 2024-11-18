import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Libros Libre PY",
  description: "Intercambio de libros en Paraguay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
