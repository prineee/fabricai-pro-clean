export function canUseFeature(
  plan: string,
  feature: string
) {
  const permissions: any = {
    FREE: ["blog"],

    PRO: [
      "blog",
      "email",
      "ads",
      "history",
      "export",
    ],

    AGENCY: [
      "blog",
      "email",
      "ads",
      "history",
      "export",
      "team",
      "whitelabel",
    ],
  };

  return permissions[plan]?.includes(feature);
}