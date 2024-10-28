const { cmd, commands } = require('../command');

cmd(
    {
        pattern: "test",
        desc: "Displays wallpaper projects of the bot",
        category: "main",
        react: "☠",
        filename: __filename
    },
    async (conn, mek, m, {
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
        reply
    }) => {
        try {
            let dec = `❮❮ MY Projects 👾💗 ❯❯`;

            const images = [
                "https://i.ibb.co/ZLsdW2P/20241008-150032.png",
                "https://i.ibb.co/NnGRGxn/Business-Social-Media-Banner-02.png",
                "https://i.ibb.co/fSwQNq5/helacinema.png",
                "https://i.ibb.co/BgScvY3/th-2.jpg"
            ];

            for (const imageUrl of images) {
                const buttons = [
                    {
                        buttonId: 'download_image',
                        buttonText: { displayText: "Download" },
                        type: 1
                    }
                ];

                const buttonMessage = {
                    image: { url: imageUrl },
                    caption: dec,
                    footer: "Select 'Download' to save the image",
                    buttons: buttons,
                    headerType: 4
                };

                await conn.sendMessage(from, buttonMessage, { quoted: mek });
            }
        } catch (e) {
            console.log(e);
            reply(`${e}`);
        }
    }
);
