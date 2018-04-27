var express = require('express');
var router = express.Router();


const Datacrypt = require('../public/javascripts/Datacrypt')

const server = require('../public/javascripts/server')

const User = require('../public/javascripts/model/user')


/**
 * 做微信小程序登录接口，从微信服务器获取session_key
 */
router.get('/', async function (req, res, next) {
    let skey = await server.getSessionKey(req.body.code)
    res.render({ skey });
});

/**
 * 接收小程序userInfo中加密的参数
 * 将解密之后的数据存入数据库中
 */
router.get('/encrypted', async (req, res, next) => {
    let encryptedData = req.body.encryptedData
    let iv = req.body.iv
    const datacrypt = new Datacrypt(encryptedData, iv)
    // 将解密之后的数据存入数据库中
    let userInfo = await User.create(datacrypt)
})

module.exports = router;