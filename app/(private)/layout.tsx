import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";
import BootstrapClient from "@/components/BootstrapClient";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import { createClient } from "@/lib/supabase/server";
import { redirect } from 'next/navigation'

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const supabase = await createClient()
	const { data: { user } } = await supabase.auth.getUser()

	if (!user) {
		redirect('/login')
	}

	return (
		<>
			<Header />
			{children}
			<Footer />
			<BootstrapClient />
		</>
	);
}
