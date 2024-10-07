import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Store your API key in an .env file

    useEffect(() => {
      const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
            setArticles(response.data.articles);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch news');
            setLoading(false);
            console.error(err); // Log the error for debugging
        }
    };
    
    
        fetchNews();
    }, [apiKey]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Top News Articles</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
