import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArticleCard from '../Card/Card';
import axios from 'axios';



const SearchArticle = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get('keyword');
  // console.log(query.get('keyword'))
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:4000/api/search?keyword=${encodeURIComponent(keyword)}`);
        setArticles(response.data);
        // console.log(response);
        setLoading(false);
      } catch (error) {
        setError('Lỗi khi tải bài báo');
        setLoading(false);
      }
    };

    fetchArticles();
  }, [keyword]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="search-articles">
      <h2>Kết quả tìm kiếm cho: {keyword}</h2>
      {articles.length > 0 ? (
        articles.map(article => (
          <ArticleCard key={article.link} {...article} />
        ))
      ) : (
        <p>Không có kết quả tìm kiếm, vui lòng thử lại.</p>
      )}
    </div>
  );
};

export default SearchArticle;
