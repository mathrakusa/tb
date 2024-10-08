const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴋᴀᴡᴅɪᴛʜᴀ ɴɪʀᴍᴀʟ*
*⚡ɴᴜᴍʙᴇʀ* -: +94729787750
*⚡Reletion Ship -: Single*
*⚡Mood -: Angry😡*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©ᴋᴀᴡᴅʜɪᴛʜᴀ ɴɪʀᴍᴀʟ
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/BgScvY3/th-2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
