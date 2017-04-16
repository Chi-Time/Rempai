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
        // Create a date for debugging purposes.
        var now = new Date();

        // Ensure that a user was mentioned in the message.
        if (message.isMentioned (message.mentions.users.first()))
        {
            // Grab the mentioned user's avatar.
            var avatar = await message.mentions.users.first().avatarURL;

            // Ensure that the user has an avatar to return.
            if(avatar != null)
            {
                console.log(now.toLocaleString () + ": User avatar retrieved!\nUser: " + message.mentions.users.first().username + "\n");

                // Return the avatar to the user.
                await message.channel.startTyping ();
                await message.channel.sendMessage (avatar);
                await message.channel.stopTyping (true);

                return;
            }

            // Return the response to the user.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("That user doesn't appear to have an avatar. Sorry boo. Q_Q");
            await message.channel.stopTyping (true);

            return;
        }

        // Ensure that the user has an avatar to return.
        if(message.author.avatarURL != null)
        {
            console.log(now.toLocaleString () + ": User avatar retrieved!\nUser: " + message.author.username + "\n");

            // Return the user's avatar to them.
            await message.channel.startTyping ();
            await message.channel.sendMessage (message.author.avatarURL);
            await message.channel.stopTyping (true);

            return;
        }

        // Return the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("That user doesn't appear to have an avatar. Sorry boo. Q_Q");
        await message.channel.stopTyping (true);

        return;
    }
}

module.exports = GetAvatarCommand;
