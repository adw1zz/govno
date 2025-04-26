const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
);

http.createServer(app).listen(80, () => {
  console.log(`Server initialized on: http://localhost:80 // ${new Date()}`);
});
