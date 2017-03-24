const commando = require ("discord.js-commando");

class SetChannelTopicCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "topic",
            memberName: "topic",
            description: "Changes the topic of the current channel."
        });
    }

    async run (message, args)
    {
        // Ensure that the user has the permission to change the channel topic.
        if(message.member.permissions.hasPermission ("MANAGE_CHANNELS"))
        {
            await message.channel.startTyping ();

            //Remove the command from the message and returns the topic.
            var topic = message.content.replace ("~topic ", "");

            // Change the channel topic to the topic provided.
            await message.channel.setTopic (topic).catch (console.error);

            // Inform user of channel topic change.
            await message.channel.sendMessage ("Channel topic has been changed! ^.^ Happy to help.");
            await message.channel.stopTyping (true);
        }

        // Inform the user as to why it failed.
        await message.channel.sendMessage ("I can't do that!\nChannels can only be _alphanumeric_ with dashes: '-' and underscores: '_'\nSorry!");
        await message.channel.stopTyping (true);
    }
}

module.exports = SetChannelTopicCommand;
