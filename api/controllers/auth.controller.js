import User from "../models/user.model.js";
import genTokenSetCookie from "../utils/genToken.js";
import bcrypt from 'bcryptjs'






export const signupUser = async (req, res) => {
    try {
        const { username, email, fullname, password } = req.body

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }


        const genSalt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, genSalt)

        const newUser = new User({ username, fullname, email, password: hashedPass })
        await newUser.save()
        if (newUser) {
            genTokenSetCookie(newUser._id, res)

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                fullname: newUser.fullname,
                email: newUser.email,
                profilePic: newUser.profilePic,
                blogs: newUser.blogs

            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            genTokenSetCookie(user._id, res)
            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                fullname: user.fullname,
                profilePic: user.profilePic,
                blogs: user.blogs
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" })
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 1 })
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" })
    }
}
