/*
 * @Author: @虾哔哔 
 * @Date: 2019-03-18 11:29:03 
 * @Last Modified by: @虾哔哔
 * @Last Modified time: 2019-03-20 10:36:29
 */
const express = require('express');
const axios = require('axios');
const router = express.Router()


/**
 * @description 妹子图
 * @method GET
 * @url {*} '/duan'
 * @params {*} page
 */
router.get('/', (req, res) => {
    let url = 'http://i.jandan.net/';
    let params = {
        oxwlxojflwblxbsapi: "jandan.get_ooxx_comments",
        page: req.query.page || 1
    }
    axios.get(url, {
            params: params
        })
        .then(success => {
            res.json(success.data);
        })
        .catch(err => {
            res.json(err.data);
        })
});

module.exports = router