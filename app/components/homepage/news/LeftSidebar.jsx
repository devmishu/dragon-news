import { getCatagoris } from "@/app/api/fetch/getCatagoris";
import Link from "next/link";





const LeftSidebar = async ({ activeID }) => {

    const categories = await getCatagoris();

    // const [activeID, setActiveID] = useState(1);
    // const handleActiveCatagory = (id) => {
    //     setActiveID(id)
    // }

    return (
        <div >
            <h2 className="text-xl font-semibold text[#403F3F] mb-5">All Caterogy</h2>

            <ul className="space-y-1">
                {
                    categories.map(category => (

                        <li

                            key={category.category_id}
                            className={`w-full  rounded-md text-gray-600  font-medium cursor-pointer 
                                ${category.category_id === activeID && "bg-gray-200"}
                                `}

                        >
                            <Link href={`/catagory/${category.category_id}`}
                                className="block px-6 py-3 "
                            >
                                {category.category_name}
                            </Link>
                        </li>



                    ))
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;