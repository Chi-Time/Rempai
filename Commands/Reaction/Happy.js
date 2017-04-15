const commando = require ("discord.js-commando");
const fs = require ("fs");

class HappyReactionCommand extends commando.Command
{
    constructor (client)
    {
        super (client, {
            group: "reaction",
            name: "happy",
            memberName: "happy",
            description: "Retrieves a random happy reaction image."
        });
    }

    async run (message, args)
    {
        var text = await fs.readFileSync("Data/Reaction/Happy.txt", "utf8");
        var reactions = text.split(",");

        var reaction = reactions [Math.floor (Math.random () * reactions.length) + 0];

        // Send the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage (reaction);
        await message.channel.stopTyping (true);
    }
}

module.exports = HappyReactionCommand;
