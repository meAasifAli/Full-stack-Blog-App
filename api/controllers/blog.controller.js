import Blog from '../models/blog.model.js'
import User from '../models/user.model.js'
import { v2 as cloudinary } from 'cloudinary'

export const createPost = async (req, res) => {
    try {
        const userId = req.user._id
        let { title, content, photo, category, createdBy } = req.body

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        if (photo) {
            const res = await cloudinary.uploader.upload(photo)
            photo = res.secure_url
        }

        const post = new Blog({
            title,
            content,
            photo,
            category,
            createdBy
        })

        await post.save()
        await User.findByIdAndUpdate(userId, { $push: { blogs: post._id } }, { new: true })
        res.status(201).json(post)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error in Creating Post" })
    }
}

export const getAllPosts = async (req, res) => {
    try {

        const posts = await Blog.find().populate({
            path: "createdBy",
            select: "username"
        }).sort({ createdAt: -1 })
        if (!posts) {
            return res.status(200).json([])
        }
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error in Fetching Posts" })
    }
}

export const getSearchedPosts = async (req, res) => {
    try {
        const { query } = req.params;
        const posts = await Blog.find({ title: { $regex: query, $options: 'i' } }).populate({
            path: "createdBy",
            select: "username"
        }).sort({ createdAt: -1 })
        if (!posts) {
            return res.status(200).json([])
        }
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error in Fetching Posts" })
    }
}

export const getSingleBlog = async (req, res) => {
    try {
        const userId = req.user._id
        const { id } = req.params

        const post = await Blog.findOne({ _id: id }).populate({
            path: "createdBy",
            select: "username"
        }).exec()

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        if (!post) {
            res.status(200).json({})
        }

        res.status(200).json(post)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error in Fetching Post" })
    }
}


export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const userId = req.user._id

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        const deletedPost = await Blog.findOneAndDelete({ _id: id, createdBy: userId })

        res.status(200).json(deletedPost)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error in deleting the Post" })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { title, content, photo } = req.body;
        const { id: postId } = req.params;

        const userId = req.user._id

        // Check if the post exists
        const post = await Blog.findById(postId)

        if (post.createdBy.toString() !== userId.toString()) {
            return res.status(401).json({ error: "Unauthorized to update the post" })
        }

        await post.updateOne({ title, content, photo }, { new: true })

        res.status(200).json(post)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error in updating the Post" })
    }
}