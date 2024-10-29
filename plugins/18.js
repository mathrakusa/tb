const { cmd, commands } = require("../command");

cmd(
    {
        pattern: "11b_18",
        desc: "wallpaper the bot",
        category: "main",
        react: "✨",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        {
            from,
            quoted,
            body,
            isCmd,
            command,
            args,
            q,
            isGroup,
            sender,
            senderNumber,
            botNumber2,
            botNumber,
            pushname,
            isMe,
            isOwner,
            groupMetadata,
            groupName,
            participants,
            groupAdmins,
            isBotAdmins,
            isAdmins,
            reply,
        },
    ) => {
        try {
            // Array of image URLs
            const images = [
                "https://i.ibb.co/QXfN0pz/1.jpg",
                "https://i.ibb.co/rxfs8K5/2.jpg",
                "https://i.ibb.co/wYbzRHL/3.jpg",
                "https://i.ibb.co/6X0zv1Z/4.jpg",
                "https://i.ibb.co/qrbC40t/5.jpg",
                "https://i.ibb.co/Wvtd6xp/6.jpg",
                "https://i.ibb.co/Jctq4nJ/7.jpg",
                "https://i.ibb.co/cyHZ1gc/8.jpg",
                "https://i.ibb.co/JpX7NBH/9.jpg",
                "https://i.ibb.co/vkLFMqx/10.jpg",
                "https://i.ibb.co/txDK0HX/11.jpg",
                "https://i.ibb.co/xGSMHkL/12.jpg",
                "https://i.ibb.co/xGSMHkL/12.jpg",
                "https://i.ibb.co/nQCxTYC/14.jpg", // Same image, can be different if needed
            ];

            // Array of captions
            const captions = [
                `> Page 1 
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 2
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 3
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 4
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 5
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 6
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 7
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 8
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 9
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 10
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 11
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 12
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 13
                *💪දිනලම ඉවර කරමු🔥 9A*`,
                `> Page 14
                *💪දිනලම ඉවර කරමු🔥 9A*`,
            ];

            // Loop through images and captions
            for (let i = 0; i < images.length; i++) {
                await conn.sendMessage(
                    from,
                    {
                        image: { url: images[i] },
                        caption: captions[i],
                    },
                    { quoted: mek },
                );
            }
        } catch (e) {
            console.log(e);
            reply(`${e}`);
        }
    },
);
