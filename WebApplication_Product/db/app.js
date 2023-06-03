//imported all files
const express=require("express");
const app=express();
const path=require("path");
const bodyparser=require("body-parser");
const routes=require("./router/routers")

// adding middlewares
app.use(bodyparser.urlencoded({extended:false}));

//setting paths
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//add url handlers
app.use("/",routes)

//start the server
app.listen(3001,function(){
    console.log("server started at port 3001");
})

//this will help to use setting in app in the router
module.exports=app;
