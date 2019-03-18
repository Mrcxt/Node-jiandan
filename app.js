/*
 * @Author: @虾哔哔 
 * @Date: 2019-03-18 11:29:10 
 * @Last Modified by: @虾哔哔
 * @Last Modified time: 2019-03-18 15:17:15
 */
const express = require('express');
const cheerio = require('cheerio')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

// 
const app = express()

// path
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// cors
app.use(cors());

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// router
app.use('/', require('./router/index.js')); //首页
app.use('/duan', require('./router/duan.js')); //段子
app.use('/ooxx', require('./router/ooxx.js')); //妹子图
app.use('/pic', require('./router/pic.js')); //无聊图
app.use('/tucao', require('./router/tucao.js')); //获取评论
app.use('/jandan-tucao', require('./router/jandan-tucao.js')); //评论
app.use('/vote', require('./router/vote.js')); //投票

// 
app.use(function(req, res, next) {
    res.status(404).send('404 - Not Found!');
});


// server
const server = app.listen(3000, () => {
    console.log(`Server started on http://localhost:${server.address().port}`);
});