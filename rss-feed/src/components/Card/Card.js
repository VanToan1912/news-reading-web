import React from 'react';
import parse, { domToReact } from 'html-react-parser';
import './Card.css';
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


// Trích xuất URL hình ảnh từ content
const extractImageUrl = (content) => {
  const imgTag = /<img.*?src="(.*?)"/;
  const match = content.match(imgTag);
  return match ? match[1] : '';
};

// hàm để cất nội dung để hiển thị tối đa maxLength ký tự
const truncate = (content, maxLength) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  } else {
    return content;
  }
};

const Card = ({ content, contentSnippet, title, link, date }) => {
<<<<<<< HEAD
=======
  // let formatted = { day: "numeric", month: "long", year: "numeric" };
  // let articleDate = new Date(date).toLocaleDateString("en-GB", formatted);

>>>>>>> ca45cf9e0c120e7f4780704f6645854bc9a9428f
  const options = {
    replace: ({ name, attribs, children }) => {
      if (!attribs) return;
      if (name === 'a') {
        return (
<<<<<<< HEAD
          <a
            href={attribs.href}
            onClick={(e) => {
              if (!attribs.href.startsWith('http')) {
                e.preventDefault();
                console.error('Invalid link:', attribs.href);
                return;
              }
              // Handle other conditions if needed
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
=======
          <a href={attribs.href} target="_blank" rel="noopener noreferrer">
>>>>>>> ca45cf9e0c120e7f4780704f6645854bc9a9428f
            {domToReact(children, options)}
          </a>
        );
      }
      if (name === 'img') {
        return <img src={attribs.src} alt={attribs.alt || 'image'} />;
      }
    },
  };

  const imageUrl = extractImageUrl(content);

<<<<<<< HEAD
=======

>>>>>>> ca45cf9e0c120e7f4780704f6645854bc9a9428f
  return (
    <div className="article-card row">
      <div className="col thumnails">
        <Link to={`/article?url=${encodeURIComponent(link)}`}>
          {imageUrl && <img src={imageUrl} alt="article" className="img-fluid img-resize" />}
        </Link>
      </div>
      <div className="col box-text">
<<<<<<< HEAD
        <Link to={`/article?url=${encodeURIComponent(link)}`} className="title-article">
          <h3 className="box-title-text">
            {truncate(title, 20)}
          </h3>
        </Link>
        <div className="content-s">
          <div className="content-snippet">
            <p>
=======
       <Link to={`/article?url=${encodeURIComponent(link)}`}  className="title-article">
            <h3 className="box-title-text" >
               {truncate(title, 20)}
            </h3>
       </Link>
        <div className="content-s">
          <div className="content-snippet">
            <p >
>>>>>>> ca45cf9e0c120e7f4780704f6645854bc9a9428f
              {parse(truncate(contentSnippet, 150), options)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;