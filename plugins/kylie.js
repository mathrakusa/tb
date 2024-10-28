const { cmd, commands } = require('../command');

// Store polls in memory (you might want to use a more persistent storage in a real application)
let polls = {};

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
            "1. කහ", // Correct answer
            "2. රතු",
            "3. නිල්"
        ];
        const correctAnswer = 1; // The correct answer is "කහ"

        // Send the poll question and options
        let pollMessage = `📊 **Poll**\n\n**Question:** ${question}\n\n**Options:**\n${options.join("\n")}`;
        const messageResponse = await conn.sendMessage(from, { text: pollMessage }, { quoted: mek });

        // Debugging: Check if the message was sent successfully
        console.log("Poll message sent:", messageResponse);

        // Initialize the poll data for this group or chat
        polls[from] = { question, options, correctAnswer, votes: {} };
        console.log(`Poll initialized for ${from}:`, polls[from]); // Debugging the poll initialization

    } catch (e) {
        console.log("Error creating poll:", e); // Improved error logging
        conn.sendMessage(from, { text: `Error creating poll: ${e.message}` }, { quoted: mek });
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

        // Ensure that the poll exists for the current chat
        if (!polls[from]) {
            return conn.sendMessage(from, { text: "No active poll found!" }, { quoted: mek });
        }

        // Check if the user voted for the correct answer
        if (userVote === polls[from].correctAnswer) {
            // Store the user's vote
            polls[from].votes[sender] = userVote; // Store user vote

            conn.sendMessage(from, { text: "✅ Your vote is recorded, and it's correct!" }, { quoted: mek });
        } else {
            conn.sendMessage(from, { text: "❌ Your vote is incorrect! Please vote for the correct answer." }, { quoted: mek });
            // Optionally add a reaction for the incorrect answer
            await conn.sendReaction(from, "❌", mek.key.id); // Assuming the library supports this
        }

    } catch (e) {
        console.log("Error submitting vote:", e); // Improved error logging
        conn.sendMessage(from, { text: `Error submitting vote: ${e.message}` }, { quoted: mek });
    }
});
