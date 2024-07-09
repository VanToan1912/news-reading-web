import cors from "cors"
import express from "express"
import RSSParser from "rss-parser"

const feedURL = "https://tuoitre.vn/rss/tin-moi-nhat.rss";
const parser = new RSSParser();
let articles = [];

const parse = async url => {
  const feed = await parser.parseURL(url);

  feed.items.forEach(item => {
    articles.push({item})
  })
}
parse(feedURL);

let app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send(articles);
})

const server = app.listen("4000", () => {
  console.log("App is listening at http://localhost:4000");
})
export default server;


// ------------------------------

// import cors from "cors";
// import express from "express";
// import axios from "axios";
// import cheerio from "cheerio";
// import RSSParser from "rss-parser";

// const parser = new RSSParser();
// let articles = [];

// // Hàm để lấy tất cả các liên kết RSS từ một trang web
// const getRSSLinks = async (url) => {
//   const { data } = await axios.get(url);
//   const $ = cheerio.load(data);
//   const rssLinks = [];
//   $('link[type="application/rss+xml"]').each((i, elem) => {
//     rssLinks.push($(elem).attr('href'));
//   });
//   return rssLinks;
// };

// // Hàm để phân tích cú pháp tất cả các liên kết RSS
// const parseFeeds = async (urls) => {
//   articles = [];
//   for (const url of urls) {
//     console.log(`Parsing RSS feed from: ${url}`);
//     const feed = await parser.parseURL(url);
//     feed.items.forEach(item => {
//       articles.push({ item });
//     });
//   }
// };

// const init = async () => {
//   const rssLinks = await getRSSLinks('https://tuoitre.vn'); // Thay đổi URL thành trang bạn muốn lấy liên kết RSS
//   await parseFeeds(rssLinks);
// };

// init();

// let app = express();
// app.use(cors());

// app.get('/', async (req, res) => {
//   await init(); // Lấy và phân tích cú pháp các liên kết RSS mỗi khi endpoint được gọi
//   res.send(articles);
// });

// const server = app.listen("4000", () => {
//   console.log("App is listening at http://localhost:4000");
// });

// export default server;
