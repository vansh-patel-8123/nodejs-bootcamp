const http = require("http");

const routes = require("./routes.js");

const PORT = 3000;

const server = http.createServer(routes.requestHandler);

server.listen(PORT);