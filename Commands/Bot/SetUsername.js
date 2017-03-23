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
        var username = message.content.replace ("~setusername ", "");
        
        message.client.user.setUsername (username);

        console.log ("Username was changed:\nNew username is: " + username);
    }
}

module.exports = SetUsernameCommand;
