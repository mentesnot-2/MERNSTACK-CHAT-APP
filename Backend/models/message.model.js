const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    recieverID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    message:{
        type:String,
        required:true
    },
    // isRead:{
    //     type:Boolean,
    //     default:false
    // }
},{timestamps:true})

const Message = mongoose.model("Message",messageSchema);
module.exports = Message;
