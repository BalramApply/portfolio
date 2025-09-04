import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// ✅ Proper CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://portfolio-balram-indol.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// ---------------- EMAIL API -----------------
app.post("/send-email", async (req, res) => {
  const { from_name, from_email, message } = req.body;
  console.log("Incoming data:", JSON.stringify(req.body, null, 2));

  // ✅ Validation
  if (!from_name || !from_email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(from_email)) {
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${from_name}" <${from_email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${from_name}`,
      text: message,
      html: `<p>${message}</p>`
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

// ---------------- LEETCODE API -----------------
app.get("/leetcode/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query userProfile($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
            }
          }
        `,
        variables: { username },
      }),
    });

    const data = await response.json();

    if (!data.data?.matchedUser) {
      return res.json({
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
      });
    }

    const stats = data.data.matchedUser.submitStatsGlobal.acSubmissionNum;

    const totalSolved = stats.find((x) => x.difficulty === "All")?.count || 0;
    const easySolved = stats.find((x) => x.difficulty === "Easy")?.count || 0;
    const mediumSolved = stats.find((x) => x.difficulty === "Medium")?.count || 0;
    const hardSolved = stats.find((x) => x.difficulty === "Hard")?.count || 0;

    res.json({ totalSolved, easySolved, mediumSolved, hardSolved });
  } catch (error) {
    console.error("❌ Error fetching LeetCode data:", error);
    res.status(500).json({ error: "Failed to fetch LeetCode data" });
  }
});

app.get("/leetcode/:username/calendar", async (req, res) => {
  const { username } = req.params;

  const query = `
    query userCalendar($username: String!) {
      matchedUser(username: $username) {
        userCalendar {
          submissionCalendar
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    const result = await response.json();
    const submissionCalendar =
      result.data?.matchedUser?.userCalendar?.submissionCalendar || "{}";

    res.json({ submissionCalendar });
  } catch (error) {
    console.error("❌ Error fetching calendar:", error);
    res.status(500).json({ error: "Failed to fetch calendar data" });
  }
});

// ---------------- ROOT ROUTE -----------------
app.get("/", (req, res) => {
  res.send("✅ Server is running on port 5000");
});

// ---------------- START SERVER -----------------
app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});
