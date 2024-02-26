import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { v2 as cloudinary } from 'cloudinary'

import connectDB from './config/db.js'

import authRoutes from './routes/auth.route.js'
import blogRoutes from './routes/blog.route.js'
import userRoutes from './routes/user.route.js'

const __dirname = path.resolve()

dotenv.config()

const app = express()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})




app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: process.env.CLIENT_URL, credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(cookieParser())

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port : ${process.env.PORT}`);
})

//db configuration

await connectDB()


//routes

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/blogs", blogRoutes)

app.use(express.static(path.join(__dirname, '/client/dist')))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})