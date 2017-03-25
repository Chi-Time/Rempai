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
    }
}

module.exports = CommandTemplate;
