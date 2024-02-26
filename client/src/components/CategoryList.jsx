import { catList } from "../data"
const CategoryList = () => {

    return (
        <div className="flex flex-wrap items-center gap-4 px-2 mt-2 sm:px-0 font-medium text-white cursor-pointer">
            {
                catList.map((item, id) => {
                    return <h2 key={id} className="bg-blue-500 shadow-md p-2 rounded-lg animate-fade-right animate-infinite animate-duration-[7999ms] animate-delay-[4000ms] animate-ease-in-out animate-alternate-reverse animate-fill-forwards">{item?.title}</h2>
                })
            }
        </div>
    )
}
export default CategoryList