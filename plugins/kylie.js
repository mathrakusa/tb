const { cmd, commands } = require('../command');

const polls = new Map(); // Store active polls

cmd({
    pattern: "poll",
    desc: "Create an anonymous poll",
    category: "main",
    react: "📊",
    filename: __filename
}, async (conn, mek, m, { from, body }) => {
    // Split the body to get the question and options
    const args = body.split('|');
    
    if (args.length < 2) {
        return conn.sendMessage(from, "Usage: poll <question> | <option1> | <option2> | ...", { quoted: mek });
    }

    const question = args[0].trim();
    const options = args.slice(1).map(option => option.trim());

    // Store the poll
    polls.set(from, {
        question,
        options,
        votes: Array(options.length).fill(0) // Initialize votes for each option
    });

    // Create poll message
    let pollMessage = `📊 **Poll**\n\n**Question:** ${question}\n\n**Options:**\n`;
    options.forEach((option, index) => {
        pollMessage += `${index + 1}. ${option}\n`;
    });

    // Send poll message
    await conn.sendMessage(from, { text: pollMessage });

    // Listen for votes (simple implementation)
    conn.on('chat-update', async (chatUpdate) => {
        if (!chatUpdate.hasNewMessage) return;
        const message = chatUpdate.messages.all()[0];

        // Check if the message is a response to the poll
        if (polls.has(from) && !message.fromMe) {
            const response = parseInt(message.text);
            if (response > 0 && response <= options.length) {
                // Increment the corresponding vote
                const poll = polls.get(from);
                poll.votes[response - 1] += 1;

                // Acknowledge the vote anonymously
                await conn.sendMessage(from, `✅ Your vote for "${poll.options[response - 1]}" has been recorded!`, { quoted: mek });
            } else {
                await conn.sendMessage(from, "❌ Invalid option. Please vote using the option number.", { quoted: mek });
            }
        }
    });
});
