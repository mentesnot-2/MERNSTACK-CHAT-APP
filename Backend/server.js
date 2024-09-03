import express, { json } from 'express';
import { config } from "dotenv";
import connectToMongoDb from './db/connectToMongoDb.js';
const app = express();
import authRoutes from "./routes/auth.route.js"
config()

const PORT = process.env.PORT 
app.use(json());

app.use("/api/auth",authRoutes)

app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`);
    }
);