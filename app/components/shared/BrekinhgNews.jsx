import React from 'react';
import Marquee from 'react-fast-marquee';

const breckingNews = [
    {
        "id": 1,
        "title": "Global Tech Giant Announces Revolutionary AI Breakthrough"
    },
    {
        "id": 2,
        "title": "Severe Storms Disrupt Major Cities, Emergency Alerts Issued"
    },
    {
        "id": 3,
        "title": "Stock Markets Surge After Unexpected Economic Recovery Report"
    }
]

const BrekinhgNews = () => {
    return (
        <div className='bg-[#F3F3F3] font-medium p-3 flex gap-2 mt-3' >
            <button className='bg-[#D72050] text-white py-2 px-4'>
                Latest
            </button>
            <Marquee className='' pauseOnHover="true" speed={40}>
                {
                    breckingNews.map(brNs => <div key={brNs.id}
                        className='mr-20  font-semibold'>
                        <span className='block'>{brNs.title}</span>
                    </div>)
                }
            </Marquee>
        </div>
    );
};

export default BrekinhgNews;