const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const authRouter = require('./authRouter')
const port = 8080;

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//router
app.use('/auth', authRouter)  // "/login" => "auth/login"

app.listen(port, () => {
    console.log(`server is running at port ${port} ...`)
})