export default async function handler(req, res) {
  if (req.method === "POST") {
    const secret = req.headers["webflow-signature"]; 

    if (secret !== "ea6c88be8c0ec3257007bf71410f08cd9ab9a1487377a7f4a0e21803063c086c") {
      return res.status(401).json({ error: "Invalid secret" });
    }

    console.log("Form submission:", req.body);

    return res.status(200).json({ success: true });
  }

  res.status(405).end(); // Method not allowed
}
