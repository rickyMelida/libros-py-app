import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";
import ButtonUp from "@/components/Common/ButtonUp";
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
    <html lang="es">
      <body>
        {children}
        <ButtonUp />
      </body>
    </html>
  );
}
