const mongoose = require("mongoose")
const Schema = mongoose.Schema

var threadSchema = new Schema(
    {
      question: {
        type: String,
        required: true,
      },
      user:{
        type:Schema.Types.ObjectId,
          ref:"user"
      },
      forum:{
          type:Schema.Types.ObjectId,
          ref:"forum"
      }
    },
    { timestamps: true }
  );


  var Thread = mongoose.model("thread", threadSchema);
  
  module.exports = Thread;