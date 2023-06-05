const mysql=require("mysql");

const mysqlconnection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"admin@123",
    port:3306,
    database:"aniket"
})

mysqlconnection.connect((err)=>{
    if(err)
    {
        console.log("conncetion failed"+JSON.stringify(err));
    }
    else
    {
        console.log("connected to database Succesfully");
    }
})

module.exports=mysqlconnection;