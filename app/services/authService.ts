import { ICredential } from "@/models/interfaces/ICredential";

import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    User,
    GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const loginByEmail = async (credential: ICredential): Promise<User | null> => {
    const { email, password } = credential;

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in:", error);
        return null;
    }
};

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error al autenticar con Google:", error);
  }
};

export const register = async (
    credential: ICredential
): Promise<User | null> => {
    const { email, password } = credential;
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userCredential.user;
    } catch (error) {
        console.error("Error registering:", error);
        return null;
    }
};

export const logout = async (): Promise<void> => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error logging out:", error);
    }
};
