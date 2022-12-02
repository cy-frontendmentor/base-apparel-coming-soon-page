import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
    const userEmail = JSON.parse(data).email;
    console.log(userEmail);
    if (!userEmail || userEmail.trim() === "" || !userEmail.includes("@")) {
      res
        .status(201)
        .json({ status: false, message: "Invalid email address." });
      return;
    }
    res.status(201).json({ status: true, message: "Registered!" });
  }
}
