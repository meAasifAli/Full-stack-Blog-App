import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    }
}, { timestamps: true })

const Blog = mongoose.model("Blog", blogSchema)
export default Blog