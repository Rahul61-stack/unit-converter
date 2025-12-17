import http from "node:http";
import express from "express";

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(8000);
