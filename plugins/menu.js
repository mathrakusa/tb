const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    menu: 'media/AUD-20240904-WA0432.mp3'
}
let dec = `*👋 Hello ${pushname}*

*Note Bot[Testing]*

Type *[.ithihase]*

> Kawdhitha`
}catch(e){
console.log(e)
reply(`${e}`)
}
})
