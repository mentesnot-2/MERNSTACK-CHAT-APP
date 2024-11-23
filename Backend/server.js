const express = require('express');
const { json } = require('express');
require("dotenv").config()
const connectToMongoDb = require("./db/connectToMongoDb")
const cookieParser = require('cookie-parser');
const cors = require('cors');

const {app,server,io} = require("./socket/socket")

const authRoutes = require("./routes/auth.route")
const messageRoutes = require("./routes/message.route")
const userRoutes = require("./routes/user.route")

const PORT = process.env.PORT 
app.use(cookieParser())
app.use(json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`);
    }
);