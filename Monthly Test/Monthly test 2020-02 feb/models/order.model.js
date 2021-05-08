const mongoose = require('mongoose');

var orderSchema =  mongoose.Schema({
    order:{  type:String   },
    total:{ type:String    } 
});
mongoose.model('Order', orderSchema);