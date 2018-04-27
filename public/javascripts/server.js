'use strict';
const axios = require('axios')
const crypto = require('crypto')
const Params = require('./CONSTANT')


const server = {
    /**
     * 从后台获取session_key
     * @param {*} code 前台传递过来的
     * @param {*} appid 微信生成的appid
     * @param {*} appSecret 微信生成的secret
     */
    getSessionKey(code) {
        return new Promise((resolve, reject) => {
            let param = {
                appid: PARAMS.WECAT.APPID,
                seret: PARAMS.WECAT.APPSECRET,
                js_code: code,
                grant_type: 'authorization_code'
            }
            axios.get(PARAMS.WECAT.SERVERURL, param).then(res => {
                let data = res.data
                if (!data.openid || !data.session_key || data.errcode) {
                    resolve({
                        result: -2,
                        errmsg: data.errmsg || '返回数据字段不完整'
                    })
                } else {
                    // 返回加密之后的session_key 给前台
                    resolve(encryptSha1(data.session_key))
                }
            }).catch(error => {
                reject(error)
            })
        })
    }

}

/**
 *  对session_key 加密
 */
function encryptSha1(data) {
    return crypto.createHash('sha1').update(data, 'utf8').digest('hex')
}

module.exports = server;