import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import './DetailPage.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.min.css';


const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const initialUrl = query.get('url');
  const [url, setUrl] = useState(initialUrl);
  const [article, setArticle] = useState({ body: '', origin: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!url) return; // Kiểm tra nếu không có URL

      try {
        const response = await axios.get(`http://localhost:4000/api/article?url=${encodeURIComponent(url)}`);
        if (response.status === 200) {
          setArticle(response.data);
          setLoading(false);
        } else {
          setError('Không tìm thấy nội dung bài báo.');
          setLoading(false);
        }
      } catch (err) {
        setError(`Lỗi khi tải bài báo: ${err.message}`);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [url]);

  useEffect(() =>{
    const savedMode = localStorage.getItem('darkMode');
    const darkMode = savedMode ? JSON.parse(savedMode) : false;
    if (darkMode) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  }, []);

  const handleLinkClick = async (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A' && e.target.href) {
      const newUrl = new URL(e.target.href);
      const pathname = newUrl.pathname;
      // Mở liên kết trong tab mới
      window.open(`/article?url=${encodeURIComponent(article.origin.toString() + pathname)}`, '_blank');
    }
  };

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="detail-page" onClick={handleLinkClick}>
      <h1>{article.title}</h1>
      <div  dangerouslySetInnerHTML={{ __html: article.body }}></div>
    </div>
  );
};

export default DetailPage;
