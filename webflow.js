export default async function handler(req, res) {
  if (req.method === "POST") {
    const secret = req.headers["webflow-signature"]; // Webflow sends signature here

    // ✅ verify secret if needed (depends on Webflow's docs)
    if (secret !== process.env.WEBFLOW_SECRET_KEY) {
      return res.status(401).json({ error: "Invalid secret" });
    }

    // handle the form submission data
    console.log("Form submission:", req.body);

    // send to Insyte or wherever
    // await fetch("https://insyte-api-endpoint.com", { method: "POST", body: JSON.stringify(req.body) });

    return res.status(200).json({ success: true });
  }

  res.status(405).end(); // Method not allowed
}
