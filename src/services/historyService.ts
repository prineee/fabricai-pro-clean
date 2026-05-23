import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

export async function saveHistory(
  userId: string,
  prompt: string,
  result: string,
  type: string
) {
  try {
    await addDoc(
      collection(db, "ai_history"),
      {
        userId,
        prompt,
        result,
        type,
        createdAt: serverTimestamp(),
      }
    );
  } catch (error) {
    console.log(error);
  }
}