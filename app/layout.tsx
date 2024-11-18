import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
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
            <body>
                {children}
                <BootstrapClient />
            </body>
        </html>
    );
}
