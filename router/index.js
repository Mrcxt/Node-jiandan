const express = require('express');
const axios = require('axios');
const router = express.Router()


/**
 * @description 首页
 * @url {*} '/'
 * @params {*} page
 */
router.get('/', (req, res) => {
    let url = 'http://i.jandan.net/';
    let params = {
        oxwlxojflwblxbsapi: "jandan",
        page: req.query.page || 1
    }
    axios.get(url, {
            params: params
        })
        .then(success => {
            res.json(success.data);
        })
        .catch(err => {
            console.error(err);
        })
});

module.exports = router