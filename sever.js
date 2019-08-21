let express=require('express');
let app=express();
let router = require('./router.js');


app.use('/', router);

/*app.get("/",function(req,res){
    res.send("Hello World");
});

app.get("/wiki/:keyword/fit2095/:id",function(req,res){
    console.log(req.url);
    console.log(req.params);
});

app.get("/report",function(req,res){
    console.log(req.url);
    console.log(req.query);

});

app.get("/about",function(req,res){
    res.send("This is about page");
});*/

app.listen(8080);