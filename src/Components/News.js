import { useEffect , useState , useContext } from "react";
import { SharedContext } from '../context/SharedContext';


import Newsitem from "./Newsitems";



function News() {

  const { sharedValue } = useContext(SharedContext);

    const [articles, setArticles] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const city = sharedValue || "Nellore";

        const apikey = process.env.REACT_APP_NEWS_API_KEY;

        const api = `https://gnews.io/api/v4/search?q=${city}&token=${apikey}`;

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
              article.image
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

    }, [sharedValue]); 










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
                  imageUrl={article.image} // Using correct prop for image
                />
              </div>
            ))}
         
      </div>
    </div>
     );
}

export default News;