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
        // Ensure that a user was mentioned in the message.
        if (message.isMentioned (message.mentions.users.first()))
        {
            // Grab the mentioned user's avatar.
            var avatar = await message.mentions.users.first().avatarURL;

            // Return the avatar to the user.
            await message.channel.startTyping ();
            await message.channel.sendMessage (avatar);
            await message.channel.stopTyping (true);
        }

        // Inform the user that no one was mentioned and cannot grab avatar.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("There was no-one to grab the avatar from!\nI can't work magic boo. Q_Q");
        await message.channel.stopTyping (true);
    }
}

module.exports = GetAvatarCommand;
