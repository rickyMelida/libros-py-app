import { ICredential } from "@/models/interfaces/ICredential";

import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  User,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  UserCredential,
  signInWithCustomToken,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import axios from "axios";
import { IUserCredential } from "@/models/interfaces/IUserCredential";

export const loginByEmail = async (
  credential: ICredential
): Promise<User | null> => {
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
    const result: any = await signInWithPopup(auth, googleProvider);
    const user = {
      id: 0,
      name: result.user.displayName,
      email: result.user.email,
      phone: result.user.phoneNumber,
    };

    let data = JSON.stringify(user);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5077/api/users/set-user",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${result.user.accessToken}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });


    return result.user.accessToken;
  } catch (error) {
    console.log("Error al autenticar con Google:", error);
    return null;
  }
};

const facebookProvider = new FacebookAuthProvider();
export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    return result.user;
  } catch (error) {
    console.error("Error al autenticar con Facebook: ", error);
  }
};

export const register = async (
  credential: IUserCredential
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

export const validateToken = async (token: string): Promise<User | null> => {
  try {
    const userCredential: UserCredential = await signInWithCustomToken(
      auth,
      token
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error validating token:", error);
    return null;
  }
};
