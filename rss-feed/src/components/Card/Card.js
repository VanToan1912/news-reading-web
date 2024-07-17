import React from 'react';
import parse from 'html-react-parser';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// Trích xuất URL hình ảnh từ content
const extractImageUrl = (content) => {
  const imgTag = /<img.*?src="(.*?)"/;
  const match = content.match(imgTag);
  return match ? match[1] : '';
};

// hàm dể cất nội dung để hiển thị tối da maxLength ký tự
const truncate = (content, maxLength) => {
  return content.length > maxLength ? content.substring(0, maxLength) + "..." : content;
};

const Card = ({ content, contentSnippet, title, link, date }) => {
  const imageUrl = extractImageUrl(content);

  return (
    <div className='article'>
      <div className="article-card row">
        <div className="col-2 thumbnails">
          <Link to={`/article?url=${encodeURIComponent(link)}`}>
            {imageUrl && <img src={imageUrl} width="200" height="200" alt="article" className="img-fluid img-resize" />}
          </Link>
        </div>
        <div className="col-10 box-text">
          <Link to={`/article?url=${encodeURIComponent(link)}`} className="title-article text-decoration-none">
            <h3 className="box-title-text">
              {title}
            </h3>
          </Link>
          <div className="content-snippet">
            <p>
              {parse(truncate(contentSnippet, 250))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
