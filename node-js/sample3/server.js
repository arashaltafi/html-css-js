const http = require('http');
const port = 8089;

const server = http.createServer((req, res) => {
    console.log('server is creating ...')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('test 3');
    res.write('<h1>Tag H1</h1>');
    res.end();
})

server.listen(port, () => {
    console.log(`server is running at port ${port} ...`)
});