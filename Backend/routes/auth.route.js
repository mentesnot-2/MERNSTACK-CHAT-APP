
const express = require('express');
const router = express.Router()
const {loginUser,logOutUser,signupUser} = require("../controllers/auth.controller")


router.post("/signup",signupUser)
router.post("/login",loginUser)
router.post("/logout",logOutUser)

module.exports = router