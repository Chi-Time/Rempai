const commando = require ("discord.js-commando");

class EightBallCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "decision",
            name: "8ball",
            memberName: "8ball",
            description: "Selects a random phrase in response to a question."
        });
    }

    async run (message, args)
    {
        // The random phrases the bot can return.
        var phrases = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes, definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful."
        ];

        // Generate the index of the response and then store it.
        var index = Math.floor (Math.random () * phrases.length) + 0;
        var response = phrases[index];

        // Remove the command from the question.
        var question = message.content.replace ("~8ball", "");

        // Send the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage (":question: **Question:** " + question + "\n:8ball: **Response:** " + response);
        await message.channel.stopTyping (true);
    }
}

module.exports = EightBallCommand;
