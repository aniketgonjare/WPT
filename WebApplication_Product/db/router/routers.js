const express=require("express")
const router=express.Router();
const connection=require("../db/dbConnection")

router.get("/product",function(req,resp){
    connection.query("select * from products",(err,data,fiels)=>{
        if(err)
        {
            resp.status(500).send("no data found "+JSON.stringify(err));
        }
        else
        {
            resp.render("index",{productData:data});
        }
    })
})

router.get("/submit-form",(req,resp)=>{
    resp.render("add-Product");
})

router.post("/insertproduct",(req,resp)=>{
    var id=req.body.id;
    var name=req.body.name;
    var pr=req.body.pr;
    //console.log(req.query.prodId)
   connection.query("insert into products values(?,?,?)",[id,name,pr],(err,result)=>{
   
        if(err)
        {
            resp.status(500).send("data not added"+JSON.stringify(err));
        }
        else
        {
            resp.redirect("/product");
        }
    })
})

router.get("/edit/:ff",(req,resp)=>{
    console.log("prodId ",req.params.ff)
    connection.query("select * from products where prodId=?",[req.params.ff],(err,data,field)=>{
        if(err)
        {
            resp.status(500).send("data not added"+JSON.stringify(err))
        }
        else
        {
            resp.render("update-product",{prod:data[0]});
        }
    })

})

router.post("/update-product1",(req,resp)=>{
    var id=req.body.id;
    var name=req.body.name;
    var pr=req.body.pr;

    connection.query("update products set prodName=? ,price=? where prodId=?",[name,pr,id],(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("updation failed something is wrong"+JSON.stringify(err))
        }
        else
        {
            resp.redirect("/product");
        }
    })
})

router.get("/delete/:dd",(req,resp)=>{
    connection.query("delete from products where prodId=?",[req.params.dd],(err,data,field)=>{
        if(err)
        {
            resp.status(500).send("deletion failed"+JSON.stringify(err))
        }
        else
        {
            resp.redirect("/product");
        }
    })
})

module.exports=router;