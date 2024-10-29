const { cmd, commands } = require('../command');

cmd({
    pattern: "11b_11",
    desc: "menu the bot",
    category: "buddagama",
    react: "✨",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const voice = {
            menu: 'media/AUD-20240904-llWA0432.mp3'
        };

        const dec = `👋 Hello ${pushname}`;

        const pdfLinks = [
            { url: 'https://pastpapers.wiki/download/7815/grade-10/67060/2-%e0%b7%80%e0%b7%8f%e0%b6%bb%e0%b6%ba-11-%e0%b6%b4%e0%b7%8f%e0%b6%a9%e0%b6%b8.pdf', name: 'පුද්ගල විමසතා සහ කර්මය🙏', caption: '*💪දිනලම ඉවර කරමු🔥 9A*' },
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
