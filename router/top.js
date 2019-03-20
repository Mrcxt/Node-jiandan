/*
 * @Author: @虾哔哔 
 * @Date: 2019-03-18 11:29:03 
 * @Last Modified by: @虾哔哔
 * @Last Modified comment_date: 2019-03-19 10:51:43
 */
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio')

// 
const router = express.Router()


/**
 * @description 排行榜
 * @method GET
 * @url {*} '/top/'
 * @params {*}
 */

// 
async function getTop(req, res, url) {
    let _html = null;

    await axios.get(url)
        .then(success => {
            _html = success.data
        })
        .catch(err => {
            res.json(err);
        })

    // 
    const $ = cheerio.load(_html)

    const content = $('#body #content'); //需要抓取的内容主体

    let _tab = $(content).find('.hot-tabs .current-tab').text() //栏目

    let _comments = []

    $(content).find('#comments .commentlist>li').each(function(index, ele) {
        // 作者信息
        let _comment_author = $(ele).find('.author strong').text() //作者
        let _comment_date = $(ele).find('.author small').text() // 发布时间
            // 文章信息
        let _comment_class = $(ele).find('.text small').text() //文章分类
        let _comment_ID = $(ele).find('.text .righttext').text() //文章id
        let _comment_content = $(ele).find('.text>p').html() //文章内容
            // 评论信息
        let _vote_positive = $(ele).find('.jandan-vote span').eq(0).text() //点OO
        let _vote_negative = $(ele).find('.jandan-vote span').eq(1).text() //点XX
        _comments.push({
            comment_author: _comment_author,
            comment_date: _comment_date,
            comment_class: _comment_class,
            comment_ID: _comment_ID,
            comment_content: _comment_content,
            vote_positive: _vote_positive,
            vote_negative: _vote_negative,
        })
    })


    res.json({
        tab: _tab,
        comments: _comments
    });
}


// router
// 无聊图
router.get('/pic', (req, res) => {
    let url = 'http://jandan.net/top'
    getTop(req, res, url)
});

// 段子
router.get('/duan', (req, res) => {
    let url = 'http://jandan.net/top-duan'
    getTop(req, res, url)
});

// 随手拍（妹子图）
router.get('/ooxx', (req, res) => {
    let url = 'http://jandan.net/top-ooxx'
    getTop(req, res, url)
});
// 
// 吐槽
router.get('/tucao', (req, res) => {
    let url = 'http://jandan.net/top-tucao'
    getTop(req, res, url)
});
// 4小时热门
router.get('/4h', (req, res) => {
    let url = 'http://jandan.net/top-4h'
    getTop(req, res, url)
});
// 3日最佳
router.get('/3days', (req, res) => {
    let url = 'http://jandan.net/top-3days'
    getTop(req, res, url)
});
// 7日最佳
router.get('/7days', (req, res) => {
    let url = 'http://jandan.net/top-7days'
    getTop(req, res, url)
});

module.exports = router