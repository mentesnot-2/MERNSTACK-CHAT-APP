import express, { json } from 'express';
import { config } from "dotenv";
import connectToMongoDb from './db/connectToMongoDb.js';
import cookieParser from 'cookie-parser';

const app = express();

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"

config()
const PORT = process.env.PORT 
app.use(cookieParser())
app.use(json());

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/user",userRoutes)

app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`);
    }
);