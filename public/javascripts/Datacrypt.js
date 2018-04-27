const crypto = require('crypto')

class Datacrypt {

    constructor(appId, sessionKey) {
        this.appId = appId
        this.sessionKey = sessionKey
    }

    decryptData(encryptedData, iv) {
        let sessionKey = new Buffer(this.sessionKey, 'base64')
        encryptedData = new Buffer(encryptedData, 'base64')
        iv = new Buffer(iv, 'base64')
        try {
            let decipher = crypto.createCipheriv('aes-128-cbc', sessionKey, iv)
            decipher.setAutoPadding(true)
            let decoded = decipher.update(encryptedData, 'binary', 'uft8')
            decoded += decipher.final('uft8')
            decoded = JSON.parse(decoded)
        } catch (error) {
            throw new Error('Illegal Buffer')
        }
        if (decoded.watermark.appid !== this.appId) {
            throw new Error('Illegal Buffer')
        }
    }
}

module.exports = Datacrypt