import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuthUser } from '../context/AuthContext'
import useLogout from '../hooks/useLogout'
import { ImBlogger } from "react-icons/im";


const Header = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { authUser } = useAuthUser()
    const { loading, handlelogout } = useLogout()
    const handleClick = async () => {
        await handlelogout()
    }
    const handleNavigate = () => {
        if (pathname === "/signup") {
            navigate("/login")
        }
        else {
            navigate("/signup")
        }
    }
    return (
        <div className="bg-blue-700">
            <div className=" flex items-center justify-between w-[85%] mx-auto h-[70px]">
                <div className='flex items-center gap-2' onClick={() => navigate("/")}>
                    <p className='bubble'><ImBlogger color='white' /></p>
                    <h2 className="text-xl font-medium text-white cursor-pointer" >Blogger.com</h2>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                    <p className="text-white cursor-pointer hover:opacity-60 font-medium" onClick={() => navigate("/blogs")}>Blogs</p>
                    <p className="text-white cursor-pointer hover:opacity-60 font-medium" onClick={() => navigate("/write")}>Write</p>
                </div>
                {
                    authUser ? <div>
                        <div className="drawer z-10">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" >
                                    <div className="avatar">
                                        <div className="w-8 rounded-full ring ring-red-700 ring-offset-base-100 ring-offset-2">
                                            <img src={authUser.profilePic} alt="" />
                                        </div>
                                    </div>

                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-4 flex justify-between">
                                    <div>
                                        <li>
                                            <Link to={"/profile"} className='flex flex-row items-center gap-4'>
                                                <div className="avatar">
                                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={authUser.profilePic} alt="" />
                                                    </div>
                                                </div>
                                                <p className='text-lg  font-bold'>Profile</p>
                                            </Link>
                                        </li>
                                        <div className="divider"></div>
                                        <li>
                                            <p className="text-lg font-bold" onClick={() => navigate("/about")}>About</p>
                                        </li>

                                        <li>
                                            <p className="text-lg font-bold" onClick={() => navigate("/contact")}>Contact</p>
                                        </li>
                                        <li className='sm:hidden'>
                                            <p className="text-lg font-bold" onClick={() => navigate("/blogs")}>Blogs</p>
                                        </li>
                                        <li className='sm:hidden'>
                                            <p className="text-lg font-bold" onClick={() => navigate("/write")}>Write</p>
                                        </li>
                                    </div>
                                    <div>
                                        <li><button onClick={handleClick} className='btn btn-primary'>{loading ? <span className='loading loading-spinner'></span> : "Logout"}</button></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div> :
                        <button className='bg-blue-600 p-2 text-white rounded-lg' onClick={handleNavigate}>{
                            pathname === "/signup" ? "Login" : "Signup"
                        }</button>
                }

            </div>
        </div>
    )
}
export default Header