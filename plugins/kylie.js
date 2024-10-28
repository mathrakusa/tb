const { cmd, commands } = require('../command');

cmd({
    pattern: "poll",
    desc: "Create an anonymous poll",
    category: "main",
    react: "🗳️",
    filename: __filename
}, 

async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender }) => {
    try {
        const question = "ඉර මොන පාටද?";
        const options = [
            "1. කහ",
            "2. රතු",
            "3. නිල්"
        ];
        const correctAnswer = 1; // The correct answer is "කහ"

        // Send the poll question and options
        let pollMessage = `📊 **Poll**\n\n**Question:** ${question}\n\n**Options:**\n${options.join("\n")}`;
        await conn.sendMessage(from, { text: pollMessage }, { quoted: mek });

        // Store the poll data, e.g., in a database or an in-memory object
        // For example:
        // polls[from] = { question, options, correctAnswer, votes: {} };

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// Command to submit an answer
cmd({
    pattern: "vote",
    desc: "Vote for an option in a poll",
    category: "main",
    react: "✅",
    filename: __filename
}, 

async (conn, mek, m, { from, quoted, body, isCmd, command, args }) => {
    try {
        const userVote = parseInt(args[0]); // Get the user's vote (1, 2, or 3)
        
        // Validate the vote
        if (![1, 2, 3].includes(userVote)) {
            return conn.sendMessage(from, { text: "Invalid option! Please vote with 1, 2, or 3." }, { quoted: mek });
        }

        // Here, you would typically check if the user has already voted
        // For example:
        // if (polls[from].votes[sender]) {
        //     return conn.sendMessage(from, { text: "You've already voted!" }, { quoted: mek });
        // }

        // Store the user's vote
        // polls[from].votes[sender] = userVote;

        // Check if the answer is correct
        if (userVote === correctAnswer) {
            conn.sendMessage(from, { text: "✅ Your vote is recorded, and it's correct!" }, { quoted: mek });
        } else {
            conn.sendMessage(from, { text: "✅ Your vote is recorded!" }, { quoted: mek });
        }

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
