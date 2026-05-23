import { usageLimits } from "./usageLimit";

export const canGenerate = (
  userPlan: string,
  todayUsage: number
) => {
  const limit =
    usageLimits[userPlan as keyof typeof usageLimits];

  return todayUsage < limit.dailyGenerations;
};