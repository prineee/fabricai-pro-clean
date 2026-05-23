export const usageLimits = {
  FREE: 5,
  PRO: 999999,
  AGENCY: 999999,
};

export function canGenerate(
  plan: string,
  todayUsage: number
) {
  const limit =
    usageLimits[
      plan as keyof typeof usageLimits
    ];

  return todayUsage < limit;
}