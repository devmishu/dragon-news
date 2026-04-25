
export const getCatagoryID = async (catagoryID) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catagoryID}`);
    const data = await res.json();

    return data.data;
}