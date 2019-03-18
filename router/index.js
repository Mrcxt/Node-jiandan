/*
 * @Author: @虾哔哔 
 * @Date: 2019-03-18 11:29:03 
 * @Last Modified by: @虾哔哔
 * @Last Modified time: 2019-03-18 14:57:20
 */
const express = require('express');
const axios = require('axios');
const router = express.Router()


/**
 * @description 段子
 * @method GET
 * @url {*} '/duan'
 * @params {*} page
 */
router.get('/', (req, res) => {
    let url = 'http://i.jandan.net/';
    let params = {
        oxwlxojflwblxbsapi: "jandan.get_duan_comments",
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