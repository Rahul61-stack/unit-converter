import http from "node:http";
import express from "express";
import { convert } from "./helper.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://unit-converter.rahulsrivastav400.workers.dev", // or specify your Cloudflare Pages URL
  })
);

app.use(express.json());
const server = http.createServer(app);

app.post("/api/convert", (req, res, next) => {
  let { value, conversionFrom, conversionTo } = req.body;
  if (!conversionFrom) {
    res.status(400);
    res.body = "conversionFrom is required";
    res.send();
  } else if (!conversionTo) {
    res.status(400);
    res.body = "conversionTo is required";
    res.send();
  } else {
    next();
  }
});

app.post("/api/convert", (req, res) => {
  try {
    let response = convert(req.body);
    res.send(response);
  } catch (err) {
    res.status(400);
    res.body = err.message;
    res.send();
  }
});
console.log("Backend running on port 8000");
server.listen(8000);
