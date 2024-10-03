import { useEffect , useState } from "react";
import { useTheme } from '../context/ThemeContext';


import Newsitem from "./Newsitems";

function News() {

    const { theme } = useTheme();

    const [articles, setArticles] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const city = localStorage.getItem("city") || "Nellore";

        const api = `https://newsapi.org/v2/everything?q=Nellore%20weather&qInTitle=Nellore&sortBy=publishedAt&language=en&apiKey=23c8857075cc43caa2aff0b0c2d3f1c0`;

        fetch(api)
      .then((response) => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        if (data.articles) {
          const validArticles = data.articles.filter(
            (article) =>
              article.title &&
              article.description &&
              article.url &&
              article.urlToImage
          );
          setArticles(validArticles);
        } else {
          setError('No articles found.');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to fetch articles.');
      });

    }, []); 










    return ( 
        <div>
      <div className="container ">
  
            {articles.map((article) => (
              <div
                className="col"
                key={article.url}
              >
                <Newsitem
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  imageUrl={article.urlToImage} // Using correct prop for image
                />
              </div>
            ))}
         
      </div>
    </div>
     );
}

export default News;