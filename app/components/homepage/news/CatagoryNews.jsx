import React from 'react';
import NewsCard from './NewsCard';



const CatagoryNews = ({ id, news }) => {
    return (
        <>

            {
                news.length > 0 ? news.map(n =>
                    <NewsCard
                        key={n._id}
                        id={n._id}
                        name={n.author.name}
                        title={n.title}
                        image_url={n.image_url}
                        details={n.details}
                        rating={n.rating.number}
                        total_view={n.total_view}
                    />
                ) : <h2>Not Found News</h2>
            }

        </>
    );
};

export default CatagoryNews;
