
const express= require("express");
const app=express();
const bodyParser= require("body-parser");
app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));
var item="";
var items=["Buying Foods from SuperMarket", "Playing PS5 games","Swimming with  My Friends"];
 var options = {
    weekday :"long",
    day:"numeric",
    month:"long"
 };

 app.get("/",function(req,res){
    var today= new Date();
    var day=today.toLocaleDateString("en-US", options);
    
 res.render("lists", {kindofDay :day, listofitems:items});
 })


 app.post("/",function(req,res){
    var item=req.body.tasks;
    items.push(item);
    res.redirect("/");
    
 })

 app.listen(process.env.PORT || 3000 ,function(){
    console.log("The server is running on the port 3000");
 })

