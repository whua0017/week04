let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
   res.send('Welcome to FIT2095 Home Page');
});

router.get('/about', function(req, res){
   res.send('This page is about FIT2095');
});

router.get('/item/:name/:quantity/:price', function(req, res){
    let newId= Math.round(Math.random()*1000);
    let newname=req.params.name;
    let newquantity=parseInt(req.params.quantity);
    let newprice=parseInt(req.params.price);
    res.send("id:"+newId+" name:"+newname+" quantity:"+newquantity+" price:"+newprice);

 });
 

//export this router 
module.exports = router;
