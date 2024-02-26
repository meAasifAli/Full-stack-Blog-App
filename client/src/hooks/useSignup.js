import { useState } from "react"
import axios from 'axios'
import { useAuthUser } from "../context/AuthContext"
import toast from "react-hot-toast"

const useSignup = () => {
    const { setAuthUser } = useAuthUser()
    const [loading, setLoading] = useState(false)

    const handleSignup = async ({ username, fullname, email, password }) => {
        setLoading(true)
        if (!username || !fullname || !email || !password) {
            toast.error("All fields are required", {
                duration: 3000,
                position: "bottom-right"
            })
            return
        }
        try {
            const res = await axios.post("https://full-stack-blog-app-5cen.onrender.com/api/auth/signup", { username, fullname, email, password })
            if (res?.status === 201) {
                setAuthUser(res?.data)
                localStorage.setItem("authUser", JSON.stringify(res?.data))
                toast.success("Signup Success!!", {
                    duration: 3000,
                    position: "bottom-right"
                })
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error, {
                duration: 3000,
                position: "bottom-right"
            })

        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleSignup }
}
export default useSignup