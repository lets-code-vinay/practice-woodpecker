const mongoose = require("mongoose")
const Schema = mongoose.Schema

var replySchema = new Schema(
    {
      reply: {
        type: String,
        required: true,
      },
      thread:{
          type:Schema.Types.ObjectId,
          ref:"thread"
      }
    },
    { timestamps: true }
  );


  var Reply = mongoose.model("reply", replySchema);
  
  module.exports = Reply;