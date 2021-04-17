const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
const fs = require("fs");
const { exec } = require('child_process');
const marsa = require('./whatsapp/message.js');
const speed = require('performance-now');
const ffmpeg = require('fluent-ffmpeg');
const conn = require('./whatsapp/connect');
const { color } = require('./lib/color');
const mess = JSON.parse(fs.readFileSync('./whatsapp/mess.json'));
const axios = require('axios');
const Exif = require('./lib/exif');
const exif = new Exif();

conn.connect()
const amoy = conn.amoy

fake = 'SelfbotPjn Marsa'
fakeimage = fs.readFileSync(`./media/marsa.jpeg`)
prefix = 'z'
public = false

amoy.on('message-new', async(pjn) => {
    try {
        if (!pjn.message) return
		if (pjn.key && pjn.key.remoteJid == 'status@broadcast') return

        global.prefix
		const content = JSON.stringify(pjn.message)
		const from = pjn.key.remoteJid
		const type = Object.keys(pjn.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		body = (type === 'conversation' && pjn.message.conversation.startsWith(prefix)) ? pjn.message.conversation : (type == 'imageMessage') && pjn.message.imageMessage.caption.startsWith(prefix) ? pjn.message.imageMessage.caption : (type == 'videoMessage') && pjn.message.videoMessage.caption.startsWith(prefix) ? pjn.message.videoMessage.caption : (type == 'extendedTextMessage') && pjn.message.extendedTextMessage.text.startsWith(prefix) ? pjn.message.extendedTextMessage.text : ''
		chats = (type === 'conversation') ? pjn.message.conversation : (type === 'extendedTextMessage') ? pjn.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = chats.slice(command.length + 2, chats.length)
		const idulfitri = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=13&bulan=5')
		const ucapan = await axios.get('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')
        const iduladha = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=19&bulan=7')
        const botNumber = amoy.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = pjn.key.fromMe ? amoy.user.jid : isGroup ? pjn.participant : pjn.key.remoteJid
		const totalchat = await amoy.chats.all()
		const groupMetadata = isGroup ? await amoy.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupAdmins = isGroup ? marsa.getGroupAdmins(groupMembers) : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const itsMe = sender === botNumber ? true : false
		const q = args.join(' ')
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}

        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (itsMe){
			if (chats.toLowerCase() === `${prefix}self`){
				public = false
				marsa.sendFakeStatus(from, `Sukses`, `Status: SELF`)
			}
			if (chats.toLowerCase() === 'status'){
				marsa.sendFakeStatus(from, `STATUS: ${public ? 'PUBLIC' : 'SELF'}`)
			}
		}
		if (!public){
			if (!pjn.key.fromMe) return
		}
		if (isCmd && !isGroup) {console.log(color('[CMD]'), color(moment(pjn.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))}
        if (isCmd && isGroup) {console.log(color('[CMD]'), color(moment(pjn.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(amoy.user.name), 'in', color(groupName))}
        switch (command) {
			case 'menu': case 'help':
				textnya = `*${ucapan.data.result}*

┏━━══━━《 *MPRBOT︎* 》━━══━━	
┃
┣◪ ❏ 𝗜𝗡𝗙𝗢 ❏
┃ ❏ Prefix: 「 ${prefix} 」
┃ ❏ Selfbot 「 𝗠𝗮𝗿𝘀𝗮 」 
┃
┃ ❏ Mystat
┃
┃ ❏ => ${idulfitri.data.result}
┃   𝗪𝗔𝗞𝗧𝗨 𝗠𝗘𝗡𝗨𝗝𝗨 𝗟𝗘𝗕𝗔𝗥𝗔𝗡
┃    
┃
┃ ❏ => ${iduladha.data.result}
┃   𝗪𝗔𝗞𝗧𝗨 𝗠𝗘𝗡𝗨𝗝𝗨 𝗜𝗗𝗨𝗟 𝗔𝗗𝗛𝗔
┃
┣◪ ❏ 𝗦𝗧𝗔𝗧𝗨𝗦 ❏
┣➥ Self
┣➥ Public
┃
┣◪ ❏ 𝗠𝗘𝗡𝗨 ❏
┣➥ ${prefix}sticker
┣➥ ${prefix}swm nama|author
┣➥ ${prefix}takestick nama|author
┣➥ ${prefix}colong <reply stiker>
┣➥ ${prefix}hidetag <teks>
┣➥ ${prefix}stickertag
┣➥ ${prefix}imgtag
┣➥ ${prefix}kontaktag
┣➥ ${prefix}runtime
┣➥ ${prefix}speed
┣➥ ${prefix}kontak 
┣➥ ${prefix}term
┣➥ ${prefix}setreply
┣➥ ${prefix}setprefix
┣➥ ${prefix}setname
┣➥ ${prefix}setbio
┣➥ ${prefix}fdeface
┣➥ ${prefix}fakethumbnail
┣➥ ${prefix}setthumb
┣➥ ${prefix}getpic
┣➥ ${prefix}toimg
┣➥ ${prefix}spam
┣➥ ${prefix}shutdown
┣➥ ${prefix}promote
┣➥ ${prefix}demote
┣➥ ${prefix}add
┣➥ ${prefix}kick
┃
┗━━══━━《 𝐌𝐏𝐑𝐁𝐎𝐓 》━━══━━`
				marsa.sendFakeStatusWithImg(from, fakeimage, textnya, fake)
				break
            case 'test':
                marsa.sendText(from, 'oke')
				break
			
			case 'exif':
				if (args.length < 1) return marsa.reply(from, `Penggunaan ${prefix}exif nama|author`, pjn)
				if (!arg.split('|')) return marsa.reply(from, `Penggunaan ${prefix}exif nama|author`, pjn)
				exif.create(arg.split('|')[0], arg.split('|')[1])
				marsa.reply(from, 'sukses', pjn)
				break
			case 'sticker':
			case 'stiker':
			case 's':
				if (isMedia && !pjn.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(pjn).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : pjn
					const media = await amoy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								marsa.reply(from, mess.error.api, pjn)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return marsa.reply(from, mess.error.api, pjn)
									marsa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), pjn)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && pjn.message.videoMessage.fileLength < 10000000 || isQuotedVideo && pjn.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(pjn).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : pjn
					const media = await amoy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					marsa.reply(from, mess.wait, pjn)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								marsa.reply(from, mess.error.api, pjn)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return marsa.reply(from, mess.error.api, pjn)
									marsa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), pjn)
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					marsa.reply(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, pjn)
				}
				break
			case 'swm':
			case 'stickerwm':
				if (isMedia && !pjn.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return marsa.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, pjn)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(pjn).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : pjn
					const media = await amoy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								marsa.reply(from, mess.error.api, pjn)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return marsa.reply(from, mess.error.api, pjn)
									marsa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), pjn)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && pjn.message.videoMessage.fileLength < 10000000 || isQuotedVideo && pjn.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					if (!arg.includes('|')) return marsa.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, pjn)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(pjn).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : pjn
					const media = await amoy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					marsa.reply(from, mess.wait, pjn)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								marsa.reply(from, mess.error.api, pjn)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return marsa.reply(from, mess.error.api, pjn)
									marsa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), pjn)									
									fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
									fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				} else {
					marsa.reply(from, `Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, id)
				}
				break
			case 'takestick':
				if (!isQuotedSticker) return marsa.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, pjn)
				const pembawm = body.slice(11)
				if (!pembawm.includes('|')) return marsa.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, pjn)
				const encmedia = JSON.parse(JSON.stringify(pjn).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await amoy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = pembawm.split('|')[0]
				const author = pembawm.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return marsa.reply(from, mess.error.api, pjn)
					marsa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), pjn)
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
			case 'colong':
				if (!isQuotedSticker) return marsa.reply(from, `Reply sticker dengan caption *${prefix}colong*`, pjn)
				const encmediia = JSON.parse(JSON.stringify(pjn).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const meidia = await amoy.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return marsa.reply(from, mess.error.api, pjn)
					marsa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), pjn)
					fs.unlinkSync(meidia)
				})
				break
			case 'upstatus'://DhyZx
				if (!q) return reply(`Kirim ${prefix}upstatus Textnya`)
				marsa.sendMessage('status@broadcast', `${q}`, extendedText)
				reply(`Done Up Status: ${q}`)
				break
			case 'hidetag':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}hidetag teks`, pjn)
				marsa.hideTag(from, arg)
				break
			case 'runtime':
				run = process.uptime()
				let text = marsa.runtime(run)
				marsa.sendFakeStatus(from, text, `Runtime bro`)
				break
			case 'speed': 
			case 'ping':
				let timestamp = speed();
				let latensi = speed() - timestamp
				marsa.sendFakeStatus(from, `Speed: ${latensi.toFixed(4)}second`, fake)
				break
			
			case 'kontak':
				argz = arg.split('|')
				if (!argz) return marsa.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, pjn)
				if (pjn.message.extendedTextMessage != undefined){
                    mentioned = pjn.message.extendedTextMessage.contextInfo.mentionedJid
					marsa.sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					marsa.sendKontak(from, argz[0], argz[1])
				}
				break
			case 'term':
				if (!arg) return
				exec(arg, (err, stdout) => {
					if (err) return marsa.sendFakeStatus(from, err, fake)
					if (stdout) marsa.sendFakeStatus(from, stdout, fake)
				})
				break
			case 'setreply':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}setreply teks`, pjn)
				fake = arg
				marsa.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'setprefix':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}setprefix prefix`, pjn)
				prefix = arg
				marsa.sendFakeStatus(from, `Prefix berhasil diubah menjadi ${prefix}`, fake)
				break
			case 'setname':
				if (!arg) return marsa.reply(from, 'masukkan nama', pjn)
				marsa.setName(arg)
				.then((res) => marsa.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => marsa.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'setbio':
				if (!arg) return marsa.reply(from, 'masukkan bio', pjn)
				marsa.setBio(arg)
				.then((res) => marsa.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => marsa.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'fdeface': 
			case 'hack':
				if (!arg) return marsa.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|SelfbotPjn|By Marsa|https://marsa.com`, pjn)
				argz = arg.split("|")
				if (!argz) return marsa.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|SelfbotPjn|By Marsa|https://marsa.com`, pjn)
				if ((isMedia && !pjn.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(pjn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : pjn
					let media = await amoy.downloadMediaMessage(encmedia)
					marsa.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					marsa.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
			case 'fakethumbnail': 
			case 'fthumbnail': 
			case 'fakethumb':
				if ((isMedia && !pjn.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(pjn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : pjn
					let media = await amoy.downloadMediaMessage(encmedia)
					marsa.sendFakeImg(from, media, arg, fakeimage, pjn)
				} else {
					marsa.reply(from, `Kirim gambar atau reply dengan caption ${prefix}fakethumb caption`, pjn)
				}
				break
			case 'setthumb':
				boij = JSON.parse(JSON.stringify(pjn).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await amoy.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/marsa.jpeg`, delb)
				marsa.sendFakeStatus(from, `Sukses`, fake)
				break
			case 'getpic':
				if (pjn.message.extendedTextMessage != undefined){
					mentioned = pjn.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await amoy.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await marsa.getBuffer(pic)
					amoy.sendMessage(from, thumb, MessageType.image)
				}
				break
			case 'imgtag':
				if ((isMedia && !pjn.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(pjn).replace('quotedM','m')).message.extendedTextMessage.contextInfo : pjn
					let media = await amoy.downloadMediaMessage(encmedia)
					marsa.hideTagImg(from, media)
				} else {
					marsa.reply(from, `Kirim gambar atau reply dengan caption ${prefix}imgtag caption`, pjn)
				}
				break
			case 'sticktag':
			case 'stickertag':
				if (!isQuotedSticker) return marsa.reply(from, `Reply sticker dengan caption *${prefix}stickertag*`, pjn)
				let encmediai = JSON.parse(JSON.stringify(pjn).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let mediai = await amoy.downloadMediaMessage(encmediai)
				marsa.hideTagSticker(from, mediai)
				break
			case 'kontaktag':
				argz = arg.split('|')
				if (!argz) return marsa.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, pjn)
				if (pjn.message.extendedTextMessage != undefined){
                    		mentioned = pjn.message.extendedTextMessage.contextInfo.mentionedJid
					marsa.hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					marsa.hideTagKontak(from, argz[0], argz[1])
				}
				break
			case 'tahta':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}tahta teks`, pjn)
				marsa.sendMediaURL(from, `https://api.zeks.xyz/api/hartatahta?text=${arg}&apikey=apivinz`)
				break
			case 'pubg':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, pjn)
				argz = arg.split("|")
				if (!argz) return marsa.reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, pjn)
				axios.get(`https://xinzbot-api.herokuapp.com/api/textmaker/game?text=${argz[0]}&text2=${argz[1]}&theme=pubg&apikey=XinzBot`)
				.then((res) => marsa.sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					marsa.reply(from, mess.error.api, pjn)
				})
				break
			case 'toimg':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (pjn.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					marsa.reply(from, `Maaf tidak mendukung sticker gif`, pjn)
				} else {
					const encmedia = JSON.parse(JSON.stringify(pjn).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await amoy.downloadAndSaveMediaMessage(encmedia)
					ran = marsa.getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							marsa.reply(from, `gagal`, pjn)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							amoy.sendMessage(from, buffer, image, {quoted: pjn, caption: 'NIH'})
							fs.unlinkSync(ran)
						}
					})
				}
				break
			case 'shutdown':
				await marsa.FakeTokoForwarded(from, `Bye...`, fake)
				await marsa.sleep(5000)
				amoy.close()
				break
			case 'spam':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, pjn)
				argz = arg.split("|")
				if (!argz) return marsa.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, pjn)
				if (isNaN(argz[1])) return marsa.reply(from, `harus berupa angka`, pjn)
				for (let i = 0; i < argz[1]; i++){
					marsa.sendText(from, argz[0])
				}
				break
			case 'promote':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}promote @tag atau nomor`, pjn)
				if (pjn.message.extendedTextMessage != undefined){
                   		mentioned = pjn.message.extendedTextMessage.contextInfo.mentionedJid
					await marsa.FakeTokoForwarded(from, `sukses`, fake)
					marsa.promote(from, mentioned)
				} else {
					await marsa.FakeTokoForwarded(from, `sukses`, fake)
					marsa.promote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'demote':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}demote @tag atau nomor`, pjn)
				if (pjn.message.extendedTextMessage != undefined){
                   		mentioned = pjn.message.extendedTextMessage.contextInfo.mentionedJid
					await marsa.FakeTokoForwarded(from, `sukses`, fake)
					marsa.demote(from, mentioned)
				} else {
					await marsa.FakeTokoForwarded(from, `sukses`, fake)
					marsa.demote(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'kick':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}kick @tag atau nomor`, pjn)
				if (pjn.message.extendedTextMessage != undefined){
                   		mentioned = pjn.message.extendedTextMessage.contextInfo.mentionedJid
					await marsa.FakeTokoForwarded(from, `Bye...`, fake)
					marsa.kick(from, mentioned)
				} else {
					await marsa.FakeTokoForwarded(from, `Bye...`, fake)
					marsa.kick(from, [args[0] + '@s.whatsapp.net'])
				}
				break
			case 'add':
				if (!arg) return marsa.reply(from, `Penggunaan ${prefix}kick 628xxxx`, pjn)
				marsa.add(from, [args[0] + '@s.whatsapp.net'])
				marsa.FakeTokoForwarded(from, `Sukses`, fake)
				break
			default:
		if (budy == 'Public') {	
				public = true
				marsa.sendFakeStatus(from, `Mode PUBLIC Telah Diaktifkan`, fake)
				}
											
		if (budy == 'Self') {	
				public = false
				marsa.sendFakeStatus(from, `Mode SELF Telah Diaktifkan`, fake)
				}
		if (budy == 'Mystat') {	
				let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xinz.user.phone
                anu = process.uptime()
                teskny = `* Whatsapp Version :* ${wa_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}

*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${marsa.runtime(anu)}`
				marsa.sendFakeStatus(from, teskny, fake)
			}
			
				if (chats.startsWith('>')){
					console.log(color('[EVAL]'), color(moment(pjn.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
                	return marsa.reply(from, JSON.stringify(eval(chats.slice(2)), null, 2), pjn)
				}
				break
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
})
