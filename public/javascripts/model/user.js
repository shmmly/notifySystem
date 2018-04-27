'use strict';
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    // 微信标识用户唯一id
    openid: {
        type: String
    },
    // 昵称
    nickname: {
        type: String
    },
    // 头像地址
    avatarurl: {
        type: String
    },
    sex: {
        type: Number //0 男性 1女性 2未知
    },
    province: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    }
})

module.exports = mongoose.model('users', userSchema)