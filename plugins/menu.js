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

*╭───────────◉◉►*
*│Hey, I'm Not Bot/test, Created By*
*│ > Kawdhitha✨🍂*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
*│ Find Notes*
*│ ─────────*
*│►.ithihase*
*╰───────────◎◎►*
*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ Kawdhitha Nirmalッ*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c4fb65879b2c1690691f8.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
