const http = require("http");

const server = http.createServer((req, res) => {
console.log();
});

server.listen("5000", () => console.log("Server running on http://localhost:5000"));