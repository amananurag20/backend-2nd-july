const express= require("express");
const app= express();


app.use(express.json());//json->object
app.use(express.urlencoded({extended:true}));

app.get("/user/:id/:name",(req,res)=>{ 
    
    console.log(req.params)
        
    res.send("dynamic route hai")
});

app.get("/home",(req,res)=>{
   
    console.log(req.query)
    res.send("<h1>home route</h1>")
})

app.post("/user",(req,res)=>{ 
    console.log(req.body)  
    res.send("<h1>hello how r u</h1>")
});

app.delete("/user",(req,res)=>{   
    res.send("tata")
});




app.get("/",(req,res)=>{

    res.send("<h1>byeee</h1>")
})


app.listen(5000,function(){
    console.log("server is running on port 5000")
})