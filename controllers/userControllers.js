const User = require("../models/User");
const bcrypt= require("bcrypt");

const registerUser=async(req, res) => {

  const {email,password,mobile,name}= req.body;

  if(!email || !password ){
    return res.json({success:false,message:"all fields are required"})
  }

  try{

    const existingUser= await User.findOne({email});
    if(existingUser){
      return res.json({success:false,message:"user already exists"})
    }
     
    const hashpassword= await bcrypt.hash(password,10);
    console.log(hashpassword)

    const user= await User.create({
      email:email,
      password:hashpassword,
      mobile,
      name
    });

    res.json({success:true,user})

  }catch(e){
    console.log(e);
    res.json({success:false,message:"something went wrong"});
  } 

  
}


const deleteUser=async(req, res) => {
  
  try{
    const id=req.params.id;
    const user= await User.findByIdAndDelete(id);
    res.json({success:true,user});
  }catch(e){
  console.log(e);
  res.json({success:false,message:"something went wrong"});
  }
}

const updateUser=async(req, res) => {

  try{

    const id=req.params.id;
    const user= await User.findByIdAndUpdate(id,req.body,{new:true});
    
    res.json({success:true,user});

  }catch(e){
    console.log(e);
    
  }
}


const getAllUsers=async(req,res)=>{

  try{
    const users= await User.find();
    res.json({success:true,users});

  }catch(e){
    console.log(e);
    res.json({success:false,message:"something went wrong"})
  }
}

module.exports={registerUser,deleteUser, updateUser,getAllUsers}