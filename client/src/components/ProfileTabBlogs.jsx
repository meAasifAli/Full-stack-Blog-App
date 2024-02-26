import { Link } from "react-router-dom"

const ProfileTabBlogs = ({ handleDeletePost, userBlogs }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Photo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    userBlogs?.map((blog, id) => {
                        return <tr key={id}>
                            <td>{id + 1}</td>
                            <td className="font-medium text-sm">
                                <Link to={`/blog/${blog._id}`}>
                                    {blog?.title}
                                </Link>
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={blog?.photo} />
                                    </div>
                                </div>
                            </td>

                            <td className="flex gap-2">
                                <button className="btn">
                                    <Link to={`/edit/${blog._id}`}>
                                        Edit
                                    </Link>
                                </button>
                                <button onClick={() => handleDeletePost(blog._id)} className="btn">delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
export default ProfileTabBlogs