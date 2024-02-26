import { useState } from "react"
import { useAuthUser } from "../context/AuthContext"
import toast from 'react-hot-toast'
import axios from "axios"

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthUser()
    const handlelogout = async () => {
        setLoading(true)
        try {
            const res = await axios.post("https://full-stack-blog-app-5cen.onrender.com/api/auth/logout")

            if (res.status === 200) {
                setAuthUser(null)
                localStorage.removeItem("authUser")
            }

        } catch (error) {
            console.log(error);
            toast.error("error in logout", {
                duration: 3000,
                position: "bottom-right"
            })
        }
        finally {
            setLoading(false)
        }
    }
    return { handlelogout, loading }
}
export default useLogout