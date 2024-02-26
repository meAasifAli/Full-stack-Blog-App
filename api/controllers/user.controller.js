import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";
import { v2 as cloudinary } from 'cloudinary'

export const updateUserInfo = async (req, res) => {
    try {
        let { username, email, fullname } = req.body;
        let { profilePic } = req.body
        const userId = req.user._id

        let user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: "User doesn't exist" })
        }

        if (req.params.id !== userId.toString()) {
            return res.status(400).json({ error: "You cannot update other user's profile" });
        }

        if (profilePic) {
            const res = await cloudinary.uploader.upload(profilePic)
            profilePic = res.secure_url
        }

        await user.updateOne({ username, email, fullname, profilePic }, { new: true })

        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const getUserBlogs = async (req, res) => {
    try {
        const userId = req.user._id
        const posts = await User.findById(userId).populate({
            path: 'blogs',
            model: Blog
        })

        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Internal Server Error"
        })
    }
}