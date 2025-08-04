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

app.get("/user",async(req,res)=>{

  try{
    const users= await User.find();
    res.json({success:true,users});

  }catch(e){
    console.log(e);
    res.json({success:false,message:"something went wrong"})
  }
})


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
    res.json({success:false,message:"something went wrong"});
  } 

  
});

app.patch("/user/:id", async(req, res) => {

  try{

    const id=req.params.id;
    const user= await User.findByIdAndUpdate(id,req.body,{new:true});
    
    res.json({success:true,user});

  }catch(e){
    console.log(e);

    
  }
})

app.delete("/user/:id", async(req, res) => {
  
  try{
    const id=req.params.id;
    const user= await User.findByIdAndDelete(id);
    res.json({success:true,user});
  }catch(e){
  console.log(e);
  res.json({success:false,message:"something went wrong"});
  }
});

app.get("/", (req, res) => {
  res.send("<h1>byeee</h1>");
});

app.listen(6000, function () {
  console.log("server is running on port 6000");
});
