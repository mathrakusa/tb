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
*│* > Kawdhitha✨🍂
*│* > ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴡᴅʜɪᴛʜᴀ ɴɪʀᴍᴀʟッ
*╰───────────◉◉►*

*╭───────────◎◎►*
*│ Find Notes*
*│ ─────────*
*│►[.ithihase]*
*│*
*│*
*│*
*│*
*╰───────────◎◎►*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴡᴅʜɪᴛʜᴀ ɴɪʀᴍᴀʟッ*`
// PDF URL
const pdfUrl = 'https://pastpapers.wiki/download/23693/20222023-o-l/72430/2020-ol-tamil-language-and-literature-past-paper-2.pdf';

// Send the PDF with a caption
await conn.sendMessage(from, {
    document: { url: pdfUrl },  // The PDF file URL
    mimetype: 'application/pdf', // MIME type for PDF
    fileName: 'O-Level Tamil Language and Literature Past Paper.pdf', // Optional: Name for the PDF
    caption: dec // The caption you want to send with the PDF
}, { quoted: mek }); // Optionally, quote a previous message (mek)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
