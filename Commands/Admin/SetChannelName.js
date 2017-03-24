const commando = require ("discord.js-commando");

class SetChannelNameCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "channel",
            memberName: "channel",
            description: ""
        });
    }

    async run (message, args)
    {
        // Ensure that the user has the permission to change the channel name.
        if(message.member.permissions.hasPermission ("MANAGE_CHANNELS"))
        {
            // Remove the command from the message and returns the channel name.
            var channel = message.content.replace ("~channel ", "");

            // Ensure that the given channel name is usable.
            if (IsAlphaNumeric (channel))
            {
                await message.channel.startTyping ();
                // Change the channel name to the name provided.
                message.channel.setName (channel).catch (console.error);

                // Inform user of channel name change.
                await message.channel.sendMessage ("Channel name has been changed! ^.^ Happy to help.");
                await message.channel.stopTyping (true);

                return;
            }

            // Inform the user as to why it failed.
            await message.channel.sendMessage ("I can't do that!\nChannels can only be _alphanumeric_ with dashes: '-' and underscores: '_'\nSorry!");
            await message.channel.stopTyping (true);
        }
    }
}

// Is the given string alphanumeric only?
function IsAlphaNumeric (str)
{
    // Loop through each character of the string.
    for (var i = 0; i < str.length; i++)
    {
        // Grab the current char's code.
        code = str.charCodeAt(i);

        // Ensure that the current char falls within the correct codes.
        if (!(code > 47 && code < 58)  && // Numeric (0-9) 
            !(code > 64 && code < 91)  && // Upper alpha (A-Z)
            !(code > 96 && code < 123) && // lower alpha (a-z)
            !(code == 95)              && // Underscore (_)
            !(code == 45))                // Hyphen/Dash (-)

        // It didn't? String is not alphanumeric.
        return false;
    }
    
    // It did? String is alphanumeric.
    return true;
}

module.exports = SetChannelNameCommand;
