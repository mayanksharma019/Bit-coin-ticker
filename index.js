const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const app=express();

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
//  console.log(req.body.crypto);
request(" https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD",function(error,response,body){
console.log(response.statusCode);
});
});

//request("url",function(error,response,body))

app.listen(3000,function(){
  console.log("port is running at 3000");
});
