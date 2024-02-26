import { useEffect, useState } from "react"
import toast from 'react-hot-toast'
import axios from 'axios'
import useBlogStore from "../store/useBlogStore"

const useFetchPost = (id) => {
    const { setBlog } = useBlogStore()
    const [loading, setLoading] = useState(false)
    const fetchSinglePost = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`http://localhost:5000/api/blogs/single/${id}`)
            if (res.status === 200) {
                setBlog(res.data)
            }

        } catch (error) {
            console.log(error);
            toast.error("Error in Fetching the Post", {
                duration: 3000,
                position: "bottom-right"
            })
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchSinglePost()
    }, [])

    return { loading }
}
export default useFetchPost