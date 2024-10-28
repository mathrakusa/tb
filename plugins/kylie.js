const {cmd , commands} = require('../command')

cmd({
    pattern: "kylie",
    desc: "wallpaper the bot",
    category: "main",
    react: "☠",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ ᴍʏ Qᴜᴇᴇɴ Aʟʏᴀ👸 ᴡᴀʟʟᴘᴀᴘᴇʀ 👾💗 ❯❯`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/9a760094f13afad3b6577.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/36078e0c0f65db06b7fca.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c4fb65879b2c1690691f8.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/9a760094f13afad3b6577.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
