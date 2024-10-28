cmd({
    pattern: "poll", // Command to start the poll
    desc: "Starts a poll",
    // other properties...
}, async (conn, mek, m, { from }) => {
    const question = "ඉර මොන පාටද?";
    const options = [
        "1. කහ", 
        "2. නිල්", 
        "3. තැබිලි"
    ];
    const correctAnswer = 1; // Set the correct answer index

    // Send poll message
    await conn.sendMessage(from, {
        text: `📊 *Poll*\n\n*Question:* ${question}\n\n*Options:*\n${options.join('\n')}`
    });

    // Listen for user responses
    conn.on('chat-update', async (chatUpdate) => {
        if (!chatUpdate.hasNewMessage) return;
        const message = chatUpdate.messages.all()[0];
        const response = parseInt(message.text); // Parse the response as an integer

        if (response === correctAnswer) {
            await conn.sendMessage(from, `✅ Correct! You voted for: ${options[correctAnswer - 1].slice(3)}`);
        } else {
            await conn.sendMessage(from, `❌ Incorrect! You voted for: ${options[response - 1].slice(3]}`);
        }
    });
});
