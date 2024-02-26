import { FaImages } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { useAuthUser } from "../context/AuthContext"
import usePreviewImg from "../hooks/usePreviewImg"
import useUpdateProfile from "../hooks/useUpdateProfile"


const ProfileModal = ({ inputs, setInputs }) => {
    const { authUser } = useAuthUser()

    const { handleImageChange, imgUrl } = usePreviewImg()
    const { handleUpdateProfile, loading } = useUpdateProfile()



    const handleClose = () => {
        document.getElementById("my_modal_1").close()
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        await handleUpdateProfile({ ...inputs, profilePic: imgUrl })
        handleClose()
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Edit Profile</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="font-bold text-lg">Edit Profile</h3>
                        <RxCross2 onClick={handleClose} />
                    </div>
                    <form onSubmit={handleSubmit} method="dialog" className="modal-backdrop flex flex-col gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input
                                value={inputs?.email}
                                onChange={(ev) => setInputs({ ...inputs, email: ev.target.value })}
                                type="email"
                                className="grow text-black"
                                placeholder="Email"

                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input
                                value={inputs.username}
                                onChange={(ev) => setInputs({ ...inputs, username: ev.target.value })}
                                type="text"
                                className="grow text-black"
                                placeholder="Username" />
                        </label>
                        <label>
                            <FaImages color="blue" />
                            <input type="file" className="hidden" onChange={handleImageChange} />
                            <div className="flex justify-center items-center">
                                {
                                    imgUrl || authUser?.profilePic ? <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={imgUrl || authUser.profilePic} />
                                        </div>
                                    </div> : ""
                                }
                            </div>

                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input
                                value={inputs.fullname}
                                onChange={(ev) => setInputs({ ...inputs, fullname: ev.target.value })}
                                type="text"
                                className="grow text-black"
                                placeholder="Fullname" />
                        </label>

                        <button type="submit" className="btn" >
                            {
                                loading ? <span className="loading loading-spinner"></span> : "update"
                            }</button>
                    </form>
                </div>

            </dialog>
        </div>

    )
}
export default ProfileModal