/*
]=====> M e M a n s ッ <=====[ 
GW MALES RAPIHIN ANJING CAPEK GBLG
KALO ADA YG ERROR / BUG LAPOR ASU
MAU BETAK YA LO KONTOL ANJING KASIH TQTO
GW KALO MAU BETAK BGSD NYOLONG BGSD
LO TAU GK GW NIH CAPEK AJG
MAU NANYA NANYA CHAT GW DI WA
]=====> M e M a n s ッ <=====[ 
*/
const {
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
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { virtex } = require('./src/virtex')
const { virtex2 } = require('./src/virtex2')
const { animesaran } = require('./src/animesaran')
const { asupan } = require('./src/asupan')
const { animesaran2 } = require('./src/animesaran2')
const { cara } = require('./src/cara')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const brainly = require('brainly-scraper')
const speed = require('performance-now')
const os = require('os')
const ffmpeg = require('fluent-ffmpeg')
const phoneNum = require('awesome-phonenumber')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
/*
]=====> KONTAK <=====[
*/
const vcard = 'BEGIN:VCARD\n' + // JANGAN DIGANTI
    'VERSION:3.0\n' + // JANGAN DIGANTI
    'FN:Sequen\n' + // GANTI NAMA BOT LO
    'ORG:Sequen Bot;\n' + // GANTI NAMA OWNER LO
    'TEL;type=CELL;type=VOICE;waid=6289689542663:+6289689542663\n' + // GANTI NOMOR OWNER LO
    'END:VCARD' // JANGAN DIGANTI
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log("idk"));
/*
]=====> BATAS <=====[
*/
prefix = '+' // GANTI PREFIX YANG LU MAU
battre = 85 // JANGAN DIGANTI
blocked = [] // JANGAN DIGANTI
limitawal = 9999999 // JANGAN DIGANTI
memberlimit = 1 // JANGAN DIGANTI

fake = '*「 Sequen Bot 」*' // GANTI NAMA BOT LU
numbernye = '0' // JANGAN DIGANTI
targetprivate = '6289689542663' // JANGAN DIGANTI
ghoibsu = 'tes' // JANGAN DIGANTI
myteks = 'okeh nyala' // JANGAN DIGANTI
blocked = [] // JANGAN DIGANTI
/*
]=====> NOMOR OWNER <=====[
*/
const ownerNumber = ["6289689542663@s.whatsapp.net", "62882248593502@s.whatsapp.net"] // GANTI NOMOR OWNER LO
const premiumNumber = JSON.parse(fs.readFileSync('./database/user/premium.json')) // BUKA DI DATABASE USER PREMIUM.JSON
/*
]=====> NAMA BOT / NAMA OWNER <=====[
*/
const botName = 'Sequen Bot' // GANTI NAMA BOT LO
const ownerName = 'Sequen' // GANTI NAMA OWNER LO
/*
]=====> APIKEY <=====[
*/
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa' 
const VhtearKey = '1BlnApiIkyPake' // KALO ABIS BELI GBLG
const XteamKey = 'AbilGanss' // KALO ABIS BELI GBLG
const TobzKey = 'Bidmzz1sJ2L1TKyqaMEU'
const ApiDevolover = 'HokageBR' // KALO GKBISA BELI GBLG
const TechApi = '5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ'
const zeksapi = 'apivinz'
const shizukaapi = 'itsmeiky633'
const apivhtear = '1BlnApiIkyPake' // KALO ABIS BELI GBLG
const lolhuman = 'yogipwlolkey' // KALO GK BISA LU KE WEBNYA LAH TOLOL KAN GRATIS
const l0lhuman = 'hEro'
    /*
    ]=====> SC BY ITSMAZGH <=====[
    */
    //SUBREK JUGA ITSMAZGH:V
    //WA GW 0882248593508
    /*       
    ]=====> LOAD JSON <=====[
    */
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const afk = JSON.parse(fs.readFileSync('./src/afk.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antixnxx = JSON.parse(fs.readFileSync('./database/group/antixnxx.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))

/*       
]=====> LOAD MENU <=====[
*/
const { iklan } = require('./lib/iklan')
const { rules } = require('./lib/rules')
const { tnc } = require('./lib/tnc')
const { simple } = require('./database/menu/simple')
const { gabut } = require('./database/menu/gabut')
const { groupm } = require('./database/menu/group')
const { download } = require('./database/menu/download')
const { dompet } = require('./database/menu/dompet')

const { random } = require('./database/menu/random')
const { other } = require('./database/menu/other')
const { owb } = require('./database/menu/owb')
const { maker } = require('./database/menu/maker')
const { sound } = require('./database/menu/sound')
    /*
    ]=====> FUNCTION <=====[
    */
const getLevelingXp = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}

const getLevelingLevel = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}

const getLevelingId = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].id
    }
}

const addLevelingXp = (sender, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
    }
}

const addLevelingLevel = (sender, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
    }
}

const addLevelingId = (sender) => {
    const obj = { id: sender, xp: 1, level: 1 }
    _level.push(obj)
    fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}

const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
    const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
    _registered.push(obj)
    fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === sender) {
            status = true
        }
    })
    return status
}

const addATM = (sender) => {
    const obj = { id: sender, uang: 0 }
    uang.push(obj)
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang += amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}

const checkATMuser = (sender) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return uang[position].uang
    }
}

const bayarLimit = (sender, amount) => {
    let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

const confirmATM = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}

const limitAdd = (sender) => {
    let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 1
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}


function kyun(seconds) {
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
    return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> SCAN QR <=====[
*/

const mans = new WAConnection()
mans.logger.level = 'warn'
console.log(banner.string)
mans.on('qr', () => {
    console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color(' POWERED BY ITSMAZGH'))
})
mans.on('credentials-updated', () => {
    fs.writeFileSync('./session.json', JSON.stringify(mans.base64EncodedAuthInfo(), null, '\t'))
    info('2', 'Login Info Updated')
})
fs.existsSync('./session.json') && mans.loadAuthInfo('./session.json')
mans.on('connecting', () => {
    start('2', 'ITSMAZGH Connecting...')
})
mans.on('open', () => {
    success('2', 'ITSMAZGH Connected')
})
mans.connect({ timeoutMs: 30 * 1000 })

//Welcome IMAGE MAGICK
mans.on('group-participants-update', async(chat) => {
		if (!welkom.includes(chat.jid)) return
        try {
            mem = chat.participants[0]
            console.log(chat)
            try {
                var pp_user = await mans.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
           }
            if (chat.action == 'add') {
                ini_user = mans.contacts[mem]
                ini_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${lolhuman}&img=${pp_user}&text=${ini_user.notify}`)
                group_info = await mans.groupMetadata(chat.jid)
                welkam = `*〔 WELCOME IN GC ${group_info.subject} 〕*\n╭━━━━━━━━━━━━━━━━━━━━ \n┃ *➣ Nama   :* \n┃ *➣ Umur   :* \n┃ *➣ Askot   :* \n┃ *➣ Gender :* \n┃ *➣ Insta    :* \n╰━━━━━━━━━━━━━━━━━━━━\n @${mem.split('@')[0]} Intro/Dikick!!!`
                mans.sendMessage(chat.jid, ini_img, MessageType.image, { caption: welkam, contextInfo: {"mentionedJid": [mem]} })
            }
            try {
                var pp_usere = await mans.getProfilePicture(mem)
            } catch (e) {
                var pp_usere = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
           }
            if (chat.action == 'remove') {
                ini_user = mans.contacts[mem]
                group_indo = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${lolhuman}&img=${pp_usere}&text=${ini_user.notify}`)
                ini_out = `*SELAMAT TINGGAL @${mem.split('@')[0]}* \nJasamu akan saya kubur dalam dalam`
                mans.sendMessage(chat.jid, group_indo, MessageType.image, {caption: ini_out, contextInfo: {"mentionedJid": [mem]}})
            }
        } catch (e) {
            console.log('Error :', e)
        }
    })
//Welcome Biasa
/*
mans.on('group-participants-update', async(anu) => {
    if (!welkom.includes(anu.jid)) return
    try {
        const mdata = await mans.groupMetadata(anu.jid)
        console.log(anu)
        if (anu.action == 'add') {
            num = anu.participants[0]
            try {
                ppimg = await mans.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            teks = `*〔 WELCOME IN GC ${mdata.subject} 〕*\n╭━━━━━━━━━━━━━━━━━━━━ \n┃ *➣ Nama   :* \n┃ *➣ Umur   :* \n┃ *➣ Askot   :* \n┃ *➣ Gender :* \n┃ *➣ Insta    :* \n╰━━━━━━━━━━━━━━━━━━━━\n @${num.split('@')[0]} Intro/Dikick!!!`
            let buff = await getBuffer(ppimg)
            mans.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
        } else if (anu.action == 'remove') {
            num = anu.participants[0]
            try {
                ppimg = await mans.getProfilePicture(`${num.split('@')[0]}@c.us`)
            } catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            teks = `*SELAMAT TINGGAL @${num.split('@')[0]}* \nJasamu akan saya kubur dalam dalam`
            let buff = await getBuffer(ppimg)
            mans.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
        }
    } catch (e) {
        console.log('Error : %s', color(e, 'red'))
    }
})
*/

mans.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})

mans.on('message-update', async(mek) => {
    try {
        const from = mek.key.remoteJid
        const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
        const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        const sender = mek.key.fromMe ? mans.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
        const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
        const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
        const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (messageStubType == 'REVOKE') {
            console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
            if (!isRevoke) return
            if (!isCtRevoke) return
            if (!isBanCtRevoke) return
            const from = mek.key.remoteJid
            const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
            let int
            let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
            const id_deleted = mek.key.id
            const conts = mek.key.fromMe ? mans.user.jid : mans.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? mans.user.name : conts.notify || conts.vname || conts.name || '-'
            const opt4tag = {
                contextInfo: { mentionedJid: [sender] }
            }
            for (let i = 0; i < infoMSG.length; i++) {
                if (infoMSG[i].key.id == id_deleted) {
                    const dataInfo = infoMSG[i]
                    const type = Object.keys(infoMSG[i].message)[0]
                    const timestamp = infoMSG[i].messageTimestamp
                    int = {
                        no: i,
                        type: type,
                        timestamp: timestamp,
                        data: dataInfo
                    }
                }
            }
            const index = Number(int.no)
            const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
            const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
            var itsme = `${numbernye}@s.whatsapp.net`
            var split = `${fake}`
                // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var selepbot72 = {
                contextInfo: {
                    participant: itsme,
                    quotedMessage: {
                        extendedTextMessage: {
                            text: split,
                        }
                    }
                }
            }
            if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                const strConversation = `		 「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Text
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
➣ *Pesan :* ${body ? body : '-'}`
                mans.sendMessage(from, strConversation, MessageType.text, selepbot72)
            } else if (int.type == 'stickerMessage') {
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
                const pingbro23 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await mans.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
                const strConversation = `		 「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Sticker
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

                const buff = fs.readFileSync(savedFilename)
                mans.sendMessage(from, strConversation, MessageType.text, opt4tag)
                mans.sendMessage(from, buff, MessageType.sticker, pingbro23)
                    // console.log(stdout)
                fs.unlinkSync(savedFilename)

            } else if (int.type == 'imageMessage') {
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
                const pingbro22 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await mans.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
                const buff = fs.readFileSync(savedFilename)
                const strConversation = `	 「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Image
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
➣ *Pesan :* ${body ? body : '-'}\`\`\``
                mans.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
                fs.unlinkSync(savedFilename)
            }
        }
    } catch (e) {
        console.log('Message : %s', color(e, 'green'))
            // console.log(e)
    }
})

mans.on('message-new', async(mek) => {
    try {
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
        infoMSG.push(JSON.parse(JSON.stringify(mek)))
        fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
        const urutan_pesan = infoMSG.length
        if (urutan_pesan === 5000) {
            infoMSG.splice(0, 4300)
            fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
        }
        if (!mek.key.fromMe && mek.key.fromMe) return
        global.prefix
        global.blocked
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
        const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
        const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'audioMessage') && mek.message.audioMessage.caption ? mek.message.audioMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'audioMessage') && mek.message.audioMessage.caption.startsWith(prefix) ? mek.message.audioMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const tescuk = ["0@s.whatsapp.net"]
        const isGroup = from.endsWith('@g.us')
        const totalchat = await mans.chats.all()
        const q = args.join(' ')
        const botNumber = mans.user.jid
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        pushname = mans.contacts[sender] != undefined ? mans.contacts[sender].vname || mans.contacts[sender].notify : undefined
        const groupMetadata = isGroup ? await mans.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

        /*
        ]=====> ITSMAZGH <=====[
        */
        const isEventon = isGroup ? event.includes(from) : false
        const isRegistered = checkRegisteredUser(sender)
        const isBanned = ban.includes(sender)
        const isBadWord = isGroup ? badword.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiXnxx = isGroup ? antixnxx.includes(from) : false
        const isAntiFirtex = isGroup ? antifirtex.includes(from) : false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isSimi = isGroup ? samih.includes(from) : false
        const isOwner = ownerNumber.includes(sender)
        const isPremium = premiumNumber.includes(sender)
        const isImage = type === 'imageMessage'
        const isAudio = type === 'audioMessage'
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        mans.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                battre = batterylevel
        })
        const reply = (teks) => {
            mans.sendMessage(from, teks, text, { quoted: mek })
        }
        const sendMess = (hehe, teks) => {
            mans.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? mans.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }): mans.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendImage = (teks) => {
            mans.sendMessage(from, teks, image, { quoted: mek })
        }
        const costum = (pesan, tipe, target, target2) => {
            mans.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
        }
        const sendPtt = (teks) => {
            mans.sendMessage(from, audio, mp3, { quoted: mek })
        }
        async function faketoko(teks, url_image, title, code, price) {
            var punya_wa = "0@s.whatsapp.net"
            var ini_buffer = await getBuffer(url_image)
            const ini_cstoko = {
                contextInfo: {
                    participant: punya_wa,
                    remoteJid: 'status@broadcast',
                    quotedMessage: {
                        productMessage: {
                            product: {
                                currencyCode: code,
                                title: title,
                                priceAmount1000: price,
                                productImageCount: 1,
                                productImage: {
                                    jpegThumbnail: ini_buffer
                                }
                            },
                            businessOwnerJid: "0@s.whatsapp.net"
                        }
                    }
                }
            }
            mans.sendMessage(from, teks, text, ini_cstoko)
        }

        /*
        ]=====> ANTIVIRTEX <======[
        */
        if (messagesC.includes("://*9999999* /")) {
            if (!isGroup) return
            if (!isAntiFirtex) return
            if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
            mans.updatePresence(from, Presence.composing)
            if (mesejAnti.includes("#izinkak")) return reply("Iya kak jangan spam ya")
            var kick = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti virtek, siap siap kamu di kick`)
            setTimeout(() => {
                mans.groupRemove(from, [kic]).catch((e) => { reply(`*𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 ~ HARUS JADI ADMIN*`) })
            }, 3000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("Hedsot....")
            }, 2000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("Bismillah...")
            }, 1000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("Ready? goo..")
            }, 0)
        }
        /*
        ]=====> ANTILINK <=====[
        */
        if (messagesC.includes("://chat.whatsapp.com/")) {
            if (!isGroup) return
            if (!isAntiLink) return
            if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
            mans.updatePresence(from, Presence.composing)
            if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
            setTimeout(() => {
                mans.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
            }, 3000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("1detik")
            }, 2000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("2detik")
            }, 1000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("3detik")
            }, 0)
        }
         /*
        ]=====> ANTIXNXX <=====[
        */
        if (messagesC.includes("://www.xnxx.com/")) {
            if (!isGroup) return
            if (!isAntiXnxx) return
            if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
            mans.updatePresence(from, Presence.composing)
            if (messagesC.includes("#izinbre")) return reply("#izinbre diterima")
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Link Xnxx Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
            setTimeout(() => {
                mans.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
            }, 3000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("1detik")
            }, 2000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("2detik")
            }, 1000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("3detik")
            }, 0)
        }
        /*
        ]=====> ANTIXNXX1 <=====[
        */
        if (messagesC.includes("xnxx.com")) {
            if (!isGroup) return
            if (!isAntiXnxx) return
            if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
            mans.updatePresence(from, Presence.composing)
            if (messagesC.includes("#izinbre")) return reply("#izinbre diterima")
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Link Xnxx Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
            setTimeout(() => {
                mans.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
            }, 3000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("1detik")
            }, 2000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("2detik")
            }, 1000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("3detik")
            }, 0)
        }
        /*
        ]=====> NOBADWORD <=====[
        */
        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😡")
                        .then(() => mans.groupRemove(from, sender))
                        .then(() => {
                            mans.sendMessage(from, `*「 ANTI BADWORD 」*\nITSMAZGH-Bot akan kick kamu karena berkata kasar!`, text, { quoted: mek })
                        }).catch(() => mans.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text, { quoted: mek }))
                } else {
                    return reply("Tolong Jaga Ucapan Min 😇")
                }
            }
        }
        /*
        ]=====> LEVELING <=====[
        */
        if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
        /*
        ]=====> CHECK LIMIT BY LANN ID <=====[
        */
        const checkLimit = (sender) => {
            let found = false
            for (let lmt of _limit) {
                if (lmt.id === sender) {
                    let limitCounts = limitawal - lmt.limit
                    if (limitCounts <= 0) return mans.sendMessage(from, `Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text, { quoted: mek })
                    mans.sendMessage(from, ind.limitcount(limitCounts), text, { quoted: mek })
                    found = true
                }
            }
            if (found === false) {
                let obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                mans.sendMessage(from, ind.limitcount(limitCounts), text, { quoted: mek })
            }
        }

        /*
        ]=====> LIMITED BY LANN ID <=====[
        */
        const isLimit = (sender) => {
            let position = false
            for (let i of _limit) {
                if (i.id === sender) {
                    let limits = i.limit
                    if (limits >= limitawal) {
                        position = true
                        mans.sendMessage(from, ind.limitend(pushname), text, { quoted: mek })
                        return true
                    } else {
                        _limit
                        position = true
                        return false
                    }
                }
            }
            if (position === false) {
                const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                return false
            }
        }


        if (isGroup) {
            try {
                const getmemex = groupMembers.length
                if (getmemex <= memberlimit) {
                    mans.groupLeave(from)
                }
            } catch (err) { console.error(err) }
        }

        /*
        ]=====> AFK ASU <=====[
        */
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "*「 FITUR AFK 」*\nMAAF USER YANG ANDA TAG ATAU REPLY SEDANG AFK "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "ALASAN " + afk[x.split('@')[0]]
                    }
                    mans.sendMessage(from, ini_txt, text, {quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("*「 FITUR AFK 」*\nANDA SEKARANG TELAH KELUAR DARI MODE AFK")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
            }
        /*
        ]=====> FAKE REPLY <=====[
        */
        const eft = {
       key: { 
             fromMe: false, 
             participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
       }, 
       message: { 
          "imageMessage": { 
              "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                 "mimetype": "image/jpeg", 
                 "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*",  // GANTI NAMA BOT LO
                 "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                 "fileLength": "28777", 
                 "height": 1080, 
                 "width": 1079, 
                 "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", 
                 "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", 
                 "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", 
                 "mediaKeyTimestamp": "1610993486", 
                 "jpegThumbnail": fs.readFileSync('image/odc.jpeg')
                 } 
        }
}
        
        /*
        ]=====> FAKETOKO <=====[
        */
        const sft = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./src/logo.jpg`)
					},
					"title": "SEWA BOT", // GANTI TERSERAH LO
					"description": "1 Bulan : Rp 10.000,00", // GANTI TERSERAH LO
					"currencyCode": "IDR",
					"priceAmount1000": "10000", // GANTI HARGA
					"retailerId": "Self Bot",
					"productImageCount": 999
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
        /*
        ]=====> ATM <=====[
        */
        if (isRegistered) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
        if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
        if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

/*
]=====> FITUR FITUR <=====[
*/
        switch (command) {
            case 'menu':
            case 'help':
            
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangkau = checkATMuser(sender)
                const bruhhhh = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mansss = `

┏════〘 𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}menu*
┃│❍➣ *${prefix}tqtomenu*
┃│❍➣ *${prefix}simplemenu*
┃│❍➣ *${prefix}makermenu*
┃│❍➣ *${prefix}sertifikatmenu*
┃│❍➣ *${prefix}stickermenu*
┃│❍➣ *${prefix}islammenu*
┃│❍➣ *${prefix}sangemenu*
┃│❍➣ *${prefix}umummenu*
┃│❍➣ *${prefix}animemenu*
┃│❍➣ *${prefix}limitmenu*
┃│❍➣ *${prefix}downloadmenu*
┃│❍➣ *${prefix}gabutmenu*
┃│❍➣ *${prefix}imagemenu*
┃│❍➣ *${prefix}storagemenu*
┃│❍➣ *${prefix}soundmenu*
┃│❍➣ *${prefix}groupmenu*
┃│❍➣ *${prefix}premiummenu*
┃│❍➣ *${prefix}ownermenu*
┃│❍➣ *${prefix}updatemenu*
┃│❍➣ *${prefix}fontmenu*
┃│❍➣ *${prefix}edukasimenu*
┃│❍➣ *${prefix}countdownmenu*
┃│❍➣ *${prefix}sovietmenu*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mansss })
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'updatemenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangku = checkATMuser(sender)
                const anjmi = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manssst = `

┏════〘 𝗨𝗣𝗗𝗔𝗧𝗘 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}igpost* [new]
┃│❍➣ *${prefix}fakeaddres* [new]
┃│❍➣ *${prefix}battlefield* [new]
┃│❍➣ *${prefix}8bit* [new]
┃│❍➣ *${prefix}googlesearch* [new]
┃│❍➣ *${prefix}randomwp* [new]
┃│❍➣ *${prefix}blackpinks* [new]
┃│❍➣ *${prefix}hentaipict* [new]
┃│❍➣ *${prefix}gabut* [new]
┃│❍➣ *${prefix}quotemuslim* [new]
┃│❍➣ *${prefix}infogempa* [new]
┃│❍➣ *${prefix}faktaunik* [new]
┃│❍➣ *${prefix}hilih* [new]
┃│❍➣ *${prefix}gombal* [new]
┃│❍➣ *${prefix}lirik* [new]
┃│❍➣ *${prefix}chord* [new]
┃│❍➣ *${prefix}simisimi* [new]
┃│❍➣ *${prefix}kodepos* [new]
┃│❍➣ *${prefix}liputan6* [new]
┃│❍➣ *${prefix}cnnnews* [new]
┃│❍➣ *${prefix}replubika* [new]
┃│❍➣ *${prefix}temponews* [new]
┃│❍➣ *${prefix}kumparannews* [new]
┃│❍➣ *${prefix}lazymedia* [new]
┃│❍➣ *${prefix}resepmakanan* [new]
┃│❍➣ *${prefix}playstore* [new]
┃│❍➣ *${prefix}joox* [new]
┃│❍➣ *${prefix}infofilm* [new]
┃│❍➣ *${prefix}infofilm2* [new]
┃│❍➣ *${prefix}lk21* [new]
┃│❍➣ *${prefix}burnpaper* [new]
┃│❍➣ *${prefix}textonecup* [new]
┃│❍➣ *${prefix}textsky* [new]
┃│❍➣ *${prefix}nature* [new]
┃│❍➣ *${prefix}rosegold* [new]
┃│❍➣ *${prefix}nature3d* [new]
┃│❍➣ *${prefix}ocean* [new]
┃│❍➣ *${prefix}summertext* [new]
┃│❍➣ *${prefix}underglass* [new]
┃│❍➣ *${prefix}cemetery* [new]
┃│❍➣ *${prefix}royallock* [new]
┃│❍➣ *${prefix}coffecup* [new]
┃│❍➣ *${prefix}coffecup2* [new]
┃│❍➣ *${prefix}glow* [new]
┃│❍➣ *${prefix}summer* [new]
┃│❍➣ *${prefix}flower* [new]
┃│❍➣ *${prefix}grandient* [new]
┃│❍➣ *${prefix}embroidery* [new]
┃│❍➣ *${prefix}funnycup* [new]
┃│❍➣ *${prefix}orchids* [new]
┃│❍➣ *${prefix}smoke2* [new]
┃│❍➣ *${prefix}loveone* [new]
┃│❍➣ *${prefix}smoke* [new]
┃│❍➣ *${prefix}onesilk* [new]
┃│❍➣ *${prefix}glowing* [new]
┃│❍➣ *${prefix}heart* [new]
┃│❍➣ *${prefix}wolf* [new]
┃│❍➣ *${prefix}candy* [new]
┃│❍➣ *${prefix}hentai* [new]
┃│❍➣ *${prefix}waifu* [new]
┃│❍➣ *${prefix}eroyuri* [new]
┃│❍➣ *${prefix}hug* [new]
┃│❍➣ *${prefix}hug2* [new]
┃│❍➣ *${prefix}awoo* [new]
┃│❍➣ *${prefix}lick* [new]
┃│❍➣ *${prefix}kiss* [new]
┃│❍➣ *${prefix}smug* [new]
┃│❍➣ *${prefix}cuddle* [new]
┃│❍➣ *${prefix}bully* [new]
┃│❍➣ *${prefix}shinobi* [new]
┃│❍➣ *${prefix}megumin* [new]
┃│❍➣ *${prefix}blush* [new]
┃│❍➣ *${prefix}highfive* [new]
┃│❍➣ *${prefix}handhold* [new]
┃│❍➣ *${prefix}smile* [new]
┃│❍➣ *${prefix}glomp* [new]
┃│❍➣ *${prefix}cringe* [new]
┃│❍➣ *${prefix}shortlink* [new]
┃│❍➣ *${prefix}shortlink2* [new]
┃│❍➣ *${prefix}shortlink3* [new]
┃│❍➣ *${prefix}tahlil* [new]
┃│❍➣ *${prefix}ayatkursi* [new]
┃│❍➣ *${prefix}covidglobal* [new]
┃│❍➣ *${prefix}hadits* [new]
┃│❍➣ *${prefix}github* [new]
┃│❍➣ *${prefix}cuaca* [new]
┃│❍➣ *${prefix}tiktokstalk* [new]
┃│❍➣ *${prefix}lacakip* [new]
┃│❍➣ *${prefix}dkasia* [new]
┃│❍➣ *${prefix}manga* [new]
┃│❍➣ *${prefix}kusonime* [new]
┃│❍➣ *${prefix}cekresijne* [new]
┃│❍➣ *${prefix}woodheart* [new]
┃╰───────────────────
┗══════════════════⊷❍
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manssst })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'fontmenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangkuen = checkATMuser(sender)
                const anjmiw = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manssste = `

┏════〘 𝗙𝗢𝗡𝗧 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}fspongebob*
┃│❍➣ *${prefix}ftank*
┃│❍➣ *${prefix}fhacker*
┃│❍➣ *${prefix}fhacker1*
┃│❍➣ *${prefix}fsarangeo*
┃│❍➣ *${prefix}fimpostor*
┃│❍➣ *${prefix}fsoviet*
┃│❍➣ *${prefix}fhelicopter*
┃│❍➣ *${prefix}fcow*
┃│❍➣ *${prefix}fcess*
┃│❍➣ *${prefix}fitik*
┃│❍➣ *${prefix}fkereta*
┃│❍➣ *${prefix}fcoffe*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manssste })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                  case 'countdownmenu':
                  if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangkuo = checkATMuser(sender)
                const anjmi0 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manssstes = `
┏════〘 𝗖𝗢𝗨𝗡𝗧𝗗𝗢𝗪𝗡 〙
┃╭───────────────────

┃│❍➣ *${prefix}romadhon*
┃│❍➣ *${prefix}iduladha*
┃│❍➣ *${prefix}tahunbaru*
┃╰───────────────────

┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manssstes })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                  case 'toolsmenu':
                  if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangtols = checkATMuser(sender)
                const anjtols = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mtols = `

┏════〘 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────

┃│❍➣ *${prefix}bass-a*
┃│❍➣ *${prefix}bass-v*
┃│❍➣ *${prefix}vebra-a*
┃│❍➣ *${prefix}vebra-v*
┃│❍➣ *${prefix}trigger-a*
┃│❍➣ *${prefix}trigger-v*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mtols })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'premiummenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangkuoe = checkATMuser(sender)
                const anjmie = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manssstes1 = `𝐂 𝐎 𝐌 𝐈 𝐍 𝐆  𝐒 𝐎 𝐎 𝐍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manssstes1 })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'ownermenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangbu = checkATMuser(sender)
                const anjes = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                maus = `

┏════〘 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────

┃│❍➣ *${prefix}antidelete*
┃│❍➣ *${prefix}setvhtear*
┃│❍➣ *${prefix}setlolhuman*
┃│❍➣ *${prefix}setlolhuman1*
┃│❍➣ *${prefix}settobz*
┃│❍➣ *${prefix}setxteam*
┃│❍➣ *${prefix}setonlydev*
┃│❍➣ *${prefix}setbarbar*
┃│❍➣ *${prefix}bc*
┃│❍➣ *${prefix}clearall*
┃│❍➣ *${prefix}block*
┃│❍➣ *${prefix}unblock*
┃│❍➣ *${prefix}clone*
┃│❍➣ *${prefix}setppbot*
┃│❍➣ *${prefix}setreply*
┃│❍➣ *${prefix}setprefix*
┃│❍➣ *${prefix}ban*
┃│❍➣ *${prefix}unban*
┃│❍➣ *${prefix}addbadword*
┃│❍➣ *${prefix}delbadword*
┃│❍➣ *${prefix}bilasayang*
┃╰───────────────────
┗══════════════════⊷❍
`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: maus })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'tqtomenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangma = checkATMuser(sender)
                const anjj = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                maonu = `

┏════〘 𝗧𝗤𝗧𝗢 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}owner* [itsmazgh] [buildthecraft]
┃│❍➣ *${prefix}gebetanowner* [nabila]
┃│❍➣ *${prefix}owner-cognita* [cognita] [kotsuy]
┃│❍➣ *${prefix}owner-irwans* [irwans]
┃│❍➣ *${prefix}owner-meiky* [meiky]
┃│❍➣ *${prefix}owner-yogipw* [yogipw]
┃│❍➣ *${prefix}owner-ramlan* [ramlan]
┃│❍➣ *${prefix}owner-nybotz* [nybotz]
┃│❍➣ *${prefix}owner-miku* [miku]
┃│❍➣ *${prefix}owner-angga* [angga]
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: maonu })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'groupmenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uanghas = checkATMuser(sender)
                const anjei = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                maelu = `

┏════〘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}welcome* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}leveling* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}event* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}simih* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}nsfw* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}antilinkxnxx* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}antilinkgruop* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}antivirtek* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}nobadword* ⟪ 1/0 ⟫
┃│❍➣ *${prefix}group* ⟪ buka/tutup ⟫
┃│❍➣ *${prefix}groupinfo*
┃│❍➣ *${prefix}add*
┃│❍➣ *${prefix}kick*
┃│❍➣ *${prefix}hedsot*
┃│❍➣ *${prefix}linkgrup*
┃│❍➣ *${prefix}promote*
┃│❍➣ *${prefix}demote*
┃│❍➣ *${prefix}setname*
┃│❍➣ *${prefix}setdesc*
┃│❍➣ *${prefix}leave*
┃│❍➣ *${prefix}tagall*
┃│❍➣ *${prefix}level*
┃│❍➣ *${prefix}fitnah*
┃│❍➣ *${prefix}hidetag*
┃│❍➣ *${prefix}hidetag5*
┃│❍➣ *${prefix}jadian*
┃│❍➣ *${prefix}ngewe*
┃│❍➣ *${prefix}terganteng*
┃│❍➣ *${prefix}tercantik*
┃│❍➣ *${prefix}listonline*
┃│❍➣ *${prefix}listadmin*
┃│❍➣ *${prefix}delete*
┃│❍➣ *${prefix}ciumadmin*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: maelu })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'simplemenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangsim = checkATMuser(sender)
                const hurs = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mansimp = `

┏════〘 𝗦𝗜𝗠𝗣𝗟𝗘 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}info*
┃│❍➣ *${prefix}donasi*
┃│❍➣ *${prefix}owner*
┃│❍➣ *${prefix}gebetanowner*
┃│❍➣ *${prefix}rules*
┃│❍➣ *${prefix}iklan*
┃│❍➣ *${prefix}bingungcok*
┃│❍➣ *${prefix}totaluser*
┃│❍➣ *${prefix}sewabot*
┃│❍➣ *${prefix}bahasa*
┃│❍➣ *${prefix}bot*
┃│❍➣ *${prefix}note*
┃│❍➣ *${prefix}mystat*
┃│❍➣ *${prefix}request*
┃│❍➣ *${prefix}lapor*
┃│❍➣ *${prefix}chatwa*
┃│❍➣ *${prefix}spamchat*
┃│❍➣ *${prefix}checkapikey*
┃│❍➣ *${prefix}readall*
┃│❍➣ *${prefix}fordward*
┃│❍➣ *${prefix}kontag*
┃│❍➣ *${prefix}kontak*
┃│❍➣ *${prefix}wame*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mansimp })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
             case 'stickermenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangstick = checkATMuser(sender)
                const hursu = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manstick = `

┏════〘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}sticker* [video/foto]
┃│❍➣ *${prefix}stiker* [foto/tag]
┃│❍➣ *${prefix}nobg* [foto]
┃│❍➣ *${prefix}ttp* [text]
┃│❍➣ *${prefix}ttpwarna* [text]
┃│❍➣ *${prefix}attp* [text]
┃│❍➣ *${prefix}triggerd* [foto]
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manstick })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'makermenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangmak = checkATMuser(sender)
                const anj0e = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manmak = `

┏════〘 𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}tahta*
┃│❍➣ *${prefix}cloudtext*
┃│❍➣ *${prefix}pornhub*
┃│❍➣ *${prefix}glitchtext*
┃│❍➣ *${prefix}apiteks* 111
┃│❍➣ *${prefix}bikinquote*
┃│❍➣ *${prefix}neon*
┃│❍➣ *${prefix}ninjalogo*
┃│❍➣ *${prefix}halloweentext*
┃│❍➣ *${prefix}lovemake*
┃│❍➣ *${prefix}metaldark*
┃│❍➣ *${prefix}text3d*
┃│❍➣ *${prefix}text3d2*
┃│❍➣ *${prefix}darkneon*
┃│❍➣ *${prefix}candlemug*
┃│❍➣ *${prefix}lovemsg*
┃│❍➣ *${prefix}mugflower*
┃│❍➣ *${prefix}narutobanner*
┃│❍➣ *${prefix}paperonglass*
┃│❍➣ *${prefix}romancetext*
┃│❍➣ *${prefix}shadowtext*
┃│❍➣ *${prefix}coffeecup*
┃│❍➣ *${prefix}coffeecup2*
┃│❍➣ *${prefix}glowingneon*
┃│❍➣ *${prefix}underwater*
┃│❍➣ *${prefix}hpotter*
┃│❍➣ *${prefix}woodblock*
┃│❍➣ *${prefix}naruto1*
┃│❍➣ *${prefix}splaybutton*
┃│❍➣ *${prefix}gplaybutton*
┃│❍➣ *${prefix}gemboktext*
┃│❍➣ *${prefix}ffbaner*
┃│❍➣ *${prefix}silktext*
┃│❍➣ *${prefix}blackpink*
┃│❍➣ *${prefix}ktpmaker*
┃│❍➣ *${prefix}wanted*
┃│❍➣ *${prefix}ytkomen*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manmak })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'sertifikatmenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangbos = checkATMuser(sender)
                const anj0es = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manserti = `
┏════〘 𝗦𝗘𝗥𝗧𝗜𝗙𝗜𝗞𝗔𝗧 〙
┃╭───────────────────
┃│❍➣ *${prefix}fftourserti*
┃│❍➣ *${prefix}fftourserti1*
┃│❍➣ *${prefix}fftourserti2*
┃│❍➣ *${prefix}fftourserti3*
┃│❍➣ *${prefix}fftourserti4*
┃│❍➣ *${prefix}fftourserti5*
┃│❍➣ *${prefix}pubgtourserti*
┃│❍➣ *${prefix}pubgtourserti1*
┃│❍➣ *${prefix}pubgtourserti2*
┃│❍➣ *${prefix}pubgtourserti3*
┃│❍➣ *${prefix}pubgtourserti4*
┃│❍➣ *${prefix}pubgtourserti5*
┃│❍➣ *${prefix}mltourserti*
┃│❍➣ *${prefix}mltourserti1*
┃│❍➣ *${prefix}mltourserti2*
┃│❍➣ *${prefix}mltourserti3*
┃│❍➣ *${prefix}mltourserti4*
┃│❍➣ *${prefix}mltourserti5*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manserti })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'soundmenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangkk = checkATMuser(sender)
                const anjks = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mansound = `

┏════〘 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}tts [bahasa] [text]*
┃│❍➣ *${prefix}ramadhan*
┃│❍➣ *${prefix}iribilang*
┃│❍➣ *${prefix}odading*
┃│❍➣ *${prefix}bot*
┃│❍➣ *${prefix}tapiboong*
┃│❍➣ *${prefix}biasalah*
┃│❍➣ *${prefix}gelay*
┃│❍➣ *${prefix}numa*
┃│❍➣ *${prefix}mamae*
┃│❍➣ *${prefix}gatal*
┃│❍➣ *${prefix}pale*
┃│❍➣ *${prefix}yamate*
┃│❍➣ *${prefix}sound*
┃│❍➣ *${prefix}sound[1-10]*
┃│❍➣ *${prefix}sound[11-20]*
┃│❍➣ *${prefix}sound[21-25]*
┃│❍➣ *${prefix}shalawat*
┃│❍➣ *${prefix}shalawat[1-10]*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mansound })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'storagemenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangstorr = checkATMuser(sender)
                const anjbjs = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manstorr = `

┏════〘 𝗦𝗧𝗢𝗥𝗔𝗚𝗘 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}liststicker*
┃│❍➣ *${prefix}addsticker*
┃│❍➣ *${prefix}getsticker*
┃│❍➣ *${prefix}listvn*
┃│❍➣ *${prefix}addvn*
┃│❍➣ *${prefix}getvn*
┃│❍➣ *${prefix}listvideo*
┃│❍➣ *${prefix}addvideo*
┃│❍➣ *${prefix}getvideo*
┃│❍➣ *${prefix}listimage*
┃│❍➣ *${prefix}addimage*
┃│❍➣ *${prefix}getimage*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manstorr })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'imagemenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangimag = checkATMuser(sender)
                const anjjks = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manimag = `

┏════〘 𝗜𝗠𝗔𝗚𝗘 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}blackpinks*
┃│❍➣ *${prefix}fotocewek*
┃│❍➣ *${prefix}doraemon*
┃│❍➣ *${prefix}pokemon*
┃│❍➣ *${prefix}kucing*
┃│❍➣ *${prefix}anjing*
┃│❍➣ *${prefix}hamster*
┃│❍➣ *${prefix}kelinci*
┃│❍➣ *${prefix}randombts*
┃│❍➣ *${prefix}randomkpop* [perbaikan]
┃│❍➣ *${prefix}picthewan*
┃│❍➣ *${prefix}unta*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manimag })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'limitmenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uanglim = checkATMuser(sender)
                const anjlim = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manlim = `

┏════〘 𝗟𝗜𝗠𝗜𝗧 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}limit*
┃│❍➣ *${prefix}buylimit*
┃│❍➣ *${prefix}transfer*
┃│❍➣ *${prefix}atm*
┃│❍➣ *${prefix}leaderboard*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manlim })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'gabutmenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uanggab = checkATMuser(sender)
                const anjgab = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mangab = `

┏════〘 𝗚𝗔𝗕𝗨𝗧 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}apakah*
┃│❍➣ *${prefix}bisakah*
┃│❍➣ *${prefix}kapankah*
┃│❍➣ *${prefix}hobby*
┃│❍➣ *${prefix}rate*
┃│❍➣ *${prefix}seberapagay*
┃│❍➣ *${prefix}nangis*
┃│❍➣ *${prefix}cium*
┃│❍➣ *${prefix}peluk*
┃│❍➣ *${prefix}truth*
┃│❍➣ *${prefix}dare*
┃│❍➣ *${prefix}timer*
┃│❍➣ *${prefix}deteksiwajah*
┃│❍➣ *${prefix}deteksiumur*
┃│❍➣ *${prefix}deteksigender*
┃│❍➣ *${prefix}afk*
┃│❍➣ *${prefix}allemoji*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mangab })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'downloadmenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangdown = checkATMuser(sender)
                const anjdown = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mandown = `

┏════〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 〙
┃╭───────────────────
┃│❍➣ *${prefix}playstore* [perbaikan]
┃│❍➣ *${prefix}play* [judul no link]
┃│❍➣ *${prefix}ytplay* [perbaikan]
┃│❍➣ *${prefix}ytsearch* [judul no link]
┃│❍➣ *${prefix}ytmp3* [link]
┃│❍➣ *${prefix}ytmp31* [link]
┃│❍➣ *${prefix}ytmp4* [link]
┃│❍➣ *${prefix}ytmp41* [link]
┃│❍➣ *${prefix}yutubdl* [link]
┃│❍➣ *${prefix}igdl* [link]
┃│❍➣ *${prefix}fbdl* [link]
┃│❍➣ *${prefix}tiktoknowm* [link]
┃│❍➣ *${prefix}tiktod*
┃│❍➣ *${prefix}joox*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mandown })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'animemenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangnim = checkATMuser(sender)
                const anjanim = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mananim = `

┏════〘 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}anime*
┃│❍➣ *${prefix}animesaran2*
┃│❍➣ *${prefix}animesaran*
┃│❍➣ *${prefix}neko*
┃│❍➣ *${prefix}nekonime*
┃│❍➣ *${prefix}wibu*
┃│❍➣ *${prefix}loli*
┃│❍➣ *${prefix}loli2*
┃│❍➣ *${prefix}husbu*
┃│❍➣ *${prefix}naruto*
┃│❍➣ *${prefix}minato*
┃│❍➣ *${prefix}sakura*
┃│❍➣ *${prefix}itori*
┃│❍➣ *${prefix}hinata*
┃│❍➣ *${prefix}kaneki*
┃│❍➣ *${prefix}miku*
┃│❍➣ *${prefix}rize*
┃│❍➣ *${prefix}akira*
┃│❍➣ *${prefix}kurumi*
┃│❍➣ *${prefix}pictcewek*
┃│❍➣ *${prefix}pictcowok*
┃│❍➣ *${prefix}ram*
┃│❍➣ *${prefix}rem*
┃│❍➣ *${prefix}toukacahan*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mananim })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'umummenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangum = checkATMuser(sender)
                const anjum = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manum = `

┏════〘 𝗨𝗠𝗨𝗠 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}pinterest* [cari gambar]
┃│❍➣ *${prefix}mutual* [cari jodoh]
┃│❍➣ *${prefix}next*
┃│❍➣ *${prefix}slap*
┃│❍➣ *${prefix}virtex* [no di gc its]
┃│❍➣ *${prefix}virtek2*
┃│❍➣ *${prefix}timer*
┃│❍➣ *${prefix}bitly*
┃│❍➣ *${prefix}happymod* [apk mod]
┃│❍➣ *${prefix}resepmakanan*
┃│❍➣ *${prefix}beritahoax*
┃│❍➣ *${prefix}stalkig* [@user]
┃│❍➣ *${prefix}quotes*
┃│❍➣ *${prefix}bucin*
┃│❍➣ *${prefix}tebakgambar*
┃│❍➣ *${prefix}darkjokes*
┃│❍➣ *${prefix}asupan*
┃│❍➣ *${prefix}artinama*
┃│❍➣ *${prefix}imgurl* [foto]
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manum })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'sangemenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangsan = checkATMuser(sender)
                const anjsan = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mansan = `

┏════〘 𝗦𝗔𝗡𝗚𝗘 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}blowjob*
┃│❍➣ *${prefix}bokep*
┃│❍➣ *${prefix}randomhentong*
┃│❍➣ *${prefix}cersex*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: mansan })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'edukasimenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uanged = checkATMuser(sender)
                const anjed = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                maned = `

┏════〘 𝗘𝗗𝗨𝗞𝗔𝗦𝗜 〙
┃╭───────────────────
┃│❍➣ *${prefix}nulis*
┃│❍➣ *${prefix}nulis3*
┃│❍➣ *${prefix}nulisbkiri*
┃│❍➣ *${prefix}nulisbkanan*
┃│❍➣ *${prefix}nulispolio*
┃│❍➣ *${prefix}brainly*
┃│❍➣ *${prefix}kalkulator*
┃│❍➣ *${prefix}translate*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: maned })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'islammenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangis = checkATMuser(sender)
                const anjis = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                manis = `

┏════〘 𝗜𝗦𝗟𝗔𝗠 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}listsurah*
┃│❍➣ *${prefix}jadwalsholat*
┃│❍➣ *${prefix}alquran*
┃│❍➣ *${prefix}alquranaudio*
┃│❍➣ *${prefix}kisahnabi*
┃│❍➣ *${prefix}asmaulhusna*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: manis })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
                case 'sovietmenu':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const uangsov = checkATMuser(sender)
                const anjsovi = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                sovi = `

┏════〘 𝗦𝗢𝗩𝗜𝗘𝗧 𝗠𝗘𝗡𝗨 〙
┃╭───────────────────
┃│❍➣ *${prefix}lenin*
┃│❍➣ *${prefix}stalin*
┃│❍➣ *${prefix}kalashnikov*
┃│❍➣ *${prefix}unisoviet*
┃│❍➣ *${prefix}nikitakhrushchev*
┃│❍➣ *${prefix}andreigromyko*
┃│❍➣ *${prefix}yurigagarin*
┃│❍➣ *${prefix}T-34*
┃│❍➣ *${prefix}YAK-3*
┃│❍➣ *${prefix}YAK-9*
┃│❍➣ *${prefix}LA-7*
┃│❍➣ *${prefix}ak47*
┃│❍➣ *${prefix}katyusha*
┃│❍➣ *${prefix}mig-15*
┃│❍➣ *${prefix}rpg-7*
┃╰───────────────────
┗══════════════════⊷❍`
                
                wew = fs.readFileSync('./image/odc.jpeg')
                mans.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: sovi })
				      
                
                mans.sendMessage(from, tertipu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                break
            case 'return':
                return mans.sendMessage(from, JSON.stringify(eval(args.join(''))), text, { quoted: mek })
                break
            case 'donasi':
            case 'donate':
                mans.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
                break
            case 'iklan':
                mans.sendMessage(from, iklan(pushname, prefix, botName, ownerName), text)
                break
            case 'rules':
                mans.sendMessage(from, rules(pushname, prefix, botName, ownerName), text)
                break
            case 'tnc':
                mans.sendMessage(from, tnc(pushname, prefix, botName, ownerName), text)
                break
            case 'bingungcok':
                mans.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
                break
                case 'swm':
				case 'stickerwm':
				case 'stcwm':
				if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
		    var Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()
            var stickerWm = (media, packname, author) => {
            ran = getRandom('.webp')
            exif.create(packname, author, from.split("@")[0])
            exec(`webpmux -set exif ./temp/${from.split("@")[0]}.exif ./${media} -o ./${ran}`, (err, stderr, stdout) => {
            if (err) return mans.sendMessage(from, String(err), text, { quoted: mek })
            mans.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
        })
    }
    if ((isMedia && !isQuotedVideo || isQuotedImage) && args.length >= 0) {
               var mediaEncrypt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var mediaFinalys = await mans.downloadAndSaveMediaMessage(mediaEncrypt, 'dlstikerwm')
               var kls = body.slice(5)
			   var has = kls.split("|")[0];
			   var kas = kls.split("|")[1];
               var packageName = `${has}`
               var packageAuthor = `${kas}`
               var exifName = 'stikerwm.exif',
                   webpName = `${from.split(/@/)[0]}.webp`
               try {
                   exec(`cwebp -q 50 dlstikerwm.jpeg -o ${webpName}`, (e, stderr, stdout) => {
                       if (e) return reply(from, String(stderr))
                           stickerWm(webpName, packageName, packageAuthor)
                   })
               } catch (e) {
                   throw e
               }
           }
                break
            case 's':
            case 'stiker':
            case 'sticker':
            case 'stickergif':
            case 'stikergif':
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await mans.downloadAndSaveMediaMessage(encmedia)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    
             if (isBanned) return reply(ind.baned())
                  mans.sendMessage(from, "*「 WAIT 」DONASI GW ASU*", text, {quoted: mek})
                    ran = getRandom('.webp')
                    await ffmpeg(`./${media}`)
                        .input(media)
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            reply(mess.error.stick)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            mans.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
                            fs.unlinkSync(media)
                            fs.unlinkSync(ran)
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await mans.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.webp')
                    reply('[❗] SEDANG DI PROSES')
                    await ffmpeg(`./${media}`)
                        .inputFormat(media.split('.')[1])
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                            reply(`❰❗❱ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            buff = fs.readFileSync(ran)
                            mans.sendMessage(from, buff, sticker)
                            fs.unlinkSync(media)
                            fs.unlinkSync(ran)
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                }
                await limitAdd(sender)
                break
                case 'checkapikey':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
				    anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${args.join(' ')}`)
				    teks = `*YOUR APIKEY*\n\n➣ Ussername= ${anu.result.username}\n➣ Request= ${anu.result.requests}\n➣ Today= ${anu.result.today}\n➣ Akun Type= ${anu.result.account_type}\n➣ Expired= ${anu.result.expired}\n➣ API = https://lolhuman.herokuapp.com`
				    mans.sendMessage(from, teks, text, {quoted: mek})
                    break
            case 'nobg':

             if (isBanned) return reply(ind.baned())
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    owgi = await mans.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
                    teks = `${anu.display_url}`
                    ranpp = getRandom('.png')
                    ranop = getRandom('.webp')
                    anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${VhtearKey}l`, { method: 'get' })
                    exec(`wget ${anu1.result.image} -O ${ranpp} && ffmpeg -i ${ranpp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranop}`, (err) => {
                        fs.unlinkSync(ranpp)
                        if (err) return reply(mess.error.stick)
                        nobg = fs.readFileSync(ranop)
                        mans.sendMessage(from, nobg, sticker, { quoted: mek })
                        fs.unlinkSync(ranop)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                break
                case 'tesprem':
                
             if (isBanned) return reply(ind.baned())
                if (!isPremium) return reply(ind.premiumb())
                mans.sendMessage(from, 'Anjay Premium', text, {quoted: mek})
                break
            case 'spamcall':
             if (isBanned) return reply(ind.baned())
                 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			mans.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek })
			setTimeout(() => {
                mans.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
            }, 10000)
			break
            case 'meme':
             if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                meme = await kagApi.memes()
                buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '.......' })
                break
            case 'memeindo':
             if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(ind.wait)
                memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
                buffer = await getBuffer(memein.result)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '.......' })
                await limitAdd(sender)
                break
               case 'ping':
               case 'mystat':
                case 'speed':
                
             if (isBanned) return reply(ind.baned())
                let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
                    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = mans.user.phone
				    var uptime = process.uptime();
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    mans.updatePresence(from, Presence.composing) 
				    uptime = process.uptime()
                    mans.sendMessage(from, `*Host :* M e M a n s\n*Platfrom :*  ${os.platform()}\n*Speed :* 680 MHz\n*Core :* ${os.cpus().length}\n*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\n*CPU :* Octa-core (4x2.3 GHz Cortex-A53 & 4x1.8 GHz Cortex-A53)\n\n*V. Whatsapp :* ${wa_version}\n*Baterai :* ${battre}% 🔋\n*MCC :* ${mcc}\n*MNC :* ${mnc}\n*Versi OS :* ${os_version}\n*Merk HP :* ${device_manufacturer}\n*Versi HP :* ${device_model}\n\n*Total Chat :* ${totalchat.length}\n*Speed :* ${latensi.toFixed(4)} Second\n*Runtime :* ${kyun(uptime)}`, text, { quoted: mek})
                    break
                    case 'imgurl':          
                    
             if (isBanned) return reply(ind.baned())
                    var imgbb = require('imgbb-uploader')
                    var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    var media = await  mans.downloadAndSaveMediaMessage(encmedia)       
                    imgbb('acf1ad5f22ad5822dc163cce74aedfd4', media)
                   .then(data => {
                    var caps = `*「 _IMAGE TO URL_ 」*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     mans.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
                    break
                    case 'fordward':
                    
             if (isBanned) return reply(ind.baned())
	         mans.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
           break
           case 'wame':
        if (isBanned) return reply('```Lu kebanned kontol```')
       
          mans.updatePresence(from, Presence.composing)
          options = {
             text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
                }
                  }
            mans.sendMessage(from, options, text, {quoted: mek})
           break
           case 'bass-a':     
           
             if (isBanned) return reply(ind.baned())
               var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await mans.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						mans.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
					case 'vibra-a':     
					
             if (isBanned) return reply(ind.baned())
                  var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await mans.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						mans.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
			          case 'vibra-v':     
			          
             if (isBanned) return reply(ind.baned())
                   var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await mans.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					mans.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
				break
				case 'trigger-v':
				
             if (isBanned) return reply(ind.baned())
								encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await mans.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
               mans.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
					break
					case 'trigger-a':
					
             if (isBanned) return reply(ind.baned())
					   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await mans.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						mans.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'bass-v':     
				
             if (isBanned) return reply(ind.baned())
               var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await mans.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=24 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
				        mans.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
				break
            case 'nulisbkiri':
            case 'tulisbkiri':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis1 IKY baik hati')
                IKY = body.slice(8)
                reply(ind.wait)
                buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${IKY}&APIKEY=${XteamKey}`)
                mans.sendMessage(from, buff, image, { quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*' })
                await limitAdd(sender)
                break
                case 'eval':
				if (!isOwner) return reply(ind.ownerb())
                if (!q) return reply(ind.wrongf())
                try {
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)
          		//	client.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
       	         } catch (err) {
        	            console.error(err)
          	          await reply(err)
  	   	       }
        	    break
            case 'stickerlist':
            case 'liststicker':
            
             if (isBanned) return reply(ind.baned())
                teks = '*Sticker List :*\n\n'
                for (let awokwkwk of setiker) {
                    teks += `- ${awokwkwk}\n`
                }
                teks += `\n*Total : ${setiker.length}*`
                mans.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
                break
            case 'getsticker':
            case 'gets':
            
             if (isBanned) return reply(ind.baned())
                namastc = body.slice(12)
                result = fs.readFileSync(`./media/sticker/${namastc}.webp`)
                mans.sendMessage(from, result, sticker, { quoted: mek })
                break
            case 'addsticker':
            
             if (isBanned) return reply(ind.baned())
             if (!isOwner) return reply(ind.ownerb())
                if (!isQuotedSticker) return reply('Reply stiker nya')
                svst = body.slice(12)
                if (!svst) return reply('Nama sticker nya apa?')
                boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                delb = await mans.downloadMediaMessage(boij)
                setiker.push(`${svst}`)
                fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
                fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
                mans.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
                break
                case 'kontak':
                
             if (isBanned) return reply(ind.baned())
             if (args[0].startsWith('62')) return reply('Gunakan kode + kak')
             if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
             if (args.length == 0) return reply(`Usage: ${prefix + command} nomer|name\nContoh: ${prefix + command} +6288224859350|MeMans :v`)
                    var gh = body.slice(9)
                var entah = gh.split("|")[0];
                var disname = gh.split("|")[1];
                    if (isNaN(entah)) return reply('Invalid phone number'.toUpperCase());
                    vcard2 = 'BEGIN:VCARD\n'
                    + 'VERSION:3.0\n'
                    + `FN:${disname}\n`
                    + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                    + 'END:VCARD'.trim()
                     mans.sendMessage(from, {displayName: disname, vcard: vcard2}, contact)
                     mans.sendMessage(from, 'Kalo gk pake + ngebug ntar', text, {quoted: mek})
                     break
                    case 'kontag':
                    
             if (isBanned) return reply(ind.baned())
             if (args[0].startsWith('62')) return reply('Gunakan kode + kak')
             if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
              if (args.length == 0) return reply(`Usage: ${prefix + command} nomer|name\nContoh: ${prefix + command} +6288224859350|MeMans :v`)
				var gh = body.slice(9)
                var tyu = gh.split("|")[0];
                var ajc = gh.split("|")[1];
                    if (isNaN(tyu)) return reply('Invalid phone number');
                    members_ids = []
                    for (let mem of groupMembers) {
                        members_ids.push(mem.jid)
                    }
                    vcard3 = `BEGIN:VCARD\n`
                     + `VERSION:3.0\n`
                     + `FN:${ajc}\n`
                     + `TEL;type=CELL;type=VOICE;waid=${tyu}:${phoneNum('+' + tyu).getNumber('internasional')}\n`
                     + 'END:VCARD'.trim()
                     mans.sendMessage(from, {displayName: ajc, vcard: vcard3}, contact, { contextInfo: {"mentionedJid": members_ids}})
                     mans.sendMessage(from, 'Kalo gk pake + ngebug ntar', text, {quoted: mek})
                     break
            case 'addvn':
            
             if (isBanned) return reply(ind.baned())
             if (!isOwner) return reply(ind.ownerb())
                if (!isQuotedAudio) return reply('Reply vnnya blokk!')
                svst = body.slice(7)
                if (!svst) return reply('Nama audionya apa su?')
                boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                delb = await mans.downloadMediaMessage(boij)
                audionye.push(`${svst}`)
                fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
                fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
                mans.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
                break
            case 'getvn':
            
             if (isBanned) return reply(ind.baned())
                namastc = body.slice(7)
                buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
                mans.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
                break
            case 'fotocewek':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg', 'https://i.ibb.co/FsJ6jjs/kucing2.jpg', 'https://i.ibb.co/vvkdS7n/kucing3.jpg', 'https://i.ibb.co/1QHWxts/kucing4.jpg', 'https://i.ibb.co/JQmRz4n/kucing5.jpg', 'https://i.ibb.co/tBwrFkG/kucing6.jpg', 'https://i.ibb.co/dp0YhYm/kucing7.jpg', 'https://i.ibb.co/R03smZT/kucing8.jpg', 'https://i.ibb.co/17tw0dp/kucing9.jpg', 'https://i.ibb.co/7XdGGqc/kucing10.jpg', 'https://i.ibb.co/XL9PZxg/kucing11.jpg', 'https://i.ibb.co/gyjvXWN/kucing12.jpg', 'https://i.ibb.co/R4gg4wH/kucing13.jpg', 'https://i.ibb.co/PmLYtFm/kucing14.jpg', 'https://i.ibb.co/XbSDh47/kucing15.jpg', 'https://i.ibb.co/kSXNJzt/kucing16.jpg']
                let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                mans.sendMessage(from, cangtip, image, { quote: mek })
                await limitAdd(sender)
                break
            case 'listvn':
            case 'vnlist':
            
             if (isBanned) return reply(ind.baned())
                teks = '*List Vn:*\n\n'
                for (let awokwkwk of audionye) {
                    teks += `- ${awokwkwk}\n`
                }
                teks += `\n*Total : ${audionye.length}*`
                mans.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
                break
                case 'ytkomen':
                  if (isBanned) return reply(ind.baned())
		
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} MeMans ¿ api.lolhuman.xyz`)
		var gh = body.slice(9)
                var username = gh.split("¿")[0];
                var comment = gh.split("¿")[1];
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=${lolhuman}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                    mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'Donasu napa anjing'})
                    break
            case 'addimage':
            
             if (isBanned) return reply(ind.baned())
             if (!isOwner) return reply(ind.ownerb())
                if (!isQuotedImage) return reply('Reply imagenya blokk!')
                svst = body.slice(10)
                if (!svst) return reply('Nama imagenya apa su?')
                boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                delb = await mans.downloadMediaMessage(boij)
                imagenye.push(`${svst}`)
                fs.writeFileSync(`./media/image/${svst}.jpeg`, delb)
                fs.writeFileSync('./media/image.json', JSON.stringify(imagenye))
                mans.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
                break
            case 'getimage':
            
             if (isBanned) return reply(ind.baned())
                namastc = body.slice(10)
                buffer = fs.readFileSync(`./media/image/${namastc}.jpeg`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
                break
                case 'readall':
                
             if (isBanned) return reply(ind.baned())
					var chats = await mans.chats.all()
                    chats.map( async ({ jid }) => {
                          await mans.chatRead(jid)
                    })
					teks = `\`\`\`Berhasil melihat ${chats.length} chats !\`\`\``
					await mans.sendMessage(from, teks, MessageType.text, {quoted: mek})
					console.log(chats.length)
					break
            case 'imagelist':
            case 'listimage':
            
             if (isBanned) return reply(ind.baned())
                teks = '*List Image :*\n\n'
                for (let awokwkwk of imagenye) {
                    teks += `- ${awokwkwk}\n`
                }
                teks += `\n*Total : ${imagenye.length}*`
                mans.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
                break
            case 'addvideo':
            
             if (isBanned) return reply(ind.baned())
             if (!isOwner) return reply(ind.ownerb())
                if (!isQuotedVideo) return reply('Reply videonya blokk!')
                svst = body.slice(10)
                if (!svst) return reply('Nama videonya apa su?')
                boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                delb = await mans.downloadMediaMessage(boij)
                videonye.push(`${svst}`)
                fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
                fs.writeFileSync('./media/video.json', JSON.stringify(videonye))
                mans.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
                break
            case 'pokemon':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, { method: 'get' })
                reply(ind.wait())
                var n = JSON.parse(JSON.stringify(anu));
                var nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                mans.sendMessage(from, pok, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'kucing':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, { method: 'get' })
                reply(ind.wait())
                var n = JSON.parse(JSON.stringify(anu));
                var nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                mans.sendMessage(from, pok, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'fimpostor':
                
                if (isBanned) return reply(ind.baned())
                hola = `⠀⠀⠀⠀⠀⠀⣠⣴⣶⣿⠿⢿⣶⣶⣦⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣼⡿⠋⠁⠀⠀⠀⢀⣈⠙⢿⣷⡄⠀⠀
⠀⠀⠀⠀⢸⣿⠁⠀⢀⣴⣿⠿⠿⠿⠿⠿⢿⣷⣄⠀
⠀⢀⣀⣠⣾⣿⡇⠀⣾⣿⡄⠀⠀⠀⠀⠀⠀⠀⠹⣧
⣾⡿⠉⠉⣿⠀⡇⠀⠸⣿⡌⠓⠶⠤⣤⡤⠶⢚⣻⡟
⣿⣧⠖⠒⣿⡄⡇⠀⠀⠙⢿⣷⣶⣶⣶⣶⣶⢿⣿⠀
⣿⡇⠀⠀⣿⡇⢰⠀⠀⠀⠀⠈⠉⠉⠉⠁⠀⠀⣿⠀
⣿⡇⠀⠀⣿⡇⠈⡄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⠀
⣿⣷⠀⠀⣿⡇⠀⠘⠦⣄⣀⣀⣀⣀⣀⡤⠊⠀⣿⠀
⢿⣿⣤⣀⣿⡇⠀⠀⠀⢀⣀⣉⡉⠁⣀⡀⠀⣾⡟⠀
⠀⠉⠛⠛⣿⡇⠀⠀⠀⠀⣿⡟⣿⡟⠋⠀⢰⣿⠃⠀
⠀⠀⠀⠀⣿⣧⠀⠀⠀⢀⣿⠃⣿⣇⠀⢀⣸⡯⠀⠀
⠀⠀⠀⠀⠹⢿⣶⣶⣶⠿⠃⠀⠈⠛⠛⠛⠛⠁⠀⠀`
           mans.sendMessage(from, hola, text, {quoted: mek})
           break
          case 'fsoviet':
           
           if (isBanned) return reply(ind.baned())
           huha = `⠀                         ⠉⠲⣤⡀
⠀⠀⠀⠀⠀⠀⢀⣤⣀⣀⣀⠀⠈⠻⣷⣄
⠀⠀⠀⠀⢀⣴⣿⣿⣿⡿⠋⠀⠀⠀⠹⣿⣦⡀
⠀⠀⢀⣴⣿⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀⢹⣿⣧
⠀⠀⠙⢿⣿⡿⠋⠻⣿⣿⣦⡀⠀⠀⠀⢸⣿⣿⡆
⠀⠀⠀⠀⠉⠀⠀⠀⠈⠻⣿⣿⣦⡀⠀⢸⣿⣿⡇
⠀⠀⠀⠀⢀⣀⣄⡀⠀⠀⠈⠻⣿⣿⣶⣿⣿⣿⠁
⠀⠀⠀⣠⣿⣿⢿⣿⣶⣶⣶⣶⣾⣿⣿⣿⣿⡁
⢠⣶⣿⣿⠋⠀⠀⠉⠛⠿⠿⠿⠿⠿⠛⠻⣿⣿⣦⡀
⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿`
           mans.sendMessage(from, huha, text, {quoted: mek})
           break
           case 'fcoffe':
             
             if (isBanned) return reply(ind.baned())
             ehkocok = `∴∴∴︴︴︴︴︴
∴∴◤▔▔▔▔◥❚❘⊢╮
∴∴▉▒▒▒▒▒▉❘﹍〡
∴∴▇▒▒▒▒▒▇❘⊢╯
∴∴◥▇▇▇▇◤
∴◥▇▇▇▇▇▇◤
◒𝕐𝕠𝕜🄽🄶🄾🄿🄸🅑🅞🅢🅚🅤◒`
           mans.sendMessage(from, ehkocok, text, {quoted: mek})
           break
          case 'fspongebob':
           
           if (isBanned) return reply(ind.baned())
           vbch = `. ___________________
▕╮╭┻┻╮╭┻┻╮╭▕╮╲
▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏
▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏
▕╰━━━┓┈┈┈╭╮▕╭╮▏
▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏
▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏`
           mans.sendMessage(from, vbch, text, {quoted: mek})
           break
          case 'fitik':
            
            if (isBanned) return reply(ind.baned())
            huah = `┊┊╭━━━╮┊┊╭━━━╮┊┊
┊┊┃┈▋▋┃┊┊┃▋▋┈┃┊┊
┏━╯┈┈┈◣┊┊◢┈┈┈╰━┓
┃┗━╯┈┈┃┊┊┃┈┈╰━┛┃
╰━┳━┳━╯┊┊╰━┳━┳━╯
━━┻━┻━━━━━━┻━┻━━`
             mans.sendMessage(from, huah, text, {quoted: mek})
             break
           case 'fcow':
             
             if (isBanned) return reply(ind.baned())
             cuhe = `.   ╭┐┌╮☆°．·
╭┘└┘└╮∴°☆°
└┐．．┌———╮∴°
╭┴———┤          ├╮
│ｏ　ｏ│　  　│●°
╰┬———╯          │ ∴°·
 ☆\ˍˍ\_ˍ|—|ˍˍ/ˍˍ/∴☆.`
             mans.sendMessage(from, cuhe, text, {quoted: mek})
             break
           case 'fcess':
           
          if (isBanned) return reply(ind.baned())
           bogs = `☆┌─┐  ─┐☆
　│▒│ /▒/
　│▒│/▒/
　│▒ /▒/─┬─┐◯
　│▒│▒|▒│▒│
┌┴─┴─┐-┘─┘
│▒┌──┘▒▒▒│◯
└┐▒▒▒▒▒▒┌┘
◯└┐▒▒▒▒┌`
            mans.sendMessage(from, bogs, text, {quoted: mek})
            break
            case 'fkereta':
             
            if (isBanned) return reply(ind.baned())
             ansho = `╭━ ♥━ ♥━ ♥━ ♥━ ❤️
╰╮┏━┳┳┳┓  ┏┳┳┳┳┳┓
┏┻╋━╋┻┻┫  ┣┻┻┻┻┻┫
┗ⓞ━━━ⓞ┻━┻ⓞ━━┻ⓞ━━ⓞ╯`
          mans.sendMessage(from, ansho, text, {quoted: mek})
           break
           case 'fhacker':
           
           if (isBanned) return reply(ind.baned())
           boseah = `◢▃▃▃▃◤▔▔▔◥▃▃▃▃◣
  ✺�𝙷𝙰𝙲𝙺 ☬𝐂𝐲𝐛𝐞𝐫𝐓𝐞𝐚𝐦�✺ ◥▔▔▔▔◣▃▃▃◢▔▔▔▔◤`
           mans.sendMessage(from, boseah, text, {quoted: mek})
           break
           case 'fhacker1':
           
         if (isBanned) return reply(ind.baned())
           ehemcuys = `▇▇▇◤▔▔▔▔▔▔▔◥▇▇▇ ▇▇▇▏◥▇◣┊◢▇◤▕▇▇▇ ▇▇▇▏▃▆▅▎▅▆▃▕▇▇▇ ▇▇▇▏╱▔▕▎▔▔╲▕▇▇▇ ▇▇▇◣◣▃▅▎▅▃◢◢▇▇▇ ▇▇▇▇◣◥▅▅▅◤◢▇▇▇▇ ▇▇▇▇▇◣╲▇╱◢▇▇▇▇▇ ▇▇▇▇▇▇◣▇◢▇▇▇▇▇▇`
           mans.sendMessage(from, ehemcuys, text, {quoted: mek})
           break
           case 'fhello':
           
           if (!isBanned) return reply('Maaf kamu sudah terbenned!')
           beash = `╔╗╔╗╔═╗╔╗─╔╗─╔═╗   ║╚╝║║╦╝║║─║║─║║║   ║╔╗║║╩╗║╚╗║╚╗║║║   ╚╝╚╝╚═╝╚═╝╚═╝╚═╝`
           mans.sendMessage(from, beash, text, {quoted: mek})
           break
           case 'fhelicopter':
           
           if (isBanned) return reply(ind.baned())
           beashe = `..... ╭╬╮◢ 
_╭▅񾆈▇▆▅▄▃▂▁(╳)█╮ ..
   ╰═▃_▁∠════▔▔▔`
           mans.sendMessage(from, beashe, text, {quoted: mek})
           break
           case 'ftank':
           
           if (isBanned) return reply(ind.baned())
           beash1 = `.        (҂*_*)     <,︻╦̵̵̿╤─ ҉     ~  • █۞███████]▄▄▄▄▄▄▄▄▄▄▃ ●●● ▂▄▅█████████▅▄▃▂… [███████████████████] ◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙`
           mans.sendMessage(from, beash1, text, {quoted: mek})
           break
           case 'fsarangeo':
           
           if (isBanned) return reply(ind.baned())
           beash6 = `⠀      ｡ﾟﾟ･｡･ﾟﾟ｡
         ﾟ。    　｡ﾟ
             ﾟ･｡･ﾟ
       ︵               ︵ 
    (        ╲       /       /
      ╲          ╲/       /
           ╲          ╲  /
          ╭ ͡   ╲           ╲
     ╭ ͡   ╲        ╲       ﾉ
╭ ͡   ╲        ╲         ╱
 ╲       ╲          ╱
      ╲         ╱
          ︶
..................................`
           mans.sendMessage(from, beash6, text, {quoted: mek})
           break
            case 'hamster':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                mans.updatePresence(from, Presence.composing)
                data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, { method: 'get' })
                reply(ind.wait())
                n = JSON.parse(JSON.stringify(data));
                nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                mans.sendMessage(from, pok, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'kelinci':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                mans.updatePresence(from, Presence.composing)
                data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, { method: 'get' })
                reply(ind.wait())
                n = JSON.parse(JSON.stringify(data));
                nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                mans.sendMessage(from, pok, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'randombts':
            
             if (isBanned) return reply(ind.baned())
                ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/bts?apikey=${lolhuman}`)
                     mans.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
            case 'doraemon':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, { method: 'get' })
                reply(ind.wait())
                n = JSON.parse(JSON.stringify(data));
                nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                mans.sendMessage(from, pok, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'getvideo':
            
             if (isBanned) return reply(ind.baned())
                namastc = body.slice(10)
                buffer = fs.readFileSync(`./media/video/${namastc}.mp4`)
                mans.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
                break
            case 'listvideo':
            case 'videolist':
            
             if (isBanned) return reply(ind.baned())
                teks = '*List Video :*\n\n'
                for (let awokwkwk of videonye) {
                    teks += `- ${awokwkwk}\n`
                }
                teks += `\n*Total : ${videonye.length}*`
                mans.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
                break
            case 'antidelete':
                const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
                const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
                const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
                const isRevoke = dataRevoke.includes(from)
                const isCtRevoke = dataCtRevoke.data
                const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
                const argz = body.split(' ')
                if (!isOwner) return reply(ind.ownerb())
                if (argz.length === 1) return mans.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
                if (argz[1] == 'aktif') {
                    if (isGroup) {
                        if (isRevoke) return mans.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
                        dataRevoke.push(from)
                        fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        mans.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        mans.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctaktif') {
                    if (!isGroup) {
                        if (isCtRevoke) return mans.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
                        dataCtRevoke.data = true
                        fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        mans.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        mans.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'banct') {
                    if (isBanCtRevoke) return mans.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
                    if (argz.length === 2 || argz[2].startsWith('0')) return mans.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
                    dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
                    fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
                    mans.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
                } else if (argz[1] == 'mati') {
                    if (isGroup) {
                        const index = dataRevoke.indexOf(from)
                        dataRevoke.splice(index, 1)
                        fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        mans.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        mans.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctmati') {
                    if (!isGroup) {
                        dataCtRevoke.data = false
                        fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        mans.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        mans.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
                    }
                }
                break
            case 'kbbi':
            
             if (isBanned) return reply(ind.baned())
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
                    // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const kbbigan = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
                var kbbi = body.slice(6)
                axios.get(`https://tobz-api.herokuapp.com/api/kbbi?kata=${kbbi}&apikey=BotWeA`).then((res) => {
                    let hasil = `「 HASIL 」\n${res.data.result}`;
                    mans.sendMessage(from, hasil, MessageType.text, kbbigan);
                })
                break
            case 'igpost': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply('Urlnya mana tong?')
                if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('ini bukan url instagram anjim')
                ige = body.slice(8)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/ig?url=${args[0]}&apikey=${ApiDevolover}`, { method: 'get' })
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } } })
                break
            case 'fakeaddress': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/fakedata?country=en&apikey=${ApiDevolover}`)
                teks = `➣ *Nama* : ${anu.result.name}\n*➣ Birthday :* ${anu.result.birthday}\n*➣ Address :* ${anu.result.address}\n*➣ City :* ${anu.result.city}\n*➣ Region :* ${anu.result.region}\n*➣ Country :* ${anu.result.country}\n*➣ Zip Code :* ${anu.result.zip}\n*➣ Phone Number :* ${anu.result.phone_number}\n*➣ Username :* ${anu.result.username}\n*➣ Password :* ${anu.result.password}\n*➣ Email :* ${anu.result.email}`
                mans.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 ?? 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } } })
                break
            case 'battlefield': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(12)
                ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case '8bit': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())				
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(5)
                ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev13?text=${ll1}&text2=${ll2}&theme=8bit&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'googlesearch': // Update NEW FITUR	
            
             if (isBanned) return reply(ind.baned())			
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(14)
                ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
                ll3 = ct.split("|")[2];
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'randomwp': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/wallpaper?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'ini fotonya kak' })
                break
            case 'blackpinks':
              if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, { method: 'get' })
                buffer = await getBuffer(anu.result)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'hentaipict': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hentai?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.result)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 ?? 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'ini fotonya kak' })
                break
            case 'gabut': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/gabut?apikey=${ApiDevolover}`)
                hasil = `➸ *Activity* : ${anu.result.activity}\n*➸ Type :* ${anu.result.type}`
                mans.sendMessage(from, hasil, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 ?? 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'quotemuslim': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomquote/muslim?apikey=${ApiDevolover}`)
                hasil = `*➸ Quote :* ${anu.result.text_id}`
                mans.sendMessage(from, hasil, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'infogempa': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/infogempa?apikey=${ApiDevolover}`)
                hasil = `➸ *Waktu* : ${anu.result.Waktu}\n*➸ Lintang :* ${anu.result.Lintang}\n*➸ Bujur :* ${anu.result.Bujur}\n*➸ Magnitudo :* ${anu.result.Magnitudo}\n*➸ Kedalaman :* ${anu.result.Kedalaman}\n*➸ Wilayah :* ${anu.result.Wilayah}`
                mans.sendMessage(from, hasil, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'translate':
            
             if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                kode_negara = args[0]
                args.shift()
                ini_txt = args.join(" ")
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhuman}&text=${ini_txt}`)
                get_result = get_result.result
                init_txt = `From : ${get_result.from}\n`
                init_txt += `To : ${get_result.to}\n`
                init_txt += `Original : ${get_result.original}\n`
                init_txt += `Translated : ${get_result.translated}\n`
                init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                reply(init_txt)
                break
            case 'faktaunik': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/faktaunik?apikey=${ApiDevolover}`, { method: 'get' })
                reply(anu.result.result)
                break
            case 'hilih': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`textnya mana om?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hilih?kata=${body.slice(6)}&apikey=${ApiDevolover}`, { method: 'get' })
                reply(anu.result.result)
                break
            case 'gombal': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/katakatagombal?apikey=${ApiDevolover}`, { method: 'get' })
                reply(anu.result.quote)
                break
            case 'artinama':
            
             if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                ini_nama = args.join(" ")
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${lolhuman}&nama=${ini_nama}`)
                reply(get_result.result)
                break
            case 'lirik': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`nama lagunya mana om?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/liriklagu?lagu=${body.slice(6)}&apikey=${ApiDevolover}`, { method: 'get' })
                reply(anu.result.results)
                break
            case 'chord': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`masukin nama lagunya om`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/chordlagu?lagu=${body.slice(7)}&apikey=${ApiDevolover}`, { method: 'get' })
                reply(anu.result.result)
                break
            case 'simisimi': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/simisimi?text=${body.slice(9)}&apikey=${ApiDevolover}`)
                reply(anu.result.success)
                break
            case 'kodepos': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`kotanya mana bang?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.result.data) {
                    teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
                }
                reply(teks)
                break
            case 'liputan6': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/liputan6?apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.result.data) {
                    teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Date* : ${i.isoDate}\n*Description* : ${i.description}\n=================\n`
                }
                reply(teks)
                break
            case 'cnnnews': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/cnnnews?apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.result.data) {
                    teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.contentSnippet}\n*Date* : ${i.isoDate}\n=================\n`
                }
                reply(teks)
                break
            case 'ytmp41':
            
             if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                ini_link = args[0]
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolhuman}&url=${ini_link}`)
                get_result = get_result.result
                ini_txt = `Title : ${get_result.title}\n`
                ini_txt += `Uploader : ${get_result.uploader}\n`
                ini_txt += `Duration : ${get_result.duration}\n`
                ini_txt += `View : ${get_result.view}\n`
                ini_txt += `Like : ${get_result.like}\n`
                ini_txt += `Dislike : ${get_result.dislike}\n`
                ini_txt += `Description :\n ${get_result.description}`
                ini_buffer = await getBuffer(get_result.thumbnail)
                mans.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                get_audio = await getBuffer(get_result.link[0].link)
                mans.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek, caption: 'Donasi asu!'})
                break
                  case 'ytmp4':
                     if (isBanned) return reply(ind.baned())
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➣ Title* : ${anu.title}\n*➣Size* : ${anu.filesize}\n\n*「❗️」PROSES DULU BOSS*`
					thumb = await getBuffer(anu.thumb)
					mans.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
				     mans.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Donasi asu!'})
					await limitAdd(sender)
                break		
            case 'republika': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/republika?apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.result.data) {
                    teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
                }
                reply(teks)
                break
                case 'request':
                if (isBanned) return reply(ind.baned())
                
                if (args.length < 1) return reply(`Mau request apa? Contoh: ${prefix}request fitur anime`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return mans.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    mans.sendMessage('62882248593508@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
                     case 'lapor':
                if (isBanned) return reply(ind.baned())
                
                if (args.length < 1) return reply(`Mau lapor apa? Contoh: ${prefix}lapor fitur anime error`)
          			
          				const kontil = body.slice(8)
                      if (kontil.length > 300) return mans.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const buseh = `*[LAPOR VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    mans.sendMessage('62882248593508@s.whatsapp.net', options, text, {quoted: mek})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break
                    case 'chatwa':
                    if (!isOwner) return reply(ind.ownerb())
                if (isBanned) return reply(ind.baned())
                
                if (args.length < 2) return reply(`Mau chat apa? Contoh: ${prefix}chatwa 6288224859350 woi asu`)
          				if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
          
                        mansid = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
          				const kontel = body.slice(8)
                      if (kontel.length > 300) return mans.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const busih = `*[CHAT WHATSAPP]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${kontel}`

                      var options = {
                         text: busih,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    mans.sendMessage(`${mansid}`, options, text, {quoted: mek})
                    reply('PESAN ANDA TELAH SAMPAI KE NOMOR YG DITUJU')
                    break
                   case 'romadhon':
                   
             if (isBanned) return reply(ind.baned())
// Akhir Hitungan Mundur
var countDownDate = new Date("2021-04-12").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Ramadhan:*\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                case 'iduladha':
                
             if (isBanned) return reply(ind.baned())
// Akhir Hitungan Mundur
var countDownDate = new Date("2021-07-19").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Iduladha:*\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                case 'tahunbaru':
                
             if (isBanned) return reply(ind.baned())
// Akhir Hitungan Mundur
var countDownDate = new Date("2022-01-01").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Tahun Baru:*\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                    case 'spamchat':
                    if (!isOwner) return reply(ind.ownerb())
                if (isBanned) return reply(ind.baned())
                
                if (args.length < 2) return reply(`Mau spamchat ke siapa? Contoh: ${prefix}spamchat 6288224859350 woi asu`)
          				if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
          
                        mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
          				const kontul = body.slice(8)
                      if (kontul.length > 300) return mans.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const busah = `*[SPAM CHAT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${kontul}`

                      var options = {
                         text: busah,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    mans.sendMessage(`${mansed}`, options, text, {quoted: mek})
                       .then(() => { mans.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { mans.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { mans.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { mans.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { mans.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { mans.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { mans.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { mans.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    reply('SPAMCHAT ANDA TELAH SAMPAI KE NOMOR YG DITUJU')
                    break
            case 'temponews': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/temponews?apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.result.data) {
                    teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.content}\n*Date* : ${i.isoDate}\n=================\n`
                }
                reply(teks)
                break
            case 'kumparannews': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/kumpurannews?apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.result.data) {
                    teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
                }
                reply(teks)
                break
            case 'lazymedia': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`mau nyari berita apaan bang?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/lazymedia?search=${body.slice(10)}&apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.hasil.result) {
                    teks += `*Author:* : ${i.author}\n*Title* : ${i.title}\n*Tag* : ${i.tag}\n*Time* : ${i.time}\n*Description* : ${i.desc}\n*Key* : ${i.key}\n=================\n`
                }
                reply(teks)
                break
            case 'resepmakanan': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`mau nyari resep makanan apaan bang?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/resepmasakan?q=${body.slice(13)}&apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.hasil.results) {
                    teks += `*Title* : ${i.title}\n*Key* : ${i.key}\n*Time* : ${i.times}\n*Serving* : ${i.serving}\n*Difficulty* : ${i.difficulty}\n=================\n`
                }
                reply(teks)
                break
            case 'playstore': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`mau nyari game apaan bwang?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/googleplay?q=${body.slice(10)}&apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.result.data.results) {
                    teks += `*Title* : ${i.title}\n*App ID* : ${i.appId}\n*Url* : ${i.url}\n*Developer* : ${i.developer}\n*Price Text* : ${i.priceText}\n*Price?* : ${i.price}\n*Free?* : ${i.free}\n*Summary?* : ${i.summary}\n*Score Text?* : ${i.scoreText}\n*Score?* : ${i.score}\n=================\n`
                }
                reply(teks)
                break
            case 'joox': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/joox?q=${body.slice(5)}&apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.result.data) {
                    teks += `*Title* : ${i.lagu}\n*Album* : ${i.album}\n*Penyanyi* : ${i.penyanyi}\n*Publish Date* : ${i.publish}\n=================\n`
                }
                reply(teks)
                break
            case 'infofilm': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/infofilm?q=${body.slice(10)}&apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.hasil.result) {
                    teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Episode* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Views* : ${i.detail.views}\n*Duration* : ${i.detail.duration}\n*Release* : ${i.detail.release}\n*Dscription* : ${i.detail.description}\n=================\n`
                }
                reply(teks)
                break
            case 'infofilm2': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/country/infofilm?search=${body.slice(11)}&apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.hasil.result) {
                    teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Quality* : ${i.quality}\n*Movie ID* : ${i.movieId}\n*Trailer* : ${i.detail.trailer}\n*Views* : ${i.detail.views}\n*Genre* : ${i.detail.genre}\n*Director* : ${i.detail.director}\n*Aktor* : ${i.detail.actors}\n*Country* : ${i.detail.country}\n*Duration* : ${i.detail.duration}\n*Release* : ${i.detail.release}\n*Description* : ${i.detail.description}\n=================\n`
                }
                reply(teks)
                break
            case 'lk21': // Update NEW FITUR	
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/lk21?query=${body.slice(5)}&apikey=${ApiDevolover}`)
                teks = '=================\n'
                for (let i of asu.hasil.result) {
                    teks += `*Title* : ${i.title}\n*Genre* : ${i.genre}\n*Rating* : ${i.rating}\n*Duration* : ${i.duration}\n*Quality* : ${i.quality}\n*Trailer* : ${i.trailer}\n*Watch* : ${i.watch}\n=================\n`
                }
                reply(teks)
                break
            case 'burnpaper': // Update NEW FITUR	
            
             if (isBanned) return reply(ind.baned())			
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(10)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev4?text=${ct}&theme=burnpaper&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'textonecup': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())			
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(11)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textonecup&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'textsky': // Update NEW FITUR		
            
             if (isBanned) return reply(ind.baned())		
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(8)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textsky&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'nature': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())			
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(7)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=nature&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'rosegold': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())				
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(7)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=rosegold&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'nature3d': // Update NEW FITUR		
            
             if (isBanned) return reply(ind.baned())		
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(9)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=nature3d&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'heker':
            
             if (isBanned) return reply(ind.baned())
                anu = await fetchJson(`https://api.shizukaa.xyz/bacotanhacker?apikey=itsmeiky633`, { method: 'get' })
                reply(anu.result)
                break
            case 'katailham':
            
             if (isBanned) return reply(ind.baned())
                anu = await fetchJson(`https://api.shizukaa.xyz/bacotanilham?apikey=itsmeiky633`, { method: 'get' })
                kata = anu.result
                mans.sendMessage(from, kata, text, { quoted: mek })
                break
            case 'nsfwwaifu':
            
             if (isBanned) return reply(ind.baned())
                try {
                    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, { method: 'get' })
                    buffer = await getBuffer(res.url)
                    mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'ni anjim' })
                } catch (e) {
                    console.log(`Error :`, color(e, 'red'))
                    reply(' *ERROR* ')
                }
                break
            case 'nsfwtrap':
            
             if (isBanned) return reply(ind.baned())
                try {
                    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, { method: 'get' })
                    buffer = await getBuffer(res.url)
                    mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'ni anjim' })
                } catch (e) {
                    console.log(`Error :`, color(e, 'red'))
                    reply(' *ERROR* ')
                }
                break
            case 'bpfont':
            
             if (isBanned) return reply(ind.baned())
                bp = `${body.slice(8)}`
                anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, { method: 'get' })
                reply(anu.text)
                break
            case 'pastebin':
            
             if (isBanned) return reply(ind.baned())
                reply(mess.wait)
                paste = `${body.slice(10)}`
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, { method: 'get' })
                mans.sendMessage(from, `${anu.result}`, text, { quoted: mek })
                break
            case 'pantun':
            
             if (isBanned) return reply(ind.baned())
                anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, { method: 'get' })
                mans.sendMessage(from, `${anu.result}`, text, { quoted: mek })
                break
            case 'jamdunia':
            
             if (isBanned) return reply(ind.baned())
                reply(mess.wait)
                jamdunia = `${body.slice(10)}`
                anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=api lu&kota=${jamdunia}`, { method: 'get' })
                wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
                mans.sendMessage(from, wtime, text, { quoted: mek })
                break
            case 'howax':
            case 'hoax':
            case 'howak':
            case 'hoak':
            
             if (isBanned) return reply(ind.baned())
                mans.updatePresence(from, Presence.composing)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, { method: 'get' })
                teks = '────────────────────\n\n'
                for (let i of data.result) {
                    teks += `Title : ${i.title}\n*Link* : ${i.link}\n*Tag* : ${i.tag}\n\n────────────────────\n`
                }
                reply(teks.trim())
                break
            case 'fftourserti':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(12)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'fftourserti2':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'fftourserti3':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'fftourserti4':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'fftourserti5':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(14)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti2':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(15)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti3':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(15)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti4':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(15)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti5':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(15)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(12)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti1/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti2':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti3':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti4':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti5':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`[❕] Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'encbinary':
            
             if (isBanned) return reply(ind.baned())
                encbinary = `${body.slice(11)}`
                anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, { method: 'get' })
                mans.sendMessage(from, `${anu.result}`, text, { quoted: mek })
                break
            case 'decbinary':
            
             if (isBanned) return reply(ind.baned())
                decbin = `${body.slice(11)}`
                anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, { method: 'get' })
                mans.sendMessage(from, `${anu.result}`, text, { quoted: mek })
                break
            case 'nsfwneko':
            
             if (isBanned) return reply(ind.baned())
                try {
                    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, { method: 'get' })
                    buffer = await getBuffer(res.url)
                    mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'ni anjim' })
                } catch (e) {
                    console.log(`Error :`, color(e, 'red'))
                    reply(' *ERROR* ')
                }
                break
            case 'ocean': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(6)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=underwater-ocean&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'woodheart': // Update NEW FITUR		
            
             if (isBanned) return reply(ind.baned())		
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(10)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev?text=${ct}&theme=woodheart&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'summertext': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(11)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev?text=${ct}&theme=summertext&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'underglass': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(11)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev5?text=${ct}&theme=underglass&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'cemetery': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(9)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev5?text=${ct}&theme=cemetery&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'royallock': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(10)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev6?text=${ct}&theme=royallock&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'coffecup': // Update NEW FITUR		
            
             if (isBanned) return reply(ind.baned())		
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(9)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'coffecup2': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(10)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
                case 'neon': // Update NEW FITUR 2021	
                
             if (isBanned) return reply(ind.baned())			
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(5)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/metallic?text=${ct}&theme=neon&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				mans.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak hasilnya'})
				break
            case 'glow': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(5)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=glow&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'summer': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(7)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=summer&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'flower': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(6)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=flower&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'grandient': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(10)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro6?text=${ct}&theme=grandient&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'embroidery': // Update NEW FITUR		
            
             if (isBanned) return reply(ind.baned())		
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(11)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro7?text=${ct}&theme=embroidery&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'funnycup': // Update NEW FITUR		
            
             if (isBanned) return reply(ind.baned())		
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(9)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro4?text=${ct}&theme=funnycup&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'orchids': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(11)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro5?text=${ct}&theme=orchids-flower&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'smoke2': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(7)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro5?text=${ct}&theme=smoke2&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'loveone': // Update NEW FITUR				
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(8)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=loveone&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'smoke': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(6)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=smoke&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'onesilk': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(8)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=onesilk&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'glowing': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(8)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro1?text=${ct}&theme=glowing&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'heart': // Update NEW FITUR		
            
             if (isBanned) return reply(ind.baned())		
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(6)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=heart&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'wolf': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(5)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=wolf-metal&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'candy': // Update NEW FITUR			
            
             if (isBanned) return reply(ind.baned())	
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(6)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro7?text=${ct}&theme=candy&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'hentai': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hentaigif?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'waifu': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'eroyuri': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'hug': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'hug2': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'awoo': // masih ngebug
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/awoo?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'lick': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/lick?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'kiss': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/kiss?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'smug': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/smug?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'cuddle': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/cuddle?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'bully': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/bully?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'shinobu': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/shinobu?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'megumin': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/megumin?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'blush': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/blush?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'highfive': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/highfive?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'handhold': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/handhold?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'smile': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/smile?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'glomp': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/glomp?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'cringe': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/cringe?apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'shortlink':
            
             if (isBanned) return reply(ind.baned())
                // Update NEW FITUR
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${ApiDevolover}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
                reply(hasil)
                break
            case 'shortlink2':
            
             if (isBanned) return reply(ind.baned())
                // Update NEW FITUR
                mans.updatePresence(from, Presence.composing)
                reply(`[❕] Loading`)
                data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${ApiDevolover}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
                reply(hasil)
                break
            case 'shortlink3':
            
             if (isBanned) return reply(ind.baned())
                // Update NEW FITUR
                mans.updatePresence(from, Presence.composing)
                reply(`[❕] Loading`)
                data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/tiny?url=${args[0]}&apikey=${ApiDevolover}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
                reply(hasil)
                break
                  case 'listsurah':
                  
             if (isBanned) return reply(ind.baned())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
            case 'asmaulhusna':
            
             if (isBanned) return reply(ind.baned())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
            case 'niatsholat': // Case By Arga
            
             if (isBanned) return reply(ind.baned())
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=${ApiDevolover}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
            case 'bacaansholat': // Case By Arga
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=${ApiDevolover}`, { method: 'get' })
                teks = '=================\n'
                for (let i of anu.result) {
                    teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
                }
                reply(teks.trim())
                break
                case 'jadwalsholat':
                
             if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
            case 'kisahnabi':
            
             if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=Oz-san`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
            case 'tahlil': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=${ApiDevolover}`, { method: 'get' })
                teks = '=================\n'
                for (let i of anu.result.data) {
                    teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
                }
                reply(teks.trim())
                break
            case 'ayatkursi': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=${ApiDevolover}`)
                teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
                mans.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'covidglobal': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=${ApiDevolover}`)
                teks = `➸ *Total Cases* : ${anu.result.totalCases}\n*➸ Recovered :* ${anu.result.recovered}\n*➸ Deaths :* ${anu.result.deaths}\n*➸ Active Cases :* ${anu.result.activeCases}\n*➸ Closed Cases :* ${anu.result.closedCases}\n*➸ Last Update :* ${anu.result.lastUpdate}`
                mans.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'hadits': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`kitab + nomor nya mana om? contoh: hadits muslim|116`)
                ct = body.slice(8)
                ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hadits?kitab=${ll1}&nomor=${ll2}&apikey=${ApiDevolover}`)
                teks = `➸ *Name Hadits* : ${anu.result.data.name}\n*➸ Number Hadits :* ${anu.result.data.contents.number}\n*➸ Arab :* ${anu.result.data.contents.arab}\n*➸ Latin :* ${anu.result.data.contents.id}`
                mans.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
                 case 'alquran':
                 
             if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                    case 'alquranaudio':
                    
             if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolhuman}`)
                    mans.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
            case 'github': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/github?user=${body.slice(8)}&apikey=${ApiDevolover}`)
                buffer7 = await getBuffer(anu.result.avatar_url)
                teks = `*HASIL*\n\n*➸ ID :* ${anu.result.id}\n*➸ Node ID :* ${anu.result.node_id}\n*➸ Gravatar ID :* ${anu.result.gravatar_id}\n*➸ Url :* ${anu.result.html_url}\n*➸ Type :* ${anu.result.type}\n*➸ Site Admin :* ${anu.result.site_admin}\n*➸ Name :* ${anu.result.name}\n*➸ Company :* ${anu.result.company}\n*➸ Blog :* ${anu.result.blog}\n*➸ Location :* ${anu.result.location}\n*➸ Email :* ${anu.result.email}\n*➸ Bio  :* ${anu.result.bio}\n*➸ Twitter Username :* ${anu.result.twitter_username}\n*➸ Public Repo :* ${anu.result.public_repos}\n*➸ Public Gists :* ${anu.result.public_gists}\n*➸ Followers :* ${anu.result.followers}\n*➸ Following :* ${anu.result.following}\n*➸ Create At :* ${anu.result.created_at}\n*➸ Update At :* ${anu.result.updated_at}`
                mans.sendMessage(from, buffer7, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: teks })
                break
            case 'cuaca': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`kotanya mana om?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/cuaca?kota=${body.slice(6)}&apikey=${ApiDevolover}`)
                teks = `➸ *Nama Kota* : ${anu.result.data.Nama}\n*➸ Longitude :* ${anu.result.data.Longitude}\n*➸ Latitude :* ${anu.result.data.Latitude}\n*➸ Suhu :* ${anu.result.data.Suhu}\n*➸ Angin :* ${anu.result.data.Angin}\n*➸ Kelembaban :* ${anu.result.data.Kelembaban}\n*➸ Cuaca :* ${anu.result.data.Cuaca}\n*➸ Keterangan :* ${anu.result.data.Keterangan}\n*➸ Udara :* ${anu.result.data.Udara}`
                mans.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'Nih hasilnya kak...' })
                break
            case 'tiktokstalk': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`username tiktok mana om?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/tiktod/stalk/?username=${body.slice(13)}&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.user.avatarThumb)
                teks = `➸ *Username* : ${anu.result.user.uniqueId}\n*➸ Nickname :* ${anu.result.user.nickname}\n*➸ Bio :* ${anu.result.user.signature}\n*➸ Verified? :* ${anu.result.user.verified}\n*➸ Jumlah Follower :* ${anu.result.stats.followerCount}\n*➸ Jumlah Following :* ${anu.result.stats.followingCount}\n*➸ Jumlah Like :* ${anu.result.stats.heart}\n*➸ Total Video :* ${anu.result.stats.videoCount}`
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: teks })
                break
            case 'lacakip': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`ip nya mana bwang?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/iplookup?ip=${body.slice(9)}&apikey=${ApiDevolover}`)
                teks = `➸ *ip* : ${anu.result.ip}\n*➸ Country :* ${anu.result.country}\n*➸ Region :* ${anu.result.region}\n*➸ Latitude :* ${anu.result.latitude}\n*➸ Longtitude :* ${anu.result.longtitude}\n*➸ Timezone :* ${anu.result.timezone}\n*➸ Org :* ${anu.result.org}\n*➸ As :* ${anu.result.as}\n*➸ City :* ${anu.result.city}\n*➸ Country Code :* ${anu.result.countryCode}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Link GMaps :* ${anu.result.maps}`
                mans.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } } })
                break
            case 'dkasia': // Update By RzkyO 7 ItsmeikyXSec404
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`nama drakorasia apaan bwang?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/drakorasia?search=${body.slice(8)}&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.thumb)
                hasil = `➸ *Title* : ${anu.result.title}\n*➸ Title Korea :* ${anu.result.titleKr}\n*➸ Year :* ${anu.result.year}\n*➸ Jumlah Episode :* ${anu.result.episode}\n*➸ Genre :* ${anu.result.genre}\n*➸ Durasi :* ${anu.result.duration}\n*➸ Network :* ${anu.result.network}\n*➸ Ringkasan :* ${anu.result.synopsis}\n*➸ Aktor :* ${anu.result.casters}`
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: hasil })
                break
            case 'manga': // Update By RzkyO 7 ItsmeikyXSec404
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`nama anime nya apaan bwang?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/manga?search=${body.slice(6)}&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.thumb)
                hasil = `*Note:* : ${anu.result.note}\n*Title* : ${anu.result.title}\n*Description* : ${anu.result.description}\n*Name* : ${anu.result.name}\n*Type* : ${anu.result.type}\n*Author* : ${anu.result.author}\n*Genre* : ${anu.result.genre}\n*Rating* : ${anu.result.rating}\n*Released* : ${anu.result.released}\n*Status* : ${anu.result.status}`
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: hasil })
                teks = '=================\n'
                for (let i of anu.result.downloads) {
                    teks += `*Date* : ${i.date}\n*Download Via* : ${i.title}\n*Link Download* : ${i.link}\n=================\n`
                }
                reply(teks)
                break
            case 'kusonime': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`nama anime nya apaang bwang?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/kusonime?search=${body.slice(9)}&apikey=${ApiDevolover}`)
                buffer = await getBuffer(anu.result.thumbs)
                hasil = `*Title:* : ${anu.result.title}\n*Title Jp* : ${anu.result.title_jp}\n*Genre* : ${anu.result.genre}\n*Season* : ${anu.result.season}\n*Producer* : ${anu.result.producer}\n*Type* : ${anu.result.type}\n*Total Episode* : ${anu.result.total_episode}\n*Rating* : ${anu.result.score}\n*Durasi* : ${anu.result.duration}\n*Released On* : ${anu.result.released_on}\n*Description* : ${anu.result.description}`
                mans.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: hasil })
                break
            case 'cekresijne': // Update NEW FITUR
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`res nya apaan bwang?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/searchresi?courier=jne&awb=${body.slice(11)}&apikey=${ApiDevolover}`)
                hasil = `*Code Resi:* : ${anu.result.data.summary.awb}\n*Courier* : ${anu.result.data.summary.courier}\n*Service* : ${anu.result.data.summary.service}\n*Status* : ${anu.result.data.summary.status}\n*Date* : ${anu.result.data.summary.date}\n*Desc* : ${anu.result.data.summary.desc}\n*Harga* : ${anu.result.data.summary.amount}\n*Berat Barang* : ${anu.result.data.summary.weight}\n*Origin* : ${anu.result.data.detail.origin}\n*Destination* : ${anu.result.data.detail.destination}\n*Shipper* : ${anu.result.data.detail.shipper}\n*Receiver* : ${anu.result.data.detail.receiver}`
                mans.sendMessage(from, hasil, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*「 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇 」*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg') } } }, caption: 'ini hasilnya kak' })
                teks = '=================\n'
                for (let i of anu.result.data.history) {
                    teks += `*Date* : ${i.date}\n*Desc History* : ${i.desc}\n*Location* : ${i.location}\n=================\n`
                }
                reply(teks)
                break
            case 'afk':
            
             if (isBanned) return reply(ind.baned())
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
                    ini_txt = "*「 FITUR AFK 」*\nANDA SEKARANG BERADA DI MODE AFK\n"
                    if (alasan != "") {
                        ini_txt += "ALASAN " + alasan
                    }
                    reply(ini_txt)
                    break
            case 'nulis2':
            case 'tulis2':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 IKY baik hati')
                laysha = body.slice(8)
                reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
                mans.sendMessage(from, buff, image, { quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*' })
                await limitAdd(sender)
                break
            case 'nulis1':
            case 'tulis1':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 ITS baik hati')
                laysha = body.slice(8)
                reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${laysha}&APIKEY=${XteamKey}`)
                mans.sendMessage(from, buff, image, { quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*' })
                await limitAdd(sender)
                break
            case 'naruto':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=naruto&apikey=${VhtearKey}`, { method: 'get' })
                var naru = JSON.parse(JSON.stringify(anu.result));
                var to = naru[Math.floor(Math.random() * naru.length)];
                nyew = await getBuffer(to)
                mans.sendMessage(from, nyew, image, { caption: 'naruto!!', quoted: mek })
                break
            case 'minato':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=minato&apikey=${VhtearKey}`, { method: 'get' })
                var min = JSON.parse(JSON.stringify(anu.result));
                var ato = min[Math.floor(Math.random() * min.length)];
                nyeq = await getBuffer(ato)
                mans.sendMessage(from, nyeq, image, { caption: 'minato!!', quoted: mek })
                break
            case 'slap':
            
             if (isBanned) return reply(ind.baned())
                kapankah = body.slice(1)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const slap = ['anjing', 'babi lu', 'anak anjing', 'udah tolol nub Lagi', 'muka lo kek monyet', 'udah jomblo sendirian lagi dirumah tolol', 'so so an mau punya pacar muka aja kek monyet lepass dari kandang', 'ganteng doang di toxic aja dibilang baperan', 'pantek kau', 'bangsat kau', 'ku entod kalian nangis kau', 'memek lu semua', 'lihat anak anjing lagi baca', 'ngentot lu ya?', 'ganteng doang jemput cewe dipanggang', 'kamu cantik beb bullshit anjing cowo buaya', 'anak dajjal', 'puki lu', 'anjing ngajak gelud?', 'sama hantu takut cupu ngentod', 'cupu cupu aja gausah bacot', 'kontol lu semua', 'bocah lu semua kontol', '3 Hari Lagi', 'Ngontol Amat']
                const ple = slap[Math.floor(Math.random() * slap.length)]
                pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
                mans.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n' + ple })
                await limitAdd(sender)
                break
            case 'boruto':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=boruto&apikey=${VhtearKey}`, { method: 'get' })
                var bor = JSON.parse(JSON.stringify(anu.result));
                var uto = bor[Math.floor(Math.random() * bor.length)];
                nyet = await getBuffer(uto)
                mans.sendMessage(from, nyet, image, { caption: 'boruto!!', quoted: mek })
                break
            case 'hinata':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hinata&apikey=${VhtearKey}`, { method: 'get' })
                var hina = JSON.parse(JSON.stringify(anu.result));
                var ta = hina[Math.floor(Math.random() * hina.length)];
                nyei = await getBuffer(ta)
                mans.sendMessage(from, nyei, image, { caption: 'hinata!!', quoted: mek })
                break
            case 'sasuke':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sasuke&apikey=${VhtearKey}`, { method: 'get' })
                var sasu = JSON.parse(JSON.stringify(anu.result));
                var ke = sasu[Math.floor(Math.random() * sasu.length)];
                nyeo = await getBuffer(ke)
                mans.sendMessage(from, nyeo, image, { caption: 'sasuke!!', quoted: mek })
                break
            case 'sakura':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sakura&apikey=${VhtearKey}`, { method: 'get' })
                var sak = JSON.parse(JSON.stringify(anu.result));
                var kura = sak[Math.floor(Math.random() * sak.length)];
                nyep = await getBuffer(kura)
                mans.sendMessage(from, nyep, image, { caption: 'sakura!!', quoted: mek })
                break
            case 'unta':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=unta&apikey=${VhtearKey}`, { method: 'get' })
                var unt1 = JSON.parse(JSON.stringify(anu.result));
                var unt2 = unt1[Math.floor(Math.random() * unt1.length)];
                nyea = await getBuffer(unt2)
                mans.sendMessage(from, nyea, image, { caption: 'unta!!', quoted: mek })
                break
            case 'kaneki':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VhtearKey}`, { method: 'get' })
                var kan = JSON.parse(JSON.stringify(anu.result));
                var eki = kan[Math.floor(Math.random() * kan.length)];
                nyes = await getBuffer(eki)
                mans.sendMessage(from, nyes, image, { caption: 'kaneki!!', quoted: mek })
                break
            case 'picthewan':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewanimut&apikey=${VhtearKey}`, { method: 'get' })
                var kan = JSON.parse(JSON.stringify(anu.result));
                var eki = kan[Math.floor(Math.random() * kan.length)];
                nyed = await getBuffer(eki)
                mans.sendMessage(from, nyed, image, { caption: 'kaneki!!', quoted: mek })
                break
            case 'toukachan':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ToukaKirishima&apikey=${VhtearKey}`, { method: 'get' })
                var tou = JSON.parse(JSON.stringify(anu.result));
                var ka = tou[Math.floor(Math.random() * tou.length)];
                nyef = await getBuffer(ka)
                mans.sendMessage(from, nyef, image, { caption: 'toukachan!!', quoted: mek })
                break
            case 'rize':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=RizeKamishiro&apikey=${VhtearKey}`, { method: 'get' })
                var ri = JSON.parse(JSON.stringify(anu.result));
                var ze = ri[Math.floor(Math.random() * ri.length)];
                nyeg = await getBuffer(ze)
                mans.sendMessage(from, nyeg, image, { caption: 'rize chan!!', quoted: mek })
                break
            case 'akira':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=akiramado&apikey=${VhtearKey}`, { method: 'get' })
                var ak = JSON.parse(JSON.stringify(anu.result));
                var ara = ak[Math.floor(Math.random() * ak.length)];
                nyeh = await getBuffer(ara)
                mans.sendMessage(from, nyeh, image, { caption: 'akira chan!!', quoted: mek })
                break
            case 'itori':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=itori&apikey=${VhtearKey}`, { method: 'get' })
                var it = JSON.parse(JSON.stringify(anu.result));
                var ori = it[Math.floor(Math.random() * it.length)];
                nyej = await getBuffer(ori)
                mans.sendMessage(from, nyej, image, { caption: 'itori chan!!', quoted: mek })
                break
            case 'dxd':
                try {
                    if (isBanned) return reply(ind.baned())
                    
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, { method: 'get' })
                    buffer = await getBuffer(res.result)
                    mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'gw iri bangsat' })
                } catch (e) {
                    console.log(`Error :`, color(e, 'red'))
                    sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
                    mans.sendMessage(from, sa, image, { quoted: mek, caption: 'Error Kak!!' })
                    reply('❌ *ERROR* ❌')
                }
                break
            case 'kurumi':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${VhtearKey}`, { method: 'get' })
                var kur = JSON.parse(JSON.stringify(anu.result));
                var imi = kur[Math.floor(Math.random() * kur.length)];
                nyek = await getBuffer(imi)
                mans.sendMessage(from, nyek, image, { caption: 'kurumi chan!!', quoted: mek })
                break
            case 'miku':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${VhtearKey}`, { method: 'get' })
                var mi = JSON.parse(JSON.stringify(anu.result));
                var ku = mi[Math.floor(Math.random() * mi.length)];
                nyel = await getBuffer(ku)
                mans.sendMessage(from, nyel, image, { caption: 'miku chan!!', quoted: mek })
                break
            case 'rem':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=remrezero&apikey=${VhtearKey}`, { method: 'get' })
                var mi = JSON.parse(JSON.stringify(anu.result));
                var ku = mi[Math.floor(Math.random() * mi.length)];
                nyez = await getBuffer(ku)
                mans.sendMessage(from, nyez, image, { caption: 'rem chan!!', quoted: mek })
                break
            case 'ram':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=${VhtearKey}`, { method: 'get' })
                var mi = JSON.parse(JSON.stringify(anu.result));
                var ku = mi[Math.floor(Math.random() * mi.length)];
                nyex = await getBuffer(ku)
                mans.sendMessage(from, nyex, image, { caption: 'ram chan!!', quoted: mek })
                break

            case 'pictcewek':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait)
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cewekcantik&apikey=${VhtearKey}`, { method: 'get' })
                var mi = JSON.parse(JSON.stringify(anu.result));
                var ku = mi[Math.floor(Math.random() * mi.length)];
                nyev = await getBuffer(ku)
                mans.sendMessage(from, nyev, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
                break
            case 'pictcowok':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait)
                anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cowokganteng&apikey=${VhtearKey}`, { method: 'get' })
                var mi = JSON.parse(JSON.stringify(anu.result));
                var ku = mi[Math.floor(Math.random() * mi.length)];
                nyeb = await getBuffer(ku)
                mans.sendMessage(from, nyeb, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
                break
            case 'jokerlogo':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply('Teks nya mana kak?')
                tels = body.slice(10)
                reply(ind.wait())
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}&apikey=BotWeA`, { method: 'get' })
                buffer = await getBuffer(anu.result)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
                /*
            case 'cersex':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))

                gatauda = body.slice(1)
                anu = await fetchJson(`https://arugaz.herokuapp.com/api/cersex2`)
                reply(anu.result)
                break
                */
                 case 'ktpmaker':
                 
             if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolhuman}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    mans.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
            case 'nulispolio':
            case 'tulispolio':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 IKY baik hati')
                laysha = body.slice(8)
                reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${laysha}&APIKEY=${XteamKey}`)
                mans.sendMessage(from, buff, image, { quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*' })
                await limitAdd(sender)
                break
            case 'nulis':
            case 'tulis':
                if (args.length < 1) return reply('Yang mau di tulis titit kah?')
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                teks = body.slice(7)
                reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=${VhtearKey}`)
                mans.sendMessage(from, buff, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'kalkulator':
              if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
                if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
                mtk = `${body.slice(12)}`
                anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${apivhtear}`, { method: 'get' })
                mans.sendMessage(from, `*${anu.result.data}*`, text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'quotes':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                quotes = body.slice(1)
                const quo = ['Lebih baik mengerti sedikit daripada salah mengerti.', 'Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.', 'Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.', 'Penderitaan adalah pelajaran.', 'Ilmu pengetahuan tanpa agama adalah pincang.', 'Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.', 'Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.', 'Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?', '  kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.', 'Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.', 'Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.', 'Manusia akan bahagia selama ia memilih untuk bahagia.', 'Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.', 'Apabila sempurna akal seseorang, maka sedikit perkataannya.', 'Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.', 'Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.', 'Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.', 'Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.', 'Penundaan adalah kuburan dimana peluang dikuburkan.', 'Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.', 'Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.', 'Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.', 'Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.', 'Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.', 'Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.', 'Kesabaran adalah teman dari kebijaksanaan.', 'Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.', 'Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.', 'Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.', 'Anda tidak perlu harus berhasil pada kali pertama.', 'Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.', 'Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.', 'Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.', 'Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
                const tes = quo[Math.floor(Math.random() * quo.length)]
                mans.sendMessage(from, '' + tes + '\n\n_By : ⸸ITSMAZGH⸸Panutanque._', text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'nekopoi':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                if (args.length < 1) return reply('teksnya mana gan?')
                teks = body.slice(9)
                anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, { method: 'get' })
                reply(ind.wait())
                teks = `===============\n`
                for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                }
                reply(teks.trim())
                await limitAdd(sender)
                break
            case 'vinta':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                vin = body.slice(7)
                reply(ind.wait())
                vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
                mans.sendMessage(from, vintage, image, { caption: 'nih anjim ${vin}', quoted: mek })
                await limitAdd(sender)
                break
            case 'avengers':
            
             if (isBanned) return reply(ind.baned())
                 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/avenger?apikey=${lolhuman}&text1=${txt1}&text2=${txt2}`)
                    mans.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
            case 'summer':
              if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(8)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'sandwrite':
             if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(11)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'metaldark':
          if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(11)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'dropwater':
            if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(11)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'grenneon':
               
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(10)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'neontext':
               
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(10)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'toxic':
                
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(7)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'sumery':
               
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(8)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'blood':
                
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(7)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'firework':
                
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                arugazzz = body.slice(10)
                reply(ind.wait())
                arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
                mans.sendMessage(from, arugazzz, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'lava':
               
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                aruga = body.slice(6)
                reply(ind.wait())
                aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
                mans.sendMessage(from, aruga, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'randomexo':
               
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                shizukaa = await fetchJson(`https://api.shizukaa.xyz/randomexo?apikey=itsmeiky633`)
                shizuka = await getBuffer(shizukaa.result)
                mans.sendMessage(from, shizuka, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'blackpink':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                BP = `${body.slice(10)}`                    
                if (args.length < 1) return reply('Teksnya mana gan??')
                if (args.length > 10) return reply('karakter minimal 10')
                reply(ind.wait())
                buff = await getBuffer(`http://api.zeks.xyz/api/logobp?text=${BP}&apikey=apivinz`, { method: 'get' })
                mans.sendMessage(from, buff, image, { quoted: mek })
                await limitAdd(sender)                 
                break
            case 'randomanime':
                
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                shizuka = await fetchJson(`https://api.shizukaa.xyz/randomanime?apikey=${shizukaapi}`)
                shizukaa = await getBuffer(shizuka.result)
                mans.sendMessage(from, shizukaa, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'randomhusbu':
                
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                shizuka = await fetchJson(`https://api.shizukaa.xyz/husbu?apikey=${shizukaapi}`)
                shizukaa = await getBuffer(shizuka.result)
                mans.sendMessage(from, shizukaa, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'randomislamic':
                
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                shizuka = await fetchJson(`https://api.shizukaa.xyz/wpislamic?apikey=${shizukaapi}`)
                shizukaa = await getBuffer(shizuka.result)
                mans.sendMessage(from, shizukaa, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'randomcyberspace':
               
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                shizuka = await fetchJson(`https://api.shizukaa.xyz/wpcyberspace?apikey=${shizukaapi}`)
                shizukaa = await getBuffer(shizuka.result)
                mans.sendMessage(from, shizukaa, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'randomgame':
                
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                shizuka = await fetchJson(`https://api.shizukaa.xyz/wpgame?apikey=${shizukaapi}`)
                shizukaa = await getBuffer(shizuka.result)
                mans.sendMessage(from, shizukaa, image, { caption: 'Nih kak', quoted: mek })
                await limitAdd(sender)
                break
            case 'ninjalogo':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(11)
                var nin = gh.split("&")[0];
                var ja = gh.split("&")[1];
                if (args.length < 1) return reply('「❗」Contoh : ${prefix}ninjalogo IKY & Gans')
                reply(ind.wait())
                buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'halloweentext':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                ween = body.slice(15)
                if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
                reply(ind.wait())
                buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'apiteks':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(limitend(pushname))
                if (args.length < 1) return reply('Teksnya mana um')
                love = body.slice(12)
                if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 11 karakter')
                reply(ind.wait())
                bufferxcz = await getBuffer(`https://api.vhtear.com/fire_maker?text=${love}&apikey=${VhtearKey}`, { method: 'get' })
                mans.sendMessage(from, bufferxcz, image, { quoted: mek, caption: 'Creator itsmazgh' })
                break
            case 'anime':
              
             if (isBanned) return reply(ind.baned())
                reply(ind.wait())
                fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
                break
            case 'animesaran':
              
             if (isBanned) return reply(ind.baned())
                qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
                mans.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
                break
            case 'ffbaner':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(limitend(pushname2))
                var gh = body.slice(12)
                var porn = gh.split("&")[0];
                var hub = gh.split("&")[1];
                if (args.length < 1) return reply('Teksnya mana um')
                love = body.slice(10)
                if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
                reply(ind.wait())
                bufferxcz = await getBuffer(`https://api.vhtear.com/bannerff?title=${love}&text=${porn}&apikey=${VhtearKey}`, { method: 'get' })
                mans.sendMessage(from, bufferxcz, image, { quoted: mek, caption: ' ' + love })
                break
                /*
            case 'bokep':
                mans.updatePresence(from, Presence.composing)
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isGroup) return reply(ind.groupo())
                data = fs.readFileSync('./src/18.js');
                jsonData = JSON.parse(data);
                randIndex = Math.floor(Math.random() * jsonData.length);
                randKey = jsonData[randIndex];
                randBokep = await getBuffer(randKey.image)
                reply('*JANGAN SANGEAN YA!*')
                randTeks = randKey.teks
                mans.sendMessage(from, randBokep, image, { quoted: mek, caption: randTeks })
                break
                */
            case 'pornhub':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(9)
                var porn = gh.split("&")[0];
                var hub = gh.split("&")[1];
                if (args.length < 1) return reply('「❗」Contoh : ${prefix}pornhub ITS & Hub')
                reply(ind.wait())
                buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${porn}&text2=${hub}&apikey=${VhtearKey}`)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'gemboktext':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
                var gem = gh.split("&")[0];
                var bok = gh.split("&")[1];
                if (args.length < 1) return reply('[❗] Contoh : ${prefix}gemboktext 11 01 2021 & ITS dan Bila')
                reply(ind.wait())
                buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'glitchtext':
            case 'gctext':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
                var gli = gh.split("&")[0];
                var tch = gh.split("&")[1];
                if (args.length < 1) return reply('[❗] Contoh : ${prefix}glitchtext ITS & Gans')
                reply(ind.wait())
                buffer = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${gli}&text2=${tch}%20&apikey=${VhtearKey}`)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'tts':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return mans.sendMessage(from, 'Kode bahasanya mana kak | contoh : ${prefix}tts id ah yamate kudasai', text, { quoted: mek })
                const gtts = require('./lib/gtts')(args[0])
                if (args.length < 2) return mans.sendMessage(from, 'Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai', text, { quoted: mek })
                dtt = body.slice(8)
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                dtt.length > 300 ?
                    reply('Teks nya terlalu panjang kak') :
                    gtts.save(ranm, dtt, function() {
                        exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                            fs.unlinkSync(ranm)
                            buff = fs.readFileSync(rano)
                            if (err) return reply(ind.stikga())
                            mans.sendMessage(from, buff, audio, { quoted: mek, ptt: true })
                            fs.unlinkSync(rano)
                        })
                    })
                await limitAdd(sender)
                break
                 case 'ttpwarna':
                 
             if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Kata`)
                txt = args.join(" ")
                buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=${lolhuman}&text=${txt}`)
                mans.sendMessage(from, buffer, sticker, { quoted: mek })
                break
            case 'ttp':
            
             if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Kata`)
                txt = args.join(" ")
                buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${lolhuman}&text=${txt}`)
                mans.sendMessage(from, buffer, sticker, { quoted: mek })
                break
            case 'attp':
            
             if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
                attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
                mans.sendMessage(from, attp2, sticker, { quoted: mek })
                break
            case 'toimg':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar kak >_<')
                reply(ind.wait())
                encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                media = await mans.downloadAndSaveMediaMessage(encmedia)
                ran = getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(ran)
                    mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih kak 😇' })
                    fs.unlinkSync(ran)
                })
                await limitAdd(sender)
                break
            case 'lovemake':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                if (args.length < 1) return reply('teksnya mana kak?')
                teks = `${body.slice(8)}`
                if (teks.length > 10) return mans.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, { quoted: mek })
                buffer6 = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=${VhtearKey}`, { method: 'get' })
                mans.sendMessage(from, buffer6, image, { quoted: mek, caption: `${teks}` })
                break
            case 'bikinquote':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
                var quote = gh.split("&")[0];
                var wm = gh.split("&")[1];
                const pref = `yang mau dijadiin quote apaan, titit?\n\ncontoh : ${prefix}bikinquote aku bukan boneka & Kata ITS`
                if (args.length < 1) return reply(pref)
                reply(ind.wait())
                anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, { method: 'get' })
                buffer = await getBuffer(anu.result)
                mans.sendMessage(from, buffer, image, { caption: 'Nih kak >_<', quoted: mek })
                await limitAdd(sender)
                break
            case 'stalkig':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                teks = body.slice(9)
                anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${VhtearKey}`, { method: 'get' })
                reply('「❗」Sabar Lagi Stalking IG nya kak')
                buffer = await getBuffer(anu.result.picture)
                hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username?* : _${anu.result.username}_ \n *Nama??* : _${anu.result.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.follower}_ \n *Jumlah Following?* : _${anu.result.follow}_ \n *Jumlah Post?* : _${anu.result.post_count}_ \n *Biografi?? :* _${anu.result.biography}`
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: hasil })
                await limitAdd(sender)
                break
            case 'daftar':
                if (isBanned) return reply(ind.baned())
                if (isRegistered) return reply(ind.rediregis())
                if (!q.includes('|')) return reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Namanya kepanjangan kak :)`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Umur min 10 tahun max 40 tahun`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
                break
            case 'silktext':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                silk = body.slice(10)
                if (silk.length > 7) return reply('Teksnya kepanjangan, maksimal 6 karakter')
                reply(ind.wait())
                buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${VhtearKey}`)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'bisakah':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                bisakah = body.slice(1)
                const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
                const keh = bisa[Math.floor(Math.random() * bisa.length)]
                mans.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'kapankah':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                kapankah = body.slice(1)
                const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
                const koh = kapan[Math.floor(Math.random() * kapan.length)]
                mans.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'gplaybutton':
            case 'splaybutton':
            
                if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} BuildTheCraft`)
                txt = args.join(" ")
                reply('「❗️」PROSES DULU BOSS')
                buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                mans.sendMessage(from, buffer, image, { caption: 'Nih kak..', quoted: mek })
                break
            case 'allemoji':
            
                if (isBanned) return reply(ind.baned())
               emoji = `😀😃😄😁😆😅😂🤣😭🙃😙😚😘🥰😍🤩🥳🤗🙃🙂☺️😊😏😌😉🤭😶😐😑😔😋😛😝😜🤪🤔🤨🧐🙄😒😤😠😡🤬☹️🙁😕😟🥺😳😬🤐🤫😰😨😧😦😮😯😲😱🤯😢😥😓😞😖😣😩😫🤤🥱😴😪🌛🌜🌚🌝🌞🤢🤮😴😪🌛🌜🌚🌝🌞🤢🤮🤧🤒🤕🥴🥵🥶😷😇🤠🤑😎🤓🤥🤡👻💩👽🤖🎃😈👿👹👺☠️🔥💫⭐🌟✨⚡💥💯💢💨💦💤🕳️🎉🎊😺😸😹😻😼😽🙀😿😾❤️🧡💛💚💙💜🤎🖤🤍♥️💘💝💖💗💓💞💕💌❣️❣️💔💋👥👤🗣️🧠🩸🦠🦷🦴💀👀👁️👄👅👃👂🦻🦶🦵🦿🦾💪👍👎👏🙌👐🤲🤝🤜🤛✊👊🖐️✋🤚👋🤏👌✌️🤘🤟🤙🤞🖕🖖☝️👆👇👉👈✍️🤳🙏💅🙇🙋💁🙆🙅🤷🤦🙍🙎🧏💆💇🧖🛀🛌🧘👩‍🦯👩‍🦼👩‍🦽🧎🧍🚶🏃🤸🏋️⛹️🤾🚴🚵🧗🤼🤹🏌️🏇🤺⛷️🧝🧙🧛🧟🦸🦹🤶👼💂👸🤴👩‍🔧👩‍🏭👩‍🚀👷👮🕵️👩‍✈️👩‍🔬👩‍⚕️👩‍🔧👩‍🏭👩‍🚒👩‍🌾👩‍🏫👩‍🎓👩‍💼👩‍⚖️👩‍💻👩‍🎤👩‍🎨👩‍🍳👳🧕👲👶🧒🧑🧓👩‍🦳👩‍🦰👱👩‍🦱👩‍🦲🧔🕴️💃🕺👯🧑‍🤝‍🧑👭👬👫💏👩‍❤️‍💋‍👨👨‍❤️‍💋‍👨👩‍❤️‍💋‍👩💑👩‍❤️‍👨👨‍❤️‍👨👩‍❤️‍👩🤰🤱👪💐🌹🥀🌷🌺🌸🏵️🌻🌼💮🍂🍁🌾🌱🌿🍃☘️🍀🌵🌴🌳🌲🏞️🌊🌬️🌀🌁🌫️🌪️☃️⛄❄️🏔️🌡️🔥🌋🏜️🏖️⛱️🌇🌅🌄☀️🌤️⛅🌥️🌦️☁️🌨️⛈️🌩️🌧️💧☔⚡🌈⭐🌟💫✨☄️🌠🌌🌉🌆🌃🌍🌎🌏🌑🌒🌓🌔🌕🌗🌘🌙🪐🙈🙉🙊🐵🦁🐯🐱🐶🐺🐻🐨🐼🐹🐭🐰🦊🦝🐮🐷🐽🐗🦓🦄🐴🐸🐲🦎🐉🦖🦕🐢🐊🐍🐁🐀🐇🐈🐩🐕🦮🐕‍🦺🐅🐆🐎🐖🐄🐂🐃🐏🐑🐐🦌🦙🦥🦘🐘🦏🦛🦒🐒🦍🦧🐪🐫🐿️🦨🦡🦔🦦🦇🐓🐔🐣🐤🐥🐦🦉🦅🦜🕊️🦢🦩🦚🦃🦆🐧🦈🐬🐋🐳🐟🐠🐡🦐🦞🦀🦑🐙🦪🦂🕷️🕸️🐚🐌🐜🦗🦟🐝🐞🦋🐛🦠🐾🍓🍒🍎🍉🍑🍊🥭🍍🍌🍋🍈🍏🍐🥝🍇🥥🍅🌶️🍄🥕🍠🧅🌽🥦🥒🥬🥑🍆🧄🥔🌰🥜🍞🥐🥖🥯🧇🥞🍳🥚🧀🥓🥩🍗🍖🍔🌭🥪🥨🍟🍕🌮🌯🥙🧆🥘🍝🥫🥣🥗🍲🍛🍜🦪🦞🍣🍤🥡🍚🍱🥟🍢🍙🍘🍥🍡🥠🥮🍧🍨🍦🥧🍰🍮🎂🍭🍬🍫🍩🍪🍯🧂🧈🍿🧊🥤🧃🥛🍼🍵☕🧉🍺🍻🥂🍾🍷🥃🍸🍹🍶🥢🍴🥄🔪🍽️🛑🚧🚥🚦🚨⛽🛢️🧭⚓🚏🚇🛹🛴🚛🦼🚲🛵🏍️🚙🚗🚐🚌🚈🚝🚅🚒🚑🚓🚕🛺🚌🚈🚝🚅🚄🚂🚃🚋🚎🚞🚊🚉🚍🚔🚘🚖🚆🚢🛳️🛥️🚤⛴️⛵🛶🚟🚠🚡🚁🛸🚀🛩️✈️🛫🛬🎢🎡🎠🎪🗼🗽🗿💈🏛️⛲⛩️🕍🕌🕋🛕⛪💒🏩🏯🏰🏗️🏢🏭🏬🏪🏟️🏦🏫🏨🏣🏤🏥🏚️🏠🏡🏘️⛺🏕️🌅🌄🌇🏙️🌆🌃🌌🌉🏔️⛰️🌋🗻🏞️🏜️🏖️⛱️🏝️🛤️🛣️🗺️🗾🌐💺🧳🎉🎊🎈🎂🎀🎁🎇🎆🧨🧧🪔🎐🎏🎎🎑🎍🎋🎄🎃🎗️🥇🥈🥉🏅🎖️🏆📢🥅⚽⚾🥎🏀🏐🏈🏉🎾🏸🥍🏏🏑🏒🥌🛷🎿⛸️🩰⛳🎯🏹🥏🪁🎣🤿🩱🎽🥋🥊🎱🏓🎳♟️🪀🧩🎽🥋🥊🎱🏓🎳♟️🪀🧩🎮🕹️👾🔫🎲🎰🎴🀄🃏🎩📷🎶🖼️🎨🖌️🖍️🧵🧶🎼🎵🎶🎹🎷🎺📻🪕🎻🥁🎤🎧🎚️🎛️🎙️📻📺📼📹📽️🎥🎞️🎬🎭🎫🎟️📱📲☎️📞📟📠🔌🔋🖲️💽💾💿📀🖥️💻⌨️🖨️🖱️🏧💸💵💴💶💷💳💰🧾🧮⚖️🛒🛍️🕯️💡🔦🏮🧱🚪🪑🛏️🛋️🚿🛁🚽🧻🧸🧷🧹🧴🧽🧼🪒🧺🧦🧤🧣👖👕🎽👚👔👗👘🥻🩱👙🩳🩲🧥🥼🦺⛑️🎓🎩👒🧢👑🎒👝👛👜💼🧳☂️🌂💍💎💄👠👟👞🧫👡👢🥾👓🕶️🦯🥽⚗️🧫🧪🌡️🧬💉💊🩹🩺🔬🔭📡🛰️🧯🪓🧲🧰🗜️🔩🔧🔨⚒️🛠️⛏️⚙️🔗⛓️📎🖇️📏📐✂️📌📍🗑️🖌️🖍️🖊️🖋️✒️✏️📝📒📔📕📓📗📘📙📚📖🔖🗒️📄📃📋📇📑🗃️🗄️🗂️📂📁📰🗞️📊📈📉📦📫📪📬📭📮✉️📧📩📨💌📤📥🗳️🏷️⌛⏳🕰️🕛🕧🕐🕜🕑🕝🕒🕞🕓🕟🕔🕠🕕🕡🕖🕢🕗🕣🕘🕤🕙🕥🕚🕦⏱️⌚⏲️⏰🗓️📅📆🛎️🔔📯📢📣💣🔎🔮🧿📿🏺⚱️⚰️🚬💣📜⚔️🗡️🛡️🗝️🔑🔐🔏🔒🔓❤️🧡💛💚💙💜🤎🖤🤍🔴🟠🟡🟢🔵🟣🟤⚫⚪🟥🟧🟨🟩🟦🟪🟫⬛⬜♈♉♊♋♌♍♎♏♐♑♒♓⛎♀️♂️🔻🔺❕❗❔❓⁉️‼️⭕❌🚫🚳🚭🚯🚱🚷📵🔞🔕🔇🅰️🆎🅱️🆑🅾️🆘🛑⛔📛♨️🉐㊙️㊗️🈴🈵🈹🈲🉑🈶🈚🈸🈺🈷️🔶🔸✴️🆚🎦📶🔁🔂🔀▶️⏩⏭️⏯️◀️⏪⏮️🔼⏫🔽⏬⏸️⏹️⏺️⏏️🔆🔅📲📳📴🔈🔉🔊🎵🎶🎼☢️☣️⚠️🚸⚜️🔱〽️🔰✳️❇️♻️💱💲💹🈯❎✅✔️☑️⬆️↗️➡️↘️⬇️↙️⬅️↖️↕️↔️↩️↪️⤴️⤵️🔃🔄🔙🔛🔝🔚🈳🆕🆓🆙🆗🆒🆖🈁🈂️🈳🔣🔤🔠🔡🔢#️⃣*️⃣0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🏧⚕️💠🔷🔹🌐Ⓜ️ℹ️🅿️🚾🗣️👤👥👣🐾🚻🚹🚺♿🚼🚮🚰🛂🛃🛄🛅👁️‍🗨️💟⚛️🛐🕉️☸️☮️☯️☪️✝️☦️✡️🔯🕎♾️🆔©️®️™️✖️➕➖➗➰➿〰️♥️♦️♣️♠️🔳◼️◾▪️🔲◻️◽▫️💭🗯️💬🗨️🔘🇦🇩🇦🇪🇦🇫🇦🇬🇦🇮🇦🇱🇦🇲🇦🇴🇦🇷🇦🇸🇦🇹🇦🇺🇦🇼🇦🇽🇦🇿🇧🇦🇧🇧🇧🇩🇧🇪🇧🇫🇧🇬🇧🇭🇧🇮🇧🇯🇧🇲🇧🇳🇧🇴🇧🇷🇧🇸🇧🇹🇧🇼🇧🇾🇧🇿🇨🇦🇨🇨🇨🇩🇨🇫🇨🇬🇨🇭🇨🇮🇨🇰🇨🇱🇨🇲🇨🇳🇨🇴🇨🇷🇨🇺🇨🇻🇨🇼🇨🇽🇨🇾🇨🇿🇩🇪🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇪🇨🇪🇪🇪🇬🇪🇷🇪🇸🇪🇹🇪🇺🇫🇮🇫🇯🇫🇲🇫🇴🇫🇷🇬🇦🇬🇧🇬🇩🇬🇪🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇶🇬🇷🇬🇹🇬🇺🇬🇼🇬🇾🇭🇰🇭🇳🇭🇷🇭🇹🇭🇺🇮🇩🇮🇪🇮🇱🇮🇲🇮🇳🇮🇴🇮🇶🇮🇷🇮🇸🇮🇹🇯🇪🇯🇲🇯🇴🇯🇵🇰🇪🇰🇬🇰🇭🇰🇮🇰🇲🇰🇳🇰🇵🇰🇷🇰🇼🇰🇾🇰🇿🇱🇦🇱🇧🇱🇨🇱🇮🇱🇰🇱🇷🇱🇸🇱🇹🇱🇺🇱🇻🇱🇾🇲🇦🇲🇨🇲🇩🇲🇪🇲🇬🇲🇭🇲🇰🇲🇱🇲🇲🇲🇳🇲🇴🇲🇵🇲🇷🇲🇸🇲🇹🇲🇺🇲🇻🇲🇼🇲🇽🇲🇾🇲🇿🇳🇦🇳🇪🇳🇫🇳🇬🇳🇮🇳🇱🇳🇴🇳🇵🇳🇷🇳🇺🇳🇿🇴🇲🇵🇦🇵🇪🇵🇫🇵🇬🇵🇭🇵🇰🇵🇱🇵🇳🇵🇷🇵🇸🇵🇹🇵🇼🇵🇾🇶🇦🇷🇴🇷🇸🇷🇺🇷🇼🇸🇦🇸🇧🇸🇨🇸🇩🇸🇪🇸🇬🇸🇮🇸🇰🇸🇱🇸🇲🇸🇳🇸🇴🇸🇷🇸🇸🇸🇹🇸🇻🇸🇽🇸🇾🇸🇿🇹🇨🇹🇩🇹🇬🇹🇭🇹🇯🇹🇰🇹🇱🇹🇲🇹🇳🇹🇴🇹🇷🇹🇹🇹🇻🇹🇿🇺🇦🇺🇬🇺🇸🇺🇾🇺🇿🇻🇦🇻🇨🇻🇪🇻🇬🇻🇮🇻🇳🇻🇺🇼🇸🇾🇪🇿🇦🇿🇲🇿🇼`
               mans.sendMessage(from, emoji, text, {quoted: eft})
               break
            case 'apakah':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                apakah = body.slice(1)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                mans.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'rate':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                rate = body.slice(1)
                const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
                const te = ra[Math.floor(Math.random() * ra.length)]
                mans.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '%', text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'hobby':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                hobby = body.slice(1)
                const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
                const by = hob[Math.floor(Math.random() * hob.length)]
                mans.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'seberapagay':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                gay = body.slice(13)
                anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, { method: 'get' })
                hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
                reply(hasil)
                await limitAdd(sender)
                break
            case 'nangis':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, { method: 'get' })
                reply('SABAR NGAB')
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    mans.sendMessage(from, buffer, sticker, { quoted: mek })
                    fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
            case 'cium':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, { method: 'get' })
                reply('Mwahhh')
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    mans.sendMessage(from, buffer, sticker, { quoted: mek })
                    fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
            case 'peluk':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, { method: 'get' })
                reply('Peyukkkk')
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    mans.sendMessage(from, buffer, sticker, { quoted: mek })
                    fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
            case 'truth':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
                const ttrth = trut[Math.floor(Math.random() * trut.length)]
                truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
                mans.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: mek })
                break
            case 'dare':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u IKY?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
                const der = dare[Math.floor(Math.random() * dare.length)]
                tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
                mans.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n' + der })
                break
            case 'timer':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args[1] == "detik") {
                    var timer = args[0] + "000"
                } else if (args[1] == "menit") {
                    var timer = args[0] + "0000"
                } else if (args[1] == "jam") {
                    var timer = args[0] + "00000"
                } else { return reply("*pilih:*\ndetik\nmenit\njam") }
                setTimeout(() => {
                    reply("Waktu habis")
                }, timer)
                break
            case 'welcome':
            
                if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Ekhemm >_<')
                if (Number(args[0]) === 1) {
                    if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
                    welkom.push(from)
                    fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
                    reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR WELCOME/LEAVE DI GROUP*')
                } else if (Number(args[0]) === 0) {
                    welkom.splice(from, 1)
                    fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
                    reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR WELCOME/LEAVE DI GROUP*')
                } else {
                    reply(ind.satukos())
                }
                break
            case 'event':
              
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply('Ekhemm >_<')
                if (Number(args[0]) === 1) {
                    if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF KAK*')
                    event.push(from)
                    fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
                    reply('*⟪ SUKSES ⟫ MENGAKTIFKAN EVENT DI GROUP*')
                } else if (Number(args[0]) === 0) {
                    event.splice(from, 1)
                    fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
                    reply('*⟪ SUKSES ⟫ MEMATIKAN EVENT DI GROUP*')
                } else {
                    reply(ind.satukos())
                }
                break
            case 'leveling':
            
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Ekhemm >_<')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*FITUR LEVELING SUDAH AKTIF KAK*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
                break
            case 'simih':
                
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Ekhemm >_<')
                if (Number(args[0]) === 1) {
                    if (isSimi) return reply('*FITUR SIMIH SUDAH AKTIF KAK*')
                    samih.push(from)
                    fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
                    reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR SIMI DI GROUP*')
                } else if (Number(args[0]) === 0) {
                    samih.splice(from, 1)
                    fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
                    reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR SIMI DI GROUP*')
                } else {
                    reply(ind.satukos())
                }
                break
            case 'nsfw':
                
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Ekhem >_<')
                if (Number(args[0]) === 1) {
                    if (isNsfw) return reply('*FITUR NSFW SUDAH AKTIF KAK*')
                    nsfw.push(from)
                    fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
                    reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR NSFW DI GROUP*')
                } else if (Number(args[0]) === 0) {
                    nsfw.splice(from, 1)
                    fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
                    reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR NSWF DI GROUP*')
                } else {
                    reply(ind.satukos())
                }
                break

            case 'demote':
            
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                    teks = ''
                    for (let _ of mentioned) {
                        teks += `*jabatan kamu di copot*🏃 :\n`
                        teks += `@_.split('@')[0]`
                    }
                    mentions(teks, mentioned, true)
                    mans.groupDemoteAdmin(from, mentioned)
                } else {
                    mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
                    mans.groupDemoteAdmin(from, mentioned)
                }
                break
            case 'promote':
               
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                    teks = ''
                    for (let _ of mentioned) {
                        teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
                        teks += `@_.split('@')[0]`
                    }
                    mentions(teks, mentioned, true)
                    mans.groupMakeAdmin(from, mentioned)
                } else {
                    mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
                    mans.groupMakeAdmin(from, mentioned)
                }
                break
            case 'grup':
            case 'group':
                
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args[0] === 'buka') {
                    reply(`*BERHASIL MEMBUKA GROUP*`)
                    mans.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                    reply(`*BERHASIL MENUTUP GROUP*`)
                    mans.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
            case 'add':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args.length < 1) return reply('Yang mau di add bapakau kah? -_-')
                if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
                try {
                    num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                    mans.groupAdd(from, [num])
                } catch (e) {
                    console.log('Error :', e)
                    reply('Anjim yang mau di add di private, dahlah :)')
                }
                break
                case 'antivirtek':
                
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
                if (Number(args[0]) === 1) {
                    if (isAntiLink) return reply('*FITUR ANTI VIRTEX SUDAH AKTIF KAK*')
                    antilink.push(from)
                    fs.writeFileSync('./database/group/antifirtext.json', JSON.stringify(antifirtex))
                    reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR ANTI VIRTEX DI GROUP*')
                    mans.sendMessage(from, `ALLERT!!! DILARANG KIRIM VIRUS KALO GAMAU DI KICK GRUP INI ANTI VIRUS`, text)
                } else if (Number(args[0]) === 0) {
                    if (!isAntiLink) return reply('EMANG AKTIF?')
                    antilink.splice(ini, 1)
                    fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antilink))
                    reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR ANTI VIRTEX DI GROUP*')
                } else {
                    reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                }
                break
            case 'kick':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                    teks = ''
                    for (let _ of mentioned) {
                        teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
                        teks += `@_.split('@')[0]`
                    }
                    mentions(teks, mentioned, true)
                    mans.groupRemove(from, mentioned)
                } else {
                    mentions(`Bismillah atas izin admin grup kamu akan saya tendang @${mentioned[0].split('@')[0]} ??`, mentioned, true)
                    mans.groupRemove(from, mentioned)
                }
                break
            case 'jadian':
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
                jds = []
                const jdii = groupMembers
                const koss = groupMembers
                const akuu = jdii[Math.floor(Math.random() * jdii.length)]
                const diaa = koss[Math.floor(Math.random() * koss.length)]
                teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
                jds.push(akuu.jid)
                jds.push(diaa.jid)
                mentions(teks, jds, true)
                await limitAdd(sender)
                break
            case 'ngewe':
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
                jds = []
                const jdiid = groupMembers
                const kosst = groupMembers
                const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
                const diaat = kosst[Math.floor(Math.random() * kosst.length)]
                teks = `yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
                jds.push(akuut.jid)
                jds.push(diaat.jid)
                mentions(teks, jds, true)
                await limitAdd(sender)
                break
            case 'terganteng':
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
                jds = []
                const jdiidc = groupMembers
                const kosstc = groupMembers
                const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
                teks = `yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
                jds.push(akuutc.jid)
                mentions(teks, jds, true)
                await limitAdd(sender)
                break
            case 'tercantik':
                if (!isGroup) return reply(ind.groupo())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                jds = []
                const jdiidr = groupMembers
                const kosstr = groupMembers
                const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
                teks = `yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
                jds.push(akuutr.jid)
                mentions(teks, jds, true)
                await limitAdd(sender)
                break
            case 'antilinkgrup':
            
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nKetik 0 untuk menonaktifkan')
                if (Number(args[0]) === 1) {
                    if (isAntiLink) return reply('*FITUR ANTILINK SUDAH AKTIF KAK*')
                    antilink.push(from)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                    reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR ANTILINK DI GROUP*')
                    mans.sendMessage(from, `ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
                } else if (Number(args[0]) === 0) {
                    if (!isAntiLink) return reply('EMANG AKTIF?')
                    antilink.splice(from, 1)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                    reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR ANTILINK DI GROUP*')
                } else {
                    reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                }
                break
            case 'hentai':
                try {
                   
             if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(limitend(pushname2))
                    res = await fetchJson(`https://api.vhtear.com/nekojavcosplay&apikey=${VhtearKey}`, { method: 'get' })
                    buffer = await getBuffer(res.result)
                    mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'ni anjim' })
                } catch (e) {
                    console.log(`Error :`, color(e, 'red'))
                    reply(' *ERROR* ')
                }
                await limitAdd(sender)
                break
            case 'quran':
             
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, { method: 'get' })
                quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
                mans.sendMessage(from, quran, text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'level':
                if (isBanned) return reply(ind.baned())
                
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➣ NAMA : ${pushname}\n┃│➣ NOMOR : wa.me/${sender.split("@")[0]}\n┃│➣ XP : ${userXp}/${requiredXp}\n┃│➣ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
                mans.sendMessage(from, resul, text, { quoted: mek })
                    .catch(async(err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
                break
                case 'groupinfo':            
                
             if (isBanned) return reply(ind.baned())
                mans.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await mans.getProfilePicture(from) // leave empty to get your own
			    buffergbl = await getBuffer(ppUrl)
		        mans.sendMessage(from, buffergbl, image, {quoted: mek, caption: `*➣ NAME* : ${groupName}\n*➣ MEMBER* : ${groupMembers.length}\n*➣ ADMIN* : ${groupAdmins.length}\n*➣ DESK* : ${groupDesc}`})
                break
            case 'linkgrup':
            case 'linkgc':
            case 'linkgroup':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isBotGroupAdmins) return reply(ind.badmin())
                linkgc = await mans.groupInviteCode(from)
                yeh = `https://chat.whatsapp.com/${linkgc}\n\n*Youtube :* http://bit.ly/ytbtc\n*Instagram :* http://bit.ly/InstagramBTC\n*Facebook :* http://bit.ly/Facebookbtc\n\nAda bot dalam group ini ketik *@menu*\nuntuk melihat daftar command\n\nOwner bot whatsapp \nwa.me/6288224859350`
                mans.sendMessage(from, yeh, text, { quoted: mek })
                await limitAdd(sender)
                break
            case 'tagall':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                members_id = []
                teks = (args.length > 1) ? body.slice(8).trim() : ''
                teks += '\n\n'
                for (let mem of groupMembers) {
                    teks += `➣ @${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                }
                mentions(teks, members_id, true)
                break
            case 'setname':
                
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                mans.groupUpdateSubject(from, `${body.slice(9)}`)
                mans.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Nama Grup', text, { quoted: mek })
                break
            case 'setdesc':
               
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                mans.groupUpdateDescription(from, `${body.slice(9)}`)
                mans.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Desk Grup', text, { quoted: mek })
                break
                     case 'togif':
                     
             if (isBanned) return reply(ind.baned())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await mans.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=${lolhuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            mans.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: Mimetype.gif, filename: file_name })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
            case 'del':
            case 'd':
            case 'delete':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroupAdmins) return reply(ind.admin())
                if (isBanned) return reply(ind.baned())
                mans.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                await limitAdd(sender)
                break
            case 'listadmin':
            
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
                no = 0
                for (let admon of groupAdmins) {
                    no += 1
                    teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                }
                mentions(teks, groupAdmins, true)
                break
            case 'nobadword':
            
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                    if (isBadWord) return reply('*FITUR BADWORD SUDAH AKTIF KAK*')
                    badword.push(from)
                    fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                    reply(`*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR BADWORD DI GROUP*`)
                } else if (args[0] === '0') {
                    badword.splice(from, 1)
                    fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                    reply(`F*⟪ SUKSES ⟫ MEMATIKAN FITUR BADWORD DI GROUP*`)
                } else {
                    reply(ind.satukos())
                }
                break

            case 'addbadword':
            
             if (isBanned) return reply(ind.baned())
                if (!isOwner) return reply(ind.ownerb())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                const bw = body.slice(12)
                bad.push(bw)
                fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                reply('Success Menambahkan Bad Word!')
                break
            case 'delbadword':
            
             if (isBanned) return reply(ind.baned())
                if (!isOwner) return reply(ind.ownerb())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                let dbw = body.slice(12)
                bad.splice(dbw)
                fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                reply('Success Menghapus BAD WORD!')
                break
            case 'listonline':
            
             if (isBanned) return reply(ind.baned())
                if (!isOwner) return reply(ind.ownerb())
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(mans.chats.get(ido).presences), mans.user.jid]
                mans.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: mek,
                    contextInfo: { mentionedJid: online }
                })
                break
            case 'hedsot':
                
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                    teks = 'Bismillah Hedsot >_< :\n'
                    for (let _ of mentioned) {
                        teks += `@${_.split('@')[0]}\n`
                    }
                    mentions(teks, mentioned, true)
                    mans.groupRemove(from, mentioned)
                    mentions(teks, mentioned, true)
                    mans.groupAdd(from, [num])
                } else {
                    mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
                    mans.groupRemove(from, mentioned)
                }
                break
            case 'hidetag':
                
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                var value = body.slice(9)
                var group = await mans.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: value,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
                mans.sendMessage(from, options, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Cie kena tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
                break
            case 'hidetag5':
               
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                var value = body.slice(9)
                var group = await mans.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: value,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
                mans.sendMessage(from, options, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Cie kena tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
                    .then(() => { mans.sendMessage(from, options, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Cie kena tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }}) })
                    .then(() => { mans.sendMessage(from, options, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Cie kena tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }}) })
                    .then(() => { mans.sendMessage(from, options, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Cie kena tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }}) })
                    .then(() => { mans.sendMessage(from, options, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Cie kena tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }}) })
                break
            case 'fitnah':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())


                if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
                var gh = body.slice(8)
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                var replace = gh.split("&")[0];
                var target = gh.split("&")[1];
                var bot = gh.split("&")[2];
                mans.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
                break
            case 'leave':
                if (isBanned) return reply(ind.baned())
                
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                setTimeout(() => {
                    mans.groupLeave(from)
                }, 2000)
                setTimeout(() => {
                    mans.updatePresence(from, Presence.composing)
                    
                    if (isBanned) return reply(ind.baned())
                    mans.sendMessage(from, 'Aku pamit kak:)', text)
                }, 0)
                break
                case 'setlolhuman':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    lolhuman = args[0]
					reply(`*Apikey lolhuman berhasil di ubah menjadi* : ${lolhuman}`)
					break
			    case 'setonlydev':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    ApiDevolover = args[0]
					reply(`*Apikey onlydev berhasil di ubah menjadi* : ${ApiDevolover}`)
					break
				case 'setxteam':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    XteamKey = args[0]
					reply(`*Apikey xteam berhasil di ubah menjadi* : ${XteamKey}`)
					break
				case 'setbarbar':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    BarBarKey = args[0]
					reply(`*Apikey barbar berhasil di ubah menjadi* : ${BarBarKey}`)
					break
				case 'settobz':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    TobzKey = args[0]
					reply(`*Apikey tobz berhasil di ubah menjadi* : ${TobzKey}`)
					break
				case 'setlolhuman1':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    l0lhuman = args[0]
					reply(`*Apikey lolhuman1 berhasil di ubah menjadi* : ${l0lhuman}`)
					break
                case 'setvhtear':
		        case 'setapikeyvhtear':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    apivhtear = args[0]
                    VhtearKey = args[0]
					reply(`*Apikey vhtear berhasil di ubah menjadi* : ${apivhtear}`)
					break
                case 'antilinkxnxx':
                
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
                if (Number(args[0]) === 1) {
                    if (isAntiXnxx) return reply('*FITUR ANTIXNXX SUDAH AKTIF KAK*')
                    antixnxx.push(from)
                    fs.writeFileSync('./database/group/antixnxx.json', JSON.stringify(antixnxx))
                    reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR ANTIXNXX DI GROUP*')
                    mans.sendMessage(from, `ALLERT!!! Jika bukan admin jangan kirim link xnxx`, text)
                } else if (Number(args[0]) === 0) {
                    if (!isAntiXnxx) return reply('EMANG AKTIF?')
                    antixnxx.splice(from, 1)
                    fs.writeFileSync('./database/group/antixnxx.json', JSON.stringify(antixnxx))
                    reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR ANTIXNXX DI GROUP*')
                } else {
                    reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                }
                break
            case 'triggerd':
            case 'tg':



                if (isBanned) return reply(ind.baned())
                

                var imgbb = require('imgbb-uploader')

                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

                    reply(ind.wait)

                    owgi = await mans.downloadAndSaveMediaMessage(ger)

                    anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)

                    teks = `${anu.display_url}`

                    ranp = getRandom('.gif')

                    rano = getRandom('.webp')

                    anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`

                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                        fs.unlinkSync(ranp)

                        if (err) return reply(mess.error.stick)

                        nobg = fs.readFileSync(rano)

                        mans.sendMessage(from, nobg, sticker, { quoted: mek })

                        fs.unlinkSync(rano)

                    })



                } else {

                    reply('Gunakan foto!')

                }
                break

            case 'wanted':
	
             if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await mans.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	mans.sendMessage(from, hehe, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Neh...", 'jpegThumbnail': fs.readFileSync('./image/odc.jpeg')}}}})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break

                /*
                ]=====> DOWNLOAD MENU <=====[
                */
            case 'ytsearch':
            
             if (isBanned) return reply(ind.baned())
                query = args.join(" ")
                anu = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhuman}&query=${query}`, { method: 'get' })
                teks = '=================\n'
                for (let i of anu.result) {
                    teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.videoId}\n*Published* : ${i.published}\n*Views* : ${h2k(i.views)}\n=================\n`
                }
                reply(teks.trim())
                break
            case 'ytmp3':
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Urlnya mana um?')
                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, { method: 'get' })
                if (anu.error) return reply(anu.error)
                teks = `*Title* : ${anu.title}\n\n*Size* : ${anu.filesize}\n\n「❗」 PROSES DULU BOSS️`
                thumb = await getBuffer(anu.thumb)
                mans.sendMessage(from, thumb, image, { quoted: mek, caption: teks })
                buffer = await getBuffer(anu.result)
                mans.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek })
                await limitAdd(sender)
                break
            case 'ytmp31':
            
             if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                ini_link = args[0]
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lolhuman}&url=${ini_link}`)
                get_result = get_result.result
                ini_txt = `Title : ${get_result.title}\n`
                ini_txt += `Uploader : ${get_result.uploader}\n`
                ini_txt += `Duration : ${get_result.duration}\n`
                ini_txt += `View : ${get_result.view}\n`
                ini_txt += `Like : ${get_result.like}\n`
                ini_txt += `Dislike : ${get_result.dislike}\n`
                ini_txt += `Description :\n ${get_result.description}`
                ini_buffer = await getBuffer(get_result.thumbnail)
                mans.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                get_audio = await getBuffer(get_result.link[3].link)
                mans.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                break
            case 'yutubdl':
                if (args.length < 1) return reply('Urlnya mana um?')
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${body.slice(10)}&apikey=${VhtearKey}`, { method: 'get' })
                if (anu.error) return reply(anu.error)
                teks = `*➣ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses Dumlu Yakan*`
                thumb = await getBuffer(anu.result.imgUrl)
                mans.sendMessage(from, thumb, image, { quoted: mek, caption: teks })
                buffer = await getBuffer(anu.result.UrlVideo)
                mans.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
                await limitAdd(sender)
                break
            case 'tiktoknowm':
                
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Urlnya mana sayang?')
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
                ige = body.slice(12)
                anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${lolhuman}&url=${args[0]}`, { method: 'get' })
                reply('*「❗️」Proses Dulu Sabar*')
                if (anu.error) return reply(anu.error)
                buffer = await getBuffer(anu.result.link)
                mans.sendMessage(from, buffer, video, {quoted: mek, caption: 'Nih cuk, Sewa Bot Asu'})
                break
            case 'tiktod':
            case 'tiktok':
                if (args.length < 1) return reply('Urlnya mana um?')
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
                anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=${XteamKey}`, )
                reply('[WAIT] Proses Dumlu Yakan')
                buffer = await getBuffer(anu.result.video)
                mans.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
                await limitAdd(sender)
                break

            case 'totaluser':
                mans.updatePresence(from, Presence.composing)

                if (isBanned) return reply(ind.baned())
                
                teks = `\`\`\`╭────*「 *TOTAL USER BOT  ITSMAZGH* 」\n\`\`\``
                no = 0
                for (let hehehe of user) {
                    no += 1
                    teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
                }
                teks += `│+ Total Pengguna : ${args.length}\n╰──────*「 *ITS* 」*────`
                mans.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": user } })
                break
            case 'igdl':
            
             if (isBanned) return reply(ind.baned())
				    anu = await fetchJson(`https://lolhuman.herokuapp.com/api/instagram2?apikey=${lolhuman}&url=${args[0]}`)
				    reply('Sabar Djancok')
				    buffer = await getBuffer(anu.result.media[0])
				    teks = `*➣ Name:* ${anu.result.account.username}\n*➣ Title:* ${anu.result.caption}`
				    mans.sendMessage(from, buffer, video, { quoted: mek, caption: teks})
				    break
            case 'fbdl':
            
             if (isBanned) return reply(ind.baned())
              if (args.length < 1) return reply('Urlnya mana njir')
              anu = await fetchJson(`https://api.vhtear.com/fbdl?link=${args[0]}&apikey=${apivhtear}`)
              reply('Sabar Djancok')
              buffer = await getBuffer(anu.result.url)
              teks = `*➣ Title:* ${anu.result.title}`   
              mans.sendMessage(from, buffer, video, { quoted: mek, caption: teks})
              break
            case 'ytplay':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Nama lagunya apa kak?')
                reply(ind.wait())
                anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?query=${body.slice(9)}&apikey=${lolhuman}`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*「❗」Lagu Ditemukan*\n➣ Judul : ${anu.result.title}\n➣ Durasi : ${anu.result.duration}\n➣ Size : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: infomp3 })
                mans.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', quoted: mek })
                break
            case 'play':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Nama lagunya apa kak?')
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(9)}&apikey=${VhtearKey}`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*「❗」Lagu Ditemukan*\n➣ Judul : ${anu.result.title}\n➣ Durasi : ${anu.result.duration}\n➣ Size : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: infomp3 })
                mans.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', quoted: mek })
                break
            case 'leaderboard':
            case 'lb':
            
             if (isBanned) return reply(ind.baned())
                _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
                break
            case 'limit':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                checkLimit(sender)
                break
            case 'transfer':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (!q.includes('|')) return reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 * jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6283141727903@s.whatsapp.net', fee)
                reply(`*⟪ SUKSES ⟫*\n\npengiriman uang berhasil\n➣ dari : +${sender.split("@")[0]}\n➣ ke : +${tujuan}\n➣ jumlah transfer : ${jumblah}\n➣ pajak : ${fee}`)
                break
            case 'atm':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                const kantong = checkATMuser(sender)
                reply(ind.uangkau(pushname, sender, kantong))
                break
            case 'buylimit':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                payout = body.slice(10)
                const koinPerlimit = 1000
                const total = koinPerlimit * payout
                if (checkATMuser(sender) <= total) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
                if (checkATMuser(sender) >= total) {
                    confirmATM(sender, total)
                    bayarLimit(sender, payout)
                    await reply(`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➣ pengirim : 𝐈 𝐓 𝐒 𝐌 𝐀 𝐙 𝐆 𝐇\n➣ penerima : ${pushname}\n➣ nominal pembelian : ${payout} \n➣ harga limit : ${koinPerlimit}/limit\n➣ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
                }
                break
            case 'anjing':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, { method: 'get' })
                reply(ind.wait())
                var n = JSON.parse(JSON.stringify(anu));
                var nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                mans.sendMessage(from, pok, image, { quoted: mek })
                await limitAdd(sender)
                break
                /*
            case 'blowjob':

                if (!isNsfw) return reply(ind.nsfwoff())
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', { method: 'get' })
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    mans.sendMessage(from, buffer, sticker, { quoted: mek })
                    fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
                */
            case 'neko':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, { method: 'get' })
                buffer = await getBuffer(res.result)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih nekonime mu >_<' })
                await limitAdd(sender)
                break
            case 'nekonime':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                gatauda = body.slice(10)
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${VhtearKey}`, { method: 'get' })
                buffer = await getBuffer(anu.result.result)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'randomkpop':
                gatauda = body.slice(10)
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply(ind.wait())
                anu = await fetchJson(`https://api.shizukaa.xyz/api/randomkpop?apikey=itsmeiky633`, { method: 'get' })
                buffer = await getBuffer(anu.result)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih kpopnya kak...' })
                await limitAdd(sender)
                break
            case 'husbu':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
                buffer = await getBuffer(res.image)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '>_<' })
                await limitAdd(sender)
                break
            case 'loli':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                gatauda = body.slice(6)
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VhtearKey}`, { method: 'get' })
                buffer = await getBuffer(anu.result.result)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
                /*
            case 'randomhentong':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                gatauda = body.slice(15)
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/randomhentai?apikey=${VhtearKey}`, { method: 'get' })
                buffer = await getBuffer(anu.result.url)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
                */

            case 'hentai':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://api.vhtear.com/nhentairandom&apikey=${VhtearKey}`, { method: 'get' })
                buffer = await getBuffer(data.result.ini_url)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '>_<' })
                await limitAdd(sender)
                break
            case 'wibu':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VhtearKey}`)
                buffer = await getBuffer(data.result.foto)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: '>_<' })
                await limitAdd(sender)
                break
            case 'darkjokes':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = fs.readFileSync('./src/darkjokes.js');
                jsonData = JSON.parse(data);
                randIndex = Math.floor(Math.random() * jsonData.length);
                randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
                break
            case 'mining':
                
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner ITS`)
                if (isOwner) {
                    const one = 999999999
                    addLevelingXp(sender, one)
                    addLevelingLevel(sender, 99)
                    reply(`karena IKY baik Bot memberikan ${one}Xp >_<`)
                } else {
                    const mining = Math.ceil(Math.random() * 10000)
                    addLevelingXp(sender, mining)
                    await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                }
                await limitAdd(sender)
                break
            case 'moddroid':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
                hepi = data.result[0]
                teks = `*➸ Nama*: ${data.result[0].title}\n*➸ publisher*: ${hepi.publisher}\n*➸ mod info:* ${hepi.mod_info}\n*➸ size*: ${hepi.size}\n*➸ latest version*: ${hepi.latest_version}\n*➸ genre*: ${hepi.genre}\n*➸ link:* ${hepi.link}\n*➸ download*: ${hepi.download}`
                buffer = await getBuffer(hepi.image)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: `${teks}` })
                await limitAdd(sender)
                break
            case 'happymod':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
                hupo = data.result[0]
                teks = `*➸ Nama*: ${data.result[0].title}\n*➸ version*: ${hupo.version}\n*➸ size:* ${hupo.size}\n*➸ root*: ${hupo.root}\n*➸ purchase*: ${hupo.price}\n*➸ link*: ${hupo.link}\n*➸ download*: ${hupo.download}`
                buffer = await getBuffer(hupo.image)
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: `${teks}` })
                await limitAdd(sender)
                break
            case 'bitly':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                mans.updatePresence(from, Presence.composing)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
                case 'lenin':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=lenin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					
					case 'kalashnikov':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'unisoviet':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'nikitakhrushchev':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=nikita khrushchev`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'andreigromyko':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'andreigromyko':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'yurigagarin':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=yuri gagarin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'T-34':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=T-34`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'YAK-3':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-3`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'YAK-9':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-9`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'LA-7':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LA-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'ak47':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ak47`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'katyusha':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Katyusha`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'mig-15':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=mig-15`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'rpg-7':
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rpg-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					mans.sendMessage(from, pok, image, { quoted: mek })
					break
                case 'deteksiwajah':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await mans.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${lolhuman}&img=${anu.display_url}`)
	 mans.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await mans.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=${lolhuman}&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 mans.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await mans.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${lolhuman}&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 mans.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
            case 'pinterest':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                mans.updatePresence(from, Presence.composing)
                data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, { method: 'get' })
                reply(ind.wait())
                n = JSON.parse(JSON.stringify(data));
                nimek = n[Math.floor(Math.random() * n.length)];
                pok = await getBuffer(nimek)
                mans.sendMessage(from, pok, image, { quoted: mek, caption: `*⟪ PINTEREST ⟫*` })
                await limitAdd(sender)
                break
            case 'tebakgambar':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
                anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, { method: 'get' })
                bufferkkk = await getBuffer(anu.result.soal_gbr)
                setTimeout(() => {
                        mans.sendMessage(from, '*➣ Jawaban :* ' + anu.result.jawaban, text, { quoted: mek }) // ur cods
                    }, 30000) // 1000 = 1s,
                setTimeout(() => {
                        mans.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
                    }, 20000) // 1000 = 1s,
                setTimeout(() => {
                        mans.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
                    }, 10000) // 1000 = 1s,
                setTimeout(() => {
                        mans.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
                    }, 2500) // 1000 = 1s,
                setTimeout(() => {
                        mans.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
                    }, 0) // 1000 = 1s,
                await limitAdd(sender)
                break
            case 'resepmasakan':
                
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, { method: 'get' })
                if (anu.error) return reply(anu.error)
                buffer = await getBuffer(anu.thumb_item)
                hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: hasil })
                await limitAdd(sender)
                break
            case 'igstalk':
            case 'beritahoax':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                mans.updatePresence(from, Presence.composing)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, { method: 'get' })
                teks = '♡───────────♡\n'
                for (let i of data.result) {
                    teks += `*➣ Gambar* : ${i.image}\n*➣ Title* : ${i.title}\n*➣ link* : ${i.link}\n*➣ tag* : ${i.tag}\n♡───────────♡\n`
                }
                reply(teks.trim())
                await limitAdd(sender)
                break
            case 'brainly':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                brien = body.slice(9)
                brainly(`${brien}`).then(res => {
                    teks = '♡───────────♡\n'
                    for (let Y of res.data) {
                        teks += `\n*BRAINLY*\n\n*➣ Pertanyaan:* ${Y.pertanyaan}\n\n*➣ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
                    }
                    mans.sendMessage(from, teks, text, { quoted: mek, detectLinks: false })
                    console.log(res)
                })
                await limitAdd(sender)
                break
            case 'virtex':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                await costum(virtex(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
                await limitAdd(sender)
                break
            case 'virtex2':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                await costum(virtex2(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
                await limitAdd(sender)
                break
                case '$':
                case 'term':

                case 'exec':
				
                if (!isPremium) return reply(ind.premiumb())
                
                const cmd = body.slice(3)
				exec(cmd, (err, stdout) => {
					if (err) return mans.sendMessage(from, `${err}`, text, { quoted: mek })
					if (stdout) {
						mans.sendMessage(from, stdout, text, { quoted: mek})
					}
				})
				console.log(stdout)
				break
            case 'mutual':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isGroup) return reply('TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply(`Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                break
            case 'esticker':
            case 'semoji':
            
             if (isBanned) return reply(ind.baned())
                if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                emoji = args[0]
                try {
                    emoji = encodeURI(emoji[0])
                } catch {
                    emoji = encodeURI(emoji)
                }
                buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=6b25e69d0ba3dc9447010464`)
                mans.sendMessage(from, buffer, sticker, { quoted: mek })
                break
            case 'next':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isGroup) return reply('TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply(`Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                break
            case 'ganteng':
                
             if (isBanned) return reply(ind.baned())
                membr = []
                const nus = groupMembers
                const msl = groupMembers
                const siapss = nus[Math.floor(Math.random() * nus.length)]
                const sipss = pushname2[Math.floor(Math.random() * msl.length)]
                teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
                membr.push(siapss.jid)
                mentions(teks, membr, true)
                break
            case 'beban':
                
             if (isBanned) return reply(ind.baned())
                membr = []
                const met = groupMembers
                const msd = groupMembers
                const siapsa = met[Math.floor(Math.random() * met.length)]
                const sipsd = pushname2[Math.floor(Math.random() * msd.length)]
                teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
                membr.push(siapsa.jid)
                mentions(teks, membr, true)
                break
            case 'cantik':
               
             if (isBanned) return reply(ind.baned())
                membr = []
                const meo = groupMembers
                const msk = groupMembers
                const siaps = meo[Math.floor(Math.random() * meo.length)]
                const sips = pushname2[Math.floor(Math.random() * msk.length)]
                teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
                membr.push(siaps.jid)
                mentions(teks, membr, true)
                break
            case 'asupan':
                mans.updatePresence(from, Presence.composing)
               
             if (isBanned) return reply(ind.baned())
                 result = fs.readFileSync(`./sticker/hayolo.webp`)
                mans.sendMessage(from, result, sticker, { quoted: mek })
                data = fs.readFileSync('./src/asupan.js');
                jsonData = JSON.parse(data);
                randIndex = Math.floor(Math.random() * jsonData.length);
                randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                mans.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek, caption: 'Mau Ngapain Lo?' })
                break
            case 'bahasa':
            
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./image/odc.jpeg`)
                teks = `*List kode Bahasa*

  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh`
                mans.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break
            case 'note':
            
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./image/odc.jpeg`)
                note = `╭───❖ ❰ *Sequen Bot* ❱ ❖────╮  
┠❖➣ NAMA : ${pushname}
┠❖➣ USER ${botName}: *1${_registered.length}*
╰──────────────────────╯

╭ *〔 𝐑 𝐔 𝐋 𝐄 𝐒 〕*
╰──────────────────────╮  
╭──────────────────────╯
┠❖ *Spam : Auto Block!*
┠❖ *Beri Jeda 5 Detik!*
┠❖ *No Vc/Tlpn=Banned!*
┠❖ *Donasi Sultan Buat Apikey!*
┠❖ *Note Bot Belum Jadi Sepenuhnya!*
╰──────────────────────╯

   
             [ *POWERED BY ${ownerName}* ]`
                mans.sendMessage(from, wew, image, { quoted: mek, caption: note })
                break
            case 'info':
            
             if (isBanned) return reply(ind.baned())
            	uptime = process.uptime()
                wew = fs.readFileSync(`./image/odc.jpeg`)
                teks = `╭ *〔 𝐈 𝐍 𝐅 𝐎  𝐁 𝐎 𝐓 〕*
┃ *➣ Name* : ${ownerName}
┃ *➣ Versi* : 1
┃ *➣ Prefix* : ${prefix}
┃ *➣ Total Block Contact* : ${blocked.length}
┃ *➣ The bot is active on* : 
┃ ${kyun(uptime)}
╰━━━━━━━━━━━━━━━━━`
                mans.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break
            case 'sewabot':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                wew = fs.readFileSync(`./image/odc.jpeg`)
                teks = `╭ *〔 𝐒 𝐄 𝐖 𝐀  𝐁 𝐎 𝐓 〕*
┃ *➣ 1 Bulan : Rp 10.000,00*
┃ *➣ Goplay : Chat Owner*
┃ *➣ Gopay : Belum Tersedia*
┃ *➣ Dana : Belum Tersedia*
┃ *➣ Ovo : Belum Tersedia*
┃ *➣ Pulsa : 089689542663*
╰━━━━━━━━━━━━━━━━━
Chat Owner Bro`
                mans.sendMessage(from, wew, image, { quoted: sft, caption: teks })
                break
            case 'admin':
            case 'owner':
            case 'creator':
                mans.sendMessage(from, { displayname: "Jeff", vcard: vcard }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, { displayname: "Jeff", vcard: vowner }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorAdmin ku  >_<, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
            case 'gebetanadmin':
            case 'gebetanowner':
            case 'gebetancreator':
                mans.sendMessage(from, { displayname: "jeff", vcard: vcard1 }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorGebetanAdmin ku, Jangan Songong Atau Ngajak Pacaran Kalo Gk Mau Gw Samperin Rumah Lu 😡', MessageType.text, { quoted: mek })
                break
                case 'owner-irwans':
                mans.sendMessage(from, { displayname: "jeff", vcard: irwans }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorTeman ku, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
                 case 'owner-cognita':
                mans.sendMessage(from, { displayname: "jeff", vcard: cognita }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorTeman ku, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
                 case 'owner-yogipw':
                mans.sendMessage(from, { displayname: "jeff", vcard: yogipw }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorTeman ku, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
                case 'owner-miku':
                mans.sendMessage(from, { displayname: "jeff", vcard: marz }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorTeman ku, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
                case 'owner-nybotz':
                mans.sendMessage(from, { displayname: "jeff", vcard: nybots }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorTeman ku, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
                case 'owner-meiky':
                mans.sendMessage(from, { displayname: "jeff", vcard: guruku }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorGuru ku, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
                case 'owner-ramlan':
                mans.sendMessage(from, { displayname: "jeff", vcard: ramlanb }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorTeman ku, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
                case 'owner-angga':
                mans.sendMessage(from, { displayname: "jeff", vcard: anggab }, MessageType.contact, { quoted: mek })
                mans.sendMessage(from, 'Tuh NomorTeman ku, Jangan lupa sev:v', MessageType.text, { quoted: mek })
                break
            case 'tahta':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('「❗」Contoh : ${prefix}hartatahta botwea')
                teks = body.slice(7)
                reply('「❗」WETT PROSES :v')
                buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${VhtearKey}`)
                mans.sendMessage(from, buffer, image, { quoted: mek })

                await limitAdd(sender)
                break
            case 'cloudtext':
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('「❗」Contoh : ${prefix}cloudtext IKY')
                cloud = body.slice(11)
                reply('「❗」Bentar Bro Terbang dumlu yakan')
                buffer = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${cloud}&APIKEY=${XteamKey}`)
                mans.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'bc':
                mans.updatePresence(from, Presence.composing)
                if (!isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply('.......')
                anu = await mans.chats.all()
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await mans.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                        mans.sendMessage(_.jid, buff, image, { caption: `*ITSMAZGH BROADCAST*\n\n${body.slice(4)}` })
                    }
                    reply('')
                } else {
                    for (let _ of anu) {
                        sendMess(_.jid, `*ITSMAZGH BROADCAST*\n\n${body.slice(4)}`)
                    }
                    reply('*SUKSES BOSKU*')
                }
                break
            case 'bcgc':
                if (!isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply('Teksnya mana bosku >_<')
                anu = await groupMembers
                nom = mek.participant
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await mans.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                        mans.sendMessage(_.jid, buff, image, { caption: `*BC GROUP*\n\n➣ Dari Grup : ${groupName}\n➣ Pengirim : wa.me/${(sender.split('@')[0])}\n➣ Pesan : ${body.slice(6)}` })
                    }
                    reply('*SUKSES BOSKU*')
                } else {
                    for (let _ of anu) {
                        sendMess(_.jid, `*BC GROUP*\n\n➣ Dari Grup : ${groupName}\n➣ Pengirim : wa.me/${(sender.split('@')[0])}\n➣ Pesan : ${body.slice(6)}`)
                    }
                    reply('*SUKSES BOSKU*')
                }
                break
            case 'setreply':
                if (!isOwner) return reply(ind.ownerb())
                mans.updatePresence(from, Presence.composing)
                if (args.length < 1) return
                cr = body.slice(10)
                reply(`reply berhasil di ubah menjadi : ${cr}`)
                await limitAdd(sender)
                break
            case 'setprefix':
                if (args.length < 1) return
                if (!isOwner) return reply(ind.ownerb())
                prefix = args[0]
                reply(`*SUKSES* Mengubah prefix menjadi ➣ : ${prefix}`)
                break
            case 'clearall':
                if (!isOwner) return reply(ind.ownerb())
                anu = await mans.chats.all()
                mans.setMaxListeners(25)
                for (let _ of anu) {
                    mans.deleteChat(_.jid)
                }
                reply(ind.clears())
                break
            case 'blackpink':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())           
                BP = `${body.slice(10)}`                    
                if (args.length < 1) return reply('Teksnya mana gan??')                    
                if (args.length > 10) return reply('karakter minimal 10')                    
                reply(ind.wait())
                buff = await getBuffer(`http://api.zeks.xyz/api/logobp?text=${BP}&apikey=apivinz`, { method: 'get' })                    
                mans.sendMessage(from, buff, image, { quoted: mek })                 
                await limitAdd(sender)                 
                break
            case 'naruto1':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())             
                nar = `${body.slice(7)}`                    
                if (args.length < 1) return reply('Teksnya mana gan??')                    
                buff = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`, { method: 'get' })                    
                reply(ind.wait())
                mans.sendMessage(from, buff, image, { quoted: mek })                 
                await limitAdd(sender)                 
                break
            case 'nulis3':
            case 'tulis3':
                if (args.length < 1) return reply('Yang mau di tulis titit kah?')
                if (isBanned) return reply(ind.baned())
                
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                teks = body.slice(7)
                reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=${VhtearKey}`)
                mans.sendMessage(from, buff, image, { quoted: mek })
                await limitAdd(sender)
                break
            case 'darkneon':
            case 'candlemug':
            case 'lovemsg':
            case 'mugflower':
            case 'narutobanner':
            case 'paperonglass':
            case 'romancetext':
            case 'shadowtext':
            case 'coffeecup':
            case 'coffeecup2':
            case 'glowingneon':
            case 'underwater':
            case 'hpotter':
            case 'woodblock':
               
             if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(ind.wrongf())
                txt = args.join(" ")
                costum('[❗] SEDANG DIPROSES', text, tescuk)
                buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                mans.sendMessage(from, buffer, image, { caption: 'Nih kak..', quoted: mek })
                break    
            case 'text3d':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())        
                textd = `${body.slice(7)}`                    
                if (args.length < 1) return reply('Teksnya mana gan??')                    
                reply(ind.wait())
                buff = await getBuffer(`http://api.zeks.xyz/api/text3d?text=${textd}&apikey=apivinz`, { method: 'get' })                    
                mans.sendMessage(from, buff, image, { quoted: mek })                 
                await limitAdd(sender)                 
                break                 
            case 'text3d2':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())           
                textdd = `${body.slice(7)}`                    
                reply(ind.wait())
                if (args.length < 1) return reply('Teksnya mana gan??')                    
                buff = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${textdd}`, { method: 'get' })                    
                mans.sendMessage(from, buff, image, { quoted: mek })                 
                await limitAdd(sender)                 
                break
            case 'block':
                mans.updatePresence(from, Presence.composing)
                mans.chatRead(from)
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                mans.blockUser(`${body.slice(7)}@c.us`, "add")
                mans.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
                break
            case 'unblock':
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                mans.blockUser(`${body.slice(9)}@c.us`, "remove")
                mans.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
                break
            case 'setppbot':
                if (!isOwner) return reply(ind.ownerb())
                mans.updatePresence(from, Presence.composing)
                if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
                enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                media = await mans.downloadAndSaveMediaMessage(enmedia)
                await mans.updateProfilePicture(botNumber, media)
                reply('Makasih profil barunya bosku😗')
                break
            case 'clone':
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerg())
                if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
                try {
                    pp = await mans.getProfilePicture(id)
                    buffer = await getBuffer(pp)
                    mans.updateProfilePicture(botNumber, buffer)
                    mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
                } catch (e) {
                    reply(ind.stikga())
                }
                await limitAdd(sender)
                break
            case 'ban':
                if (!isOwner) return reply(ind.ownerb())
                bnnd = body.slice(6)
                ban.push(`${bnnd}@s.whatsapp.net`)
                fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
                reply(`Nomor wa.me/${bnnd} telah dibanned !`)
                break
            case 'unban':
                if (!isOwner) return reply(ind.ownerb())
                bnnd = body.slice(8)
                ban.splice(`${bnnd}@s.whatsapp.net`, 1)
                fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
                reply(`Nomor wa.me/${bnnd} telah di unban!`)
                break
            case 'pacarku':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                const tujuh = fs.readFileSync('./assets/pacarmans.mp4');
                mans.sendMessage(from, tujuh, MessageType.video, { quoted: mek, mimetype: 'video/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'iribilang':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                const irimp3 = fs.readFileSync('./assets/iri.mp3');
                mans.sendMessage(from, irimp3, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'pale':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                const pa = fs.readFileSync('assets/pale.mp3')
                mans.sendMessage(from, pa, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                const soun = fs.readFileSync('assets/sound.mp3')
                mans.sendMessage(from, soun, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound1':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                satu = fs.readFileSync('./assets/sound1.mp3');
                mans.sendMessage(from, satu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound2':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                dua = fs.readFileSync('./assets/sound2.mp3');
                mans.sendMessage(from, dua, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound3':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tiga = fs.readFileSync('./assets/sound3.mp3');
                mans.sendMessage(from, tiga, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound4':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                empat = fs.readFileSync('./assets/sound4.mp3');
                mans.sendMessage(from, empat, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound5':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
             
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                lima = fs.readFileSync('./assets/sound5.mp3');
                mans.sendMessage(from, lima, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound6':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                enam = fs.readFileSync('./assets/sound6.mp3');
                mans.sendMessage(from, enam, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound7':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                sceweks = fs.readFileSync('./assets/sound7.mp3');
                mans.sendMessage(from, sceweks, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound8':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                satu = fs.readFileSync('./assets/sound8.mp3');
                mans.sendMessage(from, satu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound9':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                dua = fs.readFileSync('assets/sound9.mp3')
                mans.sendMessage(from, dua, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound10':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tiga = fs.readFileSync('assets/sound10.mp3')
                mans.sendMessage(from, tiga, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound11':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                satu = fs.readFileSync('./assets/sound11.mp3');
                mans.sendMessage(from, satu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound12':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                dua = fs.readFileSync('./assets/sound12.mp3');
                mans.sendMessage(from, dua, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound13':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tiga = fs.readFileSync('./assets/sound13.mp3');
                mans.sendMessage(from, tiga, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound14':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                empat = fs.readFileSync('./assets/sound14.mp3');
                mans.sendMessage(from, empat, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound15':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                lima = fs.readFileSync('./assets/sound15.mp3');
                mans.sendMessage(from, lima, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound16':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
             
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                enam = fs.readFileSync('./assets/sound16.mp3');
                mans.sendMessage(from, enam, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound17':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                gnlg = fs.readFileSync('./assets/sound17.mp3');
                mans.sendMessage(from, gnlg, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound18':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
             
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                satu = fs.readFileSync('./assets/sound18.mp3');
                mans.sendMessage(from, satu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound19':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                dua = fs.readFileSync('assets/sound19.mp3')
                mans.sendMessage(from, dua, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound20':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tiga = fs.readFileSync('assets/sound20.mp3')
                mans.sendMessage(from, tiga, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound21':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                empat = fs.readFileSync('./assets/sound21.mp3');
                mans.sendMessage(from, empat, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound22':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
             
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                lima = fs.readFileSync('./assets/sound22.mp3');
                mans.sendMessage(from, lima, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound23':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                enam = fs.readFileSync('./assets/sound23.mp3');
                mans.sendMessage(from, enam, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound24':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                sond24 = fs.readFileSync('./assets/sound24.mp3');
                mans.sendMessage(from, sond24, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound25':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                lima = fs.readFileSync('./assets/sound25.mp3');
                mans.sendMessage(from, lima, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound26':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                enam = fs.readFileSync('./assets/sound26.mp3');
                mans.sendMessage(from, enam, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'sound27':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                sond = fs.readFileSync('./assets/sound27.mp3');
                mans.sendMessage(from, sond, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'yamate':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                yamte = fs.readFileSync('./assets/yamete');
                mans.sendMessage(from, yamte, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'bot':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                botts = fs.readFileSync('./assets/bot');
                mans.sendMessage(from, botts, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'odading':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                odading = fs.readFileSync('./assets/odading.mp3');
                mans.sendMessage(from, odading, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'ramadhan':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
             
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                ramadh = fs.readFileSync('assets/ramadhan.mp3')
                mans.sendMessage(from, ramadh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'shalawat1':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
            
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tabat = fs.readFileSync('assets/shalawat1.mp3')
                mans.sendMessage(from, tabat, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'shalawat2':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tubat = fs.readFileSync('assets/shalawat2.mp3')
                mans.sendMessage(from, tubat, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'shalawat3':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tobat = fs.readFileSync('assets/shalawat3.mp3')
                mans.sendMessage(from, tobat, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
                case 'gelay':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                gelayku = fs.readFileSync('assets/gelay.mp3')
                mans.sendMessage(from, gelayku, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
                case 'biasalah':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                biasalahku = fs.readFileSync('assets/biasalah.mp3')
                mans.sendMessage(from, biasalahku, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
                case 'gatal':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                gatalay = fs.readFileSync('assets/gatal.mp3')
                mans.sendMessage(from, gatalay, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
                case 'mamae':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                ahmamae = fs.readFileSync('assets/mamae.mp3')
                mans.sendMessage(from, ahmamae, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
                case 'tapiboong':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tapib = fs.readFileSync('assets/tapiboong.mp3')
                mans.sendMessage(from, tapib, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
                case 'numa':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
               
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                tapib1 = fs.readFileSync('assets/numayei.mp3')
                mans.sendMessage(from, tapib1, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'ciumadmin':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                ciumad = fs.readFileSync('assets/pacarku.mp3')
                mans.sendMessage(from, ciumad, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
            case 'bilasayang':
                if (!isOwner) return reply(ind.ownerb())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              
             if (isBanned) return reply(ind.baned())
                result = fs.readFileSync(`./sticker/itsmazgh.webp`)
                mans.sendMessage(from, result, sticker, { quoted: eft })
                bilaku = fs.readFileSync('assets/sayang.mp3')
                mans.sendMessage(from, bilaku, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                await limitAdd(sender)
                break
                /*
                ]=====> CREATOR <=====[
                > ITSMAZGH
                > MEMANS
                > BUILDTHECRAFT
                > NABILA
                */


            default:
                if (budy.includes(`assalamualaikum`)) {
                    reply(`Waalaikumsalam`)
                }

                if (budy.includes(`Assalamualaikum`)) {
                    reply(`Waalaikumsalam`)
                }

                if (budy.includes(`syalom`)) {
                    reply(`waalaikumsalam`)
                }

                if (budy.includes(`anjing`)) {
                    reply(`Jaga Omongan😡`)
                }

                if (budy.includes(`Anjing`)) {
                    reply(`Jaga Omongan😡`)
                }

                if (budy.includes(`ajg`)) {
                    reply(`Jaga Omongan😡`)
                }

                if (budy.includes(`Ajg`)) {
                    reply(`Jaga Omongan😡`)
                }

                if (budy.includes(`tolol`)) {
                    reply(`Jaga Omongan😡`)
                }

                if (budy.includes(`Ngentod`)) {
                    reply(`Jaga Omongan😡`)
                }
                
                if (budy.includes(`@6288224859350`)) { //GANTI NOMOR LO ANJING
                    const bisethus = fs.readFileSync('./sticker/tag.webp');
                    mans.sendMessage(from, bisethus, MessageType.sticker, {quoted: mek})
                }

                if (budy.includes(`Hai`)) {
                    reply(`iyah ka`)
                }

                if (budy.includes(`Thanks`)) {
                    reply(`Sama Sama Kak😁`)
                }

                if (budy.includes(`Makasih`)) {
                    reply(`Sama Sama Kak😁`)
                }
                
                if (budy.includes(`#menu`)) {
                    const bot = fs.readFileSync('./assets/bot');
                    mans.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                }
                if (budy.includes(`!menu`)) {
                    const bot = fs.readFileSync('./assets/bot');
                    mans.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                }
                if (budy.includes(`/menu`)) {
                    const bot = fs.readFileSync('./assets/bot');
                    mans.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                }
                if (budy.includes(`.menu`)) {
                    const bot = fs.readFileSync('./assets/bot');
                    mans.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                }
                if (body.startsWith(`${prefix}${command}`)) {


                }
                if (isGroup && !isCmd && isSimi && budy != undefined) {
                    console.log(budy)
                    muehe = await simih(budy)

                } else {
                    console.log(color('[ERROR]', 'red'), 'Unregistered Command from', color(sender.split('@')[0]))
                }
        }
    } catch (e) {
        console.log('Error : %s', color(e, 'red'))
    }
})