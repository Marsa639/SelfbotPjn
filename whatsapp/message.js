const {
	MessageType,
	Mimetype,
    WAConnection
} = require("@adiwajshing/baileys");
const fs = require('fs');
const conn = require('./connect');
const axios = require('axios');
const request = require('request');

const amoy = conn.amoy

exports.sendText = (from, text) => {
    amoy.sendMessage(from, text, MessageType.text)
}
exports.sendImage = (from, image) => { 	  
    amoy.sendMessage(from, image, MessageType.image, {quoted: pjn})	    
}                              	                
exports.reply = (from, text, pjn) => {
    amoy.sendMessage(from, text, MessageType.text, {quoted: pjn})
}
exports.sendSticker = (from, filename, pjn) => {
	amoy.sendMessage(from, filename, MessageType.sticker, {quoted: pjn})
}
exports.sendKontak = (from, nomor, nama) => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	amoy.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
}
exports.sendFakeStatus = (from, teks, caption, faketeks) => {
	amoy.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/marsa.jpeg`)} } }, caption: caption, contextInfo: {"forwardingScore": 999, "isForwarded": true} })
}
exports.FakeStatusForwarded = (from, teks, caption, faketeks) => {
	amoy.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/marsa.jpeg`)} } }, caption: caption, contextInfo: {"forwardingScore": 999, "isForwarded": true} })
}
exports.FakeStatusImgForwarded = (from, image, caption, faketeks) => {
	amoy.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/marsa.jpeg`)} } }, caption: caption, contextInfo: {"forwardingScore": 999, "isForwarded": true} })
}
exports.sendFakeStatusWithImg = (from, image, caption, faketeks) => {
	amoy.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/marsa.jpeg`)} } }, caption: caption, contextInfo: {" forwardingScore": 999, "isForwarded": true} })
}
exports.sendMention = (from, text, orangnya, pjn) => {
	amoy.sendMessage(from, text, MessageType.extendedText, {contextInfo: {mentionedJid: orangnya}, quoted: pjn})
}
exports.hideTag = async function(from, text){
	let anu = await amoy.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	amoy.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagImg = async function(from, image){
	let anu = await amoy.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	amoy.sendMessage(from, image, MessageType.image, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagSticker = async function(from, sticker){
	let anu = await amoy.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	amoy.sendMessage(from, sticker, MessageType.sticker, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagAudio = async function(from, audio){
	let anu = await amoy.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	amoy.sendMessage(from, audio, MessageType.audio, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagKontak = async function(from, nomor, nama){
	let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	let anu = await amoy.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	amoy.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
exports.FakeTokoForwarded = (from, teks, fake) => {
	anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/marsa.jpeg`)
					},
					"title": fake,
					"description": "Self MARSA",
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	amoy.sendMessage(from, teks, MessageType.text, {quoted: anu, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
exports.sendFakeToko = (from, teks, fake) => {
	anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/marsa.jpeg`)
					},
					"title": fake,
					"description": "Self MARSA",
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	amoy.sendMessage(from, teks, MessageType.text, {quoted: anu})
}
exports.sendFakeThumb = async function(from, url, title, desc, comnya, fotonya){
	var anoim = {
		detectLinks: false
	}
	var pjn = await amoy.generateLinkPreview(url)
	pjn.title = title
	pjn.description = desc
	pjn.jpegThumbnail = fotonya ? fotonya : fs.readFileSync(`./media/marsa.jpeg`)
	pjn.canonicaUrl = comnya
	amoy.sendMessage(from, pjn, MessageType.extendedText, anoim)
}
exports.sendFakeImg = function(from, imageasli, caption, thumbnail, pjn){
	let ai = {
		thumbnail: thumbnail ? thumbnail : fs.readFileSync(`./media/marsa.jpeg`),
		quoted: pjn ? pjn : ''
	}
	amoy.sendMessage(from, imageasli, MessageType.image, ai)
}
exports.sendMediaURL = async(to, url, text="", pjn, mids=[]) =>{
	if(mids.length > 0){
		text = normalizeMention(to, text, mids)
	}
	const fn = Date.now() / 10000;
	const filename = fn.toString()
	let mime = ""
	var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	download(url, filename, async function () {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0]+"Message"
		if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		}
		if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		}
		amoy.sendMessage(to, media, type, { quoted: pjn, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		
		fs.unlinkSync(filename)
	});
}
exports.getGroupAdmins = function(participants){
    admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
exports.setName = async function(query){
    const response = await amoy.updateProfileName(query)
    return response
}             
exports.setBio = async function(query){
    const response = await amoy.setStatus(query)
    return response
}
