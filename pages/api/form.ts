import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
    const userEmail = JSON.parse(data).email;

    if (!userEmail || userEmail.trim() === "" || !userEmail.includes("@")) {
      res
        .status(201)
        .json({ status: false, message: "Please provide a valid email" });
      return;
    }
    res.status(201).json({ status: true, message: "Subscribed!" });
  }
}
