import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";
import BootstrapClient from "@/components/BootstrapClient";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import type { Metadata } from "next";
import { Provider } from "react-redux";

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
      <body>{children}</body>
    </html>
  );
}
