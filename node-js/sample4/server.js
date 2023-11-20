const http = require('http');
const fs = require('fs');
const port = 8094;

const mimeTypes = {
    'html': "text/html",
    'jpeg': "text/jpeg",
    'jpg': "text/jpg",
    'png': "text/png",
    'svg': "text/svg+xml",
    'json': "application/json",
    'js': "text/javascript",
    'css': "text/css",
}

const server = http.createServer((req, res) => {
    console.log("dirname", __dirname)
    console.log("req url", req.url)

    fs.readFile(__dirname + req.url, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end(JSON.stringify(err));
            return;
        }
    })

    var mimeType = mimeTypes[req.url.split('.').pop()];
    console.log(mimeType);

    if (!mimeType) {
        mimeType = 'text/plain';
    }

    res.writeHead(200, { "Content-Type": mimeType });
    res.write(data, "binary");
    res.end();
})

server.listen(port, () => {
    console.log(`server is running at port ${port} ...`)
});