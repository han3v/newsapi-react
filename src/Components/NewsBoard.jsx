import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles, setArticles] =  useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data => setArticles(data.articles));
    },[category])
    return (
        <div>
            <h2 className="text-center mt-3">Latest <span className="badge bg-warning">News</span></h2>
            {articles.map((news,index) => {
                return <NewsItem key={index} judul={news.title} deskripsi={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}

export default NewsBoard;