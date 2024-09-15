import User from "../models/user.model";


export const getUsers = async (req,res) => {
    try {
        const loggedInUser = req.user._id
        const filteredUsers = await User.find({_id:{$ne:loggedInUser}}).select("-password")
        res.status(200).json(filteredUsers)

    } catch (error) {
        return res.status(500).json({error:"Internal server error"})
    }
};
