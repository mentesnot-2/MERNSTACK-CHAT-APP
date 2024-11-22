const express = require('express');
const { json } = require('express');
const {config} = require("dotenv")
const connectToMongoDb = require("./db/connectToMongoDb")
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const authRoutes = require("./routes/auth.route")
const messageRoutes = require("./routes/message.route")
const userRoutes = require("./routes/user.route")

config()
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

app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`);
    }
);