import express from "express"
import protectedRoute from "../middlewares/protectedRoute.js"
import { createPost, deletePost, getAllPosts, getSearchedPosts, getSingleBlog, updatePost } from "../controllers/blog.controller.js"

const router = express.Router()

router.post("/create", protectedRoute, createPost)
router.get("/", getAllPosts)
router.get("/:query", getSearchedPosts)
router.get("/single/:id", protectedRoute, getSingleBlog)
router.delete("/delete/:id", protectedRoute, deletePost)
router.put("/update/:id", protectedRoute, updatePost)
export default router