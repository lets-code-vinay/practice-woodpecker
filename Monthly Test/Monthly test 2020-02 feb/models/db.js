const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:127.0.0.1:27017/shoppingToday',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('MongoDB has been connected');
    }
    else{
        console.log('error', err);
    }
});

require('./order.model');