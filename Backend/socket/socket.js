
const {Server} = require("socket.io")
const http = require("http")
const express = require("express")


const app = express();
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin: ["http://localhost:3000"],
        methods:["GET","POST"]
    },


})
io.on("connection",(socket) => {
    console.log("New Connection",socket.id);
    // socket.on("send-message",(message) => {
    //     console.log(message);
    //     io.emit("receive-message",message)
    // })
    socket.on("disconnect",() => {
        console.log("User Disconnected",socket.id);
    })

})



module.exports = {app,io,server}