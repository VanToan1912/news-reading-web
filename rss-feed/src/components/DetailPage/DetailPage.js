// components/DetailPage/DetailPage.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import './DetailPage.css';

const DetailPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const url = query.get('url');

  const [article, setArticle] = useState({ title: '', content: '', detailInfo: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/article?url=${encodeURIComponent(url)}`);
        setArticle(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="detail-page">
      <h1>{article.title}</h1>
      <div className="detail-info">{article.detailInfo ? parse(String(article.detailInfo)) : ''}</div>
      <div className="content">{article.content ? parse(String(article.content)) : ''}</div>
    </div>
  );
};

export default DetailPage;
