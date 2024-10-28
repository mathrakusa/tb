const { cmd, commands } = require('../command');

cmd({
    pattern: "poll",
    desc: "Create a poll with a correct answer",
    category: "main",
    react: "🗳️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body }) => {
    try {
        // Define the question and options
        const question = "ඉර මොන පාටද?";
        const options = ["කහ", "නිල්", "තැබිලි"];
        const correctAnswer = "කහ"; // Correct answer

        // Build the poll message
        let pollMessage = `📊 **Poll**\n\n**Question:** ${question}\n\n**Options:**\n`;
        options.forEach((option, index) => {
            pollMessage += `${index + 1}. ${option}\n`;
        });

        // Send the poll message
        await conn.sendMessage(from, { text: pollMessage }, { quoted: mek });

        // Logic to handle user responses (You can expand this as needed)
        conn.on('message', async (responseMessage) => {
            // Check if the response is from the same chat and is a valid answer
            if (responseMessage.from === from && responseMessage.body) {
                const userAnswer = responseMessage.body.trim();
                const selectedOption = options[parseInt(userAnswer) - 1]; // Get option by user input

                // Check if the selected option matches the correct answer
                if (selectedOption === correctAnswer) {
                    await conn.sendMessage(from, { text: `✅ Correct! You voted for: ${selectedOption}` });
                } else {
                    await conn.sendMessage(from, { text: `❌ Incorrect! You voted for: ${selectedOption}` });
                }
            }
        });

    } catch (e) {
        console.log(e);
        conn.sendMessage(from, { text: `Error: ${e.message}` });
    }
});
