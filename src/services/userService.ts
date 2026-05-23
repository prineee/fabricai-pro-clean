import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";


// CREATE USER
export const createUserProfile = async (
  userId: string,
  email: string,
  country: string = "india"
) => {
  try {
    await setDoc(doc(db, "users", userId), {
      email,
      plan: "FREE",
      country,
      createdAt: serverTimestamp(),
      verified: false,
      dailyUsage: 0,
    });

    console.log("User profile created");
  } catch (error) {
    console.log(error);
  }
};


// GET USER
export const getUserProfile = async (
  userId: string
) => {
  try {
    const userRef = doc(db, "users", userId);

    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};


// VERIFY USER
export const verifyUser = async (
  userId: string
) => {
  try {
    await updateDoc(doc(db, "users", userId), {
      verified: true,
    });
  } catch (error) {
    console.log(error);
  }
};


// UPDATE PLAN
export const updateUserPlan = async (
  userId: string,
  plan: string
) => {
  try {
    await updateDoc(doc(db, "users", userId), {
      plan,
    });
  } catch (error) {
    console.log(error);
  }
};


// DAILY AI USAGE
export const incrementUsage = async (
  userId: string
) => {
  try {
    await updateDoc(doc(db, "users", userId), {
      dailyUsage: increment(1),
    });
  } catch (error) {
    console.log(error);
  }
};