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

            console.log ("Username was changed:\nNew username is: " + username);

            return;
        }
    }
}

module.exports = SetUsernameCommand;
