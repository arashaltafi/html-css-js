const http = require('http');
const fs = require('fs');
const port = 8090;

const server = http.createServer((req, res) => {
    console.log(__dirname)
    console.log(req.url)

    fs.readFile(__dirname + req.url, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        var mimeType;
    })

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('test 3');
    res.write('<h1>Tag H1</h1>');
    res.end();
})

server.listen(port, () => {
    console.log(`server is running at port ${port} ...`)
});