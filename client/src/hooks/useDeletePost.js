import { useState } from "react"
import axios from 'axios'
import toast from 'react-hot-toast'
import useBlogStore from "../store/useBlogStore"

const useDeletePost = () => {
    const [loading, setLoading] = useState(false)
    const { setUserBlogs, userBlogs } = useBlogStore()

    const handleDeletePost = async (postId) => {
        setLoading(true)
        try {
            const res = await axios.delete(`https://full-stack-blog-app-5cen.onrender.com/api/blogs/delete/${postId}`)
            if (res?.status === 200) {
                setUserBlogs(userBlogs.filter((post) => post._id !== postId))
                toast.success("Post Deleted Successfully", {
                    duration: 3000,
                    position: "bottom-right"
                })
            }

        } catch (error) {
            console.log(error);
            toast.error("Error in Deleting the Post", {
                duration: 3000,
                position: "bottom-right"
            })
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleDeletePost }
}
export default useDeletePost