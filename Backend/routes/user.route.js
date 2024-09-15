import express from "express";
import protectedRoute from "../middleware/protectRoute";
import { getUsers } from "../controllers/user.controller";


const router = express.Router()

router.get("/",protectedRoute, getUsers)

export default router