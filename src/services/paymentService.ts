import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase";


// SAVE PAYMENT
export const savePayment = async (
  userId: string,
  amount: number,
  currency: string,
  gateway: string,
  status: string
) => {
  try {
    await addDoc(
      collection(db, "payments"),
      {
        userId,
        amount,
        currency,
        gateway,
        status,
        createdAt: serverTimestamp(),
      }
    );

    console.log("Payment saved");
  } catch (error) {
    console.log(error);
  }
};


// GET USER PAYMENTS
export const getUserPayments = async (
  userId: string
) => {
  try {
    const q = query(
      collection(db, "payments"),
      where("userId", "==", userId)
    );

    const snapshot = await getDocs(q);

    const payments: any[] = [];

    snapshot.forEach((doc) => {
      payments.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return payments;
  } catch (error) {
    console.log(error);
    return [];
  }
};