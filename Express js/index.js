var express=require("express");
var getMethod=express();

getMethod.get('/',function(req,res){
    res.sendFile(__dirname +"/index.html");
});
// submit button action
getMethod.get('/home',function(req,res){
  res.send('<h1>Welcome'+req.query['username']);

});
getMethod.listen(5000);