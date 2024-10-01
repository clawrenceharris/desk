import { auth } from "../firebase"; // Adjust the path as necessary
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const logIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  return await signOut(auth);
};
