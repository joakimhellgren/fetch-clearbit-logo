// import the data file:
const data = require("./data.json");
// import fetch, since node does not have fetch built-in
const fetch = require("node-fetch");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
// define asynchronous function that we can run below
async function findImages() {
  let number = 0;
  for (item of data) {
    const adress = item.Webaddress.split("/")[2];
    const imageUrl = adress
      ? `https://logo.clearbit.com/${adress}`
      : `https://logo.clearbit.com/${item.Webaddress}`;
    const res = await fetch(imageUrl);
    console.log(imageUrl);
    if (res.ok) {
      number++
      item.logo = imageUrl;
      console.log(number);
    } else {
      item.logo = null;
    }
  }
  console.log(number);
}
findImages();
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});
server.listen(port, hostname, () => {
  console.log(`Server running on http:/${hostname}:${port}`);
});