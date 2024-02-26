import { useState } from "react"
import { useAuthUser } from "../context/AuthContext"

import useGetUserBlogs from '../hooks/useGetUserBlogs'
import useBlogStore from "../store/useBlogStore";
import useDeletePost from "../hooks/useDeletePost";
import ProfileModal from "../components/ProfileModal";
import ProfileTabBlogs from "../components/ProfileTabBlogs"
import useUpdatePost from "../hooks/useUpdatePost";


const UserProfile = () => {
    const { authUser } = useAuthUser()
    const [inputs, setInputs] = useState({
        username: authUser.username,
        fullname: authUser.fullname,
        email: authUser.email,

    })
    const { handleUpdatePost, loading: updatePostLoader } = useUpdatePost(inputs)
    const { handleDeletePost } = useDeletePost()
    useGetUserBlogs()
    const { userBlogs } = useBlogStore()


    return (
        <div className="h-screen w-full px-2 sm:px-0 sm:w-[85%] mx-auto mt-8 flex flex-col gap-4 sm:gap-8">
            <div className="flex flex-row p-2 gap-6 justify-center items-center ">
                <div className="avatar">
                    <div className=" w-36 rounded-full">
                        <img src={authUser?.profilePic} />
                    </div>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2 w-full">
                    <h1 className="text-md font-semibold">{authUser?.fullname}</h1>
                    <h1 className="text-sm font-semibold">{authUser?.username}</h1>
                    <p className="text-gray-500 text-sm font-semibold">{userBlogs?.length} &middot; blogs</p>

                    <ProfileModal
                        inputs={inputs}
                        setInputs={setInputs}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-start">
                <h2 className="text-lg font-bold text-center bg-blue-700 text-white p-2 rounded-lg">Blog List</h2>
            </div>
            <div className="overflow-x-auto">
                <ProfileTabBlogs handleDeletePost={handleDeletePost} updatePostLoader={updatePostLoader} handleUpdatePost={handleUpdatePost} userBlogs={userBlogs} />
            </div>
        </div>
    )
}
export default UserProfile