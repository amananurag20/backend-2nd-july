const express = require("express");
const cors = require('cors');

const dbConnect = require("./db/dbConnect");
const userRouter = require("./routes/userRoutes");


const app = express();

dbConnect();

app.use(express.json()); //json->object
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin:true }));



app.use("/user", userRouter);
//http://localhost:6000/user



app.listen(8000, function () {
  console.log("server is running on port 6000");
});
