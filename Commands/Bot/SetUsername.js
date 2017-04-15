const commando = require ("discord.js-commando");

class SetUsernameCommand extends commando.Command
{
    constructor (client)
    {
        super (client, {
            group: "bot",
            name: "setusername",
            memberName: "setusername",
            description: "Changes the username of the bot."
        });
    }

    async run (message, args) 
    {
        // Ensure the author is the owner of the bot.
        if(message.author.id == "182822432372031488")
        {
            // Create a date for debugging purposes.
            var now = new Date();

            // Remove the command usage from the statement.
            var username = message.content.replace ("~setusername ", "");

            // Change the bot's username.
            await message.client.user.setUsername (username);

            // Display message to user informing name change.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("My name has been successfully changed! ^-^ I hope you like it boo.");
            await message.channel.stopTyping (true);

            // Log the name change into the console.
            console.log (now.toLocaleString() + ":\nUsername was changed!\nNew username is: " + username);

            // Break from the function.
            return;
        }

        // Display message to the user informing of incorrect usage.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("Only bot owners are allowed to use this command!!");
        await message.channel.stopTyping (true);
    }
}

module.exports = SetUsernameCommand;
