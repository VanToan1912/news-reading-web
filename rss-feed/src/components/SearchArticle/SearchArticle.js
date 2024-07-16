import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ArticleCard from '../Card/Card';


const SearchArticle = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get('keyword');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/search/${encodeURIComponent(keyword)}`);
        setSearchResults(response.data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching search results: ${error.message}`);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="category-page">
      <h2>Search Results for "{keyword}":</h2>
      <div className="article-list">
        {searchResults.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            contentSnippet={article.contentSnippet}
            link={article.link}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchArticle;
