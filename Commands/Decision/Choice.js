const commando = require ("discord.js-commando");

class ChoiceCommand extends commando.Command
{
    constructor (client)
    {
        super(client, {
            name: "choose",
            group: "decision",
            memberName: "choose",
            description: "selects a choice from a given list.",
            details: "Use ',' or '|' as seperators.",
            examples: [
                "`~choose choice 1, choice 2, choice 3`", 
                "`~choose choice 1 | choice 2 | choice 3`"
                ]
        })
    }

    async run(message, args)
    {
        // The deliminator to split the string by.
        var delim = "";

        // If the choices contain a '|' split the options by this identifier.
        if(message.content.includes ("|"))
            delim = "|";
        // Otherwise, if the choices contain a ',' split the options by this identifier instead.
        else if (message.content.includes (","))
            delim = ",";
        // No splits were found, inform the user as to what went wrong.
        else
        {
            await message.channel.startTyping ();
            await message.channel.sendMessage ("I don't understand watcha want, there were no seperators in that boo.");
            await message.channel.stopTyping (true);

            // Break from the function.
            return;
        }

        // Split the message into a series of seperate choices.
        var lines = message.content.split (delim);

        // Remove the command from the first choice.
        lines[0] = lines[0].replace ("~choose ", "");

        // Generate and retrieve the index of a choice and store it.
        var num = Math.floor (Math.random() * lines.length);
        var choice = lines[num];

        // Send the final decision to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage (":thinking: That's tough...\nI pick: " + choice);
        await message.channel.stopTyping (true);
    }
}

module.exports = ChoiceCommand;
