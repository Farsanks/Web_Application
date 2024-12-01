const express = require("express");

const router = express.Router();


const userArray =[];

router.post("/adduser",(req,res)=>{
    
    userArray.push(req.bod );
    console.log(userArray);

   res.json("Data has been added sucessfully");
});

router.get("/displayuser",(req,res)=>{
    
   res.json(userArray);
});

module.exports=router;
