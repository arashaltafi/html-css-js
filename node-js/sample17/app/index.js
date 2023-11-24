const express = require('express');
const app = express();
const port = process.env.APP_PORT;

module.exports = () => {
    app.listen(port, () => {
        console.log(`server is running at port ${port} ...`)
    })
}