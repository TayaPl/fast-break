import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPhZHoU9xp-saUrL0HiVqBPQ5kVGAoyn4",
  authDomain: "fastbreak-d1106.firebaseapp.com",
  projectId: "fastbreak-d1106",
  storageBucket: "fastbreak-d1106.appspot.com",
  messagingSenderId: "785496348763",
  appId: "1:785496348763:web:34932012f26f706676477e",
  measurementId: "G-KZ0VC61SRE",
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);
export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);

export const db = getFirestore();
