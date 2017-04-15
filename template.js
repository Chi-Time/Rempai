const commando = require ("discord.js-commando");

class CommandTemplate extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "asdf",
            memberName: "asdf",
            description: "asf"
        });
    }

    async run (message, args)
    {
        // Send the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage ();
        await message.channel.stopTyping (true);
    }
}

module.exports = CommandTemplate;
