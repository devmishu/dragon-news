

export const getNewsDetails = async (newsID) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${newsID}`);
    const data = await res.json();

    return data.data;
}