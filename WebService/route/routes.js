const express=require("express");
const router=express.Router();
const connection=require('../db/dbconnect')

router.get("/products",(req,resp)=>{
    connection.query("select * from products",(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })
})

router.get("/products/product/:pid",(req,resp)=>{
    connection.query("select * from products where prodId=?",[req.params.pid],(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err));
        }
        else
        {
            resp.send(data);
        }
    })
})

router.post("/products/product/:pid",(req,resp)=>{
    var a=req.body.prodId;
    var b=req.body.prodName;
    var c=req.body.price;
    connection.query("insert into products values (?,?,?) ",[a,b,c],(err,result)=>{
        if(err)
        {
            resp.status(500).send("data not inserted"+JSON.stringify(err));
        }
        else
        {
            resp.send("data inserted succesfully")
        }
        
    })
})

router.put("/products/product/:pid",(req,resp)=>{
    var a=req.body.prodId;
    var b=req.body.prodName;
    var c=req.body.price;
    connection.query("update products set prodName=?,price=? where prodId=?",[b,c,a],(err,result)=>{
        if(err)
        {
            resp.status(500).send("data not updated"+JSON.stringify(err));
        }
        else
        {
            resp.send("data updated succesfully")
        }
    })
   
})

router.delete("/products/product/:pid",(req,resp)=>{
    connection.query("delete from products where prodId=?",[req.params.pid],(err,result)=>{
        if(err)
        {
            resp.status(500).send("data not deleted"+JSON.stringify(err))
        }
        else
        {
            resp.send("data deleted successfully");
        }
    })
})

module.exports=router;

