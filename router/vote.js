/*
 * @Author: @虾哔哔 
 * @Date: 2019-03-18 14:05:08 
 * @Last Modified by: @虾哔哔
 * @Last Modified time: 2019-03-18 15:26:18
 */
const express = require('express');
const axios = require('axios');
const router = express.Router()


/**
 * @description 投票
 * @method post
 * @url {*} '/'
 * @params {*} 
 */

// 点 OO
router.post('/', (req, res) => {
    let url = `http://jandan.net/jandan-vote.php`;
    let params = {
        comment_id: req.body.comment_id,
        like_type: req.body.like_type || "pos", // pos是点OO，neg是点XX
        data_type: 'tucao'
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