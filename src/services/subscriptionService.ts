import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase";


// CREATE SUBSCRIPTION
export const createSubscription = async (
  userId: string,
  plan: string,
  billingCycle: string,
  amount: number,
  currency: string
) => {
  try {
    await addDoc(
      collection(db, "subscriptions"),
      {
        userId,
        plan,
        billingCycle,
        amount,
        currency,
        status: "active",
        createdAt: serverTimestamp(),
      }
    );

    console.log("Subscription created");
  } catch (error) {
    console.log(error);
  }
};


// GET USER SUBSCRIPTIONS
export const getUserSubscriptions =
  async (userId: string) => {
    try {
      const q = query(
        collection(db, "subscriptions"),
        where("userId", "==", userId)
      );

      const snapshot = await getDocs(q);

      const subscriptions: any[] = [];

      snapshot.forEach((doc) => {
        subscriptions.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return subscriptions;
    } catch (error) {
      console.log(error);
      return [];
    }
  };