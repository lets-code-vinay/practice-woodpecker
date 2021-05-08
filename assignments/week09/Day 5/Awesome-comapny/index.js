var express = require('express');
var app = express();
var path = require('path');

//middleware
//app.use(express.json);
//console.log(path.join(__dirname, 'index.html'));
//console.log(path);

app.get('/', function(req,res){
    console.log(req,res);
    res.send('<h1> hello vinay </h1>');
    //res.json({name:"Vinay", id: 2})
});
/*
app.get('/aboutus', function(req, res){
    console.log(req,res);
    res.sendFile(req,'./aboutus.html');
});
app.get('/contactus', function(req, res){
    console.log(req, res);
    console.log("This is about page");
})
*/


app.listen(4040, function(){
    console.log('Server is running on 4040');
})