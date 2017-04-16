const commando = require ("discord.js-commando");

class GetAvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "user",
            name: "avatar",
            memberName: "avatar",
            description: "Get's the user's avatar and the url associated with it."
        });
    }

    async run (message, args)
    {
        //TODO: perform null check on avatar url's.
        // Create a date for debugging purposes.
        var now = new Date();

        // Ensure that a user was mentioned in the message.
        if (message.isMentioned (message.mentions.users.first()))
        {
            // Grab the mentioned user's avatar.
            var avatar = await message.mentions.users.first().avatarURL;

            console.log(now.toLocaleString () + ": User avatar retrieved!\nUser: " + message.mentions.users.first().username + "\n");

            // Return the avatar to the user.
            await message.channel.startTyping ();
            await message.channel.sendMessage (avatar);
            await message.channel.stopTyping (true);

            return;
        }

        console.log(now.toLocaleString () + ": User avatar retrieved!\nUser: " + message.author.username + "\n");

        // Inform the user that no one was mentioned and cannot grab avatar.
        await message.channel.startTyping ();
        await message.channel.sendMessage (message.author.avatarURL);
        await message.channel.stopTyping (true);
    }
}

module.exports = GetAvatarCommand;
