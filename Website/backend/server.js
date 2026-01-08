const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL = "dbissu2511@gmail.com";
const EMAIL_PASS = "lqeilcldqephvuhf";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000,
});



app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/order", async (req, res) => {
  const { vendor, item } = req.body;

  try {
    const response = await resend.emails.send({
      from: "FoodieHub <onboarding@resend.dev>",
      to: ["dbissu2511@gmail.com"],
      subject: "New Order Received",
      text: `🧾 New Order\nVendor: ${vendor}\nItem: ${item}`,
    });

    console.log("✅ Email sent:", response);
    res.send("Order received & email sent!");
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).send("Error sending email");
  }
});


app.listen(3000, () => console.log("🚀 Server running on port 3000"));
