import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

export function usePlan() {
  const { user } = useAuth();
  const [plan, setPlan] = useState<string>("FREE");
  const [credits, setCredits] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(doc(db, "users", user.uid), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setPlan(data.plan || "FREE");
        setCredits(data.dailyUsage || 0);
      } else {
        setPlan("FREE");
        setCredits(0);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  return {
    plan,
    loading,
    isPro: plan === "PRO" || plan === "AGENCY",
    isAgency: plan === "AGENCY",
    isFree: plan === "FREE",
    credits,
  };
}
