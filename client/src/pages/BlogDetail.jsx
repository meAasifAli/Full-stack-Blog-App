import { useParams } from 'react-router-dom'
import useFetchPost from '../hooks/useFetchPost'
import useBlogStore from '../store/useBlogStore'
import Loader from '../components/Loader'



const BlogDetail = () => {
    const { blog } = useBlogStore()
    const { id } = useParams()
    const { loading } = useFetchPost(id)

    return loading ? <Loader /> : (
        <div className="h-screen sm:w-[85%] mx-auto overflow-y-auto">
            <div className='flex flex-col gap-4  mt-4 px-2'>
                <h2 className='sm:text-4xl text-xl  font-semibold'>{blog?.title}</h2>
                <div className='flex items-center gap-4'>
                    <h2 className='font-medium'>@{blog?.createdBy?.username}</h2>
                    {/* <p>{format(new Date(blog?.createdAt), "k:mm bbb EEEE")}</p> */}
                </div>
                <img src={blog?.photo} alt="" className='object-contain h-96 w-96' />
                <div className='text-md font-kodoMono' dangerouslySetInnerHTML={{ __html: blog?.content }} />
            </div>
        </div>
    )
}
export default BlogDetail