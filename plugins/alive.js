const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'media/AUD-20240904-WA0426.mp3'
}
let des = `*👋 Hello ${pushname}*

╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *📝ᴘᴀꜱᴛ ᴘᴀᴘᴇʀ 📝*
│📍 ᴠᴇʀꜱɪᴏɴ: 1
│👨‍💻 ᴏᴡɴᴇʀ : *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*      
│👤 ɴᴜᴍʙᴇʀ: 947297877501
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴄʀᴇᴀᴛᴇʀ: *ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
╰─────────────━┈⊷ 
> Powered by ©Kawdhitha Nirmal`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/R4J8J24/Business-Social-Media-Banner-02.png`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
