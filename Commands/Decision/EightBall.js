const commando = require ("discord.js-commando");

class EightBallCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "bot",
            name: "8ball",
            memberName: "8ball",
            description: "Selects a random phrase in response to a question."
        });
    }

    async run (message, args)
    {
        await message.channel.sendMessage ("Eight ball here!");
    }
}

module.exports = EightBallCommand;
