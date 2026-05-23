import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { db } from "../firebase";


// SAVE AI HISTORY
export const saveAIHistory = async (
  userId: string,
  prompt: string,
  result: string,
  tool: string
) => {
  try {
    await addDoc(
      collection(db, "ai_history"),
      {
        userId,
        prompt,
        result,
        tool,
        createdAt: serverTimestamp(),
      }
    );

    console.log("AI history saved");
  } catch (error) {
    console.log(error);
  }
};


// GET AI HISTORY
export const getAIHistory = async (
  userId: string
) => {
  try {
    const q = query(
      collection(db, "ai_history"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    const history: any[] = [];

    snapshot.forEach((doc) => {
      history.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return history;
  } catch (error) {
    console.log(error);
    return [];
  }
};