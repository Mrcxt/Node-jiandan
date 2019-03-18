/*
 * @Author: @虾哔哔 
 * @Date: 2019-03-18 14:05:08 
 * @Last Modified by: @虾哔哔
 * @Last Modified time: 2019-03-18 16:30:38
 */
const express = require('express');
const axios = require('axios');
const router = express.Router()


/**
 * @description 获取评论
 * @method post 
 * @url {*} '/' 
 * @params {*} 
 */
router.get('/:id', (req, res) => {
    let id = req.query.id
    let url = `http://jandan.net/tucao/${id}`;

    axios.get(url)
        .then(success => {
            res.json(success.data);
        })
        .catch(err => {
            res.json(err.data);
        })
});

module.exports = router