import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./Feed";

function App() {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1>Báo Tuổi Trẻ RSS</h1>
      <div>
        {articles.map((items, i) =>
          <Feed
            key={i}
            title={items.item.title}
            link={items.item.link}
            date={items.item.pubDate}
          />)}
      </div>
    </>
  );
}

export default App;
