export const usageLimits = {
  FREE: {
    dailyGenerations: 3,
    aiAds: false,
    aiLandingPages: false,
    aiScripts: false,
    exports: false,
  },

  PRO: {
    dailyGenerations: 999999,
    aiAds: true,
    aiLandingPages: true,
    aiScripts: true,
    exports: true,
  },

  AGENCY: {
    dailyGenerations: 999999,
    aiAds: true,
    aiLandingPages: true,
    aiScripts: true,
    exports: true,
    whiteLabel: true,
    teamMembers: true,
  },
};