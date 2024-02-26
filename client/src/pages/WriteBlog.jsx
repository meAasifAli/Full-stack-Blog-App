
import Editor from "../components/Editor"
import usePreviewImg from "../hooks/usePreviewImg"
import { FaImages } from "react-icons/fa"
import { catList } from '../data'
import { useState } from "react"
import useCreatePost from "../hooks/useCreatePost"
import { useAuthUser } from "../context/AuthContext"

const WriteBlog = () => {
    const { authUser } = useAuthUser()
    const { loading, handleCreatePost } = useCreatePost()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const { imgUrl, handleImageChange, setImgUrl } = usePreviewImg()

    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleSubmit = async (ev) => {
        ev.preventDefault()
        await handleCreatePost({
            title: title,
            content: content,
            photo: imgUrl,
            category: category,
            createdBy: authUser._id
        })
        setCategory("")
        setContent("")
        setTitle("")
        setImgUrl("")
    }
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center sm:w-[85%] mx-auto">
            <h2 className="font-bold">Write Your Blog!!</h2>
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
                <select className="select w-full max-w-xs" onChange={onCategoryChange}>
                    <option selected>---category---</option>
                    {
                        catList.map((item, id) => {
                            return <option key={id} value={item?.title}>{item?.title}</option>
                        })
                    }
                </select>
                <label>
                    <FaImages color="blue" size={24} />
                    <input type="file" className="hidden" onChange={handleImageChange} />
                </label>
                <div>
                    <button type="submit" className="btn bg-blue-700 text-white">{loading ? <span className="loading loading-spinner"></span> : "Post"}</button>
                </div>
            </form>
        </div>
    )
}
export default WriteBlog