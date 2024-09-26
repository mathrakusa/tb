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

*Note Bot*(Testing)

*MATHS   = [.M]*
*HISTORY =[.H]*

> Kawdhitha NIrmal`

const pdfMessage = {
    document: { 
        url: 'https://pastpapers.wiki/download/27796/20232024-o-l/73177/20232024-ol-history-past-paper-and-answers.pdf'
    },
    mimetype: 'application/pdf',
    caption: 'Here is the past paper and answers PDF',
    quoted: mek
};

await conn.sendMessage(from, pdfMessage);

}catch(e){
console.log(e)
reply(`${e}`)
}
})
