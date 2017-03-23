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
        if(message.author.id == "182822432372031488")
        {
            var username = message.content.replace ("~setusername ", "");
        
            await message.client.user.setUsername (username);

            await message.channel.startTyping ();
            await message.channel.sendMessage ("My name has been successfully changed! ^-^ I hope you like it boo.");
            await message.channel.stopTyping (true);

            console.log ("Username was changed!\nNew username is: " + username);

            return;
        }

        await message.channel.startTyping ();
        await message.channel.sendMessage ("Only bot owners are allowed to use this command!!");
        await message.channel.stopTyping (true);
    }
}

module.exports = SetUsernameCommand;
