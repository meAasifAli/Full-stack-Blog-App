import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col  shadow-md gap-2  shadow-gray-500 rounded-xl p-4 hover:scale-105 transition-all duration-500 delay-200 animate-ease-linear">
            <img className="h-64 w-64 object-center mx-auto  transition-all duration-500 delay-200 animate-ease-linear" src={blog?.photo} alt="" />
            <h2 className='font-medium text-lg'>{blog?.title.slice(0, 30)}</h2>
            <div className="flex items-center justify-between">
                <h4 className="font-bold">@{blog.createdBy?.username}</h4>
                <p>{format(new Date(blog?.createdAt), "k:mm bbb EEEE")}</p>
            </div>
            <button onClick={() => navigate(`/blog/${blog._id}`)} className="bg-blue-700 p-2 rounded-lg text-white animate-pulse animate-infinite animate-duration-[6000ms] animate-ease-out">Read</button>
        </div>
    )
}
export default BlogCard