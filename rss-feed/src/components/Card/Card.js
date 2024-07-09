import React from 'react';
import parse, { domToReact } from 'html-react-parser';

const Card = ({ content, contentSnippet, title, link, date }) => {
  let formatted = { day: "numeric", month: "long", year: "numeric" };
  let articleDate = new Date(date).toLocaleDateString("en-GB", formatted);

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


  return (
    <div>
      <h3>{title}</h3>
      <div>{parse(content, options)}</div>
      <p>{articleDate}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>

    </div>
  );
};

export default Card;