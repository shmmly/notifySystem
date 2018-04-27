'use strict';
const express = require('express');
const router = express.Router();
const Member = require("../public/javascripts/model/member")


/**
 * 通过分页来初始化默认展示数据
 *
 */
router.post('/', async(req, res) => {
    let page = req.body.page
    let docs = await Member.find({}).skip(page * 5).limit(5)
    res.send(docs)
})


/**
 * 修改
 * @type {Router|router|*}
 */
router.patch('/', async(req, res) => {
    let memberId = req.body.id
    let member = {
            // name:req.body.
        }
        // let ret = await Member.findOneAndUpdate({})
})




module.exports = router;