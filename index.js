const express = require("express");
const mongoose = require("mongoose");
const User= require("./models/User");
const app = express();



const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://amananurag20:d4cbOLDUr6xWSJPy@cluster0.gcimphc.mongodb.net/mernstack"
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



app.get("/home", (req, res) => {
  console.log("byee");
  console.log(req.city);
  res.send("<h1>home route</h1>");
});

app.post("/user", async(req, res) => {

  const {email,password,mobile,name}= req.body;

  try{
    const user= await User.create({
      email:email,
      password,
      mobile,
      name
    });

    res.json({success:true,user})

  }catch(e){
    console.log(e);
    res.json({success:false,message:"something went wrong"})
  }



 

  
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
