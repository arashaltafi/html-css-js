const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/redirect', (req, res) => {
    res.redirect('https://arashaltafi.ir')
});

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, 'resume_en.pdf'), (err) => {
        console.log(err);
    })
});

app.listen(port, () => {
    console.log(`server is running at port ${port} ...`)
})