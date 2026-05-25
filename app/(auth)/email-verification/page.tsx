import EmailVerification from "@/components/Auth/EmailVerification/Index";
import { Suspense } from "react";

const EmailVerificationPage = () => {
	return (
		<Suspense fallback={<div />}>
			<EmailVerification />
		</Suspense>
	)
}

export default EmailVerificationPage;