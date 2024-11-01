// import { useEffect, useState } from "react";
// import NewsItems from "./NewsItems";

// function NewsBoard({category}) {
//   const [articles, setArticles] = useState([]);
  
//   useEffect(() => {
//     // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//     // this one is not working ... i do not why
//     const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
//     // const url = `https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=ea97fe8b00504bf09c6b90c4e7450879`;

//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setArticles(data.articles))
//       .catch(error => {
//         console.error("Fetching the news failed: ", error);
//       });
//   }, [category]);

//   return (
//     <div>
//       <h2 className="text-center"> Latest <span className="badge bg-danger">News</span> </h2>

//       {articles.map((news, index) => (
//         <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//       ))}
//     </div>
//   );
// }

// export default NewsBoard;


import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"  // Adding User-Agent to avoid potential blocks
      }
    })
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
        <NewsItems 
          key={index} 
          title={news.title} 
          description={news.description} 
          src={news.urlToImage} 
          url={news.url} 
        />
      ))}
    </div>
  );
}

export default NewsBoard;
