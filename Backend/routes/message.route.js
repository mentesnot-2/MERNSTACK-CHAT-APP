const express = require("express")
const {getMessage,sendMessage} = require("../controllers/message.controller")
const protectRoute = require("../middleware/protectRoute")
const router = express.Router()

router.post("/send/:id",protectRoute,sendMessage)
router.get("/",protectRoute,getMessage)

module.exports = router