import { CiCircleChevDown } from "react-icons/ci";
import Newsletter from "../components/Newsletter";
import CategoryList from "../components/CategoryList";


import useFetchPosts from "../hooks/useFetchPosts";
import Loader from "../components/Loader";

const Home = () => {
    const { loading } = useFetchPosts()


    // console.log(blogs);

    return loading ? <Loader /> : (
        <div className=" flex flex-col gap-4">
            <div className="flex flex-col  gap-2 sm:gap-8 h-screen overflow-y-scroll justify-center items-center bg-blue-700 ">
                <CategoryList />
                <div className="flex flex-col  justify-center items-center sm:flex-row gap-4 sm:gap-8   w-full">
                    <div className="">
                        <h1 className="text-sm sm:text-3xl font-kodoMono text-white font-normal p-2 sm:p-0 animate-pulse animate-infinite animate-duration-[7999ms] animate-delay-[4000ms]
                         animate-ease-in-out animate-alternate-reverse animate-fill-forwards">
                            Welcome to our blogging website,<br />
                            Uncover  ideas of  masterminds of the world<br />
                            Discover the hidden secrets of the universe<br />
                            Explore the depths of our own minds.
                        </h1>
                    </div>
                    <div className="">
                        <img className="h-full w-full sm:w-48 sm:h-48 object-contain shadow-md shadow-white  p-4 rounded-xl" src="https://images.pexels.com/photos/7792646/pexels-photo-7792646.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1" alt="" />
                    </div>
                </div>
                <div className="my-4 p-4  animate-jump animate-infinite animate-duration-[9000ms] animate-delay-[999ms] animate-ease-in-out animate-normal animate-fill-forwards">
                    <button className="bg-white p-3 w-full  rounded-lg font-bold flex justify-center items-center gap-2">Explore Now <CiCircleChevDown /> </button>
                </div>
            </div>

            <div className="">
                <Newsletter />
            </div>
        </div>

    )
}
export default Home