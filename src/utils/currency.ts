export const getCurrency = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    if (data.country_code === "IN") {
      return {
        currency: "INR",
        symbol: "₹",
        locale: "india",
      };
    }

    return {
      currency: "USD",
      symbol: "$",
      locale: "international",
    };
  } catch (error) {
    return {
      currency: "USD",
      symbol: "$",
      locale: "international",
    };
  }
};