import { FaImages } from "react-icons/fa"
import Editor from "../components/Editor"
import { useEffect, useState } from "react"
import usePreviewImg from "../hooks/usePreviewImg"
import { useParams } from "react-router-dom"
import useFetchPost from "../hooks/useFetchPost"
import useBlogStore from "../store/useBlogStore"
import useUpdatePost from "../hooks/useUpdatePost"

const EditBlog = () => {
    const { id } = useParams()
    useFetchPost(id)
    const { blog } = useBlogStore()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { imgUrl, handleImageChange, setImgUrl } = usePreviewImg()
    const { handleUpdatePost, loading } = useUpdatePost({ title, content, photo: imgUrl })

    useEffect(() => {
        if (blog) {
            setTitle(blog.title)
            setContent(blog.content)
            setImgUrl(blog.photo)
        }
    }, [blog, setImgUrl])

    const handleSubmit = (ev) => {
        ev.preventDefault()
        handleUpdatePost(blog._id)
    }
    return (
        <div className="h-screen sm:w-[85%] mx-auto flex flex-col justify-center items-center">
            <h1 className="text-2xl text-center font-bold mt-10">Edit Blog</h1>
            {
                imgUrl &&
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={imgUrl} />
                    </div>
                </div>
            }
            <form onSubmit={handleSubmit} className="flex  flex-col h-screen gap-4 shadow-lg p-4 rounded-xl w-full   bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h2 className=" font-bold text-lg">Blog Form</h2>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                        type="text"
                        className="grow"
                        placeholder="Title" />
                </label>
                <div>
                    <Editor value={content} onChange={setContent} />
                </div>

                <label>
                    <FaImages color="blue" size={24} />
                    <input type="file" className="hidden" onChange={handleImageChange} />
                </label>
                <div>
                    <button type="submit" className="btn bg-blue-700 text-white">{
                        loading ? <span className="loading loading-spinner"></span> : "update Post"
                    }</button>
                </div>
            </form>
        </div>
    )
}
export default EditBlog