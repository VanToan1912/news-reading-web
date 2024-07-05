import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Feed from './components/Feed';

function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get('http://localhost:4000/');
      setArticles(res.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    getArticles();
  }, [])

  console.log(articles);
  return (
    <div>
      {articles.map((item, i) =>
        <Feed
          key={i}
          content={item.item.content}
          contentSnippet={item.item.contentSnippet}
          title={item.item.title}
          link={item.item.link}
          date={item.item.pubDate}
        />
      )}
    </div>
  );
};

export default App;
