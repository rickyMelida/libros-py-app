import BootstrapClient from "@/components/BootstrapClient";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
