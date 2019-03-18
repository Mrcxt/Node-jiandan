/*
 * @Author: @虾哔哔 
 * @Date: 2019-03-18 14:05:08 
 * @Last Modified by: @虾哔哔
 * @Last Modified time: 2019-03-18 14:34:45
 */
const express = require('express');
const axios = require('axios');
const router = express.Router()


/**
 * @description 发表评论
 * @method post
 * @url {*} '/'
 * @params {*} 
 */
router.post('/', (req, res) => {
    let url = `http://jandan.net/jandan-tucao.php`;
    let params = {
        author: req.body.author || null,
        email: req.body.email || null,
        content: req.body.content || null,
        comment_id: req.body.comment_id || null,
        comment_post_ID: req.body.comment_post_ID || null // 可选，问答区二级评论
    }

    axios.post(url, params)
        .then(success => {
            res.json(success.data);
        })
        .catch(err => {
            res.json(err.data);
        })
});

module.exports = router