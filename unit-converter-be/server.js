import http from "node:http";

//CREATESERVER IS ALSO AN EVENTEMITTER
const server = http.createServer();

//REQUEST IS OF TYPE READABLESTREAM -> ALSO AN EVENTEMITTER
server.on("request", (req, res) => {
  const { headers, url, method } = req;
  req.on("error", (err) => {
    console.log("Error:" + " " + err);
  });
  let body = [];
  req.on("data", (data) => {
    body.push(data);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(body);
  });
});

server.listen(8000);
