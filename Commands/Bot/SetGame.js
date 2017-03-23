const commando = require ("discord.js-commando");

class SetGameCommand extends commando.Command
{
    constructor (client)
    {
        super (client, {
            group: "bot",
            name: "setgame",
            memberName: "setgame",
            description: "Changes the current game status of the bot."
        });
    }

    async run (message, args) 
    {
        //Ensure the author is the owner of the bot.
        if(message.author.id == "182822432372031488")
        {
            // Remove the command usage from the statement.
            var game = message.content.replace ("~setgame ", "");

            // Change the bot's current game.
            await message.client.user.setGame (game);

            // Display message to user informing them of game status change.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("Playing status has been changed! ^-^");
            await message.channel.stopTyping (true);

            // Log the game change into the console.
            console.log ("Game status was changed!\nNew game status is: " + game);

            // Break from the function.
            return;
        }

        // Display message to the user informing of incorrect usage.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("Only bot owners are allowed to use this command!!");
        await message.channel.stopTyping (true);
    }
}

module.exports = SetGameCommand;
