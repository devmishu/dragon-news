"use client"
import { useState } from "react";



const LeftSidebar = ({ categories }) => {
    const [activeID, setActiveID] = useState(1);

    const handleActiveCatagory = (id) => {
        setActiveID(id)
    }

    return (
        <>
            <h2 className="text-xl font-semibold text[#403F3F]">All Caterogy</h2>

            <ul className="">
                {
                    categories.map(category => (

                        <li

                            key={category.category_id}
                            className={`w-full px-6 py-3 rounded-md text-gray-600 font-medium cursor-pointer 
                                ${category.category_id === activeID && "bg-gray-200"}
                                `}
                            onClick={() => handleActiveCatagory(category.category_id)}
                        >
                            {category.category_name}
                        </li>



                    ))
                }
            </ul>
        </>
    );
};

export default LeftSidebar;