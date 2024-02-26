import jwt from 'jsonwebtoken'
const genTokenSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "strict"

        })
        return token
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" })
    }
}

export default genTokenSetCookie