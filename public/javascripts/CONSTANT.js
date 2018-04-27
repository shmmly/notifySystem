'use strict';
const PARAMS = {
    // url
    URL: {
        MEMBERURL: 'localhost:3000/members',
        //获取加密之后的key
        SKEYURL: 'localhost:3000/',
    },
    // 微信需要使用的信息
    WECAT: {
        APPID: 'wx213f15055d6406e7',
        APPSECRET: '1781e52d0e01f5d98364f5356fab84bd',
        SERVERURL: 'https://api.weixin.qq.com/sns/jscode2session'
    }
}
module.exports= PARAMS