const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const { color } = require('../lib/color')

const amoy = new WAConnection()
exports.amoy = amoy

exports.connect = async() => {
    let authofile = './Marsa.json'
	amoy.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(`Scan QRnya Ya!! Di Wa Web`)
    })
    /*
	amoy.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(amoy.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && amoy.loadAuthInfo(authofile)
	amoy.on('connecting', () => {
		console.log(color('Connecting...'))
	})
	amoy.on('open', () => {
		console.log(color('Welcome Owner'))
	})
	await amoy.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(amoy.base64EncodedAuthInfo(), null, '\t'))
    return amoy
}
