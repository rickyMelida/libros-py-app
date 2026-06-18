import { ICredential } from "@/models/interfaces/ICredential";
import { User } from "@supabase/supabase-js"

import {
	GoogleAuthProvider,
	FacebookAuthProvider
} from "firebase/auth";
import { IUserCredential } from "@/models/interfaces/IUserCredential";
import { createClient } from "@/lib/supabase/client";
import { UserService } from "./userService";
const supabase = createClient();

export class AuthService {


	register = async (
		credential: IUserCredential
	) => {
		const { email, password } = credential;
		try {
			const { data, error } = await supabase.auth.signUp({ email, password });
			if (error) return console.error(error.message);

			credential.uid = data.user?.id;
			await UserService.create(credential);

			return data;
		} catch (error) {
			console.error("Error registering:", error);
			return null;
		}
	};

	loginByEmail = async (
		credential: ICredential
	): Promise<User | null | any> => {
		const { email, password } = credential;

		try {
			const { data, error } = await supabase.auth.signInWithPassword({ email, password });

			if (error)
				return null;

			const uid = data.user.id;
			const result = await UserService.getByUid(uid);

			return result;

		} catch (error) {
			console.log("Error logging in:", error);
			return null;
		};
	};

	logout = async (): Promise<void> => {
		try {
			await supabase.auth.signOut();

		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	resetPassword = async (email: string) => {
		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: 'https://libroslibrespy.vercel.app/reset-password', // URL de tu app
		})

		return error;
	}

	validateToken = async (token: string): Promise<User | null> => {
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

	signInWithFacebook = async () => {
		const provider = new FacebookAuthProvider();
		try {
			const result = await supabase.auth.signInWithOAuth({ provider: 'facebook' });
			return result.data;
		} catch (error) {
			console.error("Error signing in with Facebook:", error);
			return null;
		}
	};

	signInWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await supabase.auth.signInWithOAuth({ provider: 'google' });
			return result.data || null;
		} catch (error) {
			console.error("Error signing in with Google:", error);
			return null;
		}
	};
}