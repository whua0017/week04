let express=require('express');

let app=express();

app.get("/",function(req,res){
    res.send("Hello World");
});

app.get("/about",function(req,res){
    res.send("This is about page");
});



app.listen(8080);