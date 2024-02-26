import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import useFetchPosts from "../hooks/useFetchPosts";
import useBlogStore from "../store/useBlogStore";
import { CiFilter } from "react-icons/ci";
import BlogTabList from "../components/BlogTabList";
import { catList } from "../data";


const Blogs = () => {
    const [sortByList, setSortByList] = useState(false)
    const { loading, search, setSearch } = useFetchPosts()
    const { blogs } = useBlogStore()
    const [filteredBlogs, setFilteredBlogs] = useState(blogs)

    useEffect(() => {
        setFilteredBlogs(blogs)
    }, [blogs])

    const handleCatChange = (ev) => {

        if (ev.target.value === "all") {
            setFilteredBlogs(blogs)
        }
        else {
            setFilteredBlogs(blogs.filter((blog) => blog.category === ev.target.value))
        }
    }



    return loading ? <Loader /> : (
        <div className="h-screen w-full sm:w-[85%] mx-auto overflow-scroll">
            <div className="my-4  flex flex-col justify-start  gap-8 ">
                <div className="flex items-center flex-col sm:flex-row gap-4 justify-between w-full">

                    <select className="select select-bordered w-full max-w-xs sm:ml-4" onChange={handleCatChange}>
                        <option selected value={"all"}>All</option>
                        {
                            catList.map((item, id) => {
                                return <option key={id} value={item?.title}>{item?.title}</option>
                            })
                        }
                    </select>
                    <div className=" flex items-center justify-between gap-2">
                        <label className="input input-bordered flex items-center gap-2">
                            <input value={search} onChange={(ev) => setSearch(ev.target.value)} type="search" className="grow" placeholder="Search Blog" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                        <div className="dropdown sm:mr-12">
                            <div tabIndex={0} role="button" className="btn m-1 sm:mr-4"><CiFilter size={24} /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24">
                                <li onClick={() => setSortByList(!sortByList)}><a>List</a></li>
                                <li onClick={() => setSortByList(false)}><a>Grid</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    sortByList ? <div className="overflow-auto">

                        <BlogTabList blogs={blogs} />

                    </div> : <div className="flex flex-wrap gap-4  justify-center sm:justify-start items-start sm:ml-4">
                        {
                            filteredBlogs.map((blog, id) => {
                                return <BlogCard key={id} blog={blog} />
                            })
                        }
                        {
                            blogs.length === 0 || filteredBlogs.length === 0 && <div>
                                <h2>No Blogs Found</h2>
                            </div>
                        }
                    </div>

                }

            </div>
        </div>
    )
}
export default Blogs