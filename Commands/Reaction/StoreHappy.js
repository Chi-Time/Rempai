const commando = require ("discord.js-commando");
const fs = require ("fs");

class StoreHappyCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "reaction",
            name: "storehappy",
            memberName: "storehappy",
            description: "stores an image for use with the happy images."
        });
    }

    async run (message, args)
    {
        var url = message.content.replace ("~storehappy ", "");

        if(checkURL(url))
        {
            var eh = await fs.appendFileSync("Data/Reaction/Happy.txt", ",\n" + message.content);

            // Send the response to the user.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("Storing...\nDone! I've stored the image.");
            await message.channel.stopTyping (true);

            return;
        }

        // Send the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("That's not a valid url. I can't add it to the list. Sorry!");
        await message.channel.stopTyping (true);
    }
}

function checkURL(url)
{
    return (url.match(/\.(gif)$/) != null);
}

module.exports = StoreHappyCommand;
