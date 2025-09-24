export default async function handler(req, res) {
  if (req.method === "POST") {
    const secret = req.headers["webflow-signature"]; 

    if (secret !== process.env.WEBFLOW_SECRET_KEY) {
      return res.status(401).json({ error: "Invalid secret" });
    }

    console.log("Form submission:", req.body);

    return res.status(200).json({ success: true });
  }

  res.status(405).end(); // Method not allowed
}
