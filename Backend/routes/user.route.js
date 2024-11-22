const express = require( "express");
const protectedRoute = require( "../middleware/protectRoute");
const { getUsers } = require( "../controllers/user.controller");


const router = express.Router()

router.get("/",protectedRoute, getUsers)

module.exports = router