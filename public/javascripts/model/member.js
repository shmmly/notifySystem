'use strict';
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let memberSchema = new Schema({
    // 对应user的id
    userid: {
        type: String
    },
    name: {
        type: String
    },
    sex: {
        type: Number //0 男性 1女性 2未知
    },
    age: {
        type: Number
    },
    birthday: {
        type: Date
    },
    tel: {
        type: String
    },
    isAlert: {
        type: Number,
        default: 0 // 0提醒,1不提醒
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('members', memberSchema)