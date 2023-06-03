const mysql=require("mysql");

var mysqlconnection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"admin@123",
    database:"aniket",
    port:3306
})
mysqlconnection.connect((err)=>{
    if(err)
    {
        console.log("connection failed"+JSON.stringify(err))
    }
    else
    {
        console.log("connection done")
    }
})

module.exports=mysqlconnection;