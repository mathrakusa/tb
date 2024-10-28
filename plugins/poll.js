const { cmd, commands } = require('../command');

cmd({
    pattern: "poll",
    desc: "Create a poll",
    category: "main",
    react: "🗳️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender }) => {
    try {
        // Check if poll question and options are provided
        const [question, ...options] = q.split('|'); // Use '|' to separate question and options
        if (!question || options.length < 2) {
            return reply("Please provide a question followed by at least two options. Example: \n/poll Question | Option 1 | Option 2 | Option 3");
        }

        // Format the options for display
        const formattedOptions = options.map((option, index) => `${index + 1}. ${option.trim()}`).join('\n');

        // Create the poll message
        const pollMessage = `📊 **Poll**\n\n**Question:** ${question.trim()}\n\n**Options:**\n${formattedOptions}\n\n*React with the number of your choice!*`;

        // Send the poll message
        await conn.sendMessage(from, {
            text: pollMessage,
            footer: "Voting is open!"
        }, { quoted: mek });
        
    } catch (e) {
        console.error(e);
        reply(`Error: ${e}`);
    }
});
