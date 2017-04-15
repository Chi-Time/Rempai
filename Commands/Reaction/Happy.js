const commando = require ("discord.js-commando");

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
    }
}

module.exports = HappyReactionCommand;
