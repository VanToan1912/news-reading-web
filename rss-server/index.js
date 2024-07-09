import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";
const feedURLs = [
  "https://tuoitre.vn/rss/tin-moi-nhat.rss",
  "https://tuoitre.vn/rss/the-gioi.rss",
  "https://tuoitre.vn/rss/kinh-doanh.rss",
  "https://tuoitre.vn/rss/xe.rss",
  "https://tuoitre.vn/rss/van-hoa.rss",
  "https://tuoitre.vn/rss/the-thao.rss",
  "https://tuoitre.vn/rss/khoa-hoc.rss",
  "https://tuoitre.vn/rss/gia-that.rss",
  "https://tuoitre.vn/rss/ban-doc-lam-bao.rss",
  "https://tuoitre.vn/rss/thoi-su.rss",
  "https://tuoitre.vn/rss/phap-luat.rss",
  "https://tuoitre.vn/rss/cong-nghe.rss",
  "https://tuoitre.vn/rss/nhip-song-tre.rss",
  "https://tuoitre.vn/rss/giai-tri.rss",
  "https://tuoitre.vn/rss/giao-duc.rss",
  "https://tuoitre.vn/rss/suc-khoe.rss",
  "https://tuoitre.vn/rss/thu-gian.rss",
  "https://tuoitre.vn/rss/du-lich.rss",
];
const parser = new RSSParser();
let articles = [];

const parse = async url => {
  const feed = await parser.parseURL(url);
  feed.items.forEach(item => {
    articles.push({ ...item, category: url });
  });
};

const parseAllFeeds = async () => {
  for (const url of feedURLs) {
    await parse(url);
  }
}
parseAllFeeds();

let app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send(articles);
});


const port = 4000;
const server = app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

