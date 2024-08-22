import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setArticles(data.articles))
      .catch(error => {
        console.error("Fetching the news failed: ", error);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center"> Latest <span className="badge bg-danger">News</span> </h2>

      {articles.map((news, index) => (
        <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
}

export default NewsBoard;
