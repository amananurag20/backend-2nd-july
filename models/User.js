const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
  
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,           
    },
    mobile:{
        type:Number ,
        default: 9876123121
    }

});

const User=mongoose.model("User",userSchema);

module.exports=User;


