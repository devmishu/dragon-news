import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const NewsDetailsCard = ({ neDs, details, title, image_url }) => {
    return (

        <div className="max-w-3xl border border-gray-200 rounded-sm p-6 shadow-sm">

            {/* Featured Image */}
            <div className="w-full mb-6">
                {/* <img
                    src="https://i.ibb.co/vX8pYm5/news-image.jpg" // Image path from your design
                    alt="Biden pledges aid"
                    className="w-full h-auto rounded-sm object-cover"
                /> */}
                <Image
                    src={image_url} // Replace with your news image path
                    alt="News Thumbnail"
                    width={518}
                    height={262}
                    className="w-full h-full object-cover rounded-sm"
                />
            </div>

            {/* Title */}
            <h1 className="text-[#403F3F] text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                {title}
            </h1>

            {/* Article Body */}
            <div className="text-[#706F6F] text-base leading-7 space-y-4 mb-8">
                <p>
                    {details}
                </p>

            </div>

            {/* Back Button */}
            <Link href="/">
                <button className="bg-[#D72344] hover:bg-[#b01d38] text-white px-6 py-2.5 rounded-sm flex items-center gap-2 transition-all active:scale-95 font-medium">
                    <FaArrowLeft size={14} />
                    <Link href={`/catagory/${neDs.category_id}`}> All news in this category</Link>
                </button>
            </Link>
        </div>
    );
};

export default NewsDetailsCard;