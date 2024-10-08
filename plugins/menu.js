const { cmd, commands } = require('../command');

cmd({
    pattern: "science",
    desc: "menu the bot",
    category: "science",
    react: "📃",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const voice = {
            menu: 'media/AUD-20240904-llWA0432.mp3'
        };

        const dec = `👋 Hello ${pushname}`;

        const pdfLinks = [
            { url: 'https://pastpapers.wiki/download/7819/gce-o-l/32074/2007-2.pdf', name: 'ᴏʟ ꜱᴄɪᴇɴᴄᴇ ᴘᴀᴘᴇʀ 2007', caption: '*💪දිනලම ඉවර කරමු🔥 9A *' },
            { url: 'https://pastpapers.wiki/download/7819/gce-o-l/32073/2008-3.pdf', name: 'ᴏʟ ꜱᴄɪᴇɴᴄᴇ ᴘᴀᴘᴇʀ 2008', caption: '*💪දිනලම ඉවර කරමු🔥 9A *' },
            { url: 'https://pastpapers.wiki/download/7819/gce-o-l/32075/2009-3.pdf', name: 'ᴏʟ ꜱᴄɪᴇɴᴄᴇ ᴘᴀᴘᴇʀ 2009', caption: '*💪දිනලම ඉවර කරමු🔥 9A *' },
            { url: 'https://downloads.pastpapers.wiki/download/38/2010-o-l/452/science-2010-sinhala-medium.pdf', name: 'ᴏʟ ꜱᴄɪᴇɴᴄᴇ ᴘᴀᴘᴇʀ 2010', caption: '*💪දිනලම ඉවර කරමු🔥 9A*' },
            { url: 'https://pastpapers.wiki/download/7819/gce-o-l/32070/2011-4.pdf', name: 'ᴏʟ ꜱᴄɪᴇɴᴄᴇ ᴘᴀᴘᴇʀ 2010', caption: '*💪දිනලම ඉවර කරමු🔥 9A *' },
        ];
        // Send each PDF with the updated caption
        for (const pdf of pdfLinks) {
            await conn.sendMessage(from, {
                document: { url: pdf.url },
                mimetype: 'application/pdf',
                fileName: pdf.name,
                caption: `${dec}\n${pdf.caption}\n\n> Powered by Kawdhitha Nirmal`
            }, { quoted: mek });
        }

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
