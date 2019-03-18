const express = require('express');
const cheerio = require('cheerio')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

// 
const app = express()

// cors
app.use(cors());

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// router
app.use('/', require('./router/index.js'));
app.use('/duan', require('./router/duan.js'));
app.use('/ooxx', require('./router/ooxx.js'));
app.use('/pic', require('./router/pic.js'));


// server
const server = app.listen(3000, () => {
    console.log(`Server started on http://localhost:${server.address().port}`);
});