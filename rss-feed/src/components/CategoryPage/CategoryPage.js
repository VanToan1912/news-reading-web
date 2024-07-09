import React from 'react';
import Card from '../Card/Card.js';

const CategoryPage = ({ articles }) => {
  return (
    <div>
      {articles.map((item, i) => (
        <Card
          key={i}
          content={item.content}
          contentSnippet={item.contentSnippet}
          title={item.title}
          link={item.link}
          date={item.pubDate}
        />
      ))}
    </div>
  );
};

export default CategoryPage;
