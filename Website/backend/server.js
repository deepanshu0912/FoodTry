const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

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
});


app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/order", async (req, res) => {
  const { vendor, item } = req.body;

  const message = `🧾 New Order\nVendor: ${vendor}\nItem: ${item}`;

  try {
    await transporter.sendMail({
      from: EMAIL,
      to: EMAIL,
      subject: "New Order Received",
      text: message,
    });

    res.send("✅ Order received & email sent!");
  } catch (err) {
    console.error(err);
    res.send("❌ Error sending email");
  }
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
