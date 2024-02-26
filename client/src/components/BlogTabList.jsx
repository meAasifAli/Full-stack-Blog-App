import { format } from "date-fns"
import { useNavigate } from "react-router-dom"

const BlogTabList = ({ blogs }) => {
    const navigate = useNavigate()
    return (
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>photo</th>
                    <th>Time</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    blogs.map((blog, id) => {
                        return <tr key={id}>
                            <td>{id + 1}</td>
                            <td className="font-medium text-sm">{blog?.title}</td>
                            <td className="font-medium text-lg">@{blog?.createdBy?.username}</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={blog?.photo} />
                                    </div>
                                </div>
                            </td>
                            <td className="font-medium text-sm">
                                {format(new Date(blog?.createdAt), "k:mm bbb EEEE")}
                            </td>
                            <td>
                                <button onClick={() => navigate(`/blog/${blog._id}`)} className="btn">Read</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
export default BlogTabList