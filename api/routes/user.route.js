import express from "express"
import protectedRoute from "../middlewares/protectedRoute.js"
import { getUserBlogs, updateUserInfo } from "../controllers/user.controller.js"

const router = express.Router()


router.put("/update/:id", protectedRoute, updateUserInfo)
router.get("/get", protectedRoute, getUserBlogs)


export default router