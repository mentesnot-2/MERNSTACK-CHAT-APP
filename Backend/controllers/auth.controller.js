import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import generateToken from "../utils/generateToken.js"


export const signupUser = async (req,res) => {
    const {fullName,gender,username,password,confirmPassword} = req.body

    try {

        if (fullName === "" || username === "" || password === "" || gender === "") {
            res.status(400).json({
                error:"Please provide full credentials"
            })
        }
    
        if (password !== confirmPassword) {
            res.status(400).json({error:"Password do not match"})
        }
        const user = User.findOne({username})
    
        if (user) {
            res.status(400).json({error:"user already exist"})
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)
    
        const newUser = new User({
            fullName,
            username,
            gender,
            password:hashedPassword,
            profilePic:gender === "male" ? boyProfilePic:girlProfilePic
        })
        generateToken(newUser._id,res)
        await newUser.save()
        res.status(201).json({message:"User created successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal Server Erorro"})
    }
    
}

export const loginUser = async (req,res) => {
    try {
        const {username,password} = req.body
        const existingUser = await User.findOne({username})
        if (!existingUser) {
            res.status(400).json({error:"User does not exist"})
        }
        const isPasswordCorrect = await bcryptjs.compare(password,existingUser.password)
        if (!isPasswordCorrect) {
            res.status(400).json({error:"Password is incorrect"})
        }
        generateToken(existingUser._id,res)
        res.status(200).json({message:"User logged in successfully"})
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
}


export const logOutUser = async (req,res) => {
    try {
        res.cookie("token","",{maxAge:0})
        res.status(200).json({message:"User logged out successfully"})
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
}