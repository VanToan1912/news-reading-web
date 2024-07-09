import React from 'react';
import parse, { domToReact } from 'html-react-parser';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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


const ArticleCard = ({ content, contentSnippet, title, link, date }) => {
//   let formatted = { day: "numeric", month: "long", year: "numeric" };
//   let articleDate = new Date(date).toLocaleDateString("en-GB", formatted);

  const options = {
    replace: ({ name, attribs, children }) => {
      if (!attribs) return;
      if (name === 'a') {
        return (
          <a href={attribs.href} target="_blank" rel="noopener noreferrer">
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
 
  return ( 
    <div className="article-card row">
        <div className = "col thumnails">
             <a href={link} target="_blank" rel="noopener noreferrer" className = "title-article">
             {imageUrl && <img src={imageUrl} alt="article" className="img-fluid img-resize" />}
             </a>
           
        </div>

        <div className = "col box-text">
            <h3 className = "box-title-text">
                <a href={link} target="_blank" rel="noopener noreferrer" className = "title-article">{truncate(title,20)}</a>
            </h3>
             <div className = "content-s">
                 <div className="content-snippet">
                 <p >
                 {parse(truncate(contentSnippet, 150), options)}
                 </p>
                 </div>
                
             </div>
             

        </div>
      
    
     
    </div>
  );
};


export const MainCard = ({ content, title, link}) => {

    const imageUrl = extractImageUrl(content);

    return ( 
        <div className="article-card col">
            <div className = "col-8 thumnails">
                 <a href={link} target="_blank" rel="noopener noreferrer" className = "title-article">
                 {imageUrl && <img src={imageUrl} alt="article" className="img-fluid img-resize" />}
                 </a>
               
            </div>
    
            <div className = "col-4">
                <h3 className = "box-title-text">
                    <a href={link} target="_blank" rel="noopener noreferrer" className = "title-article">{truncate(title,20)}</a>
                </h3>
    
            </div>
          
        
         
        </div>
      );
}
export default ArticleCard;
