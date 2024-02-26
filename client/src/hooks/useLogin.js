import { useState } from "react"
import axios from 'axios'
import { useAuthUser } from "../context/AuthContext"
import toast from 'react-hot-toast'

const useLogin = () => {
    const { setAuthUser } = useAuthUser()
    const [loading, setLoading] = useState(false)
    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        if (!email || !password) {
            toast.error("All fields are required", {
                duration: 3000,
                position: "bottom-right"
            })
            return
        }
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password })
            if (res?.status === 200) {
                setAuthUser(res?.data)
                localStorage.setItem("authUser", JSON.stringify(res?.data))
                toast.success("Login Success!!", {
                    duration: 3000,
                    position: "bottom-right"
                })
            }
        } catch (error) {
            console.log(error);
            toast.error("error in login", {
                duration: 3000,
                position: "bottom-right"
            })
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleLogin }
}
export default useLogin