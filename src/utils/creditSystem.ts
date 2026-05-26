import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export interface CreditResult {
  allowed: boolean;
  reason: string;
}

function todayStr(): string {
  return new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
}

export async function checkAndDeductCredit(userId: string): Promise<CreditResult> {
  const userRef = doc(db, "users", userId);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    // First-time user — create their document with FREE plan
    await setDoc(userRef, {
      plan: "FREE",
      dailyUsage: 1,
      lastUsageDate: todayStr(),
    });
    return { allowed: true, reason: "ok" };
  }

  const data = snap.data();
  const plan: string = data.plan || "FREE";

  // Paid users — always allowed
  if (plan === "PRO" || plan === "AGENCY") {
    return { allowed: true, reason: "paid" };
  }

  // FREE plan logic
  let dailyUsage: number = data.dailyUsage || 0;
  const lastUsageDate: string = data.lastUsageDate || "";

  // Reset counter if it's a new day
  if (lastUsageDate !== todayStr()) {
    dailyUsage = 0;
    await updateDoc(userRef, { dailyUsage: 0, lastUsageDate: todayStr() });
  }

  if (dailyUsage >= 5) {
    return {
      allowed: false,
      reason:
        "⚠️ Daily limit of 5 free AI credits reached. Upgrade to PRO for unlimited access.",
    };
  }

  await updateDoc(userRef, {
    dailyUsage: dailyUsage + 1,
    lastUsageDate: todayStr(),
  });

  return { allowed: true, reason: "ok" };
}
