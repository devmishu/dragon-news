import { getNewsDetails } from "@/app/api/fetch/getNewsDetails";
import NewsDetailsCard from "@/app/components/homepage/news/NewsDetailsCard";

export async function generateMetadata({ params }) {
    const { id } = await params;

    const newsDetalis = await getNewsDetails(id);
    const news = newsDetalis[0];

    return {
        title: news.title,
        description: news.details,
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const newsDetalis = await getNewsDetails(id);

    return (
        <div className="min-h-screen bg-white p-4 md:p-8">
            <h2 className="text-[#403F3F] text-xl font-bold mb-5 font-sans">Dragon News</h2>
            {
                newsDetalis.map(neDs => <NewsDetailsCard
                    key={(neDs._id)}
                    id={(neDs._id)}
                    neDs={neDs}
                    image_url={neDs.image_url}
                    title={neDs.title}
                    details={neDs.details}
                />)
            }
        </div>
    );
};

export default NewsDetailsPage;