const { cmd, commands } = require('../command');

cmd({
    pattern: "b_18",
    desc: "wallpaper the bot",
    category: "main",
    react: "😇",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Array of image URLs
        const images = [
            'https://i.ibb.co/QXfN0pz/1.jpg',
            'https://i.ibb.co/rxfs8K5/2.jpg',
            'https://i.ibb.co/wYbzRHL/3.jpg',
            'https://i.ibb.co/6X0zv1Z/4.jpg',
            'https://i.ibb.co/qrbC40t/5.jpg',
            'https://i.ibb.co/Wvtd6xp/6.jpg',
            'https://i.ibb.co/Jctq4nJ/7.jpg',
            'https://i.ibb.co/cyHZ1gc/8.jpg',
            'https://i.ibb.co/JpX7NBH/9.jpg',
            'https://i.ibb.co/vkLFMqx/10.jpg',
            'https://i.ibb.co/txDK0HX/11.jpg',
            'https://i.ibb.co/xGSMHkL/12.jpg',
            'https://i.ibb.co/xGSMHkL/12.jpg',
            'https://i.ibb.co/nQCxTYC/14.jpg'// Same image, can be different if needed
        ];

        // Array of captions
        const captions = [
            `> Page 1`,
            `> Page 2`,
            `> Page 3`,
            `> Page 4`,
            `> Page 5`,
            `> Page 6`,
            `> Page 7`,
            `> Page 8`,
            `> Page 9`,
            `> Page 10`,
            `> Page 11`,
            `> Page 12`,
            `> Page 13`,
            `> Page 14`
        ];

        // Loop through images and captions
        for (let i = 0; i < images.length; i++) {
            await conn.sendMessage(from, {
                image: { url: images[i] },
                caption: captions[i]
            }, { quoted: mek });
        }

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
