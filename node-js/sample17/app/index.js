const express = require('express');
const boot = require('./bootstrap');
const app = express();
boot(app);
const port = process.env.APP_PORT;

module.exports = () => {
    app.listen(port, () => {
        console.log(`server is running at port ${port} ...`)
    })
}