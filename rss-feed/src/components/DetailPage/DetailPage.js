// components/DetailPage/DetailPage.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import './DetailPage.css';
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const url = query.get('url');
  const [article, setArticle] = useState({ title: '',detailSapo : '', content: [] ,formattedDetailInfo: '' });
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
      <h2>{article.detailSapo}</h2>
      <div className="detail-info">{article.formattedDetailInfo ? parse(String(article.formattedDetailInfo)) : ''}</div>
      <div className="content">
        {/* Sử dụng parse từ html-react-parser để phân tích các phần tử */}
        {article.content && article.content.map((item, index) => {
          if (item.tag === 'p') {
            return <p key={index} className="content-text-p">{item.text}</p>;
          } else if (item.tag === 'figure') {
            return <figure key={index} className="content-figure-f" dangerouslySetInnerHTML={{ __html: item.html }} />;
          } else if (item.tag === 'h2') {
            return <h2 key={index} className="content-subtitle" dangerouslySetInnerHTML={{ __html: item.html }} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default DetailPage;
