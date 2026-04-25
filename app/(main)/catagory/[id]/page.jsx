import { getCatagoris } from "@/app/api/fetch/getCatagoris";
import { getCatagoryID } from "@/app/api/fetch/getCatagoryID";
import CatagoryNews from "@/app/components/homepage/news/CatagoryNews";
import LeftSidebar from "@/app/components/homepage/news/LeftSidebar";
import Rightdebar from "@/app/components/homepage/news/Rightdebar";

export async function generateMetadata({ params }) {
    const { id } = await params;
    console.log(id);
    const catagoris = await getCatagoris();
    console.log(catagoris);

    const curentCatagoris = catagoris.find(n => n.category_id === id);
    console.log(curentCatagoris);

    return {
        title: curentCatagoris.category_name,
        description: `this is ${curentCatagoris.category_name} catagories`,
    }
}

const CatagoryPage = async ({ params }) => {

    const { id } = await params;
    const news = await getCatagoryID(id);


    return (
        <div className="grid grid-cols-12 gap-3  ">
            <div className="h-screen w-full  col-span-3 ">

                <LeftSidebar
                    activeID={id}
                />

            </div>
            <div className="h-screen w-full  col-span-6">
                <h2 className="text-xl font-semibold text[#403F3F] mb-5"> Dragon News Home</h2>
                <CatagoryNews
                    id={id}
                    news={news}
                />

            </div>
            <div className="h-screen w-full  col-span-3">
                <Rightdebar />
            </div>
        </div>
    );
};

export default CatagoryPage;