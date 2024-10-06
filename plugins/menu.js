const { cmd, commands } = require('../command');

cmd({
    pattern: "science",
    desc: "menu the bot",
    category: "science",
    react: "📜",
    filename: __filename
},

async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const voice = {
            menu: 'media/AUD-20240904-llWA0432.mp3'
        };
        
        let dec = `👋 Hello ${pushname}`;

        const pdfLinks = [
            { url: 'https://pastpapers.wiki/download/7819/gce-o-l/32074/2007-2.pdf', name: 'Ol 2007' },
            { url: 'https://pastpapers.wiki/download/7819/gce-o-l/32073/2008-3.pdf', name: 'Ol 2008' },
            { url: 'https://pastpapers.wiki/download/7819/gce-o-l/32075/2009-3.pdf', name: 'Ol 2009' },
            { url: 'https://downloads.pastpapers.wiki/download/38/2010-o-l/452/science-2010-sinhala-medium.pdf', name: 'Science 2010 Sinhala Medium' },
            { url: 'https://pastpapers.wiki/download/7819/gce-o-l/32070/2011-4.pdf', name: 'Ol 2011' },
        ];

        // Send each PDF with a caption
        for (const pdf of pdfLinks) {
            await conn.sendMessage(from, {
                document: { url: pdf.url },
                mimetype: 'application/pdf',
                fileName: pdf.name,
                caption: dec
            }, { quoted: mek });
        }

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
