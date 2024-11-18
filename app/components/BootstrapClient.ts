"use client";

import { useEffect } from "react";

export default function () {
    useEffect(() => {
        //@ts-ignore
        require("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    return null;
}
