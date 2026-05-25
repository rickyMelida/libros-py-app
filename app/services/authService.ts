import { ICredential } from "@/models/interfaces/ICredential";
import { User } from "@supabase/supabase-js"

import {
	GoogleAuthProvider,
	FacebookAuthProvider
} from "firebase/auth";
import { IUserCredential } from "@/models/interfaces/IUserCredential";
import { createClient } from "@/lib/supabase/client";
import { createUser } from "./userService";
const supabase = createClient();

export const register = async (
	credential: IUserCredential
) => {
	const { email, password } = credential;
	try {
		const { data, error } = await supabase.auth.signUp({ email, password });
		if (error) return console.error(error.message);

		credential.uid = data.user?.id;
		await createUser(credential);

		return data;
	} catch (error) {
		console.error("Error registering:", error);
		return null;
	}
};

export const loginByEmail = async (
	credential: ICredential
): Promise<User | null> => {
	const { email, password } = credential;

	try {
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		console.log({ data, error });
		if (error)
			return null;


		return data.user;

	} catch (error) {
		console.log({ email, password })
		console.log("Error logging in:", error);
		return null;
	};
};

export const logout = async (): Promise<void> => {
	try {
		await supabase.auth.signOut();

	} catch (error) {
		console.error("Error logging out:", error);
	}
};

export const validateToken = async (token: string): Promise<User | null> => {
	try {
		/*const userCredential: UserCredential = await signInWithCustomToken(
		  auth,
		  token
		);
		return userCredential.user;*/
		return null;
	} catch (error) {
		console.error("Error validating token:", error);
		return null;
	}
};

export const signInWithFacebook = async () => {
	const provider = new FacebookAuthProvider();
	try {
		const result = await supabase.auth.signInWithOAuth({ provider: 'facebook' });
		return result.data;
	} catch (error) {
		console.error("Error signing in with Facebook:", error);
		return null;
	}
};

export const signInWithGoogle = async ()=> {
	const provider = new GoogleAuthProvider();
	try {
		const result = await supabase.auth.signInWithOAuth({ provider: 'google' });
		return result.data || null;
	} catch (error) {
		console.error("Error signing in with Google:", error);
		return null;
	}
};