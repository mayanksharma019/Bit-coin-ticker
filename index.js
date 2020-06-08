const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const app=express();

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var crypto=req.body.crypto;
  var fiat=req.body.fiat;
  var baseUrl="https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var finalUrl=baseUrl+crypto+fiat;
request(finalUrl,function(error,response,body){
var data=JSON.parse(body);
var price=data.last;
res.send("<h1>The current price of " + crypto+"is: "+price+fiat+"USD</h1>");

});
});

//request("url",function(error,response,body))

app.listen(3000,function(){
  console.log("port is running at 3000");
});
