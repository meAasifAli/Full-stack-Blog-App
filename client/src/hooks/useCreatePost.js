import { useState } from "react"
import axios from "axios"
import toast from 'react-hot-toast'


const useCreatePost = () => {
    const [loading, setLoading] = useState(false)
    const handleCreatePost = async ({ title, content, photo, category, createdBy }) => {
        if (!title || !content || !photo || !category || !createdBy) {
            toast.error("All Fields are Required", {
                duration: 3000,
                position: "bottom-right"
            })
        }
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:5000/api/blogs/create', { title, content, photo, category, createdBy })
            if (res.status === 201) {
                toast.success("Post Created Successfully", {
                    duration: 3000,
                    position: "bottom-right"
                })
            }
        } catch (error) {
            console.log(error);
            toast.error("Error in Creating Post", {
                duration: 3000,
                position: "bottom-right"
            })
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleCreatePost }
}
export default useCreatePost