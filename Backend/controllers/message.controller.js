// import Conversation from "../models/conversation.model"
// import Message from "../models/message.model"

const Conversation = require("../models/conversation.model")
const Message = require("../models/message.model")


const sendMessage = async (req,res) => {
    try {
        const {id:receiverID} = req.params
        const senderID = req.user._id
        const {message} = req.body

        let conversation = await Conversation.findOne({
            participants:{$all:[senderID,receiverId]}
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants:[senderID,receiverID]
            })
        }
        const newMessage =  new Message({
            senderID,
            receiverID,
            message
        })
        if (!newMessage) {
            return res.status(500).json({error:"Message not sent"})
        }
        conversation.messages.push(newMessage._id)
        await Promise.all([newMessage.save(),conversation.save()])
        return res.status(200).json(newMessage)

    } catch (error) {
        return res.status(500).json({error:"Internal Server Error"})
    }
}

const getMessage = async (re,res) => {
    try {
        const {id:userToChatId} = req.params.id
        const senderID = req.user._id
        const conversation = await Conversation.findOne({
            participants:{$all:[senderID,userToChatId]}
        }).populate("messages")
        res.status(200).json(conversation.messages)
    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
}

module.exports = {
    sendMessage,
    getMessage
}