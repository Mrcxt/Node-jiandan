/*
 * @Author: @虾哔哔 
 * @Date: 2019-03-18 11:29:03 
 * @Last Modified by: @虾哔哔
 * @Last Modified comment_date: 2019-03-19 10:51:43
 */
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio')
const puppeteer = require('puppeteer');

const formatString = require('../until/formatString')

// 
const router = express.Router()


/**
 * @description 详情页
 * @method GET
 * @url {*} '/t/'
 * @params {*}
 */



// 
async function getDetails(req, res, url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const ele = await page.content();
    const $ = cheerio.load(ele)
    const body = $('#body #content');
    // 
    let title = $(body).find('.title').html(); //标题
    let author = $(body).find('.comment-topic>b').html(); // 作者
    // 内容
    let _content = $(body).find('.comment-topic>p').clone();
    $(_content).find('a').eq(0).remove()
    let content = $(_content).html()

    await browser.close();

    res.json({
        title: formatString(title),
        author: formatString(author),
        content: formatString(content)
    })

}


// router
// 无聊图
router.get('/:id', (req, res) => {
    let id = req.params.id
    let url = `http://jandan.net/t/${id}`
    getDetails(req, res, url)

});


module.exports = router