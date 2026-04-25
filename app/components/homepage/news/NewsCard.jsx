import Image from 'next/image';
import Link from 'next/link';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ id, name, title, image_url, details, rating, total_view }) => {
    return (
        <div className=" bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
            {/* Header Section */}
            <div className="flex items-center justify-between p-4 bg-[#F3F3F3]">
                <div className="flex items-center gap-3">
                    {/* <Image
                        src="https://i.ibb.co/L8Pj1nL/author.jpg"
                        width={50}
                        height={50}
                        alt='profile'
                        className="w-10 h-10 rounded-full object-cover"
                    /> */}
                    <img
                        src="https://i.ibb.co/L8Pj1nL/author.jpg"
                        width={50}
                        height={50}
                        alt='profile'
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="text-[#403F3F] font-bold text-sm leading-tight">{name}</h4>
                        <p className="text-[#706F6F] text-xs">2022-08-21</p>
                    </div>
                </div>
                <div className="flex gap-3 text-[#706F6F] text-lg">
                    <FaBookmark className="cursor-pointer hover:text-[#D72344] transition-colors" />
                    <FaShareAlt className="cursor-pointer hover:text-[#D72344] transition-colors" />
                </div>
            </div>

            {/* Title Section */}
            <div className="px-4 pt-4">
                <h2 className="text-[#403F3F] text-xl font-bold leading-7 mb-4">
                    {title}
                </h2>

                {/* Main Image */}
                <div className="relative w-full h-[250px] mb-5">
                    <Image 
                        src={image_url} // Replace with your news image path
                        alt="News Thumbnail"
                        width={518}
                        height={262}
                        className="w-full h-full object-cover rounded-sm"
                    /> 
                </div>

                {/* Description Section */}
                <p className="text-[#706F6F] text-sm leading-relaxed mb-3 line-clamp-3">
                    {details}
                </p>
                <button className="text-[#FF8C47] font-semibold text-sm hover:underline mb-5 block">
                    <Link href={`/news/${id}`}>Read More</Link>
                </button>
            </div>

            <hr className="mx-4 border-gray-200" />

            {/* Footer Section (Ratings & Views) */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <div className="flex text-[#FF8C47] gap-0.5">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-[#706F6F] text-sm font-medium ml-1">{rating}</span>
                </div>

                <div className="flex items-center gap-2 text-[#706F6F]">
                    <FaEye className="text-lg" />
                    <span className="text-sm font-medium">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;