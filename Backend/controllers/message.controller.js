// import Conversation from "../models/conversation.model"
// import Message from "../models/message.model"

const Conversation = require("../models/conversation.model")
const Message = require("../models/message.model")


const sendMessage = async (req,res) => {
    try {
        const {id:recieverID} = req.params
        const senderID = req.user._id
        const {message} = req.body

        let conversation = await Conversation.findOne({
            participants:{$all:[senderID,recieverID]}
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants:[senderID,recieverID]
            })
        }
        const newMessage =  new Message({
            senderID,
            recieverID,
            message
        })
        if (!newMessage) {
            return res.status(500).json({error:"Message not sent"})
        }
        conversation.messages.push(newMessage._id)
        await Promise.all([newMessage.save(),conversation.save()])
        return res.status(200).json(newMessage)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

const getMessage = async (req,res) => {
    try {
        const {id:userToChatId} = req.params
        const senderID = req.user._id
        const conversation = await Conversation.findOne({
            participants:{$all:[senderID,userToChatId]}
        }).populate("messages")
        if (!conversation) {
            return res.status(404).json([])
        }
        res.status(200).json(conversation.messages)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
    sendMessage,
    getMessage
}