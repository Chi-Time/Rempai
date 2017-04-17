const commando = require ("discord.js-commando");

class PruneCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "prune",
            memberName: "prune",
            description: "Prunes a given number of messages from a channel."
        });
    }

    async run (message, args)
    {
        var m = await message.channel.fetchMessages({limit: 10});

        var ma = m.array();

        DebugMessages(messages);

        // Send the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("hey");
        await message.channel.stopTyping (true);
    }
}

function DebugMessages (messages)
{
    var now = new Date();
    console.log(now.toLocaleString() + ": " + messages.length + " Messages were pruned.");
    console.log("These are the following messages that were pruned:\n");

    for(let i = 0; i < messages.length; i++)
        console.log(i + " - " + messages[i].content);
    
    console.log("");
}

module.exports = PruneCommand;
