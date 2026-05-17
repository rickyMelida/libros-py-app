"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { DecodedIdToken } from "firebase-admin/auth";
import { createClient } from "@/lib/supabase/client";

export function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
	const [data, setData] = useState<any | null>(null);

	useEffect(() => {
		const validateToken = async () => {
			const supabase = await createClient()

			const { data: { user } } = await supabase.auth.getUser();

			console.log(user);

			if (user) {
				setIsAuthenticated(true);
				setData(user);
			} else {
				setIsAuthenticated(false);
				setData(null);
			}


		};

		validateToken();
	}, []);

	return { isAuthenticated, data };
}
