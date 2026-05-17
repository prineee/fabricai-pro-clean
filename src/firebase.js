import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqhPeYIAiBUF3Wp2iIK3B5r6NkroDPj_Q",
  authDomain: "fabricaipro.firebaseapp.com",
  projectId: "fabricaipro",
  storageBucket: "fabricaipro.firebasestorage.app",
  messagingSenderId: "417787440192",
  appId: "1:417787440192:web:1a180ff3c53e470e3283a5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export default app;