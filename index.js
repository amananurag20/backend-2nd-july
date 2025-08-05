const express = require("express");
const nodemailer = require("nodemailer");

const dbConnect = require("./db/dbConnect");
const userRouter = require("./routes/userRoutes");
const app = express();

dbConnect();

app.use(express.json()); //json->object
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
//http://localhost:6000/user

app.post("/send-mail", async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amananurag.20@gmail.com",
      pass: "jzyv clct fevh eopc",
    },
  });

  try {

    await transporter.sendMail({
      from: "amananurag.20@gmail.com",
      to: email,
      subject: "verfication code",
      text: "your verification code is 4243",
      html: `
    <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
      <h2>Email Verification</h2>
      <p>Your verification code is:</p>
      <p style="font-size: 24px; font-weight: bold; color: #007BFF;">4243</p>
      <p>Please enter this code to verify your email address.</p>
    </div>
  `
    });

    res.json({ message: "email sent successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "something went wrong" });
  }
});

app.listen(6000, function () {
  console.log("server is running on port 6000");
});
