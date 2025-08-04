const express = require("express");


const dbConnect = require("./db/dbConnect");
const userRouter = require("./routes/userRoutes");
const app = express();

dbConnect();

app.use(express.json()); //json->object
app.use(express.urlencoded({ extended: true }));

app.use("/user",userRouter);
//http://localhost:6000/user

app.get("/", (req, res) => {
  res.send("<h1>byeee</h1>");
});

app.listen(6000, function () {
  console.log("server is running on port 6000");
});
