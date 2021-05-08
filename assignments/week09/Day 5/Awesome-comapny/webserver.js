var express = require('express')
var app = express();
var path = require('path')
var mime

console.log(path.join(__dirname,'index.html'))

//app.use(express.json());

app.get ('/', function(req, res){
   console.log(req, res)// SErver related action
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/index', function(req, res){
    console.log(req, res)// SErver related action
     res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/aboutus', function(req,res){
    console.log(req,res)
    res.sendFile(path.join(__dirname,'aboutus.html'))
})
app.get('/contactus', function(req, res){
    console.log(req, res)// SErver related action
     res.sendFile(path.join(__dirname,'contactus.html'));
})

//res.json({name = 'Vinay Mauyra', id = 2})

app.post('/send', function(){
        console.log(req.body)
        res.send('request received')
})

app.listen(1234, function(){
    console.log('On server 1234');
})