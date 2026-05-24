import { Suspense } from "react";
import Login from "@/components/Auth/Login";

const LoginPage = () => {
    return (
        <Suspense fallback={<div />}>
            <Login />
        </Suspense>
    )
}

export default LoginPage;