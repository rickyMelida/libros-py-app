"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
    useEffect(() => {
        // @ts-ignore
        require("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    return null;
}
