const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var fileName = q.pathname;
    console.log("fileName", fileName);

})

server.listen(8080, () => {
    console.log(`server is running at port ${port} ...`)
})