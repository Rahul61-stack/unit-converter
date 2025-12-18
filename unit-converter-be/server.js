import http from "node:http";
import express from "express";
import { convert } from "./helper.js";

const app = express();
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
    console.log(req.body);
    let response = convert(req.body);
    console.log(response);
    res.send(response);
  } catch (err) {
    res.status(400);
    res.body = err.message;
    res.send();
  }
});
console.log("BACKEND RUNNING");
server.listen(8000);
