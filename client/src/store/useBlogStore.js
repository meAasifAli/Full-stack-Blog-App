import { create } from 'zustand'

const useBlogStore = create((set) => ({
    blogs: [],
    setBlogs: (blogs) => set({ blogs }),
    blog: {},
    setBlog: (blog) => set({ blog }),
    userBlogs: [],
    setUserBlogs: (userBlogs) => set({ userBlogs })
}))

export default useBlogStore