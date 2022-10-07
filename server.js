const http = require("http");

const server = http.createServer(() => {
  res.statuscode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello");
});

server.listen(3000, () => {
  console.log("listening port http://localhost3000");
});
