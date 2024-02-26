import { useState } from "react"
import axios from 'axios'
import toast from 'react-hot-toast'
import useBlogStore from "../store/useBlogStore"

const useUpdatePost = ({ title, content, photo }) => {
    const [loading, setLoading] = useState(false)
    const { setBlog } = useBlogStore()


    const handleUpdatePost = async (postId) => {
        setLoading(true)
        try {
            const res = await axios.put(`https://full-stack-blog-app-5cen.onrender.com/api/blogs/update/${postId}`, { title, content, photo })
            if (res?.status === 200) {
                setBlog(res?.data)
                toast.success("Post updated Success", {
                    duration: 3000,
                    position: "bottom-right"
                })
            }
        } catch (error) {
            console.log(error);
            toast.error("Error in updating the post", {
                duration: 3000,
                position: "bottom-right"
            })
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleUpdatePost }
}
export default useUpdatePost