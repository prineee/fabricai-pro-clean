import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase";


// CREATE AFFILIATE
export const createAffiliate = async (
  userId: string,
  referralCode: string
) => {
  try {
    await addDoc(
      collection(db, "affiliates"),
      {
        userId,
        referralCode,
        totalSales: 0,
        totalCommission: 0,
        createdAt: serverTimestamp(),
      }
    );

    console.log("Affiliate created");
  } catch (error) {
    console.log(error);
  }
};


// GET AFFILIATE
export const getAffiliate = async (
  userId: string
) => {
  try {
    const q = query(
      collection(db, "affiliates"),
      where("userId", "==", userId)
    );

    const snapshot = await getDocs(q);

    const affiliates: any[] = [];

    snapshot.forEach((doc) => {
      affiliates.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return affiliates;
  } catch (error) {
    console.log(error);
    return [];
  }
};