import { useEffect, useState } from "react"
import axios from "axios"
import toast from 'react-hot-toast'
import useBlogStore from "../store/useBlogStore"


const useFetchPosts = () => {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const { setBlogs } = useBlogStore()

    const handleGetPosts = async () => {
        setLoading(true)
        if (search) {
            setLoading(false)
        }
        try {
            const res = await axios.get(search !== "" ? `https://full-stack-blog-app-5cen.onrender.com/api/blogs/${search}` : "https://full-stack-blog-app-5cen.onrender.com/api/blogs")
            if (res.status === 200) {
                setBlogs(res?.data)
            }

        } catch (error) {
            console.log(error);
            toast.error("Error in Fetching Posts", {
                position: "bottom-right",
                duration: 3000
            })
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {

        handleGetPosts()
    }, [search])
    return { loading, search, setSearch }
}
export default useFetchPosts