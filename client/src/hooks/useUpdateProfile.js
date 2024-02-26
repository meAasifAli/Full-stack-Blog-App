import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from "axios"
import { useAuthUser } from '../context/AuthContext'
const useUpdateProfile = () => {
    const { authUser, setAuthUser } = useAuthUser()
    const [loading, setLoading] = useState(false)

    const handleUpdateProfile = async ({ username, fullname, email, profilePic }) => {
        setLoading(true)

        try {
            const res = await axios.put(`http://localhost:5000/api/users/update/${authUser._id}`, {
                username, fullname, email, profilePic
            })

            if (res.status === 200) {
                setAuthUser(res?.data)
                localStorage?.setItem("authUser", JSON.stringify(res?.data))
                toast.success("Profile Updated Successfully!!", {
                    duration: 3000,
                    position: "bottom-right"
                })
            }
        } catch (error) {
            console.log(error);
            toast.error("Error in Updating the profile!!", {
                duration: 3000,
                position: "bottom-right"
            })
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, handleUpdateProfile }
}
export default useUpdateProfile