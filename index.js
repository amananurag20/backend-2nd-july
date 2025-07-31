const express = require("express");
const mongoose = require("mongoose");
const app = express();

//mongodb+srv://amananurag20:d4cbOLDUr6xWSJPy@cluster0.gcimphc.mongodb.net/

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://amananurag20:d4cbOLDUr6xWSJPy@cluster0.gcimphc.mongodb.net/"
    );

    console.log("db connected");
  } catch (e) {
    console.log(e);
  }
};

dbConnect();

app.use(express.json()); //json->object
app.use(express.urlencoded({ extended: true }));

app.get("/user/:id/:name", (req, res) => {
  console.log(req.params);

  res.send("dynamic route hai");
});

const m1 = (req, res, next) => {
  console.log("hi");
  req.city = "delhi";

  next();
};

app.get("/home", m1, (req, res) => {
  console.log("byee");
  console.log(req.city);
  res.send("<h1>home route</h1>");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("<h1>hello how r u</h1>");
});

app.delete("/user", (req, res) => {
  res.send("tata");
});

app.get("/", (req, res) => {
  res.send("<h1>byeee</h1>");
});

app.listen(5000, function () {
  console.log("server is running on port 5000");
});
