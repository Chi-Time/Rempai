const commando = require ("discord.js-commando");

class CreateInviteCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "invite",
            memberName: "invite",
            description: ""
        });
    }

    async run (message, args)
    {
        // Ensure that the user has the correct permission to generate the invite.
        if(message.member.permissions.hasPermission ("CREATE_INSTANT_INVITE"))
        {
            // Create a default invite to the channel.
            var invite = await message.channel.createInvite ();

            // Send the user the newly created invite link.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("https://discord.gg/" + invite.code);
            await message.channel.stopTyping (true);
            
            // Break from the function.
            return;
        }

        // Inform the user that they cannot create the invite link.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("Can't do that I'm afraid, you don't have the deets necessary.\nSorry! Q_Q");
        await message.channel.stopTyping (true);
    }
}

module.exports = CreateInviteCommand;
