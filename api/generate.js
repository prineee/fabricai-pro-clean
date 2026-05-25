export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({
      success: true,
      method: req.method,
    });
  }

  return res.status(200).json({
    success: true,
    method: "POST",
    received: req.body,
    result: "AI API WORKING SUCCESSFULLY",
  });
}