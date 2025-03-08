import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";
import BootstrapClient from "@/components/BootstrapClient";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BootstrapClient />
    </>
  );
}
