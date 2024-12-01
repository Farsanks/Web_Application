const express = require("express");

const router = express.Router();




const userdata = [
    {id:1,name:"abhijith",company:"google"},

    {id:2,name:"abhi",company:"facebook"},

    {id:3,name:"Tp",company:"microsoft"},

    {id:3,name:"rahul",company:"microsoft"}
]

router.get("/user",(req,res)=>{

    const query =parseInt(req.query.id);
    const userName =(req.query.name);
    const filtereduserdata =userdata.filter((data)=>{
        if(query && userName){
         return   data.id === query && data.name === userName
        }else{
            return  data;
        }
    })
    res.json(filtereduserdata);

      res.json(filtereduserdata);
});

router.post("/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const userName = req.params.name;
    const filtereduserdata =userdata.filter((data=>data.id === userId))
        res.json(filtereduserdata);
    });


    
    



module.exports =router;