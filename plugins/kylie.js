const {cmd , commands} = require('../command')

cmd({
    pattern: "prokects",
    desc: "wallpaper the bot",
    category: "main",
    react: "☠",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = ❮❮ MY Projects 👾💗 ❯❯
await conn.sendMessage(from,{image:{url: https://i.ibb.co/ZLsdW2P/20241008-150032.png},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: https://i.ibb.co/NnGRGxn/Business-Social-Media-Banner-02.png},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: https://i.ibb.co/fSwQNq5/helacinema.png},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: https://i.ibb.co/BgScvY3/th-2.jpg},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(${e})
}
})  Send button for downlode image
