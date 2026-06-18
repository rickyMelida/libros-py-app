import { Suspense } from "react";
import ResetPassword from "@/components/Auth/ResetPassword";

const LoginPage = () => {
    return (
        <Suspense fallback={<div />}>
            <ResetPassword />
        </Suspense>
    )
}

export default LoginPage;