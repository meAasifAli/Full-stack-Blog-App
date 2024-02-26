import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    blogs: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Blog",
        default: []
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User