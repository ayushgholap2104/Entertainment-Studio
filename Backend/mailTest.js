require("dotenv").config();
const nodemailer = require("nodemailer");

async function test() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP Verified");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test",
      text: "Hello from Nodemailer",
    });

    console.log("Email sent");
  } catch (err) {
    console.error(err);
  }
}

test();